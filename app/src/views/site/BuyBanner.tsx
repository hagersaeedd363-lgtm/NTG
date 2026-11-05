import { useState } from 'react';
import { DiscountIcon, Location01Icon, Money03Icon, PackageIcon, SmartPhone01Icon, UserGroupIcon } from '@hugeicons/core-free-icons';
import { PRODUCTS } from '../../data/portal';
import { portal } from '../../portal/store';
import type { V } from '../../types';
import { list } from '../../lib/dc';
import { DsButton, DsTag, Hi, Section, Tabs, type IconSvgElement } from '../ds';

type Product = { id: string; t: string; pack: string; bottles: number; price: number; img: string };
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString('ar-EG');
const FROM = Math.min(...ITEMS.map((p) => p.price));

/** DS Service Page — info row: 24px brand icon, Text md bold label, Text md value. */
function InfoRow({ icon, label, children }: { icon: IconSvgElement; label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
      <span style={{ color: 'var(--gold)', display: 'flex', flexShrink: 0 }}>
        <Hi icon={icon} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>
        <span style={{ fontWeight: 700 }}>{label}</span>
        <span>{children}</span>
      </span>
    </div>
  );
}

/**
 * Home «اقتن ماء زمزم» built on the DGA Service Page pattern: service title + tags + description
 * + «اطلب الآن», a horizontal tab list (steps / channels / products) with an ordered list, and the
 * service card on the side (beneficiaries, channels, cost, products, mobile apps). Content is the site's own.
 */
export function BuyBanner({ v }: { v: V }) {
  const [tab, setTab] = useState(0);
  const lineup = [ITEMS.find((p) => p.id === 'p5000'), ITEMS.find((p) => p.id === 'p330'), ITEMS.find((p) => p.id === 'p500')].filter(Boolean) as Product[];
  const steps: string[] = list(v.orderSteps).map((s: any) => s?.ar);
  const channels = ['تطبيق نسك', 'صالات المغادرة في مطار الملك عبدالعزيز الدولي', 'نقاط البيع المعتمدة: كارفور ولولو هايبرماركت'];
  const tabs = [
    { label: 'الخطوات', rows: steps },
    { label: 'قنوات الخدمة', rows: channels },
    { label: 'المنتجات', rows: ITEMS.map((p) => `${p.t} — ${p.pack}`) },
  ];
  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 32 }}>
          {/* Service (main column) */}
          <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
                <h2 style={{ margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 700, color: 'var(--ink)' }}>اقتن ماء زمزم</h2>
                <DsButton primary onClick={() => portal.startOrder()}>
                  اطلب الآن
                </DsButton>
              </div>
              <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <DsTag tone="brand">للأفراد</DsTag>
                <DsTag tone="info">للجهات</DsTag>
                <DsTag>تطبيق نسك</DsTag>
              </span>
              <p style={{ margin: 0, maxWidth: 720, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>
                زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد نقرة زر. اطلب عبوات ماء زمزم عبر القنوات الرسمية المعتمدة، واستلمها من المطار أو من نقاط البيع، أو قدّم طلب جهتك عبر منصة الطلبات الإلكترونية.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <Tabs label="تفاصيل الخدمة" items={tabs.map((t, i) => ({ label: t.label, selected: i === tab, onClick: () => setTab(i) }))} />
              <div role="tabpanel" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
                <ol style={{ flex: '1 1 320px', margin: 0, paddingInlineStart: 24, display: 'flex', flexDirection: 'column', gap: 16, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>
                  {tabs[tab].rows.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
                <div style={{ flex: '0 1 300px', height: 200, borderRadius: 'var(--r-md)', background: 'var(--bg-alt)', border: '1px solid var(--line)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '16px 8px 0', boxSizing: 'border-box', overflow: 'hidden' }}>
                  {lineup.map((p, i) => (
                    <img key={p.id} src={p.img} alt="" style={{ width: i === 1 ? '40%' : '30%', maxHeight: i === 1 ? 170 : 140, objectFit: 'contain', objectPosition: 'bottom', marginInline: '-2%', position: 'relative', zIndex: i === 1 ? 2 : 1 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service card (side) */}
          <aside aria-label="معلومات الخدمة" style={{ flex: '0 1 416px', minWidth: 280, boxSizing: 'border-box', padding: 40, background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <InfoRow icon={UserGroupIcon} label="الفئة المستفيدة">
                الأفراد والجهات الحكومية والخاصة وغير الربحية
              </InfoRow>
              <InfoRow icon={SmartPhone01Icon} label="قنوات الخدمة">
                تطبيق نسك، المطار، نقاط البيع المعتمدة
              </InfoRow>
              <InfoRow icon={Money03Icon} label="تكلفة الخدمة">
                تبدأ من {AR(FROM)} ر.س للكرتون
              </InfoRow>
              <InfoRow icon={PackageIcon} label="المنتجات">
                {AR(ITEMS.length)} أحجام من ٣٣٠ مل إلى ٥ لتر
              </InfoRow>
              <InfoRow icon={Location01Icon} label="الاستلام">
                صالات المغادرة أو أقرب نقطة بيع
              </InfoRow>
              <InfoRow icon={DiscountIcon} label="الجهات غير الربحية">
                خصم ٥٠٪ على الطلبات
              </InfoRow>
            </div>
            <div style={{ height: 1, background: 'var(--line)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, color: 'var(--ink)' }}>تطبيقات الجوال</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {[
                  ['assets/app-store.svg', 'App Store'],
                  ['assets/google-play.svg', 'Google Play'],
                  ['assets/app-gallery.svg', 'AppGallery'],
                ].map(([src, alt]) => (
                  <button key={alt} type="button" onClick={v.storeToast} aria-label={alt} className="dga-btn dga-btn-neutral" style={{ height: 40, padding: '0 12px', border: 0, borderRadius: 'var(--r-sm)', background: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <img src={src} alt="" style={{ height: 16, display: 'block', filter: 'brightness(0) invert(1)' }} />
                  </button>
                ))}
              </div>
            </div>
            <DsButton onClick={v.go?.buyMap}>أقرب نقطة بيع</DsButton>
          </aside>
        </div>
      </Section>
    </div>
  );
}
