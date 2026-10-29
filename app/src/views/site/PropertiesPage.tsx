import type { V } from '../../types';

export function PropertiesPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="07 خصائص ماء زمزم" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '1 1 300px', minHeight: '340px', alignSelf: 'stretch', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: '0',
                background: "url('assets/bottle.png') center/contain no-repeat",
                filter: 'drop-shadow(-24px 10px 24px rgba(0,0,0,.22))',
              }}
            />
          </div>
          <div style={{ flex: '1.4 1 460px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px' }}>
            <span
              style={{
                display: 'inline-flex',
                padding: '6px 14px',
                borderRadius: '36px',
                background: 'rgba(130,130,130,.15)',
                boxShadow: 'inset 0 0 0 1px var(--ink)',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '1.08',
                color: 'var(--ink)',
              }}
            >
              SASO
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>المطابقة للمواصفات</h2>
            <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.85', color: 'var(--ink-2)' }}>
              يخضع ماء زمزم للمواصفات القياسية السعودية لمياه الشرب الصادرة عن الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) وتُجرى التحاليل للتحقق من
              المطابقة بشكل دوري.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '12px', width: '100%', marginTop: '8px' }}>
              <div
                style={{
                  borderRadius: '16px',
                  background: 'var(--card)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '14px', color: 'var(--muted)' }}>الفحوص</span>
                <span style={{ fontSize: '18px', color: 'var(--ink)' }}>فيزيائية</span>
              </div>
              <div
                style={{
                  borderRadius: '16px',
                  background: 'var(--card)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '14px', color: 'var(--muted)' }}>الفحوص</span>
                <span style={{ fontSize: '18px', color: 'var(--ink)' }}>كيميائية</span>
              </div>
              <div
                style={{
                  borderRadius: '16px',
                  background: 'var(--card)',
                  boxShadow: 'var(--card-shadow)',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '14px', color: 'var(--muted)' }}>الفحوص</span>
                <span style={{ fontSize: '18px', color: 'var(--ink)' }}>ميكروبيولوجية</span>
              </div>
            </div>
            <button
              onClick={v.go?.quality}
              style={{
                marginTop: '8px',
                height: '40px',
                padding: '7px 24px',
                borderRadius: '9px',
                background: 'transparent',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              className="zp-008"
            >
              اقرأ المزيد: الجودة والسلامة
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
