// End-to-end check of the portal scenarios from the UX brief.
// Run against a demo build:  npm run dev  (or VITE_DEMO_TOOLS=true build + preview), then
//   node e2e/scenarios.mjs [baseUrl] [screenshotDir]
// Uses the Playwright that ships with the environment (require('playwright')).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:5173/';
const SHOTS = process.argv[3] || '';
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

const ID = {
  company: '1012345678',
  individual: '1023456789',
  pending: '1034567890',
  pendingOrder: '1045678901',
  rejected: '1056789012',
  missing: '1067890123',
  fails: '1078901234',
  newUser: '1098765432',
  newUser2: '1098765431',
};

class Ctx {
  constructor(page, name) {
    this.p = page;
    this.name = name;
    this.n = 0;
  }
  async tick(ms = 600) {
    await this.p.clock.runFor(ms);
    await this.p.waitForTimeout(60);
  }
  async goto(hash) {
    await this.p.evaluate((h) => (location.hash = h), hash);
    await this.tick(400);
  }
  async click(name, opts = {}) {
    const loc = this.p.getByRole(opts.role || 'button', typeof name === 'string' ? { name, exact: opts.exact ?? opts.role === 'radio' } : { name }).nth(opts.nth || 0);
    await loc.scrollIntoViewIfNeeded();
    await loc.click();
    await this.tick(opts.wait ?? 400);
  }
  async fill(label, value) {
    const loc = this.p.getByLabel(label, { exact: false }).first();
    await loc.fill(value);
    await this.tick(100);
  }
  async select(id, value) {
    await this.p.locator('#' + id).selectOption(value);
    await this.tick(100);
  }
  async see(text) {
    const n = await this.p.getByText(text, { exact: false }).count();
    if (!n) throw new Error('expected to see: ' + text);
  }
  async notSee(text) {
    const vis = await this.p.getByText(text, { exact: false }).filter({ visible: true }).count();
    if (vis) throw new Error('expected NOT to see: ' + text);
  }
  async noButton(name) {
    const n = await this.p.getByRole('button', { name, exact: true }).filter({ visible: true }).count();
    if (n) throw new Error('expected no enabled button: ' + name);
  }
  async shot(label) {
    if (!SHOTS) return;
    this.n += 1;
    await this.p.screenshot({ path: `${SHOTS}/${this.name}-${String(this.n).padStart(2, '0')}-${label}.png`, fullPage: true });
  }
  // ---- composite steps
  async startOrderFromHome() {
    await this.goto('#home');
    await this.p.locator('#buy-pack').getByRole('button', { name: /اقتن/ }).first().click();
    await this.tick(500);
  }
  async nafath(id) {
    await this.fill('رقم الهوية الوطنية / الإقامة', id);
    await this.click('التحقق عبر نفاذ', { wait: 200 });
    await this.tick(4500);
  }
  async openLogin() {
    await this.p.locator('.zz-header-account').click();
    await this.tick(400);
  }
  async submitLogin() {
    await this.p.getByLabel('كلمة المرور').press('Enter');
    await this.tick(1200);
  }
  async products() {
    await this.click('متابعة', { exact: true });
  }
  async review() {
    await this.select('of-region', 'مكة المكرمة');
    await this.select('of-city', 'مكة المكرمة');
    await this.select('of-warehouse', 'مستودع كدي — مكة المكرمة');
  }
}

