import type { ReactNode } from 'react';
import type { V } from '../../types';
import { wrap } from '../ds';
import { A11yTools } from './Platform';

/**
 * DGA Footer (Platforms Code): link groups with a hairline under each group label, a group for the
 * Nusuk app and the accessibility tools, then the legal row (underlined links, rights caption,
 * developer line) with the platform logo. Deep brown instead of the DS green (Zamzam palette).
 * Content is the site's own; nothing invented.
 */
const link = { background: 'none', border: '0', padding: '0', color: '#FFFFFF', fontSize: '14px', lineHeight: '20px', cursor: 'pointer', textAlign: 'right', fontFamily: 'inherit' } as const;

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ flex: '1 1 180px', minWidth: 180, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h2 style={{ margin: 0, paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,.3)', fontSize: 16, lineHeight: '24px', fontWeight: 500, color: '#FFFFFF' }}>{title}</h2>
      {children}
    </div>
  );
}
function Links({ items }: { items: Array<[string, (() => void) | undefined]> }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map(([label, onClick]) => (
        <li key={label}>
          <button type="button" onClick={onClick} style={link} className="dga-footlink">
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter({ v }: { v: V }) {
  const g = v.go || {};
  return (
    <footer className="zz-zoom" style={{ background: 'var(--footer-bg)', color: '#fff' }}>
      <div style={{ ...wrap, paddingTop: 40, paddingBottom: 24, display: 'flex', flexDirection: 'column', gap: 48 }}>
        <nav aria-label="روابط الموقع" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, paddingTop: 16, paddingBottom: 40 }}>
          <Group title="عن المشروع">
            <Links items={[['عن المشروع', g.about], ['قصة زمزم', g.story], ['رحلة ماء زمزم', g.journey], ['الجودة والسلامة', g.quality], ['متحف زمزم', g.museum]]} />
          </Group>
          <Group title="روابط مهمة">
            <Links items={[['اقتنِ ماء زمزم', g.buy], ['التحقق من المنتج الأصلي', g.verify], ['الأرقام والتقارير', g.stats], ['المركز الإعلامي', g.media]]} />
          </Group>
          <Group title="الاتصال والدعم">
            <Links items={[['تواصل معنا', g.contact], ['الأسئلة الشائعة', g.faq], ['بلّغ عن منتج مشتبه به', g.verifyReport], ['البحث', g.search]]} />
          </Group>
          <div style={{ flex: '1 1 180px', minWidth: 180, display: 'flex', flexDirection: 'column', gap: 32 }}>
            <Group title="حمل تطبيق نسك لطلب ماء زمزم">
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, paddingTop: 4 }}>
                {[
                  ['assets/app-store.svg', 'App Store'],
                  ['assets/google-play.svg', 'Google Play'],
                  ['assets/app-gallery.svg', 'AppGallery'],
                ].map(([src, alt]) => (
                  <button key={alt} type="button" onClick={v.storeToast} aria-label={alt} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
                    <img src={src} alt={alt} style={{ height: 18, display: 'block', filter: 'brightness(0) invert(1)' }} />
                  </button>
                ))}
              </div>
            </Group>
            <Group title="أدوات الإتاحة والوصول">
              <A11yTools onColor />
            </Group>
          </div>
        </nav>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingTop: 16, paddingBottom: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {(
                [
                  ['خريطة الموقع', g.sitemap],
                  ['حرية المعلومات', v.policyToast],
                  ['سياسة الخصوصية', v.policyToast],
                  ['الشروط والأحكام', v.policyToast],
                ] as Array<[string, () => void]>
              ).map(([t, fn]) => (
                <button key={t} type="button" onClick={fn} style={{ ...link, textDecoration: 'underline', textUnderlineOffset: 4 }} className="dga-footlink">
                  {t}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600 }}>جميع الحقوق محفوظة لمشروع خادم الحرمين الشريفين لسقيا زمزم © 2026</span>
              <span style={{ fontSize: 14, lineHeight: '20px' }}>بتجربة رقمية ممكنة من شركة علم</span>
            </div>
          </div>
          <button type="button" onClick={g.home} aria-label="الرئيسية" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
            <img src="assets/zamzam-logo.png" alt="" style={{ display: 'block', height: 64, width: 'auto' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
