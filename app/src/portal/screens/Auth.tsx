import type { ReactNode } from 'react';
import { DEMO_TOOLS } from '../../config';
import { DEMO_EMAIL_LOGIN, DEMO_ID_LIST } from '../fixtures';
import { portal, type PortalState } from '../store';
import { Alert, Field, ICON, Icon, IconTile, PrimaryButton, SecondaryButton, TextButton, cardStyle } from '../ui';

const COPY = {
  order: {
    title: 'ابدأ طلبك',
    desc: 'تحقّق من هويتك لنتعرّف عليك. إن كان لديك حساب نكمل ببياناتك المسجّلة، وإن لم يكن نسجّلك أثناء الطلب.',
    side: 'نتعرّف عليك أولاً، ثم تختار المنتجات والكميات وتراجع طلبك قبل إرساله.',
  },
  login: {
    title: 'تسجيل الدخول',
    desc: 'سجّل الدخول عبر نفاذ أو بالبريد الإلكتروني وكلمة المرور.',
    side: 'تابع طلباتك وحالة حسابك، وأنشئ طلبات جديدة بعد اعتماد حسابك.',
  },
  register: {
    title: 'إنشاء حساب جديد',
    desc: 'التسجيل عبر نفاذ فقط. نجلب بيانات هويتك منه، ثم تختار نوع الحساب وتكمل البيانات المطلوبة.',
    side: 'بعد التسجيل تراجع الجهة المختصة بياناتك، وتبدأ الطلبات بعد اعتماد حسابك.',
  },
} as const;