const scenarios = [
  {
    id: 1,
    title: 'Existing approved user starts an order from Home',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.see('ابدأ طلبك');
      await c.nafath(ID.company);
      await c.see('أنت مسجّل لدينا وحسابك معتمد');
      await c.click('عرض التفاصيل');
      await c.see('السجل التجاري');
      await c.shot('summary');
      await c.click('متابعة إلى المنتجات');
      await c.see('اختر غرض الطلب');
      await c.click('فعالية رسمية', { role: 'radio' });
      await c.click('متابعة إلى المنتجات');
      await c.products();
      await c.review();
      await c.shot('review');
      await c.click('إرسال الطلب');
      await c.see('تم إرسال طلبك');
      await c.see('حالة الطلب');
      await c.noButton('إتمام الدفع');
      await c.shot('done');
      return 'Submitted; order «قيد المراجعة», no payment offered.';
    },
  },
  {
    id: 2,
    title: 'New user from Home completes Individual registration',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.nafath(ID.newUser);
      await c.see('أنت غير مسجّل بعد');
      await c.see('من نفاذ · غير قابلة للتعديل');
      const ro = await c.p.locator('#id-name').getAttribute('readonly');
      if (ro === null) throw new Error('Nafath name field is editable');
      await c.click('متابعة إلى المنتجات');
      await c.see('اختر نوع الحساب');
      await c.click(/^فرد/, { role: 'radio' });
      if (await c.p.getByRole('radiogroup', { name: 'غرض الطلب' }).count()) throw new Error('individuals must not see order purpose');
      await c.shot('registration');
      await c.click('متابعة إلى المنتجات');
      await c.products();
      await c.review();
      await c.see('حسابك جديد، لذلك تُراجع بيانات تسجيلك وطلبك');
      await c.click('إرسال الطلب وبيانات التسجيل');
      await c.see('تم إرسال طلبك وبيانات تسجيلك');
      await c.see('حالة الحساب');
      await c.shot('done');
      return 'Account pending + order in review, shown separately.';
    },
  },
  {
    id: 3,
    title: 'New user from Home completes Company registration',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.nafath(ID.newUser2);
      await c.click(/^جهة/, { role: 'radio' });
      await c.click('غير ربحي', { role: 'radio' });
      await c.fill('اسم المؤسسة', 'شركة الضيافة');
      await c.click('تحقق من المؤسسة', { wait: 1200 });
      await c.see('وجدنا المؤسسة في السجل التجاري');
      await c.select('co-idtype', 'هوية وطنية');
      await c.click('توزيع مستلزمات الحج', { role: 'radio' });
      await c.shot('company');
      await c.click('متابعة إلى المنتجات');
      await c.products();
      await c.see('المنتجات');
      await c.review();
      await c.see('الخصم');
      await c.click('إرسال الطلب وبيانات التسجيل');
      await c.see('تم إرسال طلبك وبيانات تسجيلك');
      return 'Registry match locked company fields; non-profit discount applied.';
    },
  },
  {
    id: 4,
    title: 'New user submits while pending: no payment',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.nafath(ID.newUser);
      await c.click(/^فرد/, { role: 'radio' });
      await c.click('متابعة إلى المنتجات');
      await c.products();
      await c.review();
      await c.click('إرسال الطلب وبيانات التسجيل');
      await c.click('متابعة الطلب');
      await c.see('حسابك وطلبك قيد المراجعة');
      await c.noButton('إتمام الدفع');
      await c.shot('order');
      return 'Order detail explains both reviews; no pay action.';
    },
  },
  {
    id: 5,
    title: 'Pending user tries to create another request',
    run: async (c) => {
      await c.openLogin();
      await c.nafath(ID.pendingOrder);
      await c.see('حسابك قيد المراجعة');
      await c.see('لديك طلب قيد المراجعة مع بيانات حسابك');
      await c.startOrderFromHome();
      await c.see('حسابك قيد المراجعة');
      await c.goto('#order');
      await c.notSee('متابعة إلى المنتجات');
      await c.shot('blocked');
      return 'Order entry and #order both land on the status page.';
    },
  },
  {
    id: 6,
    title: 'Existing user logs in with Nafath ID',
    run: async (c) => {
      await c.openLogin();
      await c.see('تسجيل الدخول');
      await c.nafath(ID.individual);
      await c.see('أهلاً، نورة');
      await c.click('طلب جديد', { exact: true });
      await c.see('أنت مسجّل لدينا وحسابك معتمد');
      return 'Lands on profile; can start an order.';
    },
  },
  {
    id: 7,
    title: 'Existing user logs in with email and password',
    run: async (c) => {
      await c.openLogin();
      await c.click('البريد الإلكتروني', { role: 'tab' });
      await c.fill('البريد الإلكتروني', 'a.alharbi@example.com');
      await c.fill('كلمة المرور', '123456');
      await c.submitLogin();
      await c.see('أهلاً، عبدالله');
      return 'Email sign-in reaches the approved profile.';
    },
  },
  {
    id: 8,
    title: 'New user registers from the navigation bar (Nafath only)',
    run: async (c) => {
      await c.openLogin();
      await c.click('إنشاء حساب جديد');
      await c.see('قبل أن تبدأ');
      if (await c.p.getByRole('tab').count()) throw new Error('registration should offer Nafath only');
      await c.nafath(ID.newUser);
      await c.see('استكمال بيانات الحساب');
      await c.click('إرسال للمراجعة');
      await c.see('اختر نوع الحساب');
      await c.click(/^فرد/, { role: 'radio' });
      await c.click('إرسال للمراجعة');
      await c.see('حسابك قيد المراجعة');
      await c.shot('pending');
      return 'Registration submitted; account pending.';
    },
  },
  {
    id: 9,
    title: 'Unapproved user tries to access the portal',
    run: async (c) => {
      await c.openLogin();
      await c.nafath(ID.pending);
      await c.see('حسابك قيد المراجعة');
      await c.p.locator('.zz-header-account').click();
      await c.tick();
      await c.click('طلباتي', { role: 'menuitem' });
      await c.see('حسابك قيد المراجعة. يمكنك إنشاء الطلبات بعد اعتماده.');
      await c.noButton('طلب جديد');
      return 'Orders open read-only with the restriction; no new-order button.';
    },
  },
  {
    id: 10,
    title: 'Account approved while its order is still pending',
    run: async (c) => {
      await c.openLogin();
      await c.nafath(ID.pendingOrder);
      await c.click('أدوات المعاينة');
      await c.click('اعتماد الحساب');
      await c.see('أهلاً، ليلى');
      await c.click('طلباتي', { exact: true });
      await c.click('عرض', { nth: 0 }).catch(() => {});
      await c.p.getByText('ZM-20261028-0441').first().click();
      await c.tick();
      await c.see('طلبك قيد المراجعة');
      await c.noButton('إتمام الدفع');
      return 'Account approved, order still in review: no payment yet.';
    },
  },
  {
    id: 11,
    title: 'Order accepted but account not approved',
    run: async (c) => {
      await c.openLogin();
      await c.nafath(ID.pendingOrder);
      await c.click('أدوات المعاينة');
      await c.click('قبول الطلب');
      await c.click('عرض الطلب');
      await c.see('تم قبول الطلب — بانتظار اعتماد حسابك');
      await c.noButton('إتمام الدفع');
      return 'Payment stays closed until the account is approved.';
    },
  },
  {
    id: 12,
    title: 'User tries to pay before order acceptance',
    run: async (c) => {
      await c.openLogin();
      await c.nafath(ID.company);
      await c.click('طلباتي', { exact: true });
      await c.p.getByText('ZM-20261024-0436').first().click();
      await c.tick();
      await c.see('طلبك قيد المراجعة');
      await c.noButton('إتمام الدفع');
      return 'No pay action on an order under review.';
    },
  },
  {
    id: 13,
    title: 'Nafath returns missing data / fails',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.nafath(ID.missing);
      await c.see('بيانات الهوية غير مكتملة');
      await c.shot('missing');
      await c.nafath(ID.fails);
      await c.see('تعذّر التحقق عبر نفاذ');
      await c.shot('failed');
      await c.click('إغلاق');
      return 'Both cases stop with an explanation; nothing is fabricated.';
    },
  },
  {
    id: 14,
    title: 'Invalid ID or wrong credentials',
    run: async (c) => {
      await c.openLogin();
      await c.fill('رقم الهوية الوطنية / الإقامة', '123');
      await c.click('التحقق عبر نفاذ');
      await c.see('أدخل رقم هوية أو إقامة صحيحاً');
      await c.click('البريد الإلكتروني', { role: 'tab' });
      await c.fill('البريد الإلكتروني', 'a.alharbi@example.com');
      await c.fill('كلمة المرور', 'wrong-pass');
      await c.submitLogin();
      await c.see('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      await c.shot('invalid');
      return 'Field validation and a generic credential error.';
    },
  },
  {
    id: 15,
    title: 'Company registration with missing required fields',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.nafath(ID.newUser);
      await c.click(/^جهة/, { role: 'radio' });
      await c.click('متابعة إلى المنتجات');
      await c.see('اختر نوع الجهة');
      await c.see('ابحث عن المؤسسة بالاسم أولاً');
      await c.fill('اسم المؤسسة', 'مؤسسة غير مسجلة');
      await c.click('تحقق من المؤسسة', { wait: 1200 });
      await c.see('لم نجد المؤسسة في السجل التجاري');
      await c.click('متابعة إلى المنتجات');
      await c.see('أدخل سجلاً تجارياً من 10 أرقام');
      await c.see('اختر المنطقة');
      await c.shot('errors');
      return 'Each missing field is flagged; cannot continue.';
    },
  },
  {
    id: 16,
    title: 'Back navigation keeps entered data',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.nafath(ID.newUser);
      await c.click(/^جهة/, { role: 'radio' });
      await c.click('حكومة', { role: 'radio' });
      await c.click('فعالية رسمية', { role: 'radio' });
      await c.fill('اسم المؤسسة', 'شركة الضيافة');
      await c.click('تحقق من المؤسسة', { wait: 1200 });
      await c.select('co-idtype', 'هوية وطنية');
      await c.click('متابعة إلى المنتجات');
      await c.click('زيادة', { nth: 0 });
      await c.click('رجوع');
      const checked = await c.p.getByRole('radio', { name: 'فعالية رسمية' }).getAttribute('aria-checked');
      if (checked !== 'true') throw new Error('purpose lost after back');
      await c.see('وجدنا المؤسسة في السجل التجاري');
      await c.click('متابعة إلى المنتجات');
      const q = await c.p.getByLabel('الكمية').first().inputValue();
      if (q !== '11') throw new Error('quantity lost after back: ' + q);
      return 'Company data, purpose and quantities survive going back and forth.';
    },
  },
  {
    id: 17,
    title: 'Account or order rejected',
    run: async (c) => {
      await c.openLogin();
      await c.nafath(ID.rejected);
      await c.see('تعذّر اعتماد حسابك');
      await c.see('سبب الرفض');
      await c.see('تواصل معنا');
      await c.shot('account-rejected');
      await c.p.locator('.zz-header-account').click();
      await c.tick();
      await c.click('تسجيل الخروج', { role: 'menuitem' });
      await c.openLogin();
      await c.nafath(ID.company);
      await c.click('طلباتي', { exact: true });
      await c.p.getByText('ZM-20261024-0435').first().click();
      await c.tick();
      await c.see('تعذّر قبول الطلب');
      await c.see('تقديم طلب جديد');
      return 'Rejected account blocked with reason; rejected order offers a new order.';
    },
  },
  {
    id: 18,
    title: 'Payment fails, then cannot be confirmed, then succeeds',
    run: async (c) => {
      await c.openLogin();
      await c.nafath(ID.individual);
      await c.click('طلب جديد', { exact: true });
      if (await c.p.getByRole('radiogroup', { name: 'غرض الطلب' }).count()) throw new Error('individuals must not see order purpose');
      await c.click('متابعة إلى المنتجات');
      await c.products();
      await c.review();
      await c.click('إرسال الطلب');
      await c.click('متابعة الطلب');
      await c.click('أدوات المعاينة');
      await c.click('قبول الطلب');
      await c.click('فشل', { exact: true });
      await c.click('إتمام الدفع', { nth: 0 });
      await c.fill('رقم البطاقة', '4111111111111111');
      await c.fill('تاريخ الانتهاء', '12/29');
      await c.fill('رمز الأمان', '123');
      await c.fill('الاسم على البطاقة', 'Noura Alqahtani');
      await c.click('إتمام الدفع', { nth: 0, wait: 200 });
      await c.tick(3200);
      await c.see('تم رفض العملية');
      await c.shot('failed');
      await c.click('لم تتأكد', { exact: true });
      await c.click('إعادة المحاولة', { nth: 0, wait: 200 });
      await c.tick(3200);
      await c.see('لم يتأكد الدفع بعد');
      await c.shot('unconfirmed');
      await c.click('نجاح', { exact: true });
      await c.click('تحديث حالة الدفع', { wait: 200 });
      await c.tick(1800);
      await c.see('تم الدفع');
      await c.shot('paid');
      return 'Failure keeps order unpaid; unconfirmed blocks a second charge; refresh confirms.';
    },
  },
];

const only = process.env.ONLY ? process.env.ONLY.split(',').map(Number) : null;
const browser = await chromium.launch();
const results = [];
for (const sc of scenarios) {
  if (only && !only.includes(sc.id)) continue;
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.clock.install({ time: new Date('2026-10-29T10:00:00+03:00') });
  await page.route(/nominatim|openstreetmap|fonts\.(googleapis|gstatic)/, (r) => r.abort());
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(BASE, { waitUntil: 'domcontentloaded' });
  await page.clock.runFor(2500);
  const c = new Ctx(page, 's' + String(sc.id).padStart(2, '0'));
  try {
    const note = await sc.run(c);
    if (errors.length) throw new Error('page error: ' + errors[0]);
    results.push({ id: sc.id, title: sc.title, ok: true, note });
  } catch (e) {
    await c.shot('FAIL');
    results.push({ id: sc.id, title: sc.title, ok: false, note: e.message.split('\n')[0] });
  }
  await ctx.close();
}
await browser.close();
for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  #${String(r.id).padStart(2)}  ${r.title} — ${r.note}`);
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} scenarios passed`);
process.exit(failed ? 1 : 0);
