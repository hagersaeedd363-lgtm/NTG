import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function AboutPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="02 عن المشروع" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
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
              ١٫١ نبذة
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(32px,3.6vw,46px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>
              المنظومة الوطنية المعنيّة بماء زمزم
            </h2>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '18px', lineHeight: '1.75', color: 'var(--ink-2)', textWrap: 'pretty' }}
            >
              <p style={{ margin: '0' }}>
                مشروع خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز لسقيا زمزم هو المنظومة الوطنية المعنيّة بسحب ماء زمزم المبارك من البئر، ومعالجته وتعبئته
                وتوزيعه على ضيوف الرحمن.
              </p>
              <p style={{ margin: '0' }}>
                افتُتح المشروع في عام ١٤٣١هـ / ٢٠١٠م، ليكون امتداداً لمسيرة اهتمام الدولة ببئر زمزم منذ عهد الملك المؤسس، ونقلةً من الجهد اليدوي إلى منظومة
                صناعية متكاملة تعمل على مدار الساعة.
              </p>
              <p style={{ margin: '0' }}>
                نمارس عملنا في نطاقٍ يمتد من فوهة البئر في المسجد الحرام إلى يد كل قاصد، ونلتزم بأن يصل الماء كما خرج: بنفس الطعم، ونفس اللون، ونفس الرائحة،
                ودون أن يُضاف إليه أي مادة كيميائية.
              </p>
            </div>
          </div>
          <div
            style={{
              flex: '1 1 380px',
              minHeight: '360px',
              alignSelf: 'stretch',
              background: 'var(--kaaba-img) center/cover no-repeat',
              borderRadius: '0 161px 0 0',
            }}
          />
        </div>
      </section>
      <section style={{ background: 'var(--bg-alt)', padding: '88px 0' }}>
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
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <span style={{ fontSize: '16px', color: 'var(--gold-2)' }}>الرؤية</span>
            <div style={{ width: '64px', height: '4px', borderRadius: '2px', background: 'var(--gold-soft)' }} />
            <p style={{ margin: '0', fontSize: 'clamp(26px,2.6vw,34px)', fontWeight: '600', lineHeight: '1.4', color: 'var(--ink)' }}>
              نسقي العالم بخير ماء على وجه الارض
            </p>
          </div>
          <div
            style={{
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <span style={{ fontSize: '16px', color: 'var(--gold-2)' }}>الرسالة</span>
            <div style={{ width: '64px', height: '4px', borderRadius: '2px', background: 'var(--gold-soft)' }} />
            <p style={{ margin: '0', fontSize: 'clamp(22px,2.1vw,27px)', fontWeight: '500', lineHeight: '1.55', color: 'var(--ink)' }}>
              نتشرف بالعناية بماء زمزم، وسقايته، ونحكي قصته الخالدة، ونطبق أعلى معايير الجودة والاستدامة
            </p>
          </div>
        </div>
      </section>
      <section id="stake" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', maxWidth: '720px' }}>
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
              ١٫٢
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(32px,3.6vw,46px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>الجهات ذات العلاقة</h2>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
              لا تعمل منظومة زمزم منفردة. تتكامل جهودنا مع عدد من الجهات الوطنية، لكلٍّ منها دور محدد في خدمة ماء زمزم وقاصديه.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
            {list(v.stakeholders).map((s: any, $index: number) => (
              <Fragment key={$index}>
                <div
                  style={{
                    background: 'var(--card)',
                    borderRadius: '24px',
                    boxShadow: 'var(--card-shadow)',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <span style={{ height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '4px' }}>
                    <span
                      role="img"
                      aria-label={s?.name}
                      style={css(`display:var(--show-l);width:${s?.mwA ?? ''};height:${s?.mhA ?? ''};max-width:100%;background:${s?.logoLBg ?? ''}`)}
                    />
                    <span
                      role="img"
                      aria-label={s?.name}
                      style={css(`display:var(--show-d);width:${s?.mwA ?? ''};height:${s?.mhA ?? ''};max-width:100%;background:${s?.logoDBg ?? ''}`)}
                    />
                  </span>
                  <div style={{ width: '64px', height: '4px', borderRadius: '2px', background: 'var(--gold-soft)' }} />
                  <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.4', color: 'var(--ink)' }}>{s?.name}</span>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>{s?.role}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg-deep)', padding: '80px 0' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <h2 style={{ margin: '0', fontSize: 'clamp(28px,3vw,40px)', fontWeight: '700', lineHeight: '1.25' }}>فيلم عن مراحل التصنيع</h2>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: 'rgba(255,255,255,.78)' }}>من فوهة البئر إلى خطوط التعبئة، في دقائق.</p>
            <button
              onClick={v.go?.journey}
              style={{
                height: '40px',
                padding: '7px 28px',
                borderRadius: '9px',
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.2)',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              className="zp-009"
            >
              رحلة ماء زمزم
            </button>
          </div>
          <button
            onClick={v.openVideo}
            aria-label="تشغيل الفيلم"
            style={{
              flex: '1.4 1 420px',
              position: 'relative',
              aspectRatio: '16/9',
              border: '0',
              padding: '0',
              background: '#000',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                position: 'absolute',
                inset: '0',
                background: "url('assets/bottle.png') center 55%/auto 115% no-repeat",
                opacity: '.35',
                filter: 'grayscale(1) brightness(.6)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '72px',
                height: '72px',
                margin: '-36px 0 0 -36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,.14)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
