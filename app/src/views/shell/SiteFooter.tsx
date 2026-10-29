import { Fragment } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';

export function SiteFooter({ v }: { v: V }) {
  return (
    <>
      <footer style={{ background: '#000', color: '#fff', padding: '83px 0 48px' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <button onClick={v.go?.home} aria-label="الرئيسية" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
            <span style={{ display: 'block', width: '212px', height: '51px', background: "url('assets/logo-sm-gold.svg') center/contain no-repeat" }} />
          </button>
          <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px 32px' }}>
            {list(v.footerLinks).map((l: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  onClick={l?.onClick}
                  style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.72)', fontSize: '16px', cursor: 'pointer' }}
                  className="zp-000"
                >
                  {l?.label}
                </button>
              </Fragment>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.8)' }}>حمل تطبيق نسك لطلب ماء زمزم</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              <button onClick={v.storeToast} aria-label="App Store" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
                <img src="assets/app-store.svg" alt="App Store" style={{ height: '40px', display: 'block' }} />
              </button>
              <button onClick={v.storeToast} aria-label="Google Play" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
                <img src="assets/google-play.svg" alt="Google Play" style={{ height: '40px', display: 'block' }} />
              </button>
              <button onClick={v.storeToast} aria-label="AppGallery" style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer' }}>
                <img src="assets/app-gallery.svg" alt="AppGallery" style={{ height: '40px', display: 'block' }} />
              </button>
            </div>
          </div>
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,.18)' }} />
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              fontSize: '14px',
              color: 'rgba(255,255,255,.7)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              <button
                onClick={v.policyToast}
                style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.7)', fontSize: '14px', cursor: 'pointer' }}
                className="zp-000"
              >
                حرية المعلومات
              </button>
              <button
                onClick={v.policyToast}
                style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.7)', fontSize: '14px', cursor: 'pointer' }}
                className="zp-000"
              >
                سياسة الخصوصية
              </button>
              <button
                onClick={v.policyToast}
                style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.7)', fontSize: '14px', cursor: 'pointer' }}
                className="zp-000"
              >
                الشروط
              </button>
            </div>
            <span>جميع الحقوق محفوظة © 2026</span>
            <span>بتجربة رقمية ممكنة من شركة علم</span>
          </div>
        </div>
      </footer>
    </>
  );
}
