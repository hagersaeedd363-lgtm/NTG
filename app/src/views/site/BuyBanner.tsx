import type { ReactNode } from 'react';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
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

/** The section: continues the band above, then deepens; a faint calligraphy watermark sits behind the card. */
const wrap = (children: ReactNode) => (
  <section
    id="buy-pack"
    data-screen-label="اقتن عبوة زمزم"
    style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg,var(--bg-alt) 0%,var(--bg-alt) 35%,color-mix(in srgb,var(--bg-alt) 82%,#A47C1C) 100%)', padding: '0 0 80px' }}
  >
    <span aria-hidden="true" style={{ position: 'absolute', right: '-4%', bottom: -40, width: '46%', height: '120%', background: 'var(--callig-img) right bottom/contain no-repeat', opacity: 0.07, pointerEvents: 'none' }} />
    <span aria-hidden="true" style={{ position: 'absolute', left: '-6%', top: '18%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,168,67,.22) 0%,rgba(212,168,67,0) 70%)', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)' }}>{children}</div>
  </section>
);

/** Home «اقتن ماء زمزم» banner: the range together and one «اطلب الآن»; sizes and quantities are chosen in the order. */
export function BuyBanner() {
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
      <div
        style={{
          flex: '1 1 380px',
          minHeight: 340,
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 70% 55% at 50% 78%,rgba(212,168,67,.38) 0%,rgba(212,168,67,0) 70%),linear-gradient(165deg,var(--card-2) 0%,color-mix(in srgb,var(--card-2) 70%,#D4A843) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '40px 24px 46px',
        }}
      >
        {/* arch behind the products */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 46,
            width: '58%',
            height: '76%',
            transform: 'translateX(-50%)',
            borderRadius: '999px 999px 0 0',
            background: 'linear-gradient(180deg,rgba(212,168,67,.28) 0%,rgba(212,168,67,.08) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(164,124,28,.28)',
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 46,
            width: '46%',
            height: '64%',
            transform: 'translateX(-50%)',
            borderRadius: '999px 999px 0 0',
            boxShadow: 'inset 0 0 0 1px rgba(164,124,28,.18)',
          }}
        />
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--callig-img) 50% 18%/62% auto no-repeat', opacity: 0.06 }} />
        {/* podium the products stand on */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 20,
            width: '78%',
            height: 54,
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            background: 'linear-gradient(180deg,var(--card) 0%,color-mix(in srgb,var(--card-2) 75%,#C9A65C) 100%)',
            boxShadow: '0 18px 34px rgba(120,90,30,.28), inset 0 -2px 0 rgba(164,124,28,.25)',
          }}
        />
        {lineup.map((p, i) => (
          <img
            key={p.id}
            src={p.img}
            alt=""
            style={{
              width: i === 1 ? '40%' : '32%',
              maxHeight: i === 1 ? 280 : 220,
              objectFit: 'contain',
              objectPosition: 'bottom',
              marginInline: '-3%',
              position: 'relative',
              zIndex: i === 1 ? 2 : 1,
              filter: 'drop-shadow(0 14px 14px rgba(60,40,10,.28))',
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
