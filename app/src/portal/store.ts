/**
 * Portal state and actions. Everything that talks to "the back office" goes through the
 * simulated operations below (Nafath, email sign-in, commercial register, approvals, payment).
 * Replace those with API calls when the services exist; the screens only use this store.
 */
import { useSyncExternalStore } from 'react';
import { DEMO_TOOLS } from '../config';
import { COMPANIES, EMAIL_RE, MAX_BOTTLES, PRODUCTS, REGIONS, SAR } from '../data/portal';
import { DEMO_IDS, initialDb, sampleIdentity } from './fixtures';
import { canCreateOrder, computeTotals, createOrderBlockReason, isPayable } from './rules';
import type { Account, AccountType, AuthMethod, ChangeRequest, Company, Db, Identity, Order, PaymentMethod } from './types';

export type View = 'auth' | 'register' | 'flow' | 'done' | 'status' | 'blocked' | 'profile' | 'editProfile' | 'password' | 'orders' | 'pay';
export type Entry = 'order' | 'login' | 'register';
export type Step = 'account' | 'products' | 'review';
export type Errors = Record<string, string>;

export interface AuthState {
  entry: Entry;
  tab: 'nafath' | 'email';
  nid: string;
  email: string;
  password: string;
  errors: Errors;
  /** Outcome message shown above the form (failed verification, unknown identity…). */
  notice: { tone: 'bad' | 'warn' | 'info' | 'ok'; title: string; text: string } | null;
  busy: boolean;
  /** «نسيت كلمة المرور» while signed out: email → code to the registered mobile → new password. */
  forgot: ForgotState | null;
}

export interface ForgotState {
  step: 1 | 2 | 3;
  email: string;
  otp: string;
  n1: string;
  n2: string;
  show: boolean;
  err: string;
}

/** Password rules shared by «تعيين / تغيير كلمة المرور» and «نسيت كلمة المرور». */
export function passwordRules(n1: string, n2: string, current?: string) {
  return [
    { t: '٨ أحرف على الأقل', ok: n1.length >= 8 },
    { t: 'تحتوي على حرف ورقم', ok: /[A-Za-z\u0600-\u06FF]/.test(n1) && /\d/.test(n1) },
    { t: 'تطابق كلمة المرور وتأكيدها', ok: !!n1 && n1 === n2 },
    ...(current ? [{ t: 'تختلف عن كلمة المرور الحالية', ok: !!n1 && n1 !== current }] : []),
  ];
}

export interface CompanyDraft extends Omit<Company, 'registryMatch' | 'repIdType'> {
  repIdType: string;
}

export interface RegDraft {
  type: AccountType | '';
  company: CompanyDraft;
  crQuery: string;
  crStatus: '' | 'loading' | 'found' | 'notfound';
}

export interface OrderDraft {
  purpose: string;
  cart: Record<string, number>;
  delivery: 'pickup' | 'address';
  region: string;
  city: string;
  warehouse: string;
  nationalAddress: string;
  mapAddress: string;
  lat: string;
  lng: string;
  recvName: string;
  recvPhone: string;
  recvEmail: string;
  notes: string;
  deliveryNotes: string;
}

/** Payment happens outside the portal; the portal only collects the proof of payment. */
export type PayScreen = 'proof' | 'awaiting';

export interface PayState {
  orderId: string;
  screen: PayScreen;
  file: string;
  fileSize: number;
  fileType: string;
  /** data: URL of the chosen file, for the preview (kept in memory only). */
  preview: string;
  fileErr: string;
  transferDate: string;
  sender: string;
}

export const PROOF_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];
export const PROOF_MAX = 5 * 1024 * 1024;
/** Uploaded receipts by order id, for «عرض الإيصال». In memory only (too large for session storage). */
export const proofFiles = new Map<string, string>();

export interface PortalState {
  db: Db;
  session: { nationalId: string; method: AuthMethod } | null;
  view: View;
  auth: AuthState;
  nafath: { nid: string; code: string; left: number; failed: boolean } | null;
  /** Identity returned by Nafath for someone without an account, kept for registration. */
  verified: Identity | null;
  reg: RegDraft;
  draft: OrderDraft;
  flow: { step: Step; detailsOpen: boolean };
  errors: Errors;
  lastOrderId: string | null;
  openOrderId: string | null;
  orders: { tab: string; q: string; status: string; sort: { key: string; dir: 1 | -1 } };
  pay: PayState | null;
  edit: (Omit<CompanyDraft, never> & { errors: Errors }) | null;
  pw: { step: 0 | 1 | 2 | 3; otp: string; n0: string; n1: string; n2: string; show: boolean; err: string };
  /** The «سجّل دخولك أسرع» password suggestion was dismissed. */
  pwHintOff: boolean;
  photo: string;
  map: { open: boolean; query: string; busy: boolean; err: string; addr: string; point: { lat: number; lng: number } | null };
  loc: { busy: boolean; err: string };
  acctMenu: boolean;
  demo: { panelOpen: boolean };
}

const STORAGE_KEY = 'zz-portal';
const NID_RE = /^[12]\d{9}$/;
const PHONE_RE = /^(05\d{8}|\+9665\d{8})$/;
export const REQUIRED = 'هذا الحقل مطلوب';

const emptyCompany = (): CompanyDraft => ({
  entityType: '',
  name: '',
  cr: '',
  region: '',
  city: '',
  repIdType: '',
  repId: '',
  repName: '',
  repPhone: '',
  repEmail: '',
});

export const emptyDraft = (): OrderDraft => ({
  purpose: '',
  cart: { p330: 10, p500: 5, p1000: 8, p5000: 3 },
  delivery: 'pickup',
  region: '',
  city: '',
  warehouse: '',
  nationalAddress: '',
  mapAddress: '',
  lat: '',
  lng: '',
  recvName: '',
  recvPhone: '',
  recvEmail: '',
  notes: '',
  deliveryNotes: '',
});

const emptyAuth = (entry: Entry = 'login'): AuthState => ({
  entry,
  tab: 'nafath',
  nid: '',
  email: '',
  password: '',
  errors: {},
  notice: null,
  busy: false,
  forgot: null,
});

