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

function Lineup({ h = 320 }: { h?: number }) {
  return (
    <>
      {LINEUP.map((p, i) => (
        <img
          key={p.id}
          src={p.img}
          alt=""
          style={{
            width: i === 1 ? '34%' : '26%',
            maxHeight: i === 1 ? h : h * 0.81,
            objectFit: 'contain',
            objectPosition: 'bottom',
            marginInline: '-2%',
            position: 'relative',
            zIndex: i === 1 ? 2 : 1,
            filter: 'drop-shadow(0 10px 10px rgba(58,48,34,.35))',
          }}
        />
      ))}
    </>
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
          <div
            aria-hidden="true"
            style={{
              flex: '1 1 520px',
              minHeight: 411,
              background: "url('assets/da38.jpg') center 58%/cover no-repeat",
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '40px 48px 28px',
              boxSizing: 'border-box',
            }}
          >
            <Lineup h={250} />
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
          <div
            aria-hidden="true"
            style={{
              flex: '1 1 420px',
              maxWidth: 560,
              height: 380,
              borderRadius: 'var(--r-lg)',
              background: "url('assets/da38.jpg') center 58%/cover no-repeat",
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '32px 24px 24px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <Lineup h={220} />
          </div>
        </div>
      </Section>
    </div>
  );
}
