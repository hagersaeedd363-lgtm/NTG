import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function HomePage({ v }: { v: V }) {
  return (
    <>
      <section
        data-screen-label="01 الرئيسية"
        style={{
          position: 'relative',
          minHeight: 'max(680px,100vh)',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--hero-img) 30% 12%/cover no-repeat',
          color: '#fff',
        }}
      >
        <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(270deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.15) 55%,rgba(0,0,0,0) 100%)' }} />
        <div style={{ position: 'absolute', inset: '0 0 auto 0', height: '140px', background: 'linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,0))' }} />
        {v.desktop ? (
          <>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 'max(24px,calc(50% - 680px))',
                top: '182px',
                width: '278px',
                height: '489px',
                background: "url('assets/bottle.png') 50% 57.37%/102.613% 152.005% no-repeat,url('assets/bottle-2.png') 50% 57.37%/102.613% 152.005% no-repeat",
                filter: 'drop-shadow(-15px 6px 15px rgba(0,0,0,.25))',
                animation: 'zzfade 1s ease both',
              }}
            />
          </>
        ) : null}
        <button
          onClick={v.film?.global}
          aria-label="تشغيل فيلم عالمية زمزم"
          style={{
            position: 'absolute',
            zIndex: '2',
            bottom: '28px',
            left: 'max(24px,calc(50% - 728px))',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            height: '44px',
            padding: '0 8px 0 18px',
            borderRadius: '36px',
            border: '0',
            background: 'rgba(0,0,0,.35)',
            backdropFilter: 'blur(8px)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.35)',
            color: '#fff',
            fontSize: '15px',
            cursor: 'pointer',
          }}
          className="zp-006"
        >
          <span
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#fff',
              color: '#0C0D0E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          عالمية زمزم — فيلم دعائي
        </button>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1520px', margin: '0 auto', padding: '120px clamp(16px,2.5vw,32px) 80px' }}>
          <div
            style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px', animation: 'zzfade .8s ease both' }}
          >
            <span style={{ fontSize: '24px', lineHeight: '1.08' }}>من مكة المكرمة</span>
            <h1 style={{ margin: '0', fontSize: 'clamp(40px,4.6vw,58px)', fontWeight: '600', lineHeight: '1.35', textWrap: 'balance' }}>
              زمزم .. من قلب البئر الى قلب الانسان
            </h1>
            <p style={{ margin: '0', fontSize: 'clamp(18px,1.7vw,22px)', lineHeight: '1.55', color: 'rgba(255,255,255,.92)', textWrap: 'pretty' }}>
              من بئرٍ في جوف المسجد الحرام، لم ينقطع ماؤها منذ آلاف السنين، إلى يد كل قاصدٍ لبيت الله. منظومةٌ متكاملة تسحب وتعالج وتعبّئ وتوزّع ماء زمزم
              المبارك، بمعايير تليق بمكانته.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
              <button
                onClick={v.go?.buy}
                style={{
                  height: '40px',
                  padding: '7px 28px',
                  borderRadius: '9px',
                  background: '#EFEDEA',
                  border: '1px solid rgba(255,255,255,.2)',
                  color: '#0C0D0E',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '24px',
                  cursor: 'pointer',
                }}
                className="zp-007"
              >
                اقتنِ ماء زمزم
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ position: 'relative', background: 'var(--bg)', padding: '88px 0 0', overflow: 'hidden' }}>
        <div
          style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '420px', background: 'var(--callig-img) left bottom/auto 100% repeat-x' }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
            textAlign: 'center',
          }}
        >
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
            مشروع خادم الحرمين الشريفين لسقيا زمزم
          </span>
          <span
            role="img"
            aria-label="شعار مشروع سقيا زمزم"
            style={{
              display: 'block',
              width: 'min(488px,86vw)',
              aspectRatio: '488/116.8',
              background: "url('assets/logo-lg-gold.svg') center/contain no-repeat",
            }}
          />
          <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(30px,3.6vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>
            الجهة الرسمية المعنيّة بماء زمزم
          </h2>
          <div
            style={{
              maxWidth: '860px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'var(--ink-2)',
              textWrap: 'pretty',
            }}
          >
            <p style={{ margin: '0' }}>
              مشروع خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز لسقيا زمزم هو الجهة المسؤولة عن سحب ماء زمزم المبارك من البئر، ومعالجته وتعبئته وتوزيعه على
              ضيوف الرحمن داخل الحرمين الشريفين وخارجهما.
            </p>
            <p style={{ margin: '0' }}>
              نعمل ضمن منظومة وطنية تضم عدداً من الجهات ذات العلاقة، وتحت إشرافٍ يضمن أن يصل الماء إلى قاصديه بالنقاء الذي خرج به من البئر، ودون أن يُضاف إليه
              أو يُنتقص منه شيء.
            </p>
          </div>
          <button
            onClick={v.go?.about}
            style={{
              height: '40px',
              padding: '7px 32px',
              borderRadius: '9px',
              background: '#996C2E',
              border: '1px solid rgba(255,255,255,.2)',
              color: '#fff',
              fontSize: '16px',
              lineHeight: '24px',
              cursor: 'pointer',
            }}
            className="zp-002"
          >
            تعرّف أكثر
          </button>
          <button
            onClick={v.openVideo}
            aria-label="تشغيل فيلم مراحل التصنيع"
            style={{
              position: 'relative',
              margin: '36px 0 96px',
              width: '100%',
              maxWidth: '800px',
              aspectRatio: '950/563',
              border: '0',
              padding: '0',
              background: '#000',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'block',
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
            <span style={{ position: 'absolute', inset: '0', background: 'radial-gradient(60% 70% at 50% 50%,rgba(104,93,73,.35),rgba(0,0,0,0))' }} />
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '76px',
                height: '76px',
                margin: '-38px 0 0 -38px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,.14)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(6px)',
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span style={{ position: 'absolute', bottom: '22px', right: '26px', color: 'rgba(255,255,255,.8)', fontSize: '16px' }}>فيلم عن مراحل التصنيع</span>
          </button>
        </div>
      </section>
      <section
        data-screen-label="قصة زمزم - تمهيد"
        style={{ background: 'var(--bg-alt)', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', overflow: 'hidden' }}
      >
        <div
          style={{
            flex: '1 1 440px',
            padding: '80px max(clamp(16px,2.5vw,32px),calc(50% - 728px)) 80px clamp(24px,4vw,56px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '22px',
          }}
        >
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
            قصة زمزم
          </span>
          <h2 style={{ margin: '0', fontSize: 'clamp(34px,3.8vw,48px)', fontWeight: '700', lineHeight: '1.15', color: 'var(--ink)', maxWidth: '600px' }}>
            قصةٌ بدأت قبل أربعة آلاف عام
          </h2>
          <div
            style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '19px', lineHeight: '1.65', color: 'var(--ink-2)' }}
          >
            <p style={{ margin: '0' }}>
              حين تُرك إسماعيل عليه السلام رضيعاً مع أمه هاجر في وادٍ غير ذي زرع، وسعت بين الصفا والمروة سبعاً بحثاً عن الماء، تفجّرت زمزم. ومنذ ذلك اليوم لم
              تنقطع.
            </p>
            <p style={{ margin: '0' }}>
              طُمرت واندثر أثرها قروناً، ثم أُعيد حفرها. عظّمها العرب قبل الإسلام، وشرب منها النبي ﷺ، وحملها الصحابة إلى الآفاق، وتعاقب على خدمتها الخلفاء
              والملوك.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
            <button
              onClick={v.go?.story}
              style={{
                height: '40px',
                padding: '7px 32px',
                borderRadius: '9px',
                background: '#996C2E',
                border: '1px solid rgba(255,255,255,.2)',
                color: '#fff',
                fontSize: '16px',
                lineHeight: '24px',
                cursor: 'pointer',
              }}
              className="zp-002"
            >
              تعرّف أكثر
            </button>
            <button
              onClick={v.film?.hagar}
              style={{
                height: '40px',
                padding: '7px 22px',
                borderRadius: '9px',
                background: 'transparent',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
                fontSize: '16px',
                lineHeight: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              className="zp-008"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
              شاهد الفيلم (٣:٣٧)
            </button>
          </div>
        </div>
        <div style={{ flex: '1 1 420px', minHeight: '340px', background: 'var(--kaaba-img) center/cover no-repeat', borderRadius: '0 161px 0 0' }} />
      </section>
      <section data-screen-label="أفلام زمزم" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
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
                المكتبة المرئية
              </span>
              <h2 style={{ margin: '0', fontSize: 'clamp(32px,3.6vw,46px)', fontWeight: '700', lineHeight: '1.3', color: 'var(--ink)' }}>أفلام زمزم</h2>
            </div>
            <button
              onClick={v.go?.gallery}
              style={{
                height: '40px',
                padding: '7px 24px',
                borderRadius: '9px',
                background: 'transparent',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              className="zp-008"
            >
              كل المواد المرئية
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <button
              onClick={v.film?.hagar}
              aria-label="تشغيل فيلم السيدة هاجر ونشأة البئر"
              style={{
                flex: '2 1 520px',
                minWidth: '0',
                position: 'relative',
                minHeight: '360px',
                border: '0',
                padding: '0',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'var(--kaaba-img) center/cover no-repeat',
                cursor: 'pointer',
                textAlign: 'right',
                color: '#fff',
              }}
            >
              <span style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,0,0,.8) 0%,rgba(0,0,0,.15) 60%)' }} />
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '84px',
                  height: '84px',
                  margin: '-42px 0 0 -42px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,.16)',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.6)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
              <span style={{ position: 'absolute', right: '28px', left: '28px', bottom: '26px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                  <span style={{ padding: '4px 12px', borderRadius: '36px', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.7)' }}>فيلم درامي</span>
                  <span style={{ padding: '4px 12px', borderRadius: '36px', background: 'rgba(0,0,0,.4)' }}>٣:٣٧</span>
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: '700', lineHeight: '1.45' }}>
                  السيدة هاجر ونشأة البئر
                </span>
              </span>
            </button>
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '0' }}>
              <button
                onClick={v.openVideo}
                aria-label="تشغيل فيلم مراحل التصنيع"
                style={{
                  flex: '1',
                  position: 'relative',
                  minHeight: '168px',
                  border: '0',
                  padding: '0',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#000',
                  cursor: 'pointer',
                  textAlign: 'right',
                  color: '#fff',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: "url('assets/bottle.png') center 55%/auto 125% no-repeat",
                    opacity: '.45',
                    filter: 'grayscale(1) brightness(.7)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '22px',
                    left: '22px',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,.16)',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
                <span style={{ position: 'absolute', right: '22px', left: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.75)' }}>برومو دعائي</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', lineHeight: '1.5' }}>فيلم عن مراحل التصنيع</span>
                </span>
              </button>
              <button
                onClick={v.film?.global}
                aria-label="تشغيل فيلم عالمية زمزم"
                style={{
                  flex: '1',
                  position: 'relative',
                  minHeight: '168px',
                  border: '0',
                  padding: '0',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'var(--hero-img) 30% 12%/cover no-repeat',
                  cursor: 'pointer',
                  textAlign: 'right',
                  color: '#fff',
                }}
              >
                <span style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(0,0,0,.75),rgba(0,0,0,.1))' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '22px',
                    left: '22px',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,.16)',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
                <span style={{ position: 'absolute', right: '22px', left: '22px', bottom: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.75)' }}>أفلام دعائية</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', lineHeight: '1.5' }}>عالمية زمزم</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        data-screen-label="بالأرقام"
        style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-deep)', color: '#fff', padding: '96px 0' }}
      >
        <div
          style={{
            position: 'absolute',
            width: '1100px',
            height: '980px',
            left: '-420px',
            top: '-240px',
            background: 'radial-gradient(closest-side,rgba(104,93,73,.9),rgba(0,0,0,0))',
            opacity: '.7',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '1100px',
            height: '980px',
            right: '-520px',
            bottom: '-560px',
            background: 'radial-gradient(closest-side,rgba(104,93,73,.9),rgba(0,0,0,0))',
            opacity: '.6',
          }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              padding: '6px 14px',
              borderRadius: '36px',
              background: 'rgba(130,130,130,.15)',
              boxShadow: 'inset 0 0 0 1px #fff',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '1.08',
            }}
          >
            بالأرقام
          </span>
          <h2 style={{ margin: '0', fontSize: 'clamp(34px,4vw,55px)', fontWeight: '700', lineHeight: '1.08' }}>أثر يمتد بخدمة ماء زمزم</h2>
          <p style={{ margin: '0', maxWidth: '520px', fontSize: '17px', lineHeight: '1.6', color: 'rgba(255,255,255,.8)' }}>
            نعمل يوميًا على إيصال بركة ماء زمزم عبر منظومة متكاملة تضمن النقاء، وتحفظ الأصالة، وتُيسّر الوصول.
          </p>
          <div style={{ width: '100%', marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '48px 24px' }}>
            {list(v.homeStats).map((s: any, $index: number) => (
              <Fragment key={$index}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: 'clamp(40px,4.4vw,60px)', lineHeight: '1.08', whiteSpace: 'nowrap' }}>{s?.v}</span>
                  <span style={{ fontSize: '18px', lineHeight: '1.45', color: 'rgba(255,255,255,.78)', maxWidth: '220px' }}>{s?.l}</span>
                </div>
              </Fragment>
            ))}
          </div>
          <button
            onClick={v.go?.stats}
            style={{
              marginTop: '48px',
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
            كل المؤشرات
          </button>
        </div>
      </section>
      <section data-screen-label="رحلة ماء زمزم - تمهيد" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', maxWidth: '620px' }}>
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
                رحلة ماء زمزم
              </span>
              <h2 style={{ margin: '0', fontSize: 'clamp(34px,3.8vw,48px)', fontWeight: '700', lineHeight: '1.15', color: 'var(--ink)' }}>من البئر إلى يديك</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
                لا يصل ماء زمزم إلى ضيف الرحمن صدفةً. بين البئر واليد ستّ محطات، تمرّ فيها كل قطرة تحت رقابةٍ متصلة لا تتوقف على مدار الساعة
              </p>
            </div>
            <button
              onClick={v.go?.journey}
              style={{
                height: '40px',
                padding: '7px 32px',
                borderRadius: '9px',
                background: '#996C2E',
                border: '1px solid rgba(255,255,255,.2)',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              className="zp-002"
            >
              الرحلة كاملة
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
            {list(v.stationCards).map((s: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  onClick={v.go?.journey}
                  style={{
                    textAlign: 'right',
                    background: 'var(--card)',
                    border: '0',
                    borderRadius: '24px',
                    boxShadow: 'var(--card-shadow)',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    cursor: 'pointer',
                    color: 'var(--ink)',
                    transition: 'transform .2s',
                  }}
                  className="zp-010"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>{s?.title}</span>
                    <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>المحطة {s?.n}</span>
                  </div>
                  <div style={{ width: '64px', height: '4px', borderRadius: '2px', background: 'var(--gold-soft)' }} />
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)' }}>{s?.short}</p>
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section data-screen-label="خدماتنا" style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '44px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
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
              خدماتنا
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(34px,3.8vw,48px)', fontWeight: '700', lineHeight: '1.15', color: 'var(--ink)' }}>خدمات سقيا زمزم</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px' }}>
            {list(v.services).map((s: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  onClick={s?.onClick}
                  style={{
                    textAlign: 'right',
                    background: 'var(--card)',
                    border: '0',
                    borderRadius: '24px',
                    boxShadow: 'var(--card-shadow)',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    cursor: 'pointer',
                    color: 'var(--ink)',
                    minHeight: '190px',
                    transition: 'transform .2s',
                  }}
                  className="zp-010"
                >
                  <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>{s?.n}</span>
                  <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '1.3' }}>{s?.t}</span>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)', flex: '1' }}>{s?.d}</p>
                  <span style={{ fontSize: '15px', color: 'var(--gold-2)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {s?.cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M15 6l-6 6 6 6" />
                    </svg>
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="buy-pack" data-screen-label="اقتن عبوة زمزم" style={{ background: 'var(--bg-alt)', padding: '0 0 64px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              background: 'var(--card)',
              boxShadow: 'var(--card-shadow)',
              display: 'flex',
              flexWrap: 'wrap-reverse',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <div style={{ flex: '1 1 300px', minHeight: '280px', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '240px',
                  height: '560px',
                  margin: '-280px 0 0 -120px',
                  background: "url('assets/bottle.png') 50% 50%/contain no-repeat",
                  transform: 'rotate(-28deg)',
                  filter: 'drop-shadow(-30px 6px 28px rgba(0,0,0,.25))',
                }}
              />
            </div>
            <div style={{ flex: '1 1 440px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <h2 style={{ margin: '0', fontSize: 'clamp(40px,5vw,64px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>اقتن عبوة زمزم</h2>
              <span style={{ fontSize: '24px', lineHeight: '1.3', color: 'var(--ink)' }}>كرتون ماء زمزم (24 عبوة * 330 مل)</span>
              <div style={{ width: '64px', height: '4px', borderRadius: '2px', background: 'var(--gold-soft)' }} />
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: 'var(--muted)' }}>
                زمزم... معجزة جعلها الله لأمة محمد ﷺ ، الآن على بعد <span style={{ color: 'var(--gold-2)' }}>نقرة زر.</span>
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start', marginTop: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      height: '52px',
                      width: '270px',
                      maxWidth: '100%',
                      borderRadius: '9px',
                      background: 'var(--card-2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '4px 8px',
                      boxShadow: 'inset 0 0 0 1px var(--line)',
                    }}
                  >
                    <button
                      onClick={v.qtyInc}
                      aria-label="زيادة"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        border: '0',
                        background: 'var(--card)',
                        boxShadow: 'var(--card-shadow)',
                        color: 'var(--ink)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                    <span style={css(`flex:1;text-align:center;font-size:22px;color:${v.qtyColor ?? ''}`)}>{v.qty}</span>
                    <button
                      onClick={v.qtyDec}
                      aria-label="إنقاص"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        border: '0',
                        background: 'var(--card)',
                        boxShadow: 'var(--card-shadow)',
                        color: 'var(--ink)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                  </div>
                  <span style={{ fontSize: '16px', color: 'var(--gold-2)' }}>صندوق</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button
                    onClick={v.buyNow}
                    style={{
                      height: '52px',
                      padding: '0 22px',
                      borderRadius: '9px',
                      border: '1px solid rgba(255,255,255,.2)',
                      background: '#A47C1C',
                      color: '#fff',
                      fontSize: '17px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                    className="zp-011"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="9" cy="20" r="1.5" />
                      <circle cx="18" cy="20" r="1.5" />
                      <path d="M3 4h2.5l2.2 11h10.6l1.7-8H6.2" />
                    </svg>
                    اقتن ماء زمزم الآن
                  </button>
                  <span style={{ fontSize: '14px', color: 'var(--danger)', minHeight: '18px' }}>{v.qtyErr}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-screen-label="قنوات توفر أخرى" style={{ background: 'var(--bg)', padding: '72px 0' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: '0', fontSize: '37px', fontWeight: '700', lineHeight: '1.08', color: 'var(--ink)' }}>قنوات توفر أخرى</h2>
          <p style={{ margin: '0', maxWidth: '910px', fontSize: '19px', lineHeight: '1.5', color: 'var(--muted)' }}>
            يتوفر ماء زمزم في صالات المغادرة في مطار الملك عبدالعزيز الدولي أو في نقاط بيع مختارة مثل كارفور ولولو هايبرماركت.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '40px 120px', marginTop: '16px' }}>
            <img
              src="assets/partner-1.png"
              alt="مطار الملك عبدالعزيز الدولي"
              style={{ width: '177px', height: '71px', objectFit: 'contain', filter: 'var(--logo-filter)' }}
            />
            <img src="assets/partner-2.png" alt="كارفور" style={{ width: '212px', height: '76px', objectFit: 'contain', filter: 'var(--logo-filter)' }} />
            <img
              src="assets/partner-3.png"
              alt="لولو هايبرماركت"
              style={{ width: '171px', height: '92px', objectFit: 'contain', objectPosition: 'top', filter: 'var(--logo-filter)' }}
            />
          </div>
          <button
            onClick={v.go?.buy}
            style={{
              marginTop: '12px',
              height: '40px',
              padding: '7px 28px',
              borderRadius: '9px',
              background: 'transparent',
              border: '1px solid var(--line)',
              color: 'var(--ink)',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            className="zp-008"
          >
            اعرض أقرب نقطة بيع
          </button>
        </div>
      </section>
      <section data-screen-label="التحقق من المنتج الأصلي - تمهيد" style={{ background: 'var(--bg-alt)', padding: '80px 0' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
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
              التحقق من المنتج الأصلي
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>
              تأكّد أنك تشرب ماء زمزم الأصلي
            </h2>
            <p style={{ margin: '0', maxWidth: '640px', fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
              ماء زمزم لا يُعبَّأ إلا في منشآت المشروع، ولا يُوزَّع إلا عبر قنوات معتمدة. أي عبوة تحمل اسم زمزم خارج هذه القنوات لا نضمن مصدرها ولا محتواها.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={v.go?.verify}
              style={{
                height: '40px',
                padding: '7px 28px',
                borderRadius: '9px',
                background: '#996C2E',
                border: '1px solid rgba(255,255,255,.2)',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              className="zp-002"
            >
              كيف تتحقق
            </button>
            <button
              onClick={v.go?.verifyReport}
              style={{
                height: '40px',
                padding: '7px 24px',
                borderRadius: '9px',
                background: 'transparent',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              className="zp-008"
            >
              بلّغ عن منتج مشتبه به
            </button>
          </div>
        </div>
      </section>
      <section data-screen-label="آخر الأخبار" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
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
                المركز الإعلامي
              </span>
              <h2 style={{ margin: '0', fontSize: 'clamp(34px,3.8vw,48px)', fontWeight: '700', lineHeight: '1.15', color: 'var(--ink)' }}>آخر الأخبار</h2>
            </div>
            <button
              onClick={v.go?.news}
              style={{
                height: '40px',
                padding: '7px 24px',
                borderRadius: '9px',
                background: 'transparent',
                border: '1px solid var(--line)',
                color: 'var(--ink)',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              className="zp-008"
            >
              كل الأخبار
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '24px' }}>
            {list(v.latestNews).map((n: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  onClick={n?.onClick}
                  style={{
                    textAlign: 'right',
                    background: 'var(--card)',
                    border: '0',
                    borderRadius: '24px',
                    boxShadow: 'var(--card-shadow)',
                    padding: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    color: 'var(--ink)',
                    transition: 'transform .2s',
                  }}
                  className="zp-010"
                >
                  <span style={css(`position:relative;display:block;width:100%;aspect-ratio:16/9;background:${n?.img ?? ''}`)}>
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        padding: '5px 12px',
                        borderRadius: '36px',
                        background: 'rgba(12,13,14,.62)',
                        backdropFilter: 'blur(6px)',
                        color: '#fff',
                        fontSize: '13px',
                      }}
                    >
                      {n?.cat}
                    </span>
                  </span>
                  <span style={{ flex: '1', padding: '18px 20px 18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <span style={{ flex: '1', fontSize: '18px', fontWeight: '700', lineHeight: '1.55' }}>{n?.title}</span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        paddingTop: '14px',
                        borderTop: '1px solid var(--line)',
                        fontSize: '14px',
                        color: 'var(--muted)',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                          <rect x="4" y="5" width="16" height="15" rx="2" />
                          <path d="M4 10h16M9 3v4M15 3v4" />
                        </svg>
                        {n?.dateH}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold-2)' }}>
                        اقرأ الخبر
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M15 6l-6 6 6 6" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section data-screen-label="الشركاء والجهات ذات العلاقة" style={{ background: 'var(--bg-alt)', padding: '88px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
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
              منظومة وطنية
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>
              الشركاء والجهات ذات العلاقة
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px' }}>
            {list(v.stakeholders).map((s: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  onClick={v.go?.aboutStake}
                  aria-label={s?.name}
                  style={{
                    border: '0',
                    borderRadius: '18px',
                    background: 'var(--card)',
                    boxShadow: 'var(--card-shadow)',
                    padding: '20px 16px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: 'var(--ink)',
                    transition: 'transform .2s,box-shadow .2s',
                  }}
                  className="zp-012"
                >
                  <span style={{ width: '100%', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span
                      role="img"
                      aria-label=""
                      style={css(`display:var(--show-l);width:${s?.mw ?? ''};height:${s?.mh ?? ''};max-width:100%;background:${s?.logoLBg ?? ''}`)}
                    />
                    <span
                      role="img"
                      aria-label=""
                      style={css(`display:var(--show-d);width:${s?.mw ?? ''};height:${s?.mh ?? ''};max-width:100%;background:${s?.logoDBg ?? ''}`)}
                    />
                  </span>
                  <span
                    style={{
                      width: '100%',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--line)',
                      fontSize: '15px',
                      lineHeight: '1.55',
                      fontWeight: '500',
                      color: 'var(--ink-2)',
                      textWrap: 'balance',
                    }}
                  >
                    {s?.name}
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      <section data-screen-label="الأسئلة الشائعة - مختصر" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
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
              الأسئلة الشائعة
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(34px,3.8vw,48px)', fontWeight: '700', lineHeight: '1.15', color: 'var(--ink)' }}>
              إجابات مباشرة لأكثر ما يُسأل عنه
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {list(v.topFaq).map((f: any, $index: number) => (
              <Fragment key={$index}>
                <div style={{ borderRadius: '15px 9px 15px 15px', background: 'var(--card)', boxShadow: 'var(--card-shadow)', overflow: 'hidden' }}>
                  <button
                    onClick={f?.onClick}
                    aria-expanded={f?.open}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: '0',
                      padding: '22px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      textAlign: 'right',
                      cursor: 'pointer',
                      color: 'var(--ink)',
                      fontSize: '20px',
                      lineHeight: '1.4',
                    }}
                  >
                    <span>{f?.q}</span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      style={css(`flex-shrink:0;transition:transform .25s;transform:${f?.rot ?? ''}`)}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {f?.open ? (
                    <>
                      <p
                        style={{
                          margin: '0',
                          padding: '0 20px 22px',
                          fontSize: '17px',
                          lineHeight: '1.75',
                          color: 'var(--ink-2)',
                          animation: 'zzfade .2s ease both',
                        }}
                      >
                        {f?.a}
                      </p>
                    </>
                  ) : null}
                </div>
              </Fragment>
            ))}
          </div>
          <button
            onClick={v.go?.faq}
            style={{
              alignSelf: 'center',
              height: '40px',
              padding: '7px 28px',
              borderRadius: '9px',
              background: '#996C2E',
              border: '1px solid rgba(255,255,255,.2)',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            className="zp-002"
          >
            كل الأسئلة
          </button>
        </div>
      </section>
    </>
  );
}
