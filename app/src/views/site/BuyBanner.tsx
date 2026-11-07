import { ArrowLeft02Icon, Building03Icon, SmartPhone01Icon, Store01Icon } from '@hugeicons/core-free-icons';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import type { V } from '../../types';
import { DsButton, FeaturedIcon, Hi, Section, SectionHeader, dsCard, type IconSvgElement } from '../ds';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));
/** «عبوة مياه زمزم ٣٣٠ مل» → «٣٣٠ مل»: the size is what a buyer compares. */
const SIZE = (t: string) => t.replace(/^عبوة مياه زمزم\s*/, '');

type Way = { icon: IconSvgElement; title: string; text: string; facts: Array<[string, string]>; go?: () => void; label: string };

/**
 * DS Service Hub card (Figma 24341:328670): featured icon, title (Text lg bold), description, «label: value» lines
 * (label in brand semibold), and a 40px neutral icon button with an arrow at the end.
 */
function WayCard({ w }: { w: Way }) {
  return (
    <div style={{ ...dsCard, height: '100%', boxSizing: 'border-box' }}>
      <FeaturedIcon hi={w.icon} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)' }}>
        <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700 }}>{w.title}</span>
        <span style={{ fontSize: 16, lineHeight: '24px', height: 72 }}>{w.text}</span>
        {w.facts.map(([k, val]) => (
          <span key={k} style={{ fontSize: 16, lineHeight: '24px', marginTop: 8 }}>
            <b style={{ fontWeight: 600, color: 'var(--gold)' }}>{k}:</b> {val}
          </span>
        ))}
      </span>
      <span style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
        <button type="button" onClick={w.go} aria-label={w.label} className="dga-btn dga-btn-neutral" style={{ width: 40, height: 40, padding: 0, border: 0, borderRadius: 'var(--r-sm)', background: 'var(--card-2)', color: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Hi icon={ArrowLeft02Icon} />
        </button>
      </span>
    </div>
  );
}

/**
 * Home «اقتن ماء زمزم» on the DGA Service Hub pattern: section header, then the three ways to buy as Service Hub
 * cards, then the products and prices as DS cards. Content is the site's own.
 */
export function BuyBanner({ v }: { v: V }) {
  const ways: Way[] = [
    {
      icon: SmartPhone01Icon,
      title: 'للأفراد عبر تطبيق نسك',
      text: 'اطلب عبوات ماء زمزم من تطبيق نسك، واستلمها عند سفرك من صالات المغادرة في مطار الملك عبدالعزيز الدولي.',
      facts: [
        ['الاستلام', 'صالات المغادرة في المطار'],
        ['التكلفة', `تبدأ من ${AR(FROM)} ر.س للكرتون`],
      ],
      go: () => portal.startOrder(),
      label: 'اطلب عبر تطبيق نسك',
    },
    {
      icon: Building03Icon,
      title: 'للجهات',
      text: 'تقدّم الجهات الحكومية والخاصة وغير الربحية طلباتها عبر منصة الطلبات الإلكترونية، وتتابع حالتها حتى الاستلام.',
      facts: [
        ['الفئة', 'حكومية وخاصة وغير ربحية'],
        ['الجهات غير الربحية', 'خصم ٥٠٪ على الطلبات'],
      ],
      go: () => portal.startOrder(),
      label: 'قدّم طلب جهتك',
    },
    {
      icon: Store01Icon,
      title: 'من نقاط البيع المعتمدة',
      text: 'اشترِ ماء زمزم الأصلي مباشرةً من نقاط البيع المعتمدة داخل المملكة، واعرف أقرب نقطة إليك على الخريطة.',
      facts: [
        ['نقاط البيع', 'كارفور ولولو هايبرماركت'],
        ['المنتجات', `${AR(ITEMS.length)} أحجام من ٣٣٠ مل إلى ٥ لتر`],
      ],
      go: v.go?.buyMap,
      label: 'أقرب نقطة بيع',
    },
  ];
  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم">
        <SectionHeader
          title="اقتن ماء زمزم"
          action={
            <DsButton primary onClick={() => portal.startOrder()}>
              اطلب الآن
            </DsButton>
          }
          desc={<p style={{ margin: 0 }}>زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد نقرة زر. اختر الطريقة التي تناسبك لاقتناء ماء زمزم عبر القنوات الرسمية المعتمدة.</p>}
        />

        {/* Service Hub cards — the three ways to buy */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 24 }}>
          {ways.map((w) => (
            <WayCard key={w.title} w={w} />
          ))}
        </div>

        {/* Products and prices — DS cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3 style={{ margin: 0, fontSize: 20, lineHeight: '30px', fontWeight: 700, color: 'var(--ink)' }}>المنتجات والأسعار</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 16 }}>
            {ITEMS.map((p) => (
              <div key={p.id} className="dga-card-link" style={{ ...dsCard, gap: 16 }}>
                <span style={{ height: 140, borderRadius: 'var(--r-md)', background: 'var(--bg-alt)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', padding: '12px 12px 0' }}>
                  <img src={p.img} alt={p.t} style={{ maxWidth: '100%', maxHeight: 128, objectFit: 'contain', objectPosition: 'bottom' }} />
                </span>
                <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, color: 'var(--ink)' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700 }}>{SIZE(p.t)}</span>
                    <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{p.pack.replace('كرتون يحتوي على ', 'كرتون · ')}</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 700, color: 'var(--gold)' }}>{AR(p.price)}</span>
                    <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>ر.س</span>
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
        </div>
      </Section>
    </div>
  );
}