function Tabs({ tab }: { tab: 'nafath' | 'email' }) {
  const items = [
    { id: 'nafath' as const, label: 'نفاذ' },
    { id: 'email' as const, label: 'البريد الإلكتروني' },
  ];
  return (
    <div role="tablist" aria-label="طريقة التحقق" style={{ display: 'flex', gap: 8, padding: 8, borderRadius: 16, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)' }}>
      {items.map((t) => {
        const sel = tab === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={sel}
            onClick={() => portal.setAuth({ tab: t.id, errors: {}, notice: null })}
            style={{
              flex: 1,
              height: 48,
              border: 0,
              borderRadius: 12,
              background: sel ? 'var(--card)' : 'transparent',
              color: sel ? 'var(--ink)' : 'var(--muted)',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontFamily: 'inherit',
            }}
          >
            {t.id === 'nafath' ? <img src="assets/nafath.png" alt="" style={{ width: 24, height: 24, borderRadius: 6 }} /> : <Icon d={ICON.mail} />}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

function DemoChips({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 8, paddingTop: 16, borderTop: '1px dashed var(--line)' }}>
      <span style={{ fontSize: 13, color: 'var(--muted)' }}>هويات المعاينة</span>
      {children}
    </div>
  );
}

function Chip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ height: 32, padding: '0 14px', borderRadius: 36, border: '1px solid var(--line)', background: 'var(--card-2)', color: 'var(--ink-2)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
      className="zp-019"
    >
      {label}
    </button>
  );
}

export function AuthScreen({ s }: { s: PortalState }) {
  const { auth } = s;
  const c = COPY[auth.entry];
  const nafathOnly = auth.entry === 'register';
  const tab = nafathOnly ? 'nafath' : auth.tab;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'stretch', animation: 'zzfade .3s ease both' }}>
      <div style={{ ...cardStyle, flex: '1 1 420px', minWidth: 0, padding: 'clamp(24px,3vw,40px)', gap: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <IconTile d={ICON.shield} size={56} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, lineHeight: '32px', color: 'var(--ink)' }}>{c.title}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: '24px', color: 'var(--ink-2)' }}>{c.desc}</p>
          </div>
        </div>

        {nafathOnly ? (
          <Alert tone="info" title="قبل أن تبدأ:">
            يُرسل حسابك للمراجعة بعد التسجيل، ولا يمكنك إنشاء طلبات أو الوصول إلى طلباتي حتى يُعتمد.
          </Alert>
        ) : (
          <Tabs tab={tab} />
        )}

        {auth.notice ? (
          <Alert tone={auth.notice.tone === 'warn' ? 'warn' : auth.notice.tone} title={auth.notice.title}>
            {auth.notice.text}
          </Alert>
        ) : null}

        {tab === 'nafath' ? (
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              portal.startNafath();
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <Field
              id="auth-nid"
              label="رقم الهوية الوطنية / الإقامة"
              value={auth.nid}
              onChange={(v) => portal.setAuth({ nid: v.replace(/\D/g, '').slice(0, 10), errors: {} })}
              error={auth.errors.nid}
              placeholder="10 أرقام"
              inputMode="numeric"
              maxLength={10}
              ltr
              autoComplete="off"
              hint="نرسل طلب تحقق إلى تطبيق نفاذ على جوالك."
            />
            <PrimaryButton type="submit" full style={{ height: 56 }}>
              <img src="assets/nafath.png" alt="" style={{ width: 24, height: 24, borderRadius: 6 }} />
              التحقق عبر نفاذ
            </PrimaryButton>
          </form>
        ) : (
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              portal.emailLogin();
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {auth.entry === 'order' ? (
              <Alert tone="info">البريد الإلكتروني للحسابات المسجّلة التي عيّنت كلمة مرور. إن لم يكن لديك حساب، تحقّق عبر نفاذ لنسجّلك أثناء الطلب.</Alert>
            ) : null}
            <Field id="auth-email" label="البريد الإلكتروني" value={auth.email} onChange={(v) => portal.setAuth({ email: v, errors: {}, notice: null })} error={auth.errors.email} placeholder="email@example.com" type="email" inputMode="email" ltr autoComplete="username" />
            <Field id="auth-pass" label="كلمة المرور" value={auth.password} onChange={(v) => portal.setAuth({ password: v, errors: {}, notice: null })} error={auth.errors.password} type="password" ltr autoComplete="current-password" />
            <PrimaryButton type="submit" full busy={auth.busy} style={{ height: 56 }}>
              {auth.busy ? 'جارٍ التحقق…' : auth.entry === 'order' ? 'متابعة الطلب' : 'تسجيل الدخول'}
            </PrimaryButton>
          </form>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 8, paddingTop: 24, borderTop: '1px solid var(--line)', fontSize: 15, color: 'var(--ink-2)' }}>
          {auth.entry === 'register' ? (
            <>
              <span>لديك حساب؟</span>
              <TextButton onClick={() => portal.backToLogin()}>تسجيل الدخول</TextButton>
            </>
          ) : auth.entry === 'login' ? (
            <>
              <span>ليس لديك حساب؟</span>
              <TextButton onClick={() => portal.openRegister()}>إنشاء حساب جديد</TextButton>
            </>
          ) : (
            <span style={{ fontSize: 14, color: 'var(--muted)' }}>لا تحتاج إلى التسجيل مسبقاً. نكمل بياناتك خلال الطلب.</span>
          )}
        </div>

        {DEMO_TOOLS ? (
          tab === 'nafath' ? (
            <DemoChips>
              {DEMO_ID_LIST.map((d) => (
                <Chip key={d.id} label={d.label} onClick={() => portal.setAuth({ nid: d.id, errors: {}, notice: null })} />
              ))}
            </DemoChips>
          ) : (
            <DemoChips>
              <Chip label="حساب معتمد بكلمة مرور" onClick={() => portal.setAuth({ email: DEMO_EMAIL_LOGIN.email, password: DEMO_EMAIL_LOGIN.password, errors: {}, notice: null })} />
              <Chip label="كلمة مرور خاطئة" onClick={() => portal.setAuth({ email: DEMO_EMAIL_LOGIN.email, password: 'wrong-pass', errors: {}, notice: null })} />
            </DemoChips>
          )
        ) : null}
      </div>

      <div
        style={{
          flex: '1 1 380px',
          minWidth: 0,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 24,
          background: 'var(--card-2)',
          boxShadow: 'var(--card-shadow)',
          minHeight: 320,
          padding: 'clamp(22px,3vw,40px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 14,
        }}
      >
        <span role="img" aria-label="سقيا زمزم" style={{ display: 'block', width: 170, height: 42, background: "url('assets/logo-sm-gold.svg') right center/contain no-repeat" }} />
        <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(28px,3vw,38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--ink)', maxWidth: '62%' }}>ماء زمزم... أقرب إليك</h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: 'var(--ink-2)', maxWidth: '58%' }}>{c.side}</p>
        {auth.entry === 'register' ? (
          <ol style={{ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, maxWidth: '58%', position: 'relative', zIndex: 1 }}>
            {['التحقق عبر نفاذ', 'نوع الحساب والبيانات المطلوبة', 'مراجعة الجهة المختصة واعتماد الحساب'].map((t, i) => (
              <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--card)', boxShadow: 'inset 0 0 0 1px var(--line)', color: 'var(--gold-2)', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {'١٢٣'[i]}
                </span>
                {t}
              </li>
            ))}
          </ol>
        ) : null}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -10,
            bottom: -30,
            width: '38%',
            height: '88%',
            background: "url('assets/bottle.png') center bottom/contain no-repeat",
            transform: 'rotate(-16deg)',
            filter: 'drop-shadow(-14px 8px 18px rgba(0,0,0,.25))',
          }}
        />
      </div>
    </div>
  );
}