function initialState(): PortalState {
  return {
    db: initialDb(),
    session: null,
    view: 'auth',
    auth: emptyAuth(),
    nafath: null,
    verified: null,
    reg: { type: '', company: emptyCompany(), crQuery: '', crStatus: '' },
    draft: emptyDraft(),
    flow: { step: 'account', detailsOpen: false },
    errors: {},
    lastOrderId: null,
    openOrderId: null,
    orders: { tab: 'all', q: '', status: 'all', sort: { key: 'id', dir: -1 } },
    pay: null,
    edit: null,
    pw: { step: 0, otp: '', n0: '', n1: '', n2: '', show: false, err: '' },
    pwHintOff: false,
    photo: '',
    map: { open: false, query: '', busy: false, err: '', addr: '', point: null },
    loc: { busy: false, err: '' },
    acctMenu: false,
    demo: { panelOpen: false },
  };
}

/** Append «(محاكاة)» in demo builds so the prototype never claims a real verification or payment. */
export const sim = (msg: string) => (DEMO_TOOLS ? msg + ' (محاكاة)' : msg);

const arDate = (d = new Date()) => d.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }) + 'م';

function load(): PortalState {
  const base = initialState();
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw) as Partial<PortalState>;
    const view = saved.view === 'pay' ? 'orders' : saved.view;
    return {
      ...base,
      db: saved.db ?? base.db,
      session: saved.session ?? null,
      view: view ?? base.view,
      reg: saved.reg ? { ...saved.reg, crStatus: saved.reg.crStatus === 'loading' ? '' : saved.reg.crStatus } : base.reg,
      verified: saved.verified ?? null,
      draft: saved.draft ?? base.draft,
      flow: saved.flow ?? base.flow,
      auth: saved.auth ? { ...base.auth, entry: saved.auth.entry, tab: saved.auth.tab } : base.auth,
      lastOrderId: saved.lastOrderId ?? null,
      openOrderId: saved.openOrderId ?? null,
      pwHintOff: saved.pwHintOff ?? false,
    };
  } catch {
    return base;
  }
}

type Listener = () => void;

export class PortalStore {
  state: PortalState = load();
  private listeners = new Set<Listener>();
  private timers: Record<string, ReturnType<typeof setTimeout>> = {};
  /** Hooks provided by the site shell. */
  toast: (msg: string) => void = () => {};
  navigate: (page: 'order' | 'home') => void = () => {};

  subscribe = (fn: Listener) => {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  };
  getState = () => this.state;

