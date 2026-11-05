import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import { ICON } from '../../portal/ui';
import { DsButton, FeaturedIcon, Section, SectionHeader } from '../ds';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));
const CART = 'M3 4h2.5l2.2 11h10.6l1.7-8H6.2M9 20h.01M18 20h.01';
const TRUCK = 'M3 6h11v9H3zM14 9h4l3 3v3h-7M7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z';

/** Home «اقتن ماء زمزم» section (DS section header + featured-icon list + primary action, products image card). */
export function BuyBanner() {
  const lineup = [ITEMS.find((p) => p.id === 'p5000'), ITEMS.find((p) => p.id === 'p330'), ITEMS.find((p) => p.id === 'p500')].filter(Boolean) as Product[];
  const point = (d: string, t: string) => (
    <li style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: '16px', lineHeight: '24px', color: 'var(--ink)' }}>
      <FeaturedIcon d={d} size={40} />
      {t}
    </li>
  );
  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 32 }}>
          <div style={{ flex: '1 1 460px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
            <SectionHeader title="اقتن ماء زمزم" desc={<p style={{ margin: 0 }}>زمزم... معجزة جعلها الله لأمة محمد ﷺ ، الآن على بعد نقرة زر.</p>} />
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {point(ICON.box, AR(ITEMS.length) + ' أحجام من ٣٣٠ مل إلى ٥ لتر · تبدأ من ' + AR(FROM) + ' ر.س للكرتون')}
              {point(TRUCK, 'توصيل إلى عنوانك أو استلام من أقرب مستودع')}
              {point(ICON.shield, 'للأفراد والجهات، مع خصم ٥٠٪ للجهات غير الربحية')}
            </ul>
            <div style={{ display: 'flex' }}>
              <DsButton primary icon={CART} onClick={() => portal.startOrder()}>
                اطلب الآن
              </DsButton>
            </div>
          </div>
          <div
            style={{
              flex: '1 1 400px',
              minHeight: 340,
              background: 'var(--bg-alt)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--r-lg)',
              padding: 16,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            {lineup.map((p, i) => (
              <img
                key={p.id}
                src={p.img}
                alt=""
                style={{ width: i === 1 ? '40%' : '30%', maxHeight: i === 1 ? 280 : 230, objectFit: 'contain', objectPosition: 'bottom', marginInline: '-2%', position: 'relative', zIndex: i === 1 ? 2 : 1 }}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
