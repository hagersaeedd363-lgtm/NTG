import { DeliveryTruck01Icon, PackageIcon, SecurityCheckIcon } from '@hugeicons/core-free-icons';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import { DsButton, DsTag, FeaturedIcon, Section, type IconSvgElement } from '../ds';

type Product = {
  id: string;
  t: string;
  pack: string;
  bottles: number;
  price: number;
  img: string;
};
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));
const LINEUP = ['p5000', 'p330', 'p500'].map((id) => ITEMS.find((p) => p.id === id)).filter(Boolean) as Product[];
const POINTS: Array<[IconSvgElement, string]> = [
  [PackageIcon, `${AR(ITEMS.length)} أحجام من ٣٣٠ مل إلى ٥ لتر · تبدأ من ${AR(FROM)} ر.س للكرتون`],
  [DeliveryTruck01Icon, 'توصيل إلى عنوانك أو استلام من أقرب مستودع'],
  [SecurityCheckIcon, 'للأفراد والجهات، مع خصم ٥٠٪ للجهات غير الربحية'],
];

/** DS Hero content: tag, Display lg title, Text xl copy, featured-icon list, one action. */
function Content() {
  const ink = 'var(--ink)';
  return (
    <div
      style={{
        flex: '1 1 480px',
        maxWidth: 624,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 32,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 24,
        }}
      >
        <DsTag tone="brand">اطلب من هنا</DsTag>
        <h2
          style={{
            margin: 0,
            fontSize: 48,
            lineHeight: '60px',
            fontWeight: 700,
            letterSpacing: '-0.96px',
            color: ink,
          }}
        >
          اقتن ماء زمزم
        </h2>
        <p style={{ margin: 0, fontSize: 20, lineHeight: '30px', color: ink }}>زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد نقرة زر.</p>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {POINTS.map(([icon, t]) => (
            <li
              key={t}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 16,
                lineHeight: '24px',
                color: ink,
              }}
            >
              <FeaturedIcon hi={icon} size={40} />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <DsButton primary onClick={() => portal.startOrder()}>
        اطلب الآن
      </DsButton>
    </div>
  );
}

/** Product scene: warm sand gradient + glow, a soft arch, a podium; the premium bottle in three (centre tallest) in front of the carton and the 5 L. */
function Scene({ rounded }: { rounded?: boolean }) {
  const shadow = 'drop-shadow(0 16px 14px rgba(58,48,34,.30))';
  const img = (src: string, st: React.CSSProperties) => <img src={src} alt="" style={{ position: 'absolute', objectFit: 'contain', filter: shadow, ...st }} />;
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 380,
        overflow: 'hidden',
        borderRadius: rounded ? 'var(--r-lg)' : 0,
        background: 'radial-gradient(ellipse 65% 50% at 50% 80%,rgba(212,176,120,.55) 0%,rgba(212,176,120,0) 70%),linear-gradient(170deg,#FBF8F3 0%,#F3EADD 45%,#E6D3B5 100%)',
      }}
    >
      <span style={{ position: 'absolute', left: '50%', bottom: 58, width: '60%', height: '78%', transform: 'translateX(-50%)', borderRadius: '999px 999px 0 0', background: 'linear-gradient(180deg,rgba(255,255,255,.65) 0%,rgba(255,255,255,.15) 100%)', boxShadow: 'inset 0 0 0 1px rgba(146,109,57,.22)' }} />
      <span style={{ position: 'absolute', left: '50%', bottom: 58, width: '48%', height: '66%', transform: 'translateX(-50%)', borderRadius: '999px 999px 0 0', boxShadow: 'inset 0 0 0 1px rgba(146,109,57,.14)' }} />
      <span style={{ position: 'absolute', left: '50%', bottom: 26, width: '84%', height: 64, transform: 'translateX(-50%)', borderRadius: '50%', background: 'linear-gradient(180deg,#FFFFFF 0%,#EADBC2 100%)', boxShadow: '0 20px 36px rgba(107,86,57,.25), inset 0 -3px 0 rgba(146,109,57,.18)' }} />
      {img('assets/zz-pack.png', { left: '13%', bottom: 70, height: '36%', zIndex: 1 })}
      {img('assets/zz-5l.png', { right: '15%', bottom: 70, height: '46%', zIndex: 1 })}
      {img('assets/zz-bottle.png', { left: '33%', bottom: 50, height: '46%', zIndex: 2 })}
      {img('assets/zz-bottle.png', { right: '33%', bottom: 50, height: '46%', zIndex: 2 })}
      {img('assets/zz-bottle.png', { left: '50%', bottom: 40, height: '60%', transform: 'translateX(-50%)', zIndex: 3 })}
    </div>
  );
}

/**
 * Home «اقتن ماء زمزم» on the DS Hero Section pattern («a brief description … followed with a call to action button
 * and an image or an illustration on the left hand side»). Two looks, same content:
 *  A (default) — content + framed image; C `?buy=split` — the image fills one half edge to edge.
 */
export function BuyBanner() {
  const look = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('buy') : null;

  if (look === 'split')
    return (
      <div id="buy-pack">
        <section
          data-screen-label="اقتن عبوة زمزم"
          style={{
            background: 'var(--bg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            minHeight: 491,
          }}
        >
          <div
            style={{
              flex: '1 1 520px',
              boxSizing: 'border-box',
              padding: '40px clamp(16px,5.6vw,80px)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Content />
          </div>
          <div style={{ flex: '1 1 520px', minHeight: 491, display: 'flex' }}>
            <Scene />
          </div>
        </section>
      </div>
    );

  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            minHeight: 411,
          }}
        >
          <Content />
          <div style={{ flex: '1 1 420px', maxWidth: 560, height: 400, display: 'flex' }}>
            <Scene rounded />
          </div>
        </div>
      </Section>
    </div>
  );
}
