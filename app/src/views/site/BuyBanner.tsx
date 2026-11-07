import { DeliveryTruck01Icon, PackageIcon, SecurityCheckIcon } from '@hugeicons/core-free-icons';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import { DsButton, DsTag, FeaturedIcon, Section, dsCard, type IconSvgElement } from '../ds';

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
        {/* DS card (white, 1px border, r16, 16px padding, 24px gap): image block + content, side by side */}
        <div style={{ ...dsCard, flexDirection: 'row', flexWrap: 'wrap-reverse', alignItems: 'stretch', gap: 24 }}>
          {/* Image: DS card image slot (r8), the range on the brand sand */}
          <div style={{ flex: '1 1 420px', minHeight: 340, borderRadius: 'var(--r-md)', background: 'var(--bg-alt)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '32px 24px 0', overflow: 'hidden' }}>
            {lineup.map((p, i) => (
              <img key={p.id} src={p.img} alt={p.t} style={{ width: i === 1 ? '44%' : '33%', maxHeight: i === 1 ? 310 : 250, objectFit: 'contain', objectPosition: 'bottom', marginInline: '-2%', position: 'relative', zIndex: i === 1 ? 2 : 1 }} />
            ))}
          </div>

          {/* Content: tag, title (Display sm), text (Text lg), list with featured icons, primary action */}
          <div style={{ flex: '1 1 480px', boxSizing: 'border-box', padding: 'clamp(8px,2.5vw,32px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
              <DsTag tone="brand">اطلب من هنا</DsTag>
              <h2 style={{ margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 700, color: 'var(--ink)' }}>اقتن ماء زمزم</h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: '28px', color: 'var(--ink)' }}>زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد نقرة زر.</p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
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
