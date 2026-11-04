import { useState, type CSSProperties, type ReactNode } from 'react';
import { DEMO_TOOLS } from '../../config';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
/** «عبوة مياه زمزم ٣٣٠ مل» → «٣٣٠ مل». */
const size = (p: Product) => p.t.replace('عبوة مياه زمزم ', '');
const FROM = Math.min(...ITEMS.map((p) => p.price));

const CART = 'M3 4h2.5l2.2 11h10.6l1.7-8H6.2M9 20h.01M18 20h.01';
const BOX = 'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8';
const TRUCK = 'M3 6h11v9H3zM14 9h4l3 3v3h-7M7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z';
const SHIELD = 'M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM9 12l2 2 4-4';

function Svg({ d, size: s = 20, sw = 1.8 }: { d: string; size?: number; sw?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/** Carton quantity stepper. */
function QtyBox({ value, onChange, label, dark, small }: { value: number; onChange: (n: number) => void; label: string; dark?: boolean; small?: boolean }) {
  const h = small ? 36 : 44;
  const btn: CSSProperties = {
    width: h,
    height: h,
    flexShrink: 0,
    borderRadius: 8,
    border: 0,
    background: dark ? 'rgba(255,255,255,.12)' : 'var(--card)',
    boxShadow: dark ? 'inset 0 0 0 1px rgba(255,255,255,.18)' : 'var(--card-shadow)',
    color: dark ? '#fff' : 'var(--ink)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div
      role="group"
      aria-label={label}
      style={{
        width: small ? '100%' : 220,
        maxWidth: '100%',
        boxSizing: 'border-box',
        borderRadius: 10,
        padding: 4,
        background: dark ? 'rgba(255,255,255,.08)' : 'var(--card-2)',
        boxShadow: dark ? 'inset 0 0 0 1px rgba(255,255,255,.2)' : 'inset 0 0 0 1px var(--line)',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <button onClick={() => onChange(Math.min(99, value + 1))} aria-label={'زيادة ' + label} style={btn}>
        <Svg d="M12 5v14M5 12h14" size={16} />
      </button>
      <span style={{ flex: 1, textAlign: 'center', fontSize: small ? 17 : 20, fontWeight: 600, color: dark ? '#fff' : value ? 'var(--ink)' : 'var(--muted)' }}>{AR(value)}</span>
      <button onClick={() => onChange(Math.max(0, value - 1))} aria-label={'إنقاص ' + label} style={btn}>
        <Svg d="M5 12h14" size={16} />
      </button>
    </div>
  );
}

function BuyButton({ onClick, children, light }: { onClick: () => void; children: ReactNode; light?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={light ? undefined : 'zp-011'}
      style={{
        height: 52,
        padding: '0 24px',
        borderRadius: 10,
        border: light ? 0 : '1px solid rgba(255,255,255,.2)',
        background: light ? '#fff' : '#A47C1C',
        color: light ? '#0C0D0E' : '#fff',
        fontSize: 17,
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
      }}
    >
      <Svg d={CART} />
      {children}
    </button>
  );
}

const wrap = (children: ReactNode) => (
  <section id="buy-pack" data-screen-label="اقتن عبوة زمزم" style={{ background: 'var(--bg-alt)', padding: '0 0 64px' }}>
    <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)' }}>{children}</div>
  </section>
);

/** Option 2 — the range: one card per size with its own quantity; one button orders them all. */
function RangeBanner() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [err, setErr] = useState('');
  const cartons = Object.values(cart).reduce((a, n) => a + n, 0);
  const total = ITEMS.reduce((a, p) => a + (cart[p.id] || 0) * p.price, 0);
  const order = () => {
    if (!cartons) return setErr('اختر الكمية من حجم واحد على الأقل.');
    portal.startOrder(Object.fromEntries(Object.entries(cart).filter(([, n]) => n > 0)));
  };
  return wrap(
    <div style={{ borderRadius: 24, background: 'var(--card)', boxShadow: 'var(--card-shadow)', padding: 'clamp(24px,3.5vw,40px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, lineHeight: 1.2, color: 'var(--ink)' }}>اقتن عبوة زمزم</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--muted)' }}>
            اختر الأحجام والكميات، وأكمل طلبك في خطوات قليلة. <span style={{ color: 'var(--gold-2)' }}>على بعد نقرة زر.</span>
          </p>
        </div>
        <span style={{ fontSize: 15, color: 'var(--muted)' }}>الأسعار للكرتون · غير شاملة الضريبة</span>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(140px,40%),1fr))', gap: 16 }}>
        {ITEMS.map((p) => {
          const n = cart[p.id] || 0;
          return (
            <li
              key={p.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                padding: 14,
                borderRadius: 18,
                background: 'var(--card-2)',
                boxShadow: n ? 'inset 0 0 0 1.5px var(--gold-3)' : 'inset 0 0 0 1px var(--line)',
                transition: 'box-shadow .15s',
              }}
            >
              <span style={{ height: 120, borderRadius: 12, background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={p.img} alt="" style={{ maxWidth: '80%', maxHeight: '90%', objectFit: 'contain' }} />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <strong style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{size(p)}</strong>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{p.pack}</span>
              </span>
              <strong style={{ fontSize: 17, fontWeight: 700, color: 'var(--gold-2)' }}>{AR(p.price)} ر.س</strong>
              <QtyBox small value={n} label={'كراتين ' + size(p)} onChange={(v) => (setErr(''), setCart((c) => ({ ...c, [p.id]: v })))} />
            </li>
          );
        })}
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 15, color: 'var(--muted)' }}>{cartons ? AR(cartons) + ' كرتون' : 'لم تختر أي منتج بعد'}</span>
          {cartons ? <strong style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)' }}>{AR(total)} ر.س</strong> : null}
          {err ? <span style={{ fontSize: 14, color: 'var(--danger)' }}>{err}</span> : null}
        </span>
        <BuyButton onClick={order}>اقتن الآن</BuyButton>
      </div>
    </div>,
  );
}

