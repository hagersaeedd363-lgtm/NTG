import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function PasswordView({ v }: { v: V }) {
  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          animation: 'zzfade .3s ease both',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={v.ox?.pwClose}
            aria-label="رجوع للحساب"
            style={{
              width: '52px',
              height: '52px',
              padding: '0',
              borderRadius: '12px',
              border: '0',
              background: 'var(--card-2)',
              boxShadow: 'inset 0 0 0 1px var(--line)',
              color: 'var(--ink)',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: '0',
              transition: 'background .2s,box-shadow .2s',
            }}
            className="zp-023"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
            <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: 'var(--ink)' }}>{v.ox?.pwTitle}</h1>
            <p style={{ margin: '0', fontSize: '14px', lineHeight: '24px', color: 'var(--muted)' }}>تحقق من هويتك ثم اختر كلمة مرور جديدة لحسابك.</p>
          </div>
        </div>
        <section id="pw-card" style={{ background: 'var(--card)', borderRadius: '24px', boxShadow: 'var(--card-shadow)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', borderBottom: '1px solid var(--line)' }}>
            <span
              style={{
                width: '40px',
                height: '40px',
                flexShrink: '0',
                borderRadius: '12px',
                background: 'var(--card-2)',
                boxShadow: 'inset 0 0 0 1px var(--line)',
                color: 'var(--gold-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
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
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
            </span>
            <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>الأمان وكلمة المرور</h2>
            <span
              style={css(
                `margin-inline-start:auto;display:flex;align-items:center;height:24px;padding:0 10px;border-radius:8px;background:${v.ox?.pwChipBg ?? ''};box-shadow:inset 0 0 0 1px ${v.ox?.pwChipBd ?? ''};color:${v.ox?.pwChipFg ?? ''};font-size:14px;white-space:nowrap`,
              )}
            >
              {v.ox?.pwChip}
            </span>
          </div>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {v.ox?.pwIdle ? (
              <>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <p style={{ margin: '0', flex: '1 1 320px', fontSize: '14px', lineHeight: '24px', color: 'var(--ink-2)' }}>{v.ox?.pwIdleText}</p>
                  <button
                    onClick={v.ox?.openPw}
                    style={{
                      height: '48px',
                      padding: '0 24px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,.2)',
                      background: '#996C2E',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                    className="zp-002"
                  >
                    {v.ox?.pwBtn}
                  </button>
                </div>
              </>
            ) : null}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {v.ox?.pwStep1 ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p style={{ margin: '0', fontSize: '14px', lineHeight: '24px', color: 'var(--ink-2)' }}>
                      {v.ox?.pwIntro}{' '}
                      <span dir="ltr" style={{ fontWeight: '600', color: 'var(--ink)' }}>
                        {v.ox?.pwPhone}
                      </span>
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '24px' }}>
                      <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px' }}>
                        <label htmlFor="pw-otp" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink-2)' }}>
                          رمز التحقق
                        </label>
                        <input
                          id="pw-otp"
                          value={v.ox?.pwOtp ?? ''}
                          onInput={v.ox?.onOtp}
                          inputMode="numeric"
                          dir="ltr"
                          maxLength={4}
                          autoComplete="one-time-code"
                          placeholder="••••"
                          style={css(
                            `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid var(--line);background:${v.ox?.bgOtp ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;letter-spacing:.5em;text-align:center;border-color:${v.ox?.pwBd ?? ''}`,
                          )}
                        />
                        {v.ox?.pwErr ? (
                          <>
                            <span role="alert" style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--danger)' }}>
                              {v.ox?.pwErr}
                            </span>
                          </>
                        ) : null}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '32px' }}>
                        <button
                          onClick={v.ox?.pwNext1}
                          style={{
                            padding: '0 32px',
                            height: '46px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            border: '1px solid rgba(255,255,255,.2)',
                            background: '#996C2E',
                            color: '#fff',
                          }}
                          className="zp-002"
                        >
                          تحقق
                        </button>
                        <button
                          onClick={v.ox?.pwResend}
                          style={{
                            padding: '0 20px',
                            height: '46px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            border: '1px solid var(--line)',
                            background: 'transparent',
                            color: 'var(--ink)',
                          }}
                          className="zp-008"
                        >
                          إعادة الإرسال
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {v.ox?.pwStep2 ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={css(`display:grid;grid-template-columns:${v.formCols ?? ''};gap:24px;align-items:start`)}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                        <label htmlFor="pw-n1" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink-2)' }}>
                          كلمة المرور
                        </label>
                        <span style={{ position: 'relative', display: 'block' }}>
                          <input
                            id="pw-n1"
                            type={v.ox?.pwType}
                            value={v.ox?.pwN1 ?? ''}
                            onInput={v.ox?.onN1}
                            autoComplete="new-password"
                            dir="ltr"
                            placeholder="٨ أحرف على الأقل"
                            style={css(
                              `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid var(--line);background:${v.ox?.bgN1 ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;padding-inline-end:48px`,
                            )}
                          />
                          <button
                            type="button"
                            onClick={v.ox?.pwToggle}
                            aria-label="إظهار أو إخفاء كلمة المرور"
                            style={{
                              position: 'absolute',
                              top: '4px',
                              insetInlineEnd: '4px',
                              width: '40px',
                              height: '40px',
                              padding: '0',
                              border: '0',
                              borderRadius: '8px',
                              background: 'transparent',
                              color: 'var(--muted)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
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
                              aria-hidden="true"
                            >
                              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </button>
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                        <label htmlFor="pw-n2" style={{ fontSize: '14px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink-2)' }}>
                          تأكيد كلمة المرور
                        </label>
                        <input
                          id="pw-n2"
                          type={v.ox?.pwType}
                          value={v.ox?.pwN2 ?? ''}
                          onInput={v.ox?.onN2}
                          autoComplete="new-password"
                          dir="ltr"
                          placeholder="أعد كتابة كلمة المرور"
                          style={css(
                            `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid var(--line);background:${v.ox?.bgN2 ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box`,
                          )}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {list(v.ox?.pwRules).map((r: any, $index: number) => (
                        <Fragment key={$index}>
                          <span style={css(`display:flex;align-items:center;gap:8px;font-size:14px;line-height:24px;color:${r?.color ?? ''}`)}>
                            <span
                              style={css(
                                `width:16px;height:16px;border-radius:50%;box-shadow:inset 0 0 0 1.5px ${r?.bd ?? ''};background:${r?.bg ?? ''};color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0`,
                              )}
                            >
                              {r?.ok ? (
                                <>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                                  </svg>
                                </>
                              ) : null}
                            </span>
                            {r?.t}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                    {v.ox?.pwErr ? (
                      <>
                        <span role="alert" style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--danger)' }}>
                          {v.ox?.pwErr}
                        </span>
                      </>
                    ) : null}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '12px' }}>
                      <button
                        onClick={v.ox?.pwClose}
                        style={{
                          padding: '0 24px',
                          height: '48px',
                          borderRadius: '12px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          border: '1px solid var(--line)',
                          background: 'transparent',
                          color: 'var(--ink)',
                        }}
                        className="zp-008"
                      >
                        إلغاء
                      </button>
                      <button
                        onClick={v.ox?.pwNext2}
                        style={{
                          padding: '0 32px',
                          height: '48px',
                          borderRadius: '12px',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                          border: '1px solid rgba(255,255,255,.2)',
                          background: '#996C2E',
                          color: '#fff',
                        }}
                        className="zp-002"
                      >
                        {v.ox?.pwSaveLabel}
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
              {v.ox?.pwStep3 ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'rgba(46,160,90,.14)',
                        color: '#2E8B57',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 0 8px var(--card-2)',
                      }}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    <h2 role="status" style={{ margin: '8px 0 0', fontSize: '20px', fontWeight: '600', lineHeight: '28px', color: 'var(--ink)' }}>
                      {v.ox?.pwDoneTitle}
                    </h2>
                    <p style={{ margin: '0', fontSize: '15px', lineHeight: '24px', color: 'var(--ink-2)' }}>
                      يمكنك الآن تسجيل الدخول بالبريد الإلكتروني وكلمة المرور. إذا لم تقم بهذا الإجراء، تواصل معنا فوراً.
                    </p>
                    <button
                      onClick={v.ox?.pwClose}
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        border: '1px solid rgba(255,255,255,.2)',
                        background: '#996C2E',
                        color: '#fff',
                      }}
                      className="zp-002"
                    >
                      حسناً
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
