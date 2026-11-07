import { DeliveryTruck01Icon, PackageIcon, SecurityCheckIcon } from '@hugeicons/core-free-icons';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import { DsButton, DsTag, FeaturedIcon, Section, type IconSvgElement } from '../ds';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));

/**
 * Home «اقتن ماء زمزم» — the first version's banner content (product range + one «اطلب الآن») on DS parts only:
 * DS card with an image slot, Tag, Display sm title, Text lg copy, 40px featured icons, DS primary button. Sizes and quantities are chosen inside the order.
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
        {/* DS Hero Section pattern: content (624 max) with one call to action, and the image on the other side; no card */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32, minHeight: 411 }}>
          <div style={{ flex: '1 1 480px', maxWidth: 624, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24 }}>
              <DsTag tone="brand">اطلب من هنا</DsTag>
              <h2 style={{ margin: 0, fontSize: 48, lineHeight: '60px', fontWeight: 700, letterSpacing: '-0.96px', color: 'var(--ink)' }}>اقتن ماء زمزم</h2>
              <p style={{ margin: 0, fontSize: 20, lineHeight: '30px', color: 'var(--ink)' }}>زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد نقرة زر.</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {points.map(([icon, t]) => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>
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
          {/* Image / illustration side */}
          <div aria-hidden="true" style={{ flex: '1 1 420px', maxWidth: 560, height: 380, borderRadius: 'var(--r-lg)', background: 'var(--bg-alt)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '32px 24px 0', boxSizing: 'border-box', overflow: 'hidden' }}>
            {lineup.map((p, i) => (
              <img key={p.id} src={p.img} alt="" style={{ width: i === 1 ? '44%' : '33%', maxHeight: i === 1 ? 320 : 260, objectFit: 'contain', objectPosition: 'bottom', marginInline: '-2%', position: 'relative', zIndex: i === 1 ? 2 : 1 }} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
