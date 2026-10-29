import type { V } from '../../types';

export function CertsPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="11 الاعتمادات والشهادات" style={{ background: 'var(--bg)', padding: '48px 0 96px' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '24px',
          }}
        >
          <div
            style={{
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: '26px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <span
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                boxShadow: 'inset 0 0 0 1.5px var(--gold-3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ui-monospace,monospace',
                fontSize: '12px',
                color: 'var(--gold-2)',
              }}
            >
              ISO
            </span>
            <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }} dir="ltr">
              ISO/IEC 17025
            </span>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
              يعمل المختبر المركزي وفق معايير الاعتماد الدولية (ISO/IEC 17025) لكفاءة مختبرات الفحص والمعايرة.
            </p>
          </div>
          <div
            style={{
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: '26px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <span
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                boxShadow: 'inset 0 0 0 1.5px var(--gold-3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ui-monospace,monospace',
                fontSize: '12px',
                color: 'var(--gold-2)',
              }}
            >
              SASO
            </span>
            <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }}>المواصفات القياسية السعودية لمياه الشرب</span>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
              يخضع ماء زمزم للمواصفات الصادرة عن الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)، وتُجرى التحاليل للتحقق من المطابقة بشكل دوري.
            </p>
          </div>
          <div
            style={{
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: '26px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <span
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                boxShadow: 'inset 0 0 0 1.5px var(--gold-3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ui-monospace,monospace',
                fontSize: '12px',
                color: 'var(--gold-2)',
              }}
            >
              PT
            </span>
            <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }}>اختبارات الكفاءة الخارجية</span>
            <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
              مقارنات وتحقّق خارجي بالتعاون مع مختبرات معتمدة محلياً ودولياً، بما يعزز موثوقية النتائج ودقة الأداء.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
