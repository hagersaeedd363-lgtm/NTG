// End-to-end check of the email-only version (no Nafath, no national ID, no account mobile).
// Run against a demo build of that version:
//   VITE_AUTH=email VITE_DEMO_TOOLS=true npx vite --port 5174
//   node e2e/email-scenarios.mjs http://localhost:5174/ [screenshotDir]
import { runScenarios } from './harness.mjs';

const PW = 'Zamzam2026';

/** «حساب جديد»: email + password, then the code sent to the email. */
async function signup(c, email) {
  await c.fill('البريد الإلكتروني', email);
  await c.p.locator('#su-pw1').fill(PW);
  await c.p.locator('#su-pw2').fill(PW);
  await c.tick(100);
  await c.click('إنشاء الحساب', { exact: true });
  await c.see('تأكيد البريد الإلكتروني');
  await c.see('أرسلنا رمزاً من ٤ أرقام إلى ' + email);
  await c.fill('رمز التحقق', '0000');
  await c.click('تأكيد البريد', { exact: true });
  await c.see('رمز التحقق غير صحيح');
  await c.click('رمز التحقق ١٢٣٤');
  await c.click('تأكيد البريد', { exact: true });
}

async function emailLogin(c, email, password = '123456') {
  await c.fill('البريد الإلكتروني', email);
  await c.p.locator('#auth-pass').fill(password);
  await c.submitLogin();
}

async function noIdentityFields(c) {
  for (const t of ['رقم الهوية', 'رقم الجوال', 'نفاذ', 'تعيين كلمة مرور الآن']) await c.notSee(t);
}

const scenarios = [
  {
    id: 1,
    title: 'Register from the navbar: email + password → email code → details → review',
    run: async (c) => {
      await c.openLogin();
      await noIdentityFields(c);
      await c.click('إنشاء حساب جديد');
      await c.see('أنشئ حسابك بالبريد الإلكتروني وكلمة المرور');
      await c.shot('signup');
      await signup(c, 'new.user@example.com');
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
      await c.see('new.user@example.com');
      await noIdentityFields(c);
      await c.shot('registered');
      // Sign out and back in with the new email and password.
      await c.p.locator('.zz-header-account').click();
      await c.tick();
      await c.click('تسجيل الخروج', { role: 'menuitem' });
      await c.openLogin();
      await emailLogin(c, 'new.user@example.com', PW);
      await c.landedHomeThenAccount();
      await c.see('حسابك قيد المراجعة');
      await c.see('بريد مؤكَّد');
      await noIdentityFields(c);
      return 'Account created with email + password, confirmed by code, pending review; signs in by email.';
    },
  },
  {
    id: 2,
    title: 'New company from Home: create account inside the order, then order',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.see('حساب جديد');
      await c.see('لدي حساب');
      await signup(c, 'buyer@example.com');
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
      return 'Registration + first order submitted together; no ID or mobile on the account.';
    },
  },
  {
    id: 3,
    title: 'Existing user signs in from the navbar (email only)',
    run: async (c) => {
      await c.openLogin();
      await c.notSee('التحقق عبر نفاذ');
      await c.see('نسيت كلمة المرور؟');
      await c.shot('login');
      await emailLogin(c, 'a.alharbi@example.com', 'wrong-pass');
      await c.see('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      await emailLogin(c, 'a.alharbi@example.com');
      await c.see('طلبك بانتظار إثبات الدفع');
      await c.landedHomeThenAccount();
      await c.see('عبدالله محمد الحربي');
      await c.notSee('رقم الهوية');
      await c.notSee('جوال الممثل');
      await c.shot('profile');
      return 'Email + password sign-in; profile shows name and email only.';
    },
  },
  {
    id: 4,
    title: 'Existing user starts an order from Home via «لدي حساب»',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.click('لدي حساب', { role: 'tab' });
      await emailLogin(c, 'n.alqahtani@example.com');
      await c.see('تفاصيل الطلب');
      await c.see('معتمد');
      await c.click('متابعة إلى المنتجات');
      await c.products();
      if ((await c.p.locator('#of-recvEmail').inputValue()) !== 'n.alqahtani@example.com') throw new Error('receiver email not prefilled');
      return 'Signed in inside the order and continued to products.';
    },
  },
  {
    id: 5,
    title: 'Sign-up with an email that already has an account',
    run: async (c) => {
      await c.openLogin();
      await c.click('إنشاء حساب جديد');
      await c.fill('البريد الإلكتروني', 'a.alharbi@example.com');
      await c.p.locator('#su-pw1').fill(PW);
      await c.p.locator('#su-pw2').fill(PW);
      await c.tick(100);
      await c.click('إنشاء الحساب', { exact: true });
      await c.see('لديك حساب بهذا البريد الإلكتروني');
      await c.see('نسيت كلمة المرور؟');
      return 'Sent to sign-in with a notice; no second account.';
    },
  },
  {
    id: 6,
    title: 'Forgot password: code to the email',
    run: async (c) => {
      await c.openLogin();
      await c.click('نسيت كلمة المرور؟');
      await c.see('نتحقق منك برمز يصل إلى بريدك الإلكتروني');
      await c.fill('البريد الإلكتروني المسجّل', 'f.aldosari@example.com');
      await c.click('إرسال رمز التحقق');
      await c.see('أرسلنا إليه رمز تحقق');
      await c.click('رمز التحقق ١٢٣٤');
      await c.click('تحقق', { exact: true });
      await c.fill('كلمة المرور الجديدة', PW);
      await c.fill('تأكيد كلمة المرور', PW);
      await c.click('حفظ كلمة المرور');
      await c.see('تم تعيين كلمة المرور الجديدة');
      await emailLogin(c, 'f.aldosari@example.com', PW);
      await c.landedHomeThenAccount();
      await c.see('حسابك قيد المراجعة');
      return 'Reset by email code, then signed in with the new password.';
    },
  },
];

await runScenarios(scenarios);
