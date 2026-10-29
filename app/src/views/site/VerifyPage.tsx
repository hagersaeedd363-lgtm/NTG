import type { V } from '../../types';

export function VerifyPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="08 التحقق من المنتج الأصلي" style={{ background: 'var(--bg)', padding: '96px 0 72px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>لماذا هذه الصفحة</h2>
          <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.85', color: 'var(--ink-2)' }}>
            تظهر في السوق عبوات تحمل اسم زمزم أو ما يشبهه، لم تُعبَّأ في منشآت المشروع ولا تخضع لرقابته. نحن لا نضمن مصدر هذه العبوات ولا محتواها، ولا نتحمل
            مسؤولية ما ينتج عنها.
          </p>
        </div>
      </section>
      <section style={{ background: 'var(--bg)', padding: '0 0 96px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <h2 style={{ margin: '0', fontSize: 'clamp(28px,3vw,40px)', fontWeight: '700', color: 'var(--ink)' }}>كيف تتحقق</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '20px' }}>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  boxShadow: 'inset 0 0 0 1.5px var(--gold-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-2)',
                  fontSize: '18px',
                }}
              >
                ١
              </span>
              <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--ink)' }}>القناة</span>
              <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                اشترِ من القنوات الرسمية المعتمدة فقط. القائمة الكاملة في صفحة{' '}
                <a href="#buy" onClick={v.go?.buy}>
                  "اقتنِ ماء زمزم"
                </a>
                .
              </p>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  boxShadow: 'inset 0 0 0 1.5px var(--gold-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-2)',
                  fontSize: '18px',
                }}
              >
                ٢
              </span>
              <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--ink)' }}>العبوة</span>
              <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>تحقّق من مطابقة العبوة والغطاء والملصق للشكل المعتمد.</p>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  boxShadow: 'inset 0 0 0 1.5px var(--gold-3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-2)',
                  fontSize: '18px',
                }}
              >
                ٣
              </span>
              <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--ink)' }}>البيانات</span>
              <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                يجب أن تحمل العبوة اسم الجهة والرقم التسلسلي، وتاريخ الإنتاج والانتهاء.
              </p>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  boxShadow: 'inset 0 0 0 1.5px var(--danger)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--danger)',
                  fontSize: '18px',
                }}
              >
                !
              </span>
              <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--ink)' }}>عند الشك</span>
              <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>لا تشترِ، وبلّغنا.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="report" style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
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
              بلاغ
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>
              بلّغ عن منتج مشتبه به
            </h2>
            <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
              ساعدنا في حماية ماء زمزم. إذا صادفت عبوة تشتبه في مصدرها، أبلغنا عنها.
            </p>
          </div>
          <div
            style={{ flex: '1.5 1 480px', background: 'var(--card)', borderRadius: '24px', boxShadow: 'var(--card-shadow)', padding: 'clamp(24px,3vw,40px)' }}
          >
            {v.notSent?.report ? (
              <>
                <form
                  onSubmit={v.submit?.report}
                  noValidate={true}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '14px 18px' }}
                >
                  <label
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: 'var(--ink)', maxWidth: '540px', width: '100%' }}
                  >
                    الاسم
                    <input
                      data-fillbg="1"
                      name="name"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        outline: 'none',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.report?.name}</span>
                  </label>
                  <label
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: 'var(--ink)', maxWidth: '540px', width: '100%' }}
                  >
                    رقم الجوال
                    <input
                      data-fillbg="1"
                      name="phone"
                      inputMode="numeric"
                      dir="ltr"
                      placeholder="05XXXXXXXX"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        outline: 'none',
                        textAlign: 'right',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.report?.phone}</span>
                  </label>
                  <label
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: 'var(--ink)', maxWidth: '540px', width: '100%' }}
                  >
                    المدينة
                    <input
                      data-fillbg="1"
                      name="city"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        outline: 'none',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.report?.city}</span>
                  </label>
                  <label
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: 'var(--ink)', maxWidth: '540px', width: '100%' }}
                  >
                    مكان الشراء أو المشاهدة
                    <input
                      data-fillbg="1"
                      name="place"
                      placeholder="اسم المتجر أو الموقع"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        outline: 'none',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.report?.place}</span>
                  </label>
                  <label
                    style={{
                      gridColumn: '1/-1',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '15px',
                      color: 'var(--ink)',
                      maxWidth: '540px',
                      width: '100%',
                    }}
                  >
                    وصف المنتج
                    <textarea
                      data-fillbg="1"
                      name="details"
                      rows={4}
                      placeholder="شكل العبوة، الملصق، البيانات المدوّنة…"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.report?.details}</span>
                  </label>
                  <label
                    style={{
                      gridColumn: '1/-1',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '15px',
                      color: 'var(--ink)',
                      maxWidth: '540px',
                      width: '100%',
                    }}
                  >
                    صورة العبوة (اختياري)
                    <input
                      name="photo"
                      type="file"
                      accept="image/*"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px dashed var(--line)',
                        background: 'var(--card-2)',
                        color: 'var(--muted)',
                        fontSize: '15px',
                      }}
                    />
                  </label>
                  <button
                    type="submit"
                    style={{
                      gridColumn: '1/-1',
                      height: '52px',
                      borderRadius: '9px',
                      border: '0',
                      background: '#996C2E',
                      color: '#fff',
                      fontSize: '17px',
                      cursor: 'pointer',
                    }}
                    className="zp-002"
                  >
                    إرسال البلاغ
                  </button>
                </form>
              </>
            ) : null}
            {v.sent?.report ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', padding: '36px 0' }}>
                  <span
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'var(--gold-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-2)',
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink)', maxWidth: '420px', lineHeight: '1.5' }}>
                    تسلّمنا بلاغك. شكراً لحرصك على حماية ماء زمزم
                  </span>
                  <button
                    onClick={v.resetForm?.report}
                    style={{
                      height: '44px',
                      padding: '0 24px',
                      borderRadius: '9px',
                      border: '1px solid var(--line)',
                      background: 'transparent',
                      color: 'var(--ink)',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                  >
                    إرسال بلاغ آخر
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
