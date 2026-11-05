/**
 * DGA platform-level elements (Platforms Code "UI shell"):
 * Second Nav Header (date, time, location + accessibility tools), accessibility tools,
 * page feedback bar with the last-modified date, and the cookies banner.
 */
import { useEffect, useState, type ReactNode } from 'react';
import { Icon } from '../../portal/ui';
import { DsButton, wrap } from '../ds';

/* ---------- Accessibility tools (text size + colour contrast), remembered per browser ---------- */
const ZOOMS = [0.9, 1, 1.1, 1.2, 1.3];
const store = {
  get(k: string) {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set(k: string, v: string) {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* private mode */
    }
  },
};
function applyA11y() {
  const z = Number(store.get('zz-zoom') || '1');
  document.documentElement.style.setProperty('--zz-zoom', String(ZOOMS.includes(z) ? z : 1));
  document.documentElement.toggleAttribute('data-contrast', store.get('zz-contrast') === '1');
}
if (typeof document !== 'undefined') applyA11y();

export function useA11y() {
  const [, force] = useState(0);
  const zoom = Number(store.get('zz-zoom') || '1');
  const contrast = store.get('zz-contrast') === '1';
  const setZoom = (dir: number) => {
    const i = Math.max(0, Math.min(ZOOMS.length - 1, ZOOMS.indexOf(ZOOMS.includes(zoom) ? zoom : 1) + dir));
    store.set('zz-zoom', String(ZOOMS[i]));
    applyA11y();
    force((n) => n + 1);
  };
  const toggleContrast = () => {
    store.set('zz-contrast', contrast ? '0' : '1');
    applyA11y();
    force((n) => n + 1);
  };
  return { zoom, contrast, zoomIn: () => setZoom(1), zoomOut: () => setZoom(-1), toggleContrast, canIn: zoom < ZOOMS[ZOOMS.length - 1], canOut: zoom > ZOOMS[0] };
}

export const I_EYE = 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z';
export const I_ZOOM_IN = 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5M11 8v6M8 11h6';
export const I_MOON = 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z';
export const I_SUN = 'M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4zM12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4';
export const I_ZOOM_OUT = 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5M8 11h6';

/** The three accessibility tools as 32px icon buttons (`onColor` for the dark footer). */
export function A11yTools({ onColor, onTheme, isDark }: { onColor?: boolean; onTheme?: () => void; isDark?: boolean }) {
  const a = useA11y();
  const btn = (d: string, label: string, onClick: () => void, opts: { pressed?: boolean; disabled?: boolean } = {}) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      aria-pressed={opts.pressed}
      disabled={opts.disabled}
      className={onColor ? 'dga-tool-on' : 'dga-tool'}
      style={{
        width: 32,
        height: 32,
        padding: 0,
        borderRadius: 'var(--r-sm)',
        border: onColor ? '1px solid rgba(255,255,255,.3)' : 0,
        background: opts.pressed ? (onColor ? 'rgba(255,255,255,.2)' : 'var(--gold-soft)') : 'transparent',
        boxShadow: opts.pressed && !onColor ? 'inset 0 0 0 1px var(--gold)' : undefined,
        color: onColor ? '#FFFFFF' : 'var(--ink)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: opts.disabled ? 'not-allowed' : 'pointer',
        opacity: opts.disabled ? 0.45 : 1,
      }}
    >
      <Icon d={d} size={20} />
    </button>
  );
  return (
    <div role="group" aria-label="أدوات الإتاحة والوصول" style={{ display: 'flex', alignItems: 'center', gap: onColor ? 8 : 6 }}>
      {btn(I_EYE, 'تباين الألوان', a.toggleContrast, { pressed: a.contrast })}
      {btn(I_ZOOM_IN, 'تكبير النص', a.zoomIn, { disabled: !a.canIn })}
      {btn(I_ZOOM_OUT, 'تصغير النص', a.zoomOut, { disabled: !a.canOut })}
      {onTheme ? btn(isDark ? I_SUN : I_MOON, isDark ? 'الوضع الفاتح' : 'الوضع الداكن', onTheme, { pressed: !!isDark }) : null}
    </div>
  );
}

/* ---------- Second Nav Header ---------- */
const MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
function riyadhNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Riyadh', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: false })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value]),
  );
  const h = Number(parts.hour) % 24;
  const time = `${h % 12 || 12}:${parts.minute} ${h < 12 ? 'صباحاً' : 'مساءً'}`;
  return { date: `${Number(parts.day)}-${MONTHS[Number(parts.month) - 1]}-${parts.year}`, time };
}
const I_CAL = 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4';
const I_CLOCK = 'M12 7v5l3 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0';
const I_PIN = 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z';

