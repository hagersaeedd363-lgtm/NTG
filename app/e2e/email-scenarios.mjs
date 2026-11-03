// End-to-end check of the email-only version (no Nafath, national ID or account mobile):
//   - sign-in: email + password («نسيت كلمة المرور» → code to the email → new password)
//   - registration: email → code (square boxes) → account form with a required password → review
//   - quick order: email first → existing account asks for its password, a new email gets a code
// Run against a demo build of that version:
//   VITE_AUTH=email VITE_DEMO_TOOLS=true npx vite --port 5174
//   node e2e/email-scenarios.mjs http://localhost:5174/ [screenshotDir]
import { runScenarios } from './harness.mjs';

const PW = 'Zamzam2026';

/** Code step: the boxes take the cursor; a wrong code is refused as soon as the 4th digit is typed. */
async function code(c, email, { wrong = false } = {}) {
  await c.see('أرسلنا رمزاً من ٤ أرقام إلى ' + email);
  await c.see('إعادة الإرسال بعد');
  if ((await c.p.evaluate(() => document.activeElement?.id)) !== 'su-otp') throw new Error('the code boxes should have the cursor');
  if (wrong) {
    await c.fill('رمز التحقق', '0000');
    await c.see('رمز التحقق غير صحيح');
  }
  await c.fill('رمز التحقق', '1234'); // completes → continues on its own
  await c.tick(300);
}

/** Email step of registration / quick order. */
async function email(c, address) {
  await c.fill('البريد الإلكتروني', address);
  await c.click(/^(متابعة|إرسال رمز التحقق)$/);
}

async function passwordLogin(c, address, password) {
  await c.fill('البريد الإلكتروني', address);
  await c.p.locator('#auth-pass').fill(password);
  await c.p.locator('#auth-pass').press('Enter');
  await c.tick(1200);
}

async function setPassword(c) {
  await c.p.locator('#reg-pw1').fill(PW);
  await c.p.locator('#reg-pw2').fill(PW);
  await c.tick(100);
}

async function noIdentityFields(c) {
  for (const t of ['رقم الهوية', 'رقم الجوال', 'نفاذ', 'تعيين كلمة مرور الآن']) await c.notSee(t);
}

async function logout(c) {
  await c.p.locator('.zz-header-account').click();
  await c.tick();
  await c.click('تسجيل الخروج', { role: 'menuitem' });
}

