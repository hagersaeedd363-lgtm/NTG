import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import type { V } from '../../types';
import { list } from '../../lib/dc';
import { DsButton, ProgressSteps, Section, SectionHeader } from '../ds';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));

/**
 * Home «اقتن ماء زمزم»: DS section header, the order cycle as a DS Progress Indicator
 * (the site's own three steps), primary + secondary actions, and the product line-up card.
 */
export function BuyBanner({ v }: { v: V }) {
  const lineup = [ITEMS.find((p) => p.id === 'p5000'), ITEMS.find((p) => p.id === 'p330'), ITEMS.find((p) => p.id === 'p500')].filter(Boolean) as Product[];
  const steps = list(v.orderSteps).map((s: any) => ({ title: s?.ar, state: 'current' as const }));
  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))', alignItems: 'center', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <SectionHeader
              title="اقتن ماء زمزم"
              desc={<p style={{ margin: 0 }}>زمزم... معجزة جعلها الله لأمة محمد ﷺ ، الآن على بعد نقرة زر. {AR(ITEMS.length)} أحجام من ٣٣٠ مل إلى ٥ لتر، تبدأ من {AR(FROM)} ر.س للكرتون.</p>}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, color: 'var(--ink)' }}>خطوات الطلب</span>
              <ProgressSteps steps={steps} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <DsButton primary onClick={() => portal.startOrder()}>
                اطلب الآن
              </DsButton>
              <DsButton onClick={v.go?.buyMap}>أقرب نقطة بيع</DsButton>
            </div>
          </div>
          <div
            style={{
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