/** Option 3 — pick a size: the dark banner; the image, carton contents and price follow the chosen size. */
function SizeBanner() {
  const [id, setId] = useState(ITEMS[0].id);
  const [qty, setQty] = useState(1);
  const p = ITEMS.find((x) => x.id === id)!;
  return wrap(
    <div
      style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        background: 'linear-gradient(115deg,#0C0D0E 0%,#17140F 50%,#3A2C10 100%)',
        color: '#fff',
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        minHeight: 400,
      }}
    >
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: "url('assets/callig-light.svg') 8% 50%/auto 120% no-repeat", opacity: 0.06 }} />
      <div style={{ flex: '1 1 300px', minHeight: 300, position: 'relative', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', width: 340, height: 340, margin: '-170px 0 0 -170px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,168,67,.42) 0%,rgba(212,168,67,0) 68%)' }} />
        <img key={p.id} src={p.img} alt={p.t} style={{ position: 'relative', width: '62%', maxWidth: 300, maxHeight: 300, objectFit: 'contain', filter: 'drop-shadow(0 24px 30px rgba(0,0,0,.5))', animation: 'zzfade .35s ease both' }} />
      </div>
      <div style={{ flex: '1 1 460px', position: 'relative', padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#E6C48E' }}>ماء زمزم المبارك · {AR(ITEMS.length)} أحجام</span>
        <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.4vw,54px)', fontWeight: 700, lineHeight: 1.2 }}>اقتن عبوة زمزم</h2>
        <div role="radiogroup" aria-label="حجم العبوة" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {ITEMS.map((x) => {
            const sel = x.id === id;
            return (
              <button
                key={x.id}
                role="radio"
                aria-checked={sel}
                onClick={() => setId(x.id)}
                style={{
                  height: 40,
                  padding: '0 16px',
                  borderRadius: 999,
                  border: 0,
                  background: sel ? '#E6C48E' : 'rgba(255,255,255,.08)',
                  boxShadow: sel ? 'none' : 'inset 0 0 0 1px rgba(255,255,255,.2)',
                  color: sel ? '#1F1A12' : '#fff',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {size(x)}
              </button>
            );
          })}
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, color: 'rgba(255,255,255,.8)' }}>
          <Svg d={BOX} size={18} /> {p.pack}
        </span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <strong style={{ fontSize: 34, fontWeight: 700, color: '#E6C48E' }}>{AR(p.price)} ر.س</strong>
          <span style={{ fontSize: 15, color: 'rgba(255,255,255,.65)' }}>للكرتون · غير شامل الضريبة</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <QtyBox dark value={qty} label="عدد الكراتين" onChange={setQty} />
          <BuyButton onClick={() => portal.startOrder(qty ? { [p.id]: qty } : undefined)}>اقتن الآن</BuyButton>
        </div>
        <span style={{ fontSize: 14, color: 'rgba(255,255,255,.6)' }}>يمكنك إضافة أحجام أخرى في خطوة المنتجات.</span>
      </div>
    </div>,
  );
}