const scenarios = [
  {
    id: 1,
    title: 'Register from the navbar: email → code → details + required password → review → sign in',
    run: async (c) => {
      await c.openLogin();
      await c.see('سجّل الدخول بالبريد الإلكتروني وكلمة المرور');
      await noIdentityFields(c);
      await c.click('إنشاء حساب جديد');
      await email(c, 'new.user@example.com');
      await code(c, 'new.user@example.com', { wrong: true });
      await c.shot('code-error');
      await c.see('بيانات الحساب');
      await c.see('مؤكَّد');
      await noIdentityFields(c);
      await c.click(/^فرد/, { role: 'radio' });
      await c.click('إرسال للمراجعة', { exact: true });
      await c.see('أدخل اسمك الكامل');
      await c.see('أدخل كلمة مرور تستوفي الشروط وأكّدها.');
      await c.fill('الاسم الكامل', 'سلمان علي الشهري');
      await setPassword(c);
      await c.click('إرسال للمراجعة', { exact: true });
      await c.see('تم إرسال بيانات تسجيلك');
      await noIdentityFields(c);
      await logout(c);
      await c.openLogin();
      await passwordLogin(c, 'new.user@example.com', PW);
      await c.landedHomeThenAccount();
      await c.see('حسابك قيد المراجعة');
      await c.see('بريد مؤكَّد');
      return 'Email confirmed by code, password set in the form, pending review; signs in with email + password.';
    },
  },
  {
    id: 2,
    title: 'Quick order, new company: email → code → account details + password in the order → submit',
    run: async (c) => {
      await c.startOrderFromHome();
      await c.see('ابدأ طلبك');
      await email(c, 'buyer@example.com');
      await code(c, 'buyer@example.com');
      await c.see('بيانات الحساب');
      await c.fill('الاسم الكامل', 'منى سعيد القرني');
      await setPassword(c);
      await c.click(/^جهة/, { role: 'radio' });
      await c.click('غير ربحي', { role: 'radio' });
      await c.click('فعالية رسمية', { role: 'radio' });
      await c.p.locator('#co-query').fill('شركة الضيافة');
      await c.click('تحقق من المؤسسة', { wait: 1200 });
      await c.see('وجدنا المؤسسة في السجل التجاري');
      if ((await c.p.locator('#co-repname').inputValue()) !== 'منى سعيد القرني') throw new Error('representative name should follow the account name');
      if ((await c.p.locator('#co-repemail').inputValue()) !== 'buyer@example.com') throw new Error('representative email should be the account email');
      for (const id of ['co-repid', 'co-repphone', 'co-idtype']) if (await c.p.locator('#' + id).count()) throw new Error('unexpected field ' + id);
      await c.click('متابعة إلى المنتجات');
      await c.products();
      if ((await c.p.locator('#of-recvEmail').inputValue()) !== 'buyer@example.com') throw new Error('receiver email not prefilled');
      await c.p.locator('#of-recvPhone').fill('0551112233');
      await c.select('of-region', 'مكة المكرمة');
      await c.select('of-city', 'مكة المكرمة');
      await c.select('of-warehouse', 'مستودع كدي — مكة المكرمة');
      await c.click('إرسال الطلب وبيانات التسجيل');
      await c.see('تم إرسال طلبك وبيانات تسجيلك');
      return 'Registration + first order submitted together.';
    },
  },
  {
    id: 3,
    title: 'Quick order, existing user: email → password → continues the order',
    run: async (c) => {
      await c.startOrderFromHome();
      await email(c, 'n.alqahtani@example.com');
      await c.see('لديك حساب بهذا البريد. أدخل كلمة المرور لمتابعة طلبك.');
      await c.see('نسيت كلمة المرور؟');
      await c.shot('password-step');
      await c.p.locator('#auth-pass').fill('wrong-pass');
      await c.click('متابعة الطلب', { wait: 1200 });
      await c.see('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      await c.p.locator('#auth-pass').fill('123456');
      await c.click('متابعة الطلب', { wait: 1200 });
      await c.see('تفاصيل الطلب');
      await c.see('معتمد');
      return 'Existing account asked for its password inside the order, then continued.';
    },
  },
  {
    id: 4,
    title: 'Navbar sign-in: email + password on one screen',
    run: async (c) => {
      await c.openLogin();
      await c.shot('login');
      await passwordLogin(c, 'a.alharbi@example.com', 'wrong-pass');
      await c.see('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      await passwordLogin(c, 'a.alharbi@example.com', '123456');
      await c.see('طلبك بانتظار إثبات الدفع');
      await c.landedHomeThenAccount();
      await c.see('عبدالله محمد الحربي');
      await c.notSee('رقم الهوية');
      await c.notSee('جوال الممثل');
      return 'Signed in with email + password.';
    },
  },
  {
    id: 5,
    title: 'Forgot password: code boxes → new password → sign in',
    run: async (c) => {
      await c.openLogin();
      await c.click('نسيت كلمة المرور؟');
      await c.fill('البريد الإلكتروني المسجّل', 'f.aldosari@example.com');
      await c.click('إرسال رمز التحقق');
      await c.see('أرسلنا إليه رمز تحقق');
      if ((await c.p.evaluate(() => document.activeElement?.id)) !== 'fg-otp') throw new Error('the code boxes should have the cursor');
      await c.fill('رمز التحقق', '1234');
      await c.see('كلمة المرور الجديدة');
      await c.fill('كلمة المرور الجديدة', PW);
      await c.fill('تأكيد كلمة المرور', PW);
      await c.click('حفظ كلمة المرور');
      await c.see('تم تعيين كلمة المرور الجديدة');
      await c.p.locator('#auth-pass').fill(PW);
      await c.p.locator('#auth-pass').press('Enter');
      await c.tick(1200);
      await c.landedHomeThenAccount();
      await c.see('حسابك قيد المراجعة');
      return 'Reset by email code, then signed in with the new password.';
    },
  },
  {
    id: 6,
    title: 'Registration: existing email goes to sign-in; code resend and attempt limit',
    run: async (c) => {
      await c.openLogin();
      await c.click('إنشاء حساب جديد');
      await email(c, 'a.alharbi@example.com');
      await c.see('لديك حساب بهذا البريد الإلكتروني');
      await c.see('نسيت كلمة المرور؟');
      await c.click('إنشاء حساب جديد');
      await email(c, 'another@example.com');
      await c.see('إعادة الإرسال بعد');
      await c.tick(61000);
      await c.click('إعادة الإرسال');
      await c.see('إعادة الإرسال بعد');
      for (let i = 0; i < 5; i++) {
        await c.fill('رمز التحقق', '');
        await c.fill('رمز التحقق', '0000');
      }
      await c.fill('رمز التحقق', '');
      await c.fill('رمز التحقق', '1234');
      await c.see('تجاوزت عدد المحاولات المسموح');
      await c.click('تغيير البريد الإلكتروني');
      await c.see('إرسال رمز التحقق');
      return 'Existing email sent to sign-in; resend after 60 s; locked after 5 wrong codes.';
    },
  },
];

await runScenarios(scenarios);
