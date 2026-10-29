import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function BuyPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="15 اقتن ماء زمزم" style={{ background: 'var(--bg)', padding: '80px 0 72px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', maxWidth: '720px' }}>
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
              للأفراد
            </span>
            <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
              يمكنك الحصول على ماء زمزم المبارك عبر القنوات الرسمية المعتمدة داخل المملكة.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
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
              <span style={{ height: '76px', display: 'flex', alignItems: 'center' }}>
                <img src="assets/partner-1.png" alt="" style={{ height: '64px', maxWidth: '180px', objectFit: 'contain', filter: 'var(--logo-filter)' }} />
              </span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)' }}>مطار الملك عبدالعزيز الدولي</span>
              <span style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--ink-2)' }}>صالات المغادرة</span>
            </div>
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
              <span style={{ height: '76px', display: 'flex', alignItems: 'center' }}>
                <img src="assets/partner-2.png" alt="" style={{ height: '64px', maxWidth: '180px', objectFit: 'contain', filter: 'var(--logo-filter)' }} />
              </span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)' }}>كارفور</span>
              <span style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--ink-2)' }}>نقاط بيع مختارة</span>
            </div>
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
              <span style={{ height: '76px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <img
                  src="assets/partner-3.png"
                  alt=""
                  style={{ height: '76px', maxWidth: '160px', objectFit: 'contain', objectPosition: 'top', filter: 'var(--logo-filter)' }}
                />
              </span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)' }}>لولو هايبرماركت</span>
              <span style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--ink-2)' }}>نقاط بيع مختارة</span>
            </div>
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
              <span style={{ height: '76px', display: 'flex', alignItems: 'center', fontSize: '26px', fontWeight: '700', color: 'var(--gold-2)' }}>نسك</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)' }}>تطبيق نسك</span>
              <span style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--ink-2)' }}>اطلب عبر التطبيق واستلم من القنوات المعتمدة</span>
            </div>
          </div>
          <button
            onClick={v.go?.buyMap}
            style={{
              alignSelf: 'flex-start',
              height: '44px',
              padding: '0 28px',
              borderRadius: '9px',
              border: '1px solid rgba(255,255,255,.2)',
              background: '#996C2E',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="zp-002"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
              <circle cx="12" cy="10" r="2.3" />
            </svg>
            اعرض أقرب نقطة بيع
          </button>
        </div>
      </section>
      <section style={{ background: 'var(--bg-alt)', padding: '56px 0 64px' }}>
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
                  inset: '-20px 0 -40px 0',
                  background: "url('assets/bottle.png') 50% 40%/auto 118% no-repeat",
                  transform: 'rotate(-28deg)',
                  filter: 'drop-shadow(-30px 6px 28px rgba(0,0,0,.25))',
                }}
              />
            </div>
            <div style={{ flex: '1 1 440px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <h2 style={{ margin: '0', fontSize: 'clamp(40px,5vw,64px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>اقتن عبوة زمزم</h2>
              <span style={{ fontSize: '24px', lineHeight: '1.3', color: 'var(--ink)' }}>كرتون ماء زمزم (24 عبوة * 330 مل)</span>
              <div style={{ width: '64px', height: '4px', borderRadius: '2px', background: 'var(--gold-soft)' }} />
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
                    >
                      <path d="M3 4h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2" />
                      <circle cx="9.5" cy="19.5" r="1.3" />
                      <circle cx="17" cy="19.5" r="1.3" />
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
      <section id="entities" style={{ background: 'var(--bg)', padding: '72px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)' }}>
          <div
            style={{
              borderRadius: '24px',
              background: '#5E5951',
              color: '#fff',
              padding: 'clamp(28px,4vw,48px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  padding: '6px 14px',
                  borderRadius: '36px',
                  background: 'rgba(130,130,130,.15)',
                  boxShadow: 'inset 0 0 0 1px #fff',
                  fontSize: '14px',
                  fontWeight: '700',
                  lineHeight: '1.08',
                }}
              >
                للجهات
              </span>
              <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.7' }}>تستقبل منصة زمزم الإلكترونية طلبات الجهات الحكومية والخاصة وغير الربحية.</p>
            </div>
            <button
              onClick={v.platform}
              style={{
                height: '52px',
                padding: '0 28px',
                borderRadius: '9px',
                border: '0',
                background: '#fff',
                color: '#070F25',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              منصة زمزم الإلكترونية
            </button>
          </div>
        </div>
      </section>
      <section id="map" style={{ background: 'var(--bg)', padding: '24px 0 96px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px' }}>
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>أقرب نقطة بيع إليك</h2>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
              حدّد موقعك أو ابحث بالمدينة لعرض أقرب نقاط بيع ماء زمزم المعتمدة.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ position: 'relative', flex: '1 1 280px', maxWidth: '460px' }}>
              <input
                data-fillbg="1"
                value={v.mapQ ?? ''}
                onInput={v.onMapQ}
                placeholder="ابحث بالمدينة أو الحي"
                aria-label="ابحث بالمدينة أو الحي"
                style={{
                  width: '100%',
                  height: '46px',
                  padding: '0 46px 0 16px',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  background: 'var(--card)',
                  color: 'var(--ink)',
                  fontSize: '16px',
                  outline: 'none',
                }}
                className="zp-017"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                style={{ position: 'absolute', right: '16px', top: '17px', color: 'var(--muted)' }}
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M20 20l-4.2-4.2" />
              </svg>
            </div>
            <button
              onClick={v.locate}
              style={{
                height: '52px',
                padding: '0 20px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                background: 'var(--card)',
                color: 'var(--ink)',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              className="zp-008"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="12" r="8" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
              </svg>
              استخدم موقعي الحالي
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'stretch' }}>
            <div style={{ flex: '1 1 320px', maxHeight: '520px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {list(v.points).map((p: any, $index: number) => (
                <Fragment key={$index}>
                  <button
                    onClick={p?.onClick}
                    style={css(
                      `text-align:right;border:0;border-radius:16px;background:var(--card);box-shadow:var(--card-shadow),inset 0 0 0 1.5px ${p?.bd ?? ''};padding:18px 20px;display:flex;align-items:center;gap:14px;cursor:pointer;color:var(--ink)`,
                    )}
                  >
                    <span
                      style={{
                        width: '40px',
                        height: '40px',
                        flexShrink: '0',
                        borderRadius: '50%',
                        background: 'var(--card-2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold-2)',
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
                        <circle cx="12" cy="10" r="2.3" />
                      </svg>
                    </span>
                    <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '600' }}>{p?.name}</span>
                      <span style={{ fontSize: '14px', color: 'var(--muted)' }}>
                        {p?.sub} · {p?.city}
                      </span>
                    </span>
                    {p?.showD ? (
                      <>
                        <span style={{ fontSize: '14px', color: 'var(--gold-2)', whiteSpace: 'nowrap' }}>{p?.d}</span>
                      </>
                    ) : null}
                  </button>
                </Fragment>
              ))}
              {v.noPoints ? (
                <>
                  <div
                    style={{
                      padding: '32px',
                      textAlign: 'center',
                      borderRadius: '16px',
                      boxShadow: 'inset 0 0 0 1px var(--line)',
                      color: 'var(--muted)',
                      fontSize: '16px',
                    }}
                  >
                    لا توجد نقاط بيع مطابقة. جرّب مدينة أخرى.
                  </div>
                </>
              ) : null}
            </div>
            <div
              style={{
                flex: '1.6 1 440px',
                minHeight: '360px',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'repeating-linear-gradient(45deg,var(--ph-a) 0 12px,var(--ph-b) 12px 24px)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <span style={{ position: 'absolute', top: '16px', right: '18px', fontFamily: 'ui-monospace,monospace', fontSize: '12px', color: 'var(--muted)' }}>
                خريطة تفاعلية
              </span>
              {list(v.points).map((p: any, $index: number) => (
                <Fragment key={$index}>
                  <button
                    onClick={p?.onClick}
                    aria-label={p?.name}
                    style={css(
                      `position:absolute;left:${p?.left ?? ''};top:${p?.top ?? ''};width:${p?.size ?? ''};height:${p?.size ?? ''};transform:translate(-50%,-50%);border-radius:50%;border:2px solid var(--card);background:${p?.pin ?? ''};padding:0;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.25);transition:all .2s`,
                    )}
                  />
                </Fragment>
              ))}
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  bottom: '16px',
                  right: '16px',
                  maxWidth: '360px',
                  borderRadius: '16px',
                  background: 'var(--card)',
                  boxShadow: 'var(--card-shadow),0 10px 30px rgba(0,0,0,.12)',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '17px', fontWeight: '600', color: 'var(--ink)' }}>{v.selected?.name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    {v.selected?.sub} · {v.selected?.city}
                  </span>
                </span>
                <button
                  onClick={v.directions}
                  style={{
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '9px',
                    border: '0',
                    background: '#996C2E',
                    color: '#fff',
                    fontSize: '15px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  الاتجاهات
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg-deep)', color: '#fff', padding: '80px 0' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                padding: '6px 14px',
                borderRadius: '36px',
                background: 'rgba(130,130,130,.15)',
                boxShadow: 'inset 0 0 0 1px #fff',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '1.08',
              }}
            >
              الشحن والنقل
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2' }}>نقل ماء زمزم معك</h2>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.75', color: 'rgba(255,255,255,.8)' }}>
              إذا كنت تنوي حمل ماء زمزم معك في سفرك، تسري عليه ضوابط النقل الجوي المعتمدة.
            </p>
          </div>
          <button
            onClick={v.go?.faq}
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
            الأسئلة الشائعة
          </button>
        </div>
      </section>
    </>
  );
}
