import type { V } from '../../types';
import { css } from '../../lib/dc';

export function ContactPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="14 تواصل معنا" style={{ background: 'var(--bg)', padding: '80px 0 96px' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }}>معلومات التواصل</span>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '20px',
                boxShadow: 'var(--card-shadow)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>الموقع</span>
              <span style={{ fontSize: '18px', color: 'var(--ink)' }}>مكة المكرمة، المملكة العربية السعودية</span>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '20px',
                boxShadow: 'var(--card-shadow)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>الاستفسارات الإعلامية</span>
              <a href="mailto:media@zamzam.sa" dir="ltr" style={{ fontSize: '18px', textAlign: 'right' }}>
                media@zamzam.sa
              </a>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '20px',
                boxShadow: 'var(--card-shadow)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>قبل أن تراسلنا</span>
              <button
                onClick={v.go?.faq}
                style={{ alignSelf: 'flex-start', background: 'none', border: '0', padding: '0', color: 'var(--gold-2)', fontSize: '17px', cursor: 'pointer' }}
              >
                تصفّح الأسئلة الشائعة
              </button>
              <button
                onClick={v.go?.verifyReport}
                style={{ alignSelf: 'flex-start', background: 'none', border: '0', padding: '0', color: 'var(--gold-2)', fontSize: '17px', cursor: 'pointer' }}
              >
                بلّغ عن منتج مشتبه به
              </button>
            </div>
          </div>
          <div
            style={{
              flex: '2 1 520px',
              minWidth: '0',
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: 'clamp(20px,3vw,36px)',
            }}
          >
            {v.notSent?.contact ? (
              <>
                <form
                  onSubmit={v.submit?.contact}
                  noValidate={true}
                  style={css(`display:grid;grid-template-columns:${v.formCols ?? ''};gap:6px 20px;align-items:start`)}
                >
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      minWidth: '0',
                      maxWidth: '540px',
                      width: '100%',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                    }}
                  >
                    الاسم
                    <input
                      data-fillbg="1"
                      name="name"
                      autoComplete="name"
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
                        boxSizing: 'border-box',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.contact?.name}</span>
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      minWidth: '0',
                      maxWidth: '540px',
                      width: '100%',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                    }}
                  >
                    البريد الإلكتروني
                    <input
                      data-fillbg="1"
                      name="email"
                      type="email"
                      dir="ltr"
                      autoComplete="email"
                      placeholder="name@example.com"
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
                        boxSizing: 'border-box',
                        textAlign: 'right',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.contact?.email}</span>
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      minWidth: '0',
                      maxWidth: '540px',
                      width: '100%',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                    }}
                  >
                    رقم الجوال (اختياري)
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
                        boxSizing: 'border-box',
                        textAlign: 'right',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.contact?.phone}</span>
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      minWidth: '0',
                      maxWidth: '540px',
                      width: '100%',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                    }}
                  >
                    نوع الرسالة
                    <span style={{ position: 'relative', display: 'block' }}>
                      <select
                        data-fillbg="1"
                        name="type"
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
                          boxSizing: 'border-box',
                          appearance: 'none',
                          WebkitAppearance: 'none',
                          paddingLeft: '44px',
                          cursor: 'pointer',
                        }}
                        className="zp-017"
                      >
                        <option value="">اختر</option>
                        <option>استفسار</option>
                        <option>ملاحظة</option>
                        <option>بلاغ</option>
                      </select>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ position: 'absolute', left: '16px', top: '18px', color: 'var(--muted)', pointerEvents: 'none' }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.contact?.type}</span>
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      minWidth: '0',
                      maxWidth: '540px',
                      width: '100%',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                      gridColumn: '1/-1',
                    }}
                  >
                    الموضوع
                    <input
                      data-fillbg="1"
                      name="subject"
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
                        boxSizing: 'border-box',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.contact?.subject}</span>
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      minWidth: '0',
                      maxWidth: '540px',
                      width: '100%',
                      fontSize: '15px',
                      fontWeight: '500',
                      color: 'var(--ink)',
                      gridColumn: '1/-1',
                    }}
                  >
                    الرسالة
                    <textarea
                      data-fillbg="1"
                      name="message"
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        display: 'block',
                      }}
                      className="zp-017"
                    />
                    <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.contact?.message}</span>
                  </label>
                  <button
                    type="submit"
                    style={{
                      gridColumn: '1/-1',
                      marginTop: '8px',
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
                    إرسال
                  </button>
                </form>
              </>
            ) : null}
            {v.sent?.contact ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', padding: '40px 0' }}>
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
                  <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }}>تم استلام رسالتك</span>
                  <p style={{ margin: '0', fontSize: '17px', color: 'var(--ink-2)' }}>سنعاود التواصل معك عبر البريد الإلكتروني.</p>
                  <button
                    onClick={v.resetForm?.contact}
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
                    إرسال رسالة أخرى
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
