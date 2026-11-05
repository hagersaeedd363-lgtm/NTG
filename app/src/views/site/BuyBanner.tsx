import { Airplane01Icon, DiscountIcon, Money03Icon, SmartPhone01Icon, Store01Icon, UserGroupIcon } from '@hugeicons/core-free-icons';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import type { V } from '../../types';
import { list } from '../../lib/dc';
import { DsButton, DsTag, Hi, Section, type IconSvgElement } from '../ds';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));
/** «عبوة مياه زمزم ٣٣٠ مل» → «٣٣٠ مل»: the size is what a buyer compares. */
const SIZE = (t: string) => t.replace(/^عبوة مياه زمزم\s*/, '');

const STEP_UI: Array<{ icon: IconSvgElement; title: string }> = [
  { icon: SmartPhone01Icon, title: 'اطلب' },
  { icon: Airplane01Icon, title: 'استلم من المطار' },
  { icon: Store01Icon, title: 'أو من نقاط البيع' },
];

/** Icon in a 48px brand-tint box (DS featured icon). */
function Boxed({ icon }: { icon: IconSvgElement }) {
  return (
    <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'var(--brand-25, var(--bg-alt))', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Hi icon={icon} size={24} />
    </span>
  );
}

/**
 * Home «اقتن ماء زمزم» (DS Service Page pattern): header with one primary action, the five products as DS cards,
 * a 3-step «كيف تطلب؟» stepper, and one service-facts strip (beneficiaries, cost, non-profit discount, apps).
 * Every row spans the full content width so the section reads balanced. Content is the site's own.
 */
export function BuyBanner({ v }: { v: V }) {
  const steps: string[] = list(v.orderSteps).map((s: any) => s?.ar);
  const facts: Array<{ icon: IconSvgElement; k: string; v: string }> = [
    { icon: UserGroupIcon, k: 'الفئة المستفيدة', v: 'الأفراد والجهات بأنواعها' },
    { icon: Money03Icon, k: 'تكلفة الخدمة', v: `تبدأ من ${AR(FROM)} ر.س للكرتون` },
    { icon: DiscountIcon, k: 'الجهات غير الربحية', v: 'خصم ٥٠٪ على الطلبات' },
  ];
  const card: React.CSSProperties = { background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', boxSizing: 'border-box' };
  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم" gap={32}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <h2 style={{ margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 700, color: 'var(--ink)' }}>اقتن ماء زمزم</h2>
            <DsButton primary onClick={() => portal.startOrder()}>
              اطلب الآن
            </DsButton>
          </div>
          <p style={{ margin: 0, maxWidth: 820, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>
            زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد نقرة زر. اطلب عبوات ماء زمزم عبر القنوات الرسمية المعتمدة، واستلمها من المطار أو من نقاط البيع.
          </p>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <DsTag tone="brand">للأفراد</DsTag>
            <DsTag tone="info">للجهات</DsTag>
            <DsTag>تطبيق نسك</DsTag>
          </span>
        </div>

        {/* Products — five equal DS cards: image, size, carton, price, one action */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 16 }}>
          {ITEMS.map((p) => (
            <div key={p.id} className="dga-card-link" style={{ ...card, padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ height: 160, borderRadius: 'var(--r-md)', background: 'var(--bg-alt)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', padding: '16px 16px 0' }}>
                <img src={p.img} alt={p.t} style={{ maxWidth: '100%', maxHeight: 144, objectFit: 'contain', objectPosition: 'bottom' }} />
              </span>
              <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, color: 'var(--ink)' }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 20, lineHeight: '30px', fontWeight: 700 }}>{SIZE(p.t)}</span>
                  <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{p.pack.replace('كرتون يحتوي على ', 'كرتون · ')}</span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 700, color: 'var(--gold)' }}>{AR(p.price)}</span>
                  <span style={{ fontSize: 12, lineHeight: '18px', color: 'var(--ink-2)' }}>ر.س</span>
                </span>
              </span>
              <span style={{ marginTop: 'auto', display: 'grid' }}>
                <DsButton onClick={() => portal.startOrder()} ariaLabel={'اطلب ' + p.t}>
                  اطلب
                </DsButton>
              </span>
            </div>
          ))}
        </div>

        {/* How to order — DS progress steps, full width */}
        <div style={{ ...card, padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontSize: 20, lineHeight: '30px', fontWeight: 700, color: 'var(--ink)' }}>كيف تطلب؟</span>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 24 }}>
            {steps.map((s, k) => (
              <li key={k} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 9999, background: 'var(--gold)', color: '#FFFFFF', fontWeight: 700, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{AR(k + 1)}</span>
                  {k < steps.length - 1 ? <span aria-hidden="true" style={{ flex: 1, height: 2, background: 'var(--line)' }} /> : null}
                </span>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Boxed icon={STEP_UI[k]?.icon ?? Store01Icon} />
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 4, color: 'var(--ink)' }}>
                    <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 700 }}>{STEP_UI[k]?.title}</span>
                    <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{s}</span>
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Service facts + apps — one strip */}
        <div style={{ ...card, padding: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
          {facts.map((f) => (
            <span key={f.k} style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink)' }}>
              <Boxed icon={f.icon} />
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{f.k}</span>
                <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 700 }}>{f.v}</span>
              </span>
            </span>
          ))}
          <span style={{ flex: '0 1 auto', marginInlineStart: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
            {[
              ['assets/app-store.svg', 'App Store'],
              ['assets/google-play.svg', 'Google Play'],
              ['assets/app-gallery.svg', 'AppGallery'],
            ].map(([src, alt]) => (
              <button key={alt} type="button" onClick={v.storeToast} aria-label={alt} className="dga-btn dga-btn-neutral" style={{ height: 40, padding: '0 12px', border: 0, borderRadius: 'var(--r-sm)', background: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <img src={src} alt="" style={{ height: 16, display: 'block', filter: 'brightness(0) invert(1)' }} />
              </button>
            ))}
            <DsButton onClick={v.go?.buyMap}>أقرب نقطة بيع</DsButton>
          </span>
        </div>
      </Section>
    </div>
  );
}