/** Option 4 — invitation: the range together and one «اطلب الآن»; sizes and quantities are chosen in the order. */
function InviteBanner() {
  const lineup = [ITEMS.find((p) => p.id === 'p5000'), ITEMS.find((p) => p.id === 'p330'), ITEMS.find((p) => p.id === 'p500')].filter(Boolean) as Product[];
  const point = (d: string, t: string) => (
    <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: 'var(--ink-2)' }}>
      <span style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 10, background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Svg d={d} size={16} />
      </span>
      {t}
    </li>
  );
  return wrap(
    <div style={{ borderRadius: 24, overflow: 'hidden', background: 'var(--card)', boxShadow: 'var(--card-shadow)', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'stretch' }}>
      <div style={{ flex: '1 1 380px', minHeight: 300, position: 'relative', background: 'linear-gradient(160deg,var(--card-2) 0%,var(--gold-soft) 140%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', gap: 0 }}>
        {lineup.map((p, i) => (
          <img
            key={p.id}
            src={p.img}
            alt=""
            style={{
              width: i === 1 ? '44%' : '30%',
              maxHeight: i === 1 ? 300 : 260,
              objectFit: 'contain',
              alignSelf: 'center',
              marginInline: '-3%',
              position: 'relative',
              zIndex: i === 1 ? 2 : 1,
              filter: 'drop-shadow(0 18px 22px rgba(0,0,0,.18))',
            }}
          />
        ))}
      </div>
      <div style={{ flex: '1 1 460px', padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 18 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--gold-2)' }}>اطلب من هنا</span>
        <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.4vw,54px)', fontWeight: 700, lineHeight: 1.2, color: 'var(--ink)' }}>اقتن ماء زمزم</h2>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: 'var(--muted)' }}>
          زمزم... معجزة جعلها الله لأمة محمد ﷺ ، الآن على بعد <span style={{ color: 'var(--gold-2)' }}>نقرة زر.</span>
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {point(BOX, AR(ITEMS.length) + ' أحجام من ٣٣٠ مل إلى ٥ لتر · تبدأ من ' + AR(FROM) + ' ر.س للكرتون')}
          {point(TRUCK, 'توصيل إلى عنوانك أو استلام من أقرب مستودع')}
          {point(SHIELD, 'للأفراد والجهات، مع خصم ٥٠٪ للجهات غير الربحية')}
        </ul>
        <BuyButton onClick={() => portal.startOrder()}>اطلب الآن</BuyButton>
      </div>
    </div>,
  );
}

export const BANNER_OPTIONS = ['الحالي', 'التشكيلة', 'اختر الحجم', 'اطلب من هنا'] as const;

export function BuyBannerAlt({ option }: { option: number }) {
  if (option === 2) return <RangeBanner />;
  if (option === 3) return <SizeBanner />;
  return <InviteBanner />;
}

/** Demo builds only: pick between the banner designs. */
export function BannerPicker({ option, onPick }: { option: number; onPick: (n: number) => void }) {
  if (!DEMO_TOOLS) return null;
  return (
    <div style={{ background: 'var(--bg-alt)', padding: '0 0 16px' }}>
      <div
        role="radiogroup"
        aria-label="تصميم بانر الشراء"
        style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}
      >
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>خيارات تصميم البانر (معاينة):</span>
        {BANNER_OPTIONS.map((t, i) => {
          const sel = option === i + 1;
          return (
            <button
              key={t}
              role="radio"
              aria-checked={sel}
              onClick={() => onPick(i + 1)}
              style={{
                height: 32,
                padding: '0 14px',
                borderRadius: 999,
                border: '1px solid ' + (sel ? '#996C2E' : 'var(--line)'),
                background: sel ? '#996C2E' : 'var(--card)',
                color: sel ? '#fff' : 'var(--ink-2)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {i + 1}. {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
