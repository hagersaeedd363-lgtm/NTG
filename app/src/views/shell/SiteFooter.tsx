import { Fragment } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';

/**
 * DGA footer (dark variant) on the brand's Deep brown: link columns with hairline dividers,
 * a group for the app links, then the legal row. Content is unchanged from the site.
 */
const link = { background: 'none', border: '0', padding: '0', color: '#FFFFFF', fontSize: '14px', lineHeight: '20px', cursor: 'pointer', textAlign: 'right', fontFamily: 'inherit' } as const;
const groupTitle = { margin: 0, paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,.3)', fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: '#FFFFFF' } as const;

export function SiteFooter({ v }: { v: V }) {
  const links = list(v.footerLinks);
  const per = Math.ceil(links.length / 3);
  const cols = [links.slice(0, per), links.slice(per, per * 2), links.slice(per * 2)];
  return (
    <footer style={{ background: 'var(--footer-bg)', color: '#fff', padding: '40px 0' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
          <button onClick={v.go?.home} aria-label="الرئيسية" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
            <span style={{ display: 'block', width: '80px', height: '76px', background: "url('assets/zamzam-logo.png') right center/contain no-repeat" }} />
          </button>
        </div>
        <nav aria-label="روابط الموقع" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '24px 32px', borderTop: '1px solid rgba(255,255,255,.3)', paddingTop: '24px' }}>
          {cols.map((c, ci) => (
            <ul key={ci} style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {c.map((l: any, $index: number) => (
                <Fragment key={$index}>
                  <li>
                    <button onClick={l?.onClick} style={link} className="dga-footlink">
                      {l?.label}
                    </button>
                  </li>
                </Fragment>
              ))}
            </ul>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 style={groupTitle}>حمل تطبيق نسك لطلب ماء زمزم</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
              <button onClick={v.storeToast} aria-label="App Store" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
                <img src="assets/app-store.svg" alt="App Store" style={{ height: '18px', display: 'block', filter: 'brightness(0) invert(1)' }} />
              </button>
              <button onClick={v.storeToast} aria-label="Google Play" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
                <img src="assets/google-play.svg" alt="Google Play" style={{ height: '18px', display: 'block', filter: 'brightness(0) invert(1)' }} />
              </button>
              <button onClick={v.storeToast} aria-label="AppGallery" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
                <img src="assets/app-gallery.svg" alt="AppGallery" style={{ height: '18px', display: 'block', filter: 'brightness(0) invert(1)' }} />
              </button>
            </div>
          </div>
        </nav>
        <div style={{ height: '1px', background: 'rgba(255,255,255,.3)' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {['حرية المعلومات', 'سياسة الخصوصية', 'الشروط'].map((t) => (
                <button key={t} onClick={v.policyToast} style={{ ...link, textDecoration: 'underline', textUnderlineOffset: '4px' }} className="dga-footlink">
                  {t}
                </button>
              ))}
            </div>
            <span style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 600 }}>جميع الحقوق محفوظة © 2026</span>
          </div>
          <span style={{ fontSize: '14px', lineHeight: '20px', color: 'rgba(255,255,255,.8)' }}>بتجربة رقمية ممكنة من شركة علم</span>
        </div>
      </div>
    </footer>
  );
}
