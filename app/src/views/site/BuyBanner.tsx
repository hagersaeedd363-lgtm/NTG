import { DeliveryTruck01Icon, PackageIcon, SecurityCheckIcon } from '@hugeicons/core-free-icons';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import { DsButton, FeaturedIcon, Section, type IconSvgElement } from '../ds';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));

/**
 * Home «اقتن ماء زمزم» — the first version's banner (product range on a podium under an arch + one «اطلب الآن»),
 * rebuilt with DS parts: DS card (white, 1px border, r16), Display sm title, Text lg copy, 40px featured icons,
 * DS primary button. Sizes and quantities are chosen inside the order.
 */
export function BuyBanner() {
  const lineup = ['p5000', 'p330', 'p500'].map((id) => ITEMS.find((p) => p.id === id)).filter(Boolean) as Product[];
  const points: Array<[IconSvgElement, string]> = [
    [PackageIcon, `${AR(ITEMS.length)} أحجام من ٣٣٠ مل إلى ٥ لتر · تبدأ من ${AR(FROM)} ر.س للكرتون`],
    [DeliveryTruck01Icon, 'توصيل إلى عنوانك أو استلام من أقرب مستودع'],
    [SecurityCheckIcon, 'للأفراد والجهات، مع خصم ٥٠٪ للجهات غير الربحية'],
  ];
  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم">
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'stretch', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          {/* Product scene: arch + podium + the range */}
          <div
            style={{
              flex: '1 1 420px',
              minHeight: 380,
              position: 'relative',
              overflow: 'hidden',
              background: 'radial-gradient(ellipse 70% 55% at 50% 78%,rgba(180,145,100,.34) 0%,rgba(180,145,100,0) 70%),linear-gradient(165deg,var(--bg-alt) 0%,color-mix(in srgb,var(--bg-alt) 72%,#B49164) 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '40px 24px 46px',
            }}
          >
            <span aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: 46, width: '58%', height: '76%', transform: 'translateX(-50%)', borderRadius: '999px 999px 0 0', background: 'linear-gradient(180deg,rgba(180,145,100,.28) 0%,rgba(180,145,100,.08) 100%)', boxShadow: 'inset 0 0 0 1px rgba(146,109,57,.28)' }} />
            <span aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: 46, width: '46%', height: '64%', transform: 'translateX(-50%)', borderRadius: '999px 999px 0 0', boxShadow: 'inset 0 0 0 1px rgba(146,109,57,.18)' }} />
            <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--callig-img) 50% 18%/62% auto no-repeat', opacity: 0.06 }} />
            <span aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: 20, width: '78%', height: 54, transform: 'translateX(-50%)', borderRadius: '50%', background: 'linear-gradient(180deg,var(--card) 0%,color-mix(in srgb,var(--bg-alt) 75%,#B49164) 100%)', boxShadow: '0 18px 34px rgba(107,86,57,.28), inset 0 -2px 0 rgba(146,109,57,.25)' }} />
            {lineup.map((p, i) => (
              <img
                key={p.id}
                src={p.img}
                alt=""
                style={{ width: i === 1 ? '40%' : '32%', maxHeight: i === 1 ? 290 : 230, objectFit: 'contain', objectPosition: 'bottom', marginInline: '-3%', position: 'relative', zIndex: i === 1 ? 2 : 1, filter: 'drop-shadow(0 14px 14px rgba(58,48,34,.28))' }}
              />
            ))}
          </div>

          {/* Copy + one action */}
          <div style={{ flex: '1 1 480px', boxSizing: 'border-box', padding: 'clamp(24px,4vw,48px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: 'var(--gold)' }}>اطلب من هنا</span>
              <h2 style={{ margin: 0, fontSize: 36, lineHeight: '44px', fontWeight: 700, letterSpacing: '-0.72px', color: 'var(--ink)' }}>اقتن ماء زمزم</h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: '28px', color: 'var(--ink)' }}>
                زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد <span style={{ color: 'var(--gold)', fontWeight: 600 }}>نقرة زر.</span>
              </p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {points.map(([icon, t]) => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>
                  <FeaturedIcon hi={icon} size={40} />
                  {t}
                </li>
              ))}
            </ul>
            <DsButton primary onClick={() => portal.startOrder()}>
              اطلب الآن
            </DsButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
