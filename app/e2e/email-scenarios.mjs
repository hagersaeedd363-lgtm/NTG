// End-to-end check of the email-only version: email + code for everyone (no Nafath, password, national ID or account mobile).
// Run against a demo build of that version:
//   VITE_AUTH=email VITE_DEMO_TOOLS=true npx vite --port 5174
//   node e2e/email-scenarios.mjs http://localhost:5174/ [screenshotDir]
import { runScenarios } from './harness.mjs';

/** Email → code (one wrong attempt first) → continue. Same screen for sign-in and sign-up. */
async function emailCode(c, email, { wrong = false } = {}) {
  await c.fill('البريد الإلكتروني', email);
  await c.click('إرسال رمز التحقق', { exact: true });
  await c.see('أرسلنا رمزاً من ٤ أرقام إلى ' + email);
  await c.see('إعادة الإرسال بعد');
  if ((await c.p.evaluate(() => document.activeElement?.id)) !== 'su-otp') throw new Error('the code field should be focused');
  if (wrong) {
    await c.fill('رمز التحقق', '0000');
    await c.click('متابعة', { exact: true });
    await c.see('رمز التحقق غير صحيح');
  }
  await c.click('رمز التحقق ١٢٣٤');
  await c.click('متابعة', { exact: true });
}

async function noIdentityFields(c) {
  for (const t of ['رقم الهوية', 'رقم الجوال', 'نفاذ', 'كلمة المرور']) await c.notSee(t);
}

async function logout(c) {
  await c.p.locator('.zz-header-account').click();
  await c.tick();
  await c.click('تسجيل الخروج', { role: 'menuitem' });
}

const scenarios = [
  {
    id: 1,
    title: 'Navbar: new email → code → registration form → review; then signs in by code',
    run: async (c) => {
      await c.openLogin();
      await noIdentityFields(c);
      await c.notSee('إنشاء حساب جديد');
      await c.shot('email');
      await emailCode(c, 'new.user@example.com', { wrong: true });
      await c.see('بيانات الحساب');
      await c.see('مؤكَّد');
      await noIdentityFields(c);
      await c.click(/^فرد/, { role: 'radio' });
      await c.click('إرسال للمراجعة', { exact: true });
      await c.see('أدخل اسمك الكامل');
      await c.fill('الاسم الكامل', 'سلمان علي الشهري');
      await c.shot('details');
      await c.click('إرسال للمراجعة', { exact: true });
      await c.see('تم إرسال بيانات تسجيلك');
      await noIdentityFields(c);
      await logout(c);
      await c.openLogin();
      await emailCode(c, 'new.user@example.com');
      await c.landedHomeThenAccount();
      await c.see('حسابك قيد المراجعة');
      await c.see('بريد مؤكَّد');
      await noIdentityFields(c);
      return 'New email becomes a pending account; the next sign-in is the same email + code.';
    },
  },
  {
    id: 2,
    title: 'Quick order, new company: email → code → account details in the order → submit',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.see('ابدأ طلبك');
      await c.notSee('لدي حساب');
      await emailCode(c, 'buyer@example.com');
      await c.see('بيانات الحساب');
      await c.fill('الاسم الكامل', 'منى سعيد القرني');
      await c.click(/^جهة/, { role: 'radio' });
      await c.click('غير ربحي', { role: 'radio' });
      await c.click('فعالية رسمية', { role: 'radio' });
      await c.p.locator('#co-query').fill('شركة الضيافة');
      await c.click('تحقق من المؤسسة', { wait: 1200 });
      await c.see('وجدنا المؤسسة في السجل التجاري');
      if ((await c.p.locator('#co-repname').inputValue()) !== 'منى سعيد القرني') throw new Error('representative name should follow the account name');
      if ((await c.p.locator('#co-repemail').inputValue()) !== 'buyer@example.com') throw new Error('representative email should be the account email');
      for (const id of ['co-repid', 'co-repphone', 'co-idtype']) if (await c.p.locator('#' + id).count()) throw new Error('unexpected field ' + id);
      await c.shot('account-step');
      await c.click('متابعة إلى المنتجات');
      await c.products();
      if ((await c.p.locator('#of-recvEmail').inputValue()) !== 'buyer@example.com') throw new Error('receiver email not prefilled');
      await c.p.locator('#of-recvPhone').fill('0551112233');
      await c.select('of-region', 'مكة المكرمة');
      await c.select('of-city', 'مكة المكرمة');
      await c.select('of-warehouse', 'مستودع كدي — مكة المكرمة');
      await c.click('إرسال الطلب وبيانات التسجيل');
      await c.see('تم إرسال طلبك وبيانات تسجيلك');
      await c.shot('done');
      return 'Registration + first order submitted together; no password, ID or mobile on the account.';
    },
  },
  {
    id: 3,
    title: 'Quick order, existing approved user: same email + code continues the order',
    run: async (c) => {
      await c.startOrderFromHome();
      await emailCode(c, 'n.alqahtani@example.com');
      await c.see('تفاصيل الطلب');
      await c.see('معتمد');
      await c.click('متابعة إلى المنتجات');
      await c.products();
      if ((await c.p.locator('#of-recvEmail').inputValue()) !== 'n.alqahtani@example.com') throw new Error('receiver email not prefilled');
      return 'Recognised after the code and continued to products.';
    },
  },
  {
    id: 4,
    title: 'Navbar sign-in, existing user: no password anywhere',
    run: async (c) => {
      await c.openLogin();
      await emailCode(c, 'a.alharbi@example.com');
      await c.see('طلبك بانتظار إثبات الدفع');
      await c.landedHomeThenAccount();
      await c.see('عبدالله محمد الحربي');
      await c.notSee('رقم الهوية');
      await c.notSee('جوال الممثل');
      await c.notSee('كلمة المرور');
      await c.p.locator('.zz-header-account').click();
      await c.tick();
      if (await c.p.getByRole('menuitem', { name: /كلمة المرور/ }).count()) throw new Error('password menu item should not exist');
      await c.shot('menu');
      return 'Signed in by code; no password item in the menu or profile.';
    },
  },
  {
    id: 5,
    title: 'Code screen: resend countdown, change email, attempt limit',
    run: async (c) => {
      await c.openLogin();
      await c.fill('البريد الإلكتروني', 'f.aldosari@example.com');
      await c.click('إرسال رمز التحقق', { exact: true });
      await c.see('إعادة الإرسال بعد');
      await c.tick(61000);
      await c.click('إعادة الإرسال');
      await c.see('إعادة الإرسال بعد');
      for (let i = 0; i < 5; i++) {
        await c.fill('رمز التحقق', '0000');
        await c.click('متابعة', { exact: true });
      }
      await c.click('رمز التحقق ١٢٣٤');
      await c.click('متابعة', { exact: true });
      await c.see('تجاوزت عدد المحاولات المسموح');
      await c.click('تغيير البريد الإلكتروني');
      await c.see('إرسال رمز التحقق');
      await emailCode(c, 'f.aldosari@example.com');
      await c.landedHomeThenAccount();
      await c.see('حسابك قيد المراجعة');
      return 'Resend after 60 s; locked after 5 wrong codes until a new code is sent.';
    },
  },
];

await runScenarios(scenarios);