function SubItem({ d, children }: { d: string; children: ReactNode }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)', whiteSpace: 'nowrap' }}>
      <Icon d={d} size={20} />
      {children}
    </span>
  );
}

export function SecondNavHeader({ onTheme, isDark }: { onTheme?: () => void; isDark?: boolean }) {
  const [now, setNow] = useState(riyadhNow);
  useEffect(() => {
    const t = setInterval(() => setNow(riyadhNow()), 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background: 'var(--card-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ ...wrap, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <SubItem d={I_CAL}>
            <time>{now.date}</time>
          </SubItem>
          <SubItem d={I_CLOCK}>{now.time}</SubItem>
          <SubItem d={I_PIN}>مكة المكرمة</SubItem>
        </div>
        <A11yTools onTheme={onTheme} isDark={isDark} />
      </div>
    </div>
  );
}

/* ---------- Page feedback + last modified ---------- */
declare const __BUILD_DATE__: string;
function lastModified() {
  const d = new Date(typeof __BUILD_DATE__ === 'string' ? __BUILD_DATE__ : Date.now());
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Riyadh', year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: '2-digit', hour12: false })
      .formatToParts(d)
      .map((x) => [x.type, x.value]),
  );
  const h = Number(p.hour) % 24;
  return `${p.day}/${p.month}/${p.year} - ${h % 12 || 12}:${p.minute} ${h < 12 ? 'ص' : 'م'} بتوقيت السعودية`;
}

export function PageFeedback({ page }: { page: string }) {
  const [vote, setVote] = useState<string | null>(null);
  useEffect(() => setVote(null), [page]);
  return (
    <>
      <div className="zz-zoom" style={{ ...wrap, paddingTop: 16, paddingBottom: 16 }}>
        <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>تاريخ آخر تعديل: {lastModified()}</span>
      </div>
      <section aria-label="تقييم الصفحة" className="zz-zoom" style={{ background: 'var(--card)', borderTop: '2px solid var(--gold)' }}>
        <div style={{ ...wrap, minHeight: 88, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, paddingTop: 24, paddingBottom: 24 }}>
          {vote ? (
            <span role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>
              <Icon d="M5 12.5l4.5 4.5L19 7.5" size={24} style={{ color: 'var(--gold)' }} />
              شكراً لك، تم استلام تقييمك.
            </span>
          ) : (
            <>
              <span style={{ fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>هل كانت هذه الصفحة مفيدة؟</span>
              <div style={{ display: 'flex', gap: 16 }}>
                <DsButton primary onClick={() => setVote('yes')}>
                  نعم
                </DsButton>
                <DsButton primary onClick={() => setVote('no')}>
                  لا
                </DsButton>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------- Cookies banner (DS "Cookies Banner": notice → manage → confirmation) ---------- */
const COOKIE_KEY = 'zz-cookies';
const I_COOKIE = 'M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-4-4 1 1 0 0 0-1-1zM8.5 11h.01M15 15.5h.01M10 16h.01';

function Toggle({ on, disabled, onChange, label }: { on: boolean; disabled?: boolean; onChange?: () => void; label: string }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, lineHeight: '20px', fontWeight: 500, color: disabled ? 'var(--muted)' : 'var(--ink)', cursor: disabled ? 'default' : 'pointer' }}>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        disabled={disabled}
        onClick={onChange}
        style={{ width: 40, height: 24, padding: 2, border: 0, borderRadius: 9999, background: disabled ? 'var(--line)' : on ? 'var(--gold)' : 'var(--field-bd)', display: 'flex', justifyContent: on ? 'flex-start' : 'flex-end', cursor: disabled ? 'default' : 'pointer' }}
      >
        <span style={{ width: 20, height: 20, borderRadius: 9999, background: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,.2)' }} />
      </button>
      {label}
    </label>
  );
}

export function CookieBanner({ onPolicy }: { onPolicy?: () => void }) {
  const [state, setState] = useState<'hidden' | 'notice' | 'manage' | 'done'>(() => (store.get(COOKIE_KEY) ? 'hidden' : 'notice'));
  const [prefs, setPrefs] = useState({ perf: true, func: true, target: true });
  if (state === 'hidden') return null;
  const save = (v: string) => {
    store.set(COOKIE_KEY, v);
    setState('done');
    setTimeout(() => setState((s) => (s === 'done' ? 'hidden' : s)), 6000);
  };
  const close = () => {
    if (!store.get(COOKIE_KEY)) store.set(COOKIE_KEY, 'dismissed');
    setState('hidden');
  };
  const title = state === 'manage' ? 'إدارة ملفات تعريف الارتباط' : 'ملفات تعريف الارتباط';
  return (
    <div role="dialog" aria-label={title} style={{ position: 'fixed', insetInline: 0, bottom: 0, zIndex: 140, padding: 16, pointerEvents: 'none' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          background: 'var(--card)',
          color: 'var(--ink)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--r-lg)',
          boxShadow: 'var(--shadow-lg)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          pointerEvents: 'auto',
          animation: 'zzfade .2s ease both',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 40, height: 40, borderRadius: 9999, background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon d={I_COOKIE} size={20} />
          </span>
          <span style={{ flex: 1, fontSize: 18, lineHeight: '28px', fontWeight: 700 }}>{title}</span>
          <button type="button" onClick={close} aria-label="إغلاق" className="dga-tool" style={{ width: 32, height: 32, padding: 0, border: 0, borderRadius: 'var(--r-sm)', background: 'transparent', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon d="M7 7l10 10M17 7L7 17" size={20} />
          </button>
        </div>
        {state === 'notice' ? (
          <>
            <p style={{ margin: 0, fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>
              يستخدم هذا الموقع ملفات تعريف الارتباط الخاصة للتأكد من سهولة الاستخدام وضمان تحسين تجربتك أثناء التصفح. من خلال الاستمرار في تصفح هذا الموقع، فإنك تقر بقبول استخدام ملفات تعريف الارتباط.{' '}
              <button type="button" onClick={onPolicy} className="dga-btn-text" style={{ padding: 0, border: 0, background: 'none', color: 'var(--gold-2)', textDecoration: 'underline', font: 'inherit', cursor: 'pointer' }}>
                سياسة الخصوصية
              </button>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <DsButton primary onClick={() => save('all')}>
                قبول
              </DsButton>
              <DsButton onClick={() => save('necessary')}>رفض</DsButton>
              <button type="button" onClick={() => setState('manage')} className="dga-btn dga-btn-text" style={{ height: 40, padding: '0 16px', border: 0, background: 'transparent', color: 'var(--ink)', fontSize: 16, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>
                إدارة ملفات تعريف الارتباط
              </button>
            </div>
          </>
        ) : null}
        {state === 'manage' ? (
          <>
            <p style={{ margin: 0, fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>
              عند زيارة أي موقع على الويب، قد يخزّن هذا الأخير المعلومات على المستعرض أو يستردها على شكل ملفات تعريف ارتباط. يمكنك اختيار عدم السماح ببعض أنواع ملفات تعريف الارتباط، مع العلم أن حظر بعضها قد يؤثر في تجربتك على الموقع والخدمات التي يمكننا تقديمها.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Toggle on disabled label="ملفات تعريف الارتباط الضرورية للغاية (نشطة دائماً)" />
              <Toggle on={prefs.perf} onChange={() => setPrefs((p) => ({ ...p, perf: !p.perf }))} label="ملفات تعريف الارتباط الخاصة بالأداء" />
              <Toggle on={prefs.func} onChange={() => setPrefs((p) => ({ ...p, func: !p.func }))} label="ملفات تعريف الارتباط الوظيفية" />
              <Toggle on={prefs.target} onChange={() => setPrefs((p) => ({ ...p, target: !p.target }))} label="ملفات تعريف الارتباط المستهدفة" />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <DsButton primary onClick={() => save(JSON.stringify(prefs))}>
                تأكيد خياراتي
              </DsButton>
              <DsButton onClick={() => save('necessary')}>رفض الكل</DsButton>
            </div>
          </>
        ) : null}
        {state === 'done' ? (
          <>
            <p style={{ margin: 0, fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>شكراً! تم تسجيل استجابتك بنجاح. إذا كنت ترغب في تعديل الإجابة أو تغييرها، يمكنك الرجوع عبر الضغط على زر تراجع.</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                type="button"
                onClick={() => {
                  try {
                    localStorage.removeItem(COOKIE_KEY);
                  } catch {
                    /* ignore */
                  }
                  setState('notice');
                }}
                className="dga-btn dga-btn-text"
                style={{ height: 40, padding: '0 16px', border: 0, background: 'transparent', color: 'var(--ink)', fontSize: 16, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}
              >
                تراجع
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