/** Nafath approval dialog: waiting (code + countdown) or failed (rejected in the app / timed out). */
export function NafathDialog({ n }: { n: NonNullable<PortalState['nafath']> }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 130, background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="التحقق من نفاذ"
        style={{
          width: 440,
          maxWidth: '100%',
          background: 'var(--card)',
          borderRadius: 24,
          boxShadow: 'var(--card-shadow),0 30px 60px rgba(0,0,0,.25)',
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 18,
          textAlign: 'center',
          animation: 'zzfade .25s ease both',
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '28px', color: 'var(--ink)' }}>{n.failed ? 'تعذّر التحقق عبر نفاذ' : 'التحقق من نفاذ'}</h2>
        {n.failed ? (
          <>
            <span style={{ width: 64, height: 64, borderRadius: '50%', background: '#FFEBEC', color: '#B42318', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={ICON.x} size={28} sw={2} />
            </span>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)' }}>
              رُفض طلب التحقق في تطبيق نفاذ أو انتهت مهلته، ولم تُجلب أي بيانات. تأكد من اختيار الرقم الصحيح في التطبيق ثم أعد المحاولة.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <PrimaryButton onClick={() => portal.startNafath()}>إعادة المحاولة</PrimaryButton>
              <SecondaryButton onClick={() => portal.cancelNafath()}>إغلاق</SecondaryButton>
            </div>
          </>
        ) : (
          <>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)' }}>افتح تطبيق نفاذ على جهازك واختر الرقم التالي للتحقق من هويتك.</p>
            <div
              dir="ltr"
              style={{ width: '100%', height: 120, borderRadius: 14, background: 'linear-gradient(135deg,#0C0D0E 0%,#3A2C10 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 56, fontWeight: 700, letterSpacing: '.2em' }}
            >
              {n.code}
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink-2)' }}>
                <span style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid var(--gold-soft)', borderTopColor: 'var(--gold-2)', animation: 'zzspin .8s linear infinite' }} />
                بانتظار الموافقة…
              </span>
              <span style={{ color: 'var(--gold-2)' }}>
                الوقت المتبقي{' '}
                <strong dir="ltr" style={{ color: 'var(--ink)' }}>
                  0:{String(n.left).padStart(2, '0')}
                </strong>
              </span>
            </div>
            <div style={{ width: '100%', height: 4, borderRadius: 2, background: 'var(--line)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: (n.left / 60) * 100 + '%', background: '#996C2E', transition: 'width 1s linear' }} />
            </div>
            {DEMO_TOOLS ? <span style={{ fontSize: 12, color: 'var(--muted)' }}>نموذج أولي: الموافقة في نفاذ محاكاة وتتم تلقائياً.</span> : null}
            <SecondaryButton onClick={() => portal.cancelNafath()}>إلغاء</SecondaryButton>
          </>
        )}
      </div>
    </div>
  );
}