  set(patch: Partial<PortalState> | ((s: PortalState) => Partial<PortalState>)) {
    const p = typeof patch === 'function' ? patch(this.state) : patch;
    this.state = { ...this.state, ...p };
    try {
      const { db, session, view, reg, verified, draft, flow, auth, lastOrderId, openOrderId, pwHintOff } = this.state;
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ db, session, view, reg, verified, draft, flow, auth: { entry: auth.entry, tab: auth.tab }, lastOrderId, openOrderId, pwHintOff }),
      );
    } catch {
      /* storage unavailable: state still works in memory */
    }
    this.listeners.forEach((l) => l());
  }

  private later(key: string, ms: number, fn: () => void) {
    clearTimeout(this.timers[key]);
    this.timers[key] = setTimeout(fn, ms);
  }

  scrollTop(instant = false) {
    setTimeout(
      () =>
        requestAnimationFrame(() => {
          const el = document.getElementById('oflow');
          window.scrollTo({ top: el ? el.getBoundingClientRect().top + window.scrollY - 80 : 0, behavior: instant ? 'auto' : 'smooth' });
        }),
      instant ? 180 : 120,
    );
  }

  // ------------------------------------------------------------------ selectors
  account(s = this.state): Account | null {
    return s.session ? s.db.accounts[s.session.nationalId] ?? null : null;
  }
  myOrders(s = this.state): Order[] {
    const a = this.account(s);
    return a ? s.db.orders.filter((o) => o.nationalId === a.nationalId) : [];
  }
  order(id: string | null, s = this.state): Order | undefined {
    return id ? s.db.orders.find((o) => o.id === id) : undefined;
  }
  /** True while the order journey is a new user's registration + first order. */
  isNewFlow(s = this.state): boolean {
    return !s.session && !!s.verified;
  }
  identity(s = this.state): Identity | null {
    return this.account(s)?.identity ?? s.verified;
  }

  private updateDb(fn: (db: Db) => Db) {
    this.set((s) => ({ db: fn(s.db) }));
  }
  private patchOrder(id: string, fn: (o: Order) => Order) {
    this.updateDb((db) => ({ ...db, orders: db.orders.map((o) => (o.id === id ? fn(o) : o)) }));
  }
  private patchAccount(nid: string, fn: (a: Account) => Account) {
    this.updateDb((db) => ({ ...db, accounts: { ...db.accounts, [nid]: fn(db.accounts[nid]) } }));
  }

  // ------------------------------------------------------------------ entry points
  /** Where a signed-in user lands: approved → profile, otherwise the account-status page. */
  private landingView(a: Account): View {
    return a.status === 'approved' ? 'profile' : 'status';
  }

  /** Flow A: «اقتن» on the home page. */
  startOrder(cart?: Record<string, number>) {
    const a = this.account();
    this.set((s) => ({ acctMenu: false, draft: { ...emptyDraft(), cart: cart ?? s.draft.cart } }));
    if (a) {
      if (canCreateOrder(a)) this.beginExistingFlow();
      else this.set({ view: 'blocked' });
    } else if (this.state.verified) {
      this.set({ view: 'flow', flow: { step: 'account', detailsOpen: false }, errors: {} });
    } else {
      this.set({ view: 'auth', auth: emptyAuth('order'), nafath: null });
    }
    this.navigate('order');
    this.scrollTop(true);
  }

  /** Flow B: «تسجيل الدخول» in the header. */
  openLogin() {
    const a = this.account();
    this.set({ acctMenu: false });
    if (a) this.set({ view: this.landingView(a) });
    else this.set({ view: 'auth', auth: emptyAuth('login'), nafath: null, verified: null });
    this.navigate('order');
  }

  openRegister() {
    this.set((s) => ({ view: 'auth', auth: { ...emptyAuth('register'), nid: s.auth.nid }, nafath: null, verified: null }));
    this.scrollTop();
  }

  backToLogin() {
    this.set((s) => ({ view: 'auth', auth: { ...emptyAuth('login'), nid: s.auth.nid }, verified: null }));
    this.scrollTop();
  }

  openProfile() {
    const a = this.account();
    this.set({ acctMenu: false });
    if (!a) return this.openLogin();
    this.set({ view: this.landingView(a) });
    this.navigate('order');
    this.scrollTop();
  }

  openOrders(openId: string | null = null) {
    const a = this.account();
    this.set({ acctMenu: false });
    if (!a) return this.openLogin();
    this.set((s) => ({ view: 'orders', openOrderId: openId, orders: { ...s.orders, tab: 'all', q: '', status: 'all' } }));
    this.navigate('order');
    this.scrollTop();
  }

  logout() {
    Object.values(this.timers).forEach(clearTimeout);
    const db = this.state.db;
    this.state = { ...initialState(), db };
    this.set({});
    this.navigate('home');
    this.toast('تم تسجيل الخروج');
  }

  goHome() {
    this.navigate('home');
  }

  /** Direct visits to #order: show the screen the user is allowed to see. */
  guardView(view: View): View {
    const a = this.account();
    if (!a) return ['auth', 'register', 'flow', 'done'].includes(view) ? view : 'auth';
    if (a.status !== 'approved') {
      return ['status', 'blocked', 'orders', 'done', 'password'].includes(view) ? view : 'status';
    }
    return view === 'auth' || view === 'register' || view === 'blocked' ? 'profile' : view;
  }

  // ------------------------------------------------------------------ authentication
  setAuth(p: Partial<AuthState>) {
    this.set((s) => ({ auth: { ...s.auth, ...p } }));
  }

  /** Step 1 of every Nafath journey: validate the ID and start the (simulated) Nafath request. */
  startNafath() {
    const nid = this.state.auth.nid.trim();
    if (!NID_RE.test(nid)) {
      this.setAuth({ errors: { nid: 'أدخل رقم هوية أو إقامة صحيحاً من 10 أرقام يبدأ بـ 1 أو 2' }, notice: null });
      return;
    }
    this.set((s) => ({ auth: { ...s.auth, errors: {}, notice: null }, nafath: { nid, code: String(10 + (Number(nid.slice(-2)) % 90)), left: 60, failed: false } }));
    this.tickNafath();
  }

  private tickNafath() {
    this.later('naf', 1000, () => {
      const n = this.state.nafath;
      if (!n || n.failed) return;
      const left = n.left - 1;
      if (left <= 56) {
        if (n.nid === DEMO_IDS.nafathFails) this.set({ nafath: { ...n, left, failed: true } });
        else this.nafathApproved(n.nid);
        return;
      }
      this.set({ nafath: { ...n, left } });
      this.tickNafath();
    });
  }

  cancelNafath() {
    clearTimeout(this.timers.naf);
    this.set({ nafath: null });
  }

  /** Nafath confirmed the identity: branch on whether an account exists. */
  private nafathApproved(nid: string) {
    const { entry } = this.state.auth;
    const existing = this.state.db.accounts[nid];
    this.set({ nafath: null });
    if (existing) return this.signIn(existing, 'nafath', entry === 'register' ? 'لديك حساب مسجّل بهذه الهوية، وتم تسجيل دخولك.' : sim('تم التحقق عبر نفاذ'));

    const identity = nid === DEMO_IDS.missingData ? { ...sampleIdentity(nid), email: '', phone: '' } : sampleIdentity(nid);
    const missing = [!identity.fullName && 'الاسم الكامل', !identity.email && 'البريد الإلكتروني', !identity.phone && 'رقم الجوال'].filter(Boolean);
    if (missing.length) {
      this.setAuth({
        notice: {
          tone: 'bad',
          title: 'بيانات الهوية غير مكتملة',
          text: 'لم يُرجع نفاذ: ' + missing.join('، ') + '. لا يمكن إكمال التسجيل بدون هذه البيانات، ولن تُطلب منك يدوياً. أعد المحاولة لاحقاً أو تواصل معنا.',
        },
      });
      return;
    }
    this.set((s) => ({
      verified: identity,
      reg: { type: '', company: { ...emptyCompany(), repName: identity.fullName, repId: identity.nationalId, repIdType: 'هوية وطنية', repPhone: identity.phone, repEmail: identity.email }, crQuery: '', crStatus: '' },
      draft: { ...s.draft, recvName: identity.fullName, recvPhone: identity.phone, recvEmail: identity.email },
      errors: {},
    }));
    if (entry === 'order') {
      this.set({ view: 'flow', flow: { step: 'account', detailsOpen: false } });
      this.toast(sim('تم التحقق عبر نفاذ. أنت غير مسجّل بعد'));
    } else {
      this.set({ view: 'register' });
      this.toast(entry === 'login' ? 'لا يوجد حساب مرتبط بهذه الهوية. أكمل التسجيل للمتابعة.' : sim('تم التحقق عبر نفاذ'));
    }
    this.scrollTop();
  }

  emailLogin() {
    const { email, password } = this.state.auth;
    const errors: Errors = {};
    if (!EMAIL_RE.test(email.trim())) errors.email = 'أدخل بريداً إلكترونياً صحيحاً';
    if (!password) errors.password = 'أدخل كلمة المرور';
    if (Object.keys(errors).length) return this.setAuth({ errors, notice: null });
    this.setAuth({ busy: true, errors: {}, notice: null });
    this.later('login', 900, () => {
      const acct = Object.values(this.state.db.accounts).find((a) => a.identity.email.toLowerCase() === email.trim().toLowerCase());
      if (!acct || !acct.password || acct.password !== password) {
        this.setAuth({
          busy: false,
          notice: {
            tone: 'bad',
            title: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
            text: 'تحقق من البيانات وأعد المحاولة. إن نسيت كلمة المرور فاستخدم «نسيت كلمة المرور؟»، أو سجّل الدخول عبر نفاذ.',
          },
        });
        return;
      }
      this.setAuth({ busy: false });
      this.signIn(acct, 'email', 'تم تسجيل الدخول');
    });
  }

  // ------------------------------------------------------------------ forgotten password (signed out)
  startForgot() {
    this.setAuth({ forgot: { step: 1, email: this.state.auth.email, otp: '', n1: '', n2: '', show: false, err: '' }, notice: null, errors: {} });
  }
  setForgot(p: Partial<ForgotState>) {
    this.set((s) => ({ auth: { ...s.auth, forgot: s.auth.forgot ? { ...s.auth.forgot, err: '', ...p } : null } }));
  }
  cancelForgot() {
    this.setAuth({ forgot: null });
  }
  private forgotAccount() {
    const email = this.state.auth.forgot?.email.trim().toLowerCase() || '';
    return Object.values(this.state.db.accounts).find((a) => a.identity.email.toLowerCase() === email);
  }
  forgotSend() {
    const f = this.state.auth.forgot;
    if (!f) return;
    if (!EMAIL_RE.test(f.email.trim())) return this.setForgot({ err: 'أدخل بريداً إلكترونياً صحيحاً' });
    // Same answer whether or not the email is registered, so accounts cannot be discovered.
    this.setForgot({ step: 2, otp: '' });
    this.toast(sim('أرسلنا رمز التحقق إلى الجوال المسجّل'));
  }
  forgotVerify() {
    const f = this.state.auth.forgot;
    if (!f) return;
    if (!this.forgotAccount() || f.otp !== '1234') return this.setForgot({ err: 'رمز التحقق غير صحيح' });
    this.setForgot({ step: 3 });
  }
  forgotSave() {
    const f = this.state.auth.forgot;
    const acct = this.forgotAccount();
    if (!f || !acct) return;
    if (!passwordRules(f.n1, f.n2, acct.password).every((r) => r.ok)) return this.setForgot({ err: 'تأكد من استيفاء جميع الشروط' });
    this.patchAccount(acct.nationalId, (x) => ({ ...x, password: f.n1 }));
    this.setAuth({
      forgot: null,
      tab: 'email',
      email: f.email.trim(),
      password: '',
      notice: { tone: 'ok', title: 'تم تعيين كلمة المرور الجديدة', text: 'سجّل الدخول الآن بالبريد الإلكتروني وكلمة المرور الجديدة.' },
    });
  }

  /** «تعيين / تغيير كلمة المرور» from «حسابي» or the account-status page. */
  openPassword() {
    this.set({ view: 'password', acctMenu: false, pw: { step: 1, otp: '', n0: '', n1: '', n2: '', show: false, err: '' } });
    this.navigate('order');
    this.scrollTop();
  }
  dismissPwHint() {
    this.set({ pwHintOff: true });
  }

  private signIn(acct: Account, method: AuthMethod, msg: string) {
    const entry = this.state.auth.entry;
    this.set({ session: { nationalId: acct.nationalId, method }, verified: null, nafath: null });
    const status = acct.status === 'approved' ? '' : ' — حسابك ' + (acct.status === 'pending' ? 'قيد المراجعة' : 'مرفوض');
    if (entry === 'order' && canCreateOrder(acct)) {
      // Started from «اقتن»: carry on with the order.
      this.beginExistingFlow(false);
      this.toast(msg);
      this.scrollTop();
      return;
    }
    // Signed in from the navbar (or an order that cannot continue): land on the home page;
    // «حسابي» in the header is ready on the right screen.
    this.set({ view: entry === 'order' ? 'blocked' : this.landingView(acct) });
    if (entry === 'order') {
      this.toast(msg + status);
      this.scrollTop();
      return;
    }
    this.toast(msg + status + '. يمكنك الوصول إلى حسابك من «حسابي».');
    this.navigate('home');
  }

  // ------------------------------------------------------------------ order journey
  private beginExistingFlow(resetCart = false) {
    const a = this.account()!;
    const contact = this.contactOf(a);
    this.set((s) => ({
      view: 'flow',
      flow: { step: 'account', detailsOpen: false },
      errors: {},
      draft: { ...(resetCart ? emptyDraft() : s.draft), purpose: '', recvName: contact.name, recvPhone: contact.phone, recvEmail: contact.email },
    }));
  }

  contactOf(a: Account) {
    return a.type === 'company' && a.company
      ? { name: a.company.repName || a.identity.fullName, phone: a.company.repPhone || a.identity.phone, email: a.company.repEmail || a.identity.email }
      : { name: a.identity.fullName, phone: a.identity.phone, email: a.identity.email };
  }

  newOrder() {
    const a = this.account();
    const reason = createOrderBlockReason(a, this.state.db.orders);
    if (reason) return this.toast(reason);
    this.set({ draft: emptyDraft() });
    this.beginExistingFlow(true);
    this.scrollTop();
  }

  setDraft(p: Partial<OrderDraft>) {
    this.set((s) => {
      const e = { ...s.errors };
      Object.keys(p).forEach((k) => (e[k] = ''));
      return { draft: { ...s.draft, ...p }, errors: e };
    });
  }

  setCompany(p: Partial<CompanyDraft>) {
    this.set((s) => {
      const e = { ...s.errors };
      Object.keys(p).forEach((k) => (e['co.' + k] = ''));
      const company = { ...s.reg.company, ...p };
      if ('region' in p) company.city = '';
      return { reg: { ...s.reg, company }, errors: e };
    });
  }

  setAccountType(type: AccountType) {
    this.set((s) => ({ reg: { ...s.reg, type }, errors: { ...s.errors, type: '' } }));
  }

  /** Simulated commercial-register lookup by company name. */
  checkCompany() {
    const q = this.state.reg.crQuery.trim();
    if (q.length < 3) return this.set((s) => ({ errors: { ...s.errors, crQuery: 'أدخل اسم المؤسسة (٣ أحرف على الأقل)' } }));
    this.set((s) => ({ reg: { ...s.reg, crStatus: 'loading' }, errors: { ...s.errors, crQuery: '' } }));
    this.later('cr', 900, () => {
      const hit = COMPANIES.find((c: { name: string }) => c.name.includes(q) || q.includes(c.name));
      this.set((s) => ({
        reg: {
          ...s.reg,
          crStatus: hit ? 'found' : 'notfound',
          company: hit
            ? { ...s.reg.company, name: hit.name, cr: hit.cr, region: hit.region, city: hit.city }
            : { ...s.reg.company, name: s.reg.company.name || q, cr: '', region: '', city: '' },
        },
      }));
    });
  }

  resetCompanyLookup() {
    this.set((s) => ({ reg: { ...s.reg, crStatus: '', company: { ...s.reg.company, name: '', cr: '', region: '', city: '' } } }));
  }

  toggleDetails() {
    this.set((s) => ({ flow: { ...s.flow, detailsOpen: !s.flow.detailsOpen } }));
  }

  private validateRegistration(errors: Errors) {
    const { type, company: c, crStatus } = this.state.reg;
    if (!type) errors.type = 'اختر نوع الحساب: فرد أو جهة';
    if (type !== 'company') return;
    if (!c.entityType) errors['co.entityType'] = 'اختر نوع الجهة';
    if (crStatus !== 'found' && crStatus !== 'notfound') errors.crQuery = 'ابحث عن المؤسسة بالاسم أولاً';
    if (crStatus === 'notfound') {
      if (!c.name.trim()) errors['co.name'] = REQUIRED;
      if (!/^\d{10}$/.test(c.cr.trim())) errors['co.cr'] = 'أدخل سجلاً تجارياً من 10 أرقام';
      if (!c.region) errors['co.region'] = 'اختر المنطقة';
      if (!c.city) errors['co.city'] = 'اختر المدينة';
    }
    if (crStatus === 'found' || crStatus === 'notfound') {
      if (!c.repIdType) errors['co.repIdType'] = 'اختر نوع الهوية';
      if (!NID_RE.test(c.repId.trim())) errors['co.repId'] = 'أدخل رقم هوية / إقامة من 10 أرقام';
      if (!c.repName.trim()) errors['co.repName'] = 'أدخل اسم الممثل بالكامل';
      if (!PHONE_RE.test(c.repPhone.trim())) errors['co.repPhone'] = 'أدخل رقم جوال صحيحاً يبدأ بـ 05';
      if (!EMAIL_RE.test(c.repEmail.trim())) errors['co.repEmail'] = 'أدخل بريداً إلكترونياً صحيحاً';
    }
  }

  private goStep(step: Step) {
    this.set((s) => ({ flow: { ...s.flow, step }, errors: {} }));
    this.scrollTop();
  }

  stepTo(step: Step) {
    const order: Step[] = ['account', 'products', 'review'];
    if (order.indexOf(step) < order.indexOf(this.state.flow.step)) this.goStep(step);
  }

  nextFromAccount() {
    const errors: Errors = {};
    // Only companies state an order purpose; individuals do not have this option.
    const isCompany = (this.account()?.type ?? this.state.reg.type) === 'company';
    if (isCompany && !this.state.draft.purpose) errors.purpose = 'اختر غرض الطلب';
    if (!isCompany && this.state.draft.purpose) this.set((st) => ({ draft: { ...st.draft, purpose: '' } }));
    if (this.isNewFlow()) this.validateRegistration(errors);
    if (Object.values(errors).some(Boolean)) return this.set({ errors });
    this.goStep('products');
  }

  nextFromProducts() {
    const c = this.state.draft.cart;
    if (!PRODUCTS.some((p: { id: string }) => (c[p.id] || 0) > 0)) return this.set({ errors: { cart: 'أضف منتجاً واحداً على الأقل' } });
    const bottles = PRODUCTS.reduce((a: number, p: { id: string; bottles: number }) => a + (c[p.id] || 0) * p.bottles, 0);
    if (bottles > MAX_BOTTLES) return this.set({ errors: { cart: 'تجاوزت الحد الأقصى ١٠٬٠٠٠ عبوة للطلب الواحد' } });
    this.goStep('review');
  }

  back() {
    const step = this.state.flow.step;
    if (step === 'review') return this.goStep('products');
    if (step === 'products') return this.goStep('account');
    if (this.account()) return this.openProfile();
    this.set({ view: 'auth', auth: { ...this.state.auth, notice: null } });
    this.scrollTop();
  }

  nonProfit(s = this.state): boolean {
    const a = this.account(s);
    const type = a ? a.type : s.reg.type;
    const et = a ? a.company?.entityType : s.reg.company.entityType;
    return type === 'company' && et === 'غير ربحي';
  }

  totals(s = this.state) {
    const lines = PRODUCTS.filter((p: { id: string }) => (s.draft.cart[p.id] || 0) > 0).map((p: { id: string; price: number }) => ({
      qty: s.draft.cart[p.id],
      price: p.price,
    }));
    return computeTotals(lines, { delivery: s.draft.delivery, nonProfit: this.nonProfit(s) });
  }

  submitOrder() {
    const s = this.state;
    const d = s.draft;
    const errors: Errors = {};
    const pick = d.delivery === 'pickup';
    if (!d.region) errors.region = REQUIRED;
    if (!d.city) errors.city = REQUIRED;
    if (pick && !d.warehouse) errors.warehouse = REQUIRED;
    if (!pick && !d.nationalAddress.trim()) errors.nationalAddress = REQUIRED;
    if (!d.recvName.trim()) errors.recvName = 'أدخل اسم المستلم بالكامل';
    if (!PHONE_RE.test(d.recvPhone.trim())) errors.recvPhone = 'أدخل رقم جوال صحيحاً يبدأ بـ 05';
    if (!EMAIL_RE.test(d.recvEmail.trim())) errors.recvEmail = 'أدخل بريداً إلكترونياً صحيحاً';
    if (d.notes.length > 500) errors.notes = 'الملاحظات يجب ألا تتجاوز ٥٠٠ حرف';
    if (Object.values(errors).some(Boolean)) return this.set({ errors });

    // A new user's registration is saved together with the first order.
    let acct = this.account();
    if (!acct) {
      const identity = s.verified!;
      const { type, company: c, crStatus } = s.reg;
      acct = {
        nationalId: identity.nationalId,
        status: 'pending',
        type: type as AccountType,
        identity,
        entry: 'order',
        submittedAt: arDate(),
        ...(type === 'company'
          ? { company: { ...c, repIdType: c.repIdType as Company['repIdType'], registryMatch: crStatus === 'found' } }
          : {}),
      };
    }
    const now = new Date();
    const ymd = String(now.getFullYear()) + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
    const seq = String(s.db.seq).padStart(4, '0');
    const t = this.totals();
    const contact = this.contactOf(acct);
    const order: Order = {
      id: 'ZM-' + ymd + '-' + seq,
      nationalId: acct.nationalId,
      date: arDate(now),
      status: 'review',
      lines: PRODUCTS.filter((p: { id: string }) => (d.cart[p.id] || 0) > 0).map((p: { id: string; t: string; price: number; bottles: number; img: string }) => ({
        title: p.t,
        qty: d.cart[p.id],
        price: p.price,
        bottles: p.bottles,
        img: p.img,
      })),
      ...t,
      purpose: acct.type === 'company' ? d.purpose : '',
      kindLabel: acct.type === 'company' && acct.company ? acct.company.name : 'أفراد',
      entityType: acct.company?.entityType || '',
      delivery: {
        mode: d.delivery,
        region: d.region,
        city: d.city,
        warehouse: pick ? d.warehouse : '',
        nationalAddress: pick ? '' : d.nationalAddress,
        mapAddress: d.mapAddress,
        lat: parseFloat(d.lat) || null,
        lng: parseFloat(d.lng) || null,
      },
      receiver: { name: d.recvName.trim(), phone: d.recvPhone.trim(), email: d.recvEmail.trim() },
      contact,
      notes: d.notes,
      deliveryNotes: d.deliveryNotes,
      invoice: 'INV-' + ymd + '-' + seq,
      payment: { method: acct.type === 'company' ? 'transfer' : 'mada', state: 'none' },
    };
    const newAcct = acct;
    this.set((st) => ({
      db: { ...st.db, accounts: { ...st.db.accounts, [newAcct.nationalId]: newAcct }, orders: [order, ...st.db.orders], seq: st.db.seq + 1 },
      session: st.session ?? { nationalId: newAcct.nationalId, method: 'nafath' },
      verified: null,
      view: 'done',
      lastOrderId: order.id,
      openOrderId: order.id,
      draft: emptyDraft(),
      errors: {},
    }));
    this.scrollTop(true);
  }

  /** Flow B: submit a registration without an order. */
  submitRegistration() {
    const errors: Errors = {};
    this.validateRegistration(errors);
    if (Object.values(errors).some(Boolean)) return this.set({ errors });
    const s = this.state;
    const identity = s.verified!;
    const { type, company: c, crStatus } = s.reg;
    const acct: Account = {
      nationalId: identity.nationalId,
      status: 'pending',
      type: type as AccountType,
      identity,
      entry: 'register',
      submittedAt: arDate(),
      ...(type === 'company' ? { company: { ...c, repIdType: c.repIdType as Company['repIdType'], registryMatch: crStatus === 'found' } } : {}),
    };
    this.set((st) => ({
      db: { ...st.db, accounts: { ...st.db.accounts, [acct.nationalId]: acct } },
      session: { nationalId: acct.nationalId, method: 'nafath' },
      verified: null,
      view: 'status',
      errors: {},
    }));
    this.toast('تم إرسال طلب التسجيل للمراجعة. تابع حالته من «حسابي».');
    this.navigate('home');
  }

  // ------------------------------------------------------------------ orders list
  setOrders(p: Partial<PortalState['orders']>) {
    this.set((s) => ({ orders: { ...s.orders, ...p } }));
  }
  openOrder(id: string | null) {
    this.set({ openOrderId: id });
    this.scrollTop();
  }

  // ------------------------------------------------------------------ proof of payment
  openPay(id: string) {
    const o = this.order(id);
    const a = this.account();
    if (!o) return;
    if (o.payment.state === 'verifying') {
      this.set({ view: 'pay', pay: this.payInit(o, 'awaiting') });
      return this.scrollTop();
    }
    if (!isPayable(a, o)) {
      this.toast(a?.status !== 'approved' ? 'يتاح الدفع بعد اعتماد حسابك.' : 'يتاح الدفع بعد قبول الطلب من الجهة المختصة.');
      return;
    }
    this.set({ view: 'pay', pay: this.payInit(o, 'proof') });
    this.scrollTop();
  }

  private payInit(o: Order, screen: PayScreen): PayState {
    const p = o.payment;
    return {
      orderId: o.id,
      screen,
      file: screen === 'awaiting' ? p.proof || '' : '',
      fileSize: screen === 'awaiting' ? p.proofSize || 0 : 0,
      fileType: screen === 'awaiting' ? p.proofType || '' : '',
      preview: screen === 'awaiting' ? proofFiles.get(o.id) || '' : '',
      fileErr: '',
      transferDate: p.transferDate || '',
      sender: p.sender || '',
    };
  }

  setPay(p: Partial<PayState>) {
    this.set((s) => (s.pay ? { pay: { ...s.pay, ...p } } : {}));
  }

  /** Validate and preview a chosen receipt (JPG, PNG or PDF up to 5 MB). */
  pickProof(f: File) {
    const typeOk = PROOF_TYPES.includes(f.type) || /\.(pdf|png|jpe?g)$/i.test(f.name);
    if (!typeOk) return this.setPay({ fileErr: 'نوع الملف غير مدعوم. ارفع صورة JPG أو PNG أو ملف PDF.' });
    if (f.size > PROOF_MAX) return this.setPay({ fileErr: 'حجم الملف أكبر من ٥ ميجابايت.' });
    const r = new FileReader();
    r.onload = () => this.setPay({ file: f.name, fileSize: f.size, fileType: f.type || (/\.pdf$/i.test(f.name) ? 'application/pdf' : 'image/*'), preview: String(r.result || ''), fileErr: '' });
    r.onerror = () => this.setPay({ fileErr: 'تعذّر قراءة الملف. حاول مرة أخرى.' });
    r.readAsDataURL(f);
  }

  clearProof() {
    this.setPay({ file: '', fileSize: 0, fileType: '', preview: '', fileErr: '' });
  }

  sendProof() {
    const P = this.state.pay;
    if (!P) return;
    if (!P.file) return this.setPay({ fileErr: 'ارفع إيصال الدفع قبل الإرسال.' });
    const o = this.order(P.orderId);
    if (!o || !isPayable(this.account(), o)) return this.toast('لا يمكن إرسال إيصال لهذا الطلب الآن.');
    if (P.preview) proofFiles.set(P.orderId, P.preview);
    const d = new Date();
    const at = arDate(d) + ' — ' + d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    this.patchOrder(P.orderId, (x) => ({
      ...x,
      payment: {
        ...x.payment,
        method: 'transfer',
        state: 'verifying',
        proof: P.file,
        proofSize: P.fileSize,
        proofType: P.fileType,
        proofAt: at,
        transferDate: P.transferDate,
        sender: P.sender.trim(),
      },
    }));
    this.setPay({ screen: 'awaiting' });
    this.scrollTop();
  }

  /** The authority verified the receipt: preparation starts and the receive date is set. */
  private confirmPaid(id: string) {
    const d = new Date();
    const paidAt = arDate(d) + ' — ' + d.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    const receive = new Date(d.getTime() + 3 * 864e5);
    if (receive.getDay() === 5) receive.setDate(receive.getDate() + 2);
    if (receive.getDay() === 6) receive.setDate(receive.getDate() + 1);
    this.patchOrder(id, (x) => ({
      ...x,
      status: 'preparing',
      payment: { ...x.payment, state: 'paid', paidAt },
      receiveDate: receive.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + 'م',
    }));
    if (this.state.pay?.orderId === id) this.set({ view: 'orders', openOrderId: id, pay: null });
  }

  leavePay() {
    this.set((s) => ({ view: 'orders', openOrderId: s.pay?.orderId ?? s.openOrderId }));
    this.scrollTop();
  }

  // ------------------------------------------------------------------ profile
  startEdit() {
    const a = this.account();
    if (!a) return;
    const c = { ...(a.company ?? {}), ...(a.changeRequest?.changes ?? {}) } as Partial<Company>;
    this.set({
      view: 'editProfile',
      edit: {
        entityType: c.entityType || '',
        name: c.name || '',
        cr: c.cr || '',
        region: c.region || '',
        city: c.city || '',
        repIdType: c.repIdType || '',
        repId: c.repId || '',
        repName: c.repName || '',
        repPhone: c.repPhone || '',
        repEmail: c.repEmail || '',
        errors: {},
      },
    });
    this.scrollTop();
  }

  setEdit(p: Partial<NonNullable<PortalState['edit']>>) {
    this.set((s) => {
      if (!s.edit) return {};
      const next = { ...s.edit, ...p, errors: { ...s.edit.errors, form: '', ...Object.fromEntries(Object.keys(p).map((k) => [k, ''])) } };
      if ('region' in p && p.region !== s.edit.region) next.city = '';
      return { edit: next };
    });
  }

  /** Company and representative changes go to the authority as one request; nothing changes until approved. */
  saveEdit() {
    const a = this.account();
    const e = this.state.edit;
    if (!a || !e || !a.company) return;
    const errors: Errors = {};
    if (!e.entityType) errors.entityType = 'اختر نوع الجهة';
    if (!e.name.trim()) errors.name = REQUIRED;
    if (!/^\d{10}$/.test(e.cr.trim())) errors.cr = 'أدخل سجلاً تجارياً من 10 أرقام';
    if (!e.region) errors.region = 'اختر المنطقة';
    if (!e.city) errors.city = 'اختر المدينة';
    if (!e.repIdType) errors.repIdType = 'اختر نوع الهوية';
    if (!NID_RE.test(e.repId.trim())) errors.repId = 'أدخل رقم هوية / إقامة من 10 أرقام';
    if (!e.repName.trim()) errors.repName = 'أدخل اسم الممثل بالكامل';
    if (!PHONE_RE.test(e.repPhone.trim())) errors.repPhone = 'أدخل رقم جوال صحيحاً يبدأ بـ 05';
    if (!EMAIL_RE.test(e.repEmail.trim())) errors.repEmail = 'أدخل بريداً إلكترونياً صحيحاً';
    if (Object.keys(errors).length) return this.set({ edit: { ...e, errors } });
    const LABELS: Record<string, string> = {
      entityType: 'نوع الجهة',
      name: 'اسم المؤسسة',
      cr: 'السجل التجاري',
      region: 'المنطقة',
      city: 'المدينة',
      repIdType: 'نوع هوية الممثل',
      repId: 'رقم هوية الممثل',
      repName: 'اسم الممثل',
      repPhone: 'جوال الممثل',
      repEmail: 'بريد الممثل',
    };
    const changes: ChangeRequest['changes'] = {};
    for (const k of Object.keys(LABELS) as Array<keyof ChangeRequest['changes']>) {
      const v = String(e[k as keyof typeof e] ?? '').trim();
      if (v !== String(a.company[k] ?? '')) (changes as Record<string, string>)[k] = v;
    }
    const labels = Object.keys(changes).map((k) => LABELS[k]);
    if (!labels.length) return this.set({ edit: { ...e, errors: { form: 'لم تغيّر أي بيانات. عدّل حقلاً واحداً على الأقل قبل الإرسال.' } } });
    this.patchAccount(a.nationalId, (x) => ({ ...x, changeRequest: { at: arDate(), changes, labels } }));
    this.set({ view: 'profile', edit: null });
    this.toast('تم إرسال طلب تعديل البيانات للمراجعة');
    this.scrollTop();
  }

  cancelChangeRequest() {
    const a = this.account();
    if (!a?.changeRequest) return;
    this.patchAccount(a.nationalId, (x) => ({ ...x, changeRequest: undefined }));
    // Reopen the form on the current (approved) data so a new request can be prepared.
    if (this.state.view === 'editProfile') this.startEdit();
    this.toast('تم إلغاء طلب تعديل البيانات');
  }

  setPassword() {
    const a = this.account();
    if (a) this.patchAccount(a.nationalId, (x) => ({ ...x, password: this.state.pw.n1 }));
  }

  // ------------------------------------------------------------------ demo controls (DEMO_TOOLS only)
  demoAccount(status: 'approved' | 'rejected') {
    const a = this.account();
    if (!a) return;
    this.patchAccount(a.nationalId, (x) => ({
      ...x,
      status,
      ...(status === 'rejected' ? { rejectReason: 'البيانات المقدّمة غير مطابقة لسجلات الجهة. (سبب تجريبي)' } : { rejectReason: undefined }),
    }));
    this.toast(status === 'approved' ? 'تم اعتماد الحساب (محاكاة لقرار الجهة)' : 'تم رفض الحساب (محاكاة لقرار الجهة)');
    // When the decision changes the screen, fold the panel so it does not cover the new page.
    if (status === 'approved' && ['status', 'blocked'].includes(this.state.view)) this.set((s) => ({ view: 'profile', demo: { ...s.demo, panelOpen: false } }));
    if (status === 'rejected' && ['profile', 'flow', 'editProfile', 'pay'].includes(this.state.view)) this.set((s) => ({ view: 'status', demo: { ...s.demo, panelOpen: false } }));
  }

  demoChange(decision: 'approve' | 'reject') {
    const a = this.account();
    if (!a?.changeRequest) return;
    this.patchAccount(a.nationalId, (x) => ({
      ...x,
      ...(decision === 'approve' && x.company ? { company: { ...x.company, ...(x.changeRequest!.changes as Partial<Company>), registryMatch: x.changeRequest!.changes.cr ? false : x.company.registryMatch } } : {}),
      changeRequest: undefined,
    }));
    this.toast(decision === 'approve' ? 'تم اعتماد تعديل البيانات (محاكاة لقرار الجهة)' : 'تم رفض طلب تعديل البيانات (محاكاة لقرار الجهة)');
  }

  demoOrder(id: string, decision: 'accept' | 'reject' | 'confirmTransfer' | 'advance') {
    const o = this.order(id);
    if (!o) return;
    if (decision === 'accept') this.patchOrder(id, (x) => ({ ...x, status: 'accepted' }));
    if (decision === 'reject') this.patchOrder(id, (x) => ({ ...x, status: 'rejected', rejectReason: 'الكميات المطلوبة تتجاوز المخصص للجهة. (سبب تجريبي)' }));
    if (decision === 'confirmTransfer') this.confirmPaid(id);
    if (decision === 'advance') this.patchOrder(id, (x) => ({ ...x, status: x.status === 'preparing' ? 'ready' : 'completed' }));
    this.toast(
      { accept: 'تم قبول الطلب', reject: 'تم رفض الطلب', confirmTransfer: 'تم تأكيد التحويل', advance: 'تم تحديث حالة التجهيز' }[decision] + ' (محاكاة لقرار الجهة)',
    );
  }

  demoReset() {
    Object.values(this.timers).forEach(clearTimeout);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    this.state = initialState();
    this.set({ demo: { panelOpen: true } });
    this.navigate('home');
    this.toast('تمت إعادة ضبط بيانات المعاينة');
  }

  // ------------------------------------------------------------------ helpers for views
  /** Hero title for the «order» page, so it names the screen the user is on. */
  pageMeta(s = this.state): { tag: string; title: string; lead: string; inAccount: boolean } {
    const a = this.account(s);
    const order = { tag: 'اطلب الآن', title: 'اقتن عبوة زمزم', lead: 'تحقّق من هويتك، ثم اختر المنتجات وأكمل طلبك.', inAccount: false };
    const acct = (title: string, lead: string) => ({ tag: 'حسابي', title, lead, inAccount: title !== 'حسابي' });
    switch (this.guardView(s.view)) {
      case 'auth':
        if (s.auth.entry === 'login') return { tag: 'حسابي', title: 'تسجيل الدخول', lead: 'سجّل الدخول عبر نفاذ أو بالبريد الإلكتروني وكلمة المرور.', inAccount: false };
        if (s.auth.entry === 'register') return { tag: 'حساب جديد', title: 'إنشاء حساب جديد', lead: 'سجّل عبر نفاذ، ثم تراجع الجهة المختصة بياناتك وتعتمد حسابك.', inAccount: false };
        return order;
      case 'register':
        return { tag: 'حساب جديد', title: 'إنشاء حساب جديد', lead: 'اختر نوع الحساب وأكمل البيانات المطلوبة، ثم أرسلها للمراجعة.', inAccount: false };
      case 'flow':
      case 'blocked':
        if (!a || a.status === 'approved') return order;
        return { ...order, lead: a.status === 'rejected' ? 'تعذّر اعتماد حسابك، لذلك لا يمكن إنشاء طلبات.' : 'يمكنك الطلب بعد اعتماد حسابك.' };
      case 'done':
        return order;
      case 'status':
        return acct('حسابي', a?.status === 'rejected' ? 'تعذّر اعتماد حسابك.' : 'حسابك قيد المراجعة، وسنُشعرك بالقرار.');
      case 'profile':
        return acct('حسابي', 'بياناتك وطلباتك في مكان واحد.');
      case 'editProfile':
        return acct('تحديث البيانات', 'بيانات الهوية من نفاذ، ويمكنك طلب تعديل بيانات ممثل المؤسسة.');
      case 'password':
        return acct('كلمة المرور', 'عيّن كلمة مرور أو غيّرها بعد التحقق برمز يصل إلى جوالك.');
      case 'orders':
        return acct('طلباتي', 'تابع حالة طلباتك، وأكمل الدفع بعد الموافقة.');
      case 'pay':
        return acct('الدفع', 'أكمل دفع طلبك المعتمد.');
    }
  }

  cities(region: string): string[] {
    return region ? (REGIONS as Record<string, { cities: string[] }>)[region]?.cities ?? [] : [];
  }
  warehouses(region: string): string[] {
    return region ? (REGIONS as Record<string, { wh: string[] }>)[region]?.wh ?? [] : [];
  }
  sar = (n: number) => SAR(n) as string;
}

export const portal = new PortalStore();

export function usePortal(): PortalState {
  return useSyncExternalStore(portal.subscribe, portal.getState);
}
