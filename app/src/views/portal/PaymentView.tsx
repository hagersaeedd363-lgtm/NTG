import { Fragment } from 'react';
import type { V } from '../../types';
import { PaymentUnconfirmed } from '../../portal/screens/PaymentUnconfirmed';
import { css, list } from '../../lib/dc';

export function PaymentView({ v }: { v: V }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', animation: 'zzfade .3s ease both' }}>
        <button
          onClick={v.ox?.p?.back}
          aria-label="رجوع للطلبات"
          title="رجوع للطلبات"
          style={css(
            `width:52px;height:52px;padding:0;align-self:flex-start;border-radius:12px;border:0;background:var(--card-2);box-shadow:inset 0 0 0 1px var(--line);color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,box-shadow .2s;opacity:${v.ox?.p?.backOp ?? ''}`,
          )}
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
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '14px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0' }}>
            <h2 style={{ margin: '0', fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: 'var(--ink)' }}>{v.ox?.p?.title}</h2>
            <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>{v.ox?.p?.sub}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '13px', color: 'var(--muted)' }}>رقم الطلب</span>
            <span dir="ltr" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ink)' }}>
              {v.ox?.p?.r?.id}
            </span>
            <span
              style={css(
                `padding:5px 12px;border-radius:36px;background:${v.ox?.p?.chipBg ?? ''};color:${v.ox?.p?.chipFg ?? ''};font-size:13px;white-space:nowrap`,
              )}
            >
              {v.ox?.p?.chip}
            </span>
          </div>
        </div>
        {v.ox?.p?.success ? (
          <>
            <div style={{ maxWidth: '720px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  background: 'var(--card)',
                  borderRadius: '22px',
                  boxShadow: 'var(--card-shadow)',
                  padding: 'clamp(18px,3vw,28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  gap: '22px',
                  animation: 'zzfade .3s ease both',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center' }}>
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
                  <h2 role="status" style={{ margin: '0', fontSize: 'clamp(24px,2.8vw,32px)', fontWeight: '700', lineHeight: '1.4', color: 'var(--ink)' }}>
                    تم الدفع بنجاح
                  </h2>
                  <p style={{ margin: '0', maxWidth: '54ch', fontSize: '15px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                    تم تأكيد الدفع من النظام. سينتقل طلبك الآن إلى مرحلة «قيد التجهيز» وسنرسل لك إشعاراً عند كل تحديث.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--card-2)',
                    borderRadius: '18px',
                    boxShadow: 'inset 0 0 0 1px var(--line)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px',
                      margin: '14px',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      background: 'var(--gold-soft)',
                      boxShadow: 'inset 0 0 0 1px var(--gold-3)',
                      textAlign: 'center',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink-2)' }}>المبلغ المدفوع</span>
                    <span style={{ fontSize: 'clamp(30px,4vw,38px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--gold-on-soft)' }}>
                      {v.ox?.p?.r?.totalLabel}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '0 20px 8px' }}>
                    {list(v.ox?.p?.rows).map((rw: any, $index: number) => (
                      <Fragment key={$index}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '11px 0',
                            borderTop: '1px solid var(--line)',
                            fontSize: '14px',
                          }}
                        >
                          <span style={{ color: 'var(--muted)' }}>{rw?.k}</span>
                          <span dir={rw?.dir} style={{ color: 'var(--ink)', fontWeight: '600', textAlign: 'left' }}>
                            {rw?.v}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <span
                  style={{
                    alignSelf: 'flex-start',
                    padding: '3px 10px',
                    borderRadius: '36px',
                    background: 'var(--info-soft)',
                    color: 'var(--info)',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                >
                  مرجع العملية وتاريخها بيانات تجريبية للمعاينة
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: '100%' }}>
                  <button
                    onClick={v.ox?.p?.track}
                    style={{
                      height: '52px',
                      padding: '0 24px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,.2)',
                      background: '#996C2E',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      flex: '2 1 220px',
                    }}
                    className="zp-002"
                  >
                    عرض الطلب وتتبعه
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M19 12H5M11 6l-6 6 6 6" />
                    </svg>
                  </button>
                  <button
                    onClick={v.ox?.p?.receipt}
                    style={{
                      height: '52px',
                      padding: '0 22px',
                      borderRadius: '10px',
                      border: '1px solid var(--line)',
                      background: 'transparent',
                      color: 'var(--ink)',
                      fontSize: '15px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      flex: '1 1 160px',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 3h8l4 4v14H6zM14 3v5h5" />
                    </svg>
                    عرض الفاتورة
                  </button>
                </div>
              </div>
              <div
                style={{
                  background: 'var(--card)',
                  borderRadius: '22px',
                  boxShadow: 'var(--card-shadow)',
                  padding: 'clamp(18px,3vw,28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 240px', minWidth: '0' }}>
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
                        <circle cx="6" cy="6" r="2.2" />
                        <circle cx="18" cy="12" r="2.2" />
                        <circle cx="6" cy="18" r="2.2" />
                        <path d="M8 7l8 4M8 17l8-4" />
                      </svg>
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                      <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>مسار الطلب</h2>
                      <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>تابع مراحل طلبك حتى التسليم.</p>
                    </div>
                  </div>
                </div>
                <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,3vw,28px))' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {list(v.ox?.p?.r?.stages).map((ts: any, $index: number) => (
                    <Fragment key={$index}>
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'stretch' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span
                            style={css(
                              `width:28px;height:28px;flex-shrink:0;border-radius:50%;background:${ts?.bg ?? ''};box-shadow:${ts?.ring ?? ''};color:#fff;display:flex;align-items:center;justify-content:center`,
                            )}
                          >
                            {ts?.done ? (
                              <>
                                <svg
                                  width="14"
                                  height="14"
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
                              </>
                            ) : null}
                          </span>
                          <span style={css(`flex:1;width:2px;min-height:18px;background:${ts?.line ?? ''};display:${ts?.lineDisp ?? ''}`)} />
                        </div>
                        <div
                          style={{ flex: '1', minWidth: '0', padding: '3px 0 18px', display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'right' }}
                        >
                          <span style={css(`font-size:16px;font-weight:${ts?.fw ?? ''};color:${ts?.color ?? ''}`)}>{ts?.t}</span>
                          <span style={css(`font-size:13px;color:${ts?.subColor ?? ''}`)}>{ts?.sub}</span>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
        {v.ox?.p?.notSuccess ? (
          <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ flex: '1.5 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {v.ox?.p?.failed ? (
                  <>
                    <div
                      role="alert"
                      style={{
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'flex-start',
                        padding: '18px 20px',
                        borderRadius: '18px',
                        background: 'rgba(180,55,42,.10)',
                        boxShadow: 'inset 0 0 0 1px var(--danger)',
                        animation: 'zzfade .2s ease both',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: '36px',
                          height: '36px',
                          flexShrink: '0',
                          borderRadius: '50%',
                          background: 'var(--danger)',
                          color: 'var(--card)',
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
                          <path d="M7 7l10 10M17 7L7 17" />
                        </svg>
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                        <strong style={{ fontSize: '16px', color: 'var(--ink)' }}>لم تكتمل عملية الدفع</strong>
                        <span style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--ink-2)' }}>{v.ox?.p?.reason}</span>
                        <span style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
                          لم يُخصم أي مبلغ ولم تتغير حالة طلبك، ولا يزال بانتظار الدفع. يمكنك إعادة المحاولة أو اختيار وسيلة دفع أخرى.
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>سبب الرفض المعروض بيانات تجريبية للمعاينة</span>
                      </div>
                    </div>
                  </>
                ) : null}
                {v.ox?.p?.processing ? (
                  <>
                    <div
                      role="status"
                      aria-live="polite"
                      style={{
                        background: 'var(--card)',
                        borderRadius: '22px',
                        boxShadow: 'var(--card-shadow)',
                        padding: 'clamp(18px,3vw,28px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '14px',
                        paddingBlock: 'clamp(32px,6vw,56px)',
                      }}
                    >
                      <span
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          border: '4px solid var(--gold-soft)',
                          borderTopColor: 'var(--gold-2)',
                          animation: 'zzspin .8s linear infinite',
                        }}
                      />
                      <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '600', lineHeight: '28px', color: 'var(--ink)' }}>جارٍ معالجة الدفع…</h3>
                      <p style={{ margin: '0', maxWidth: '44ch', fontSize: '15px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                        يرجى عدم تحديث الصفحة أو إغلاقها حتى تكتمل العملية. تم تعطيل زر الدفع لمنع تكرار العملية.
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--ink-2)' }}>
                        <span>
                          المبلغ: <strong style={{ color: 'var(--ink)' }}>{v.ox?.p?.r?.totalLabel}</strong>
                        </span>
                        <span>
                          وسيلة الدفع: <strong style={{ color: 'var(--ink)' }}>{v.ox?.p?.mlabel}</strong>
                        </span>
                      </div>
                      <button
                        disabled={true}
                        style={{
                          height: '52px',
                          padding: '0 24px',
                          borderRadius: '10px',
                          border: '1px solid rgba(255,255,255,.2)',
                          background: '#996C2E',
                          color: '#fff',
                          fontSize: '16px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          opacity: '.6',
                          cursor: 'not-allowed',
                          minWidth: '220px',
                          marginTop: '6px',
                        }}
                      >
                        <span
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            border: '2px solid rgba(255,255,255,.4)',
                            borderTopColor: '#fff',
                            animation: 'zzspin .8s linear infinite',
                          }}
                        />
                        جارٍ المعالجة…
                      </button>
                    </div>
                  </>
                ) : null}
                {v.ox?.p?.unconfirmed ? <PaymentUnconfirmed v={v} /> : null}
                {v.ox?.p?.form ? (
                  <>
                    <div
                      style={{
                        background: 'var(--card)',
                        borderRadius: '22px',
                        boxShadow: 'var(--card-shadow)',
                        padding: 'clamp(18px,3vw,28px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 240px', minWidth: '0' }}>
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
                              <rect x="3" y="6" width="18" height="13" rx="2.5" />
                              <path d="M3 10.5h18M7 15h3" />
                            </svg>
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                            <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>اختر وسيلة الدفع</h2>
                            <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>
                              الدفع متاح بعد موافقة الجهة المختصة على طلبك.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,3vw,28px))' }} />
                      <div role="radiogroup" aria-label="وسيلة الدفع" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {list(v.ox?.p?.opts).map((m: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              role="radio"
                              aria-checked={m?.sel}
                              onClick={m?.onClick}
                              style={css(
                                `display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;border:1.5px solid ${m?.bd ?? ''};background:${m?.bg ?? ''};color:var(--ink);cursor:pointer;text-align:right;width:100%`,
                              )}
                            >
                              <span
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  flexShrink: '0',
                                  borderRadius: '10px',
                                  background: 'var(--card)',
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
                                  <path d={m?.ic} />
                                </svg>
                              </span>
                              <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <span style={{ fontSize: '16px', fontWeight: '600' }}>{m?.t}</span>
                                <span style={{ fontSize: '13px', color: 'var(--ink-2)' }}>{m?.d}</span>
                              </span>
                              <span
                                style={css(
                                  `width:20px;height:20px;flex-shrink:0;border-radius:50%;background:${m?.dotBg ?? ''};box-shadow:${m?.dotRing ?? ''};display:flex;align-items:center;justify-content:center`,
                                )}
                              >
                                <span style={css(`width:8px;height:8px;border-radius:50%;background:${m?.dotIn ?? ''}`)} />
                              </span>
                            </button>
                          </Fragment>
                        ))}
                      </div>
                      {v.ox?.p?.isCard ? (
                        <>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '8px', borderTop: '1px solid var(--line)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                              <label htmlFor="pay-num" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>
                                رقم البطاقة
                              </label>
                              <input
                                id="pay-num"
                                value={v.ox?.p?.f?.num?.v ?? ''}
                                onInput={v.ox?.p?.on_num}
                                inputMode="numeric"
                                autoComplete="cc-number"
                                dir="ltr"
                                placeholder="0000 0000 0000 0000"
                                style={css(
                                  `width:100%;height:46px;padding:0 16px;border-radius:10px;background:${v.ox?.p?.f?.num?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;border:1px solid ${v.ox?.p?.f?.num?.bd ?? ''}`,
                                )}
                                className="zp-017"
                              />
                              {v.ox?.p?.f?.num?.has ? (
                                <>
                                  <span role="alert" style={{ fontSize: '13px', color: 'var(--danger)' }}>
                                    {v.ox?.p?.f?.num?.err}
                                  </span>
                                </>
                              ) : null}
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,150px),1fr))', gap: '24px' }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                                <label htmlFor="pay-exp" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>
                                  تاريخ الانتهاء
                                </label>
                                <input
                                  id="pay-exp"
                                  value={v.ox?.p?.f?.exp?.v ?? ''}
                                  onInput={v.ox?.p?.on_exp}
                                  inputMode="numeric"
                                  autoComplete="cc-exp"
                                  dir="ltr"
                                  placeholder="MM/YY"
                                  style={css(
                                    `width:100%;height:46px;padding:0 16px;border-radius:10px;background:${v.ox?.p?.f?.exp?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;border:1px solid ${v.ox?.p?.f?.exp?.bd ?? ''}`,
                                  )}
                                  className="zp-017"
                                />
                                {v.ox?.p?.f?.exp?.has ? (
                                  <>
                                    <span role="alert" style={{ fontSize: '13px', color: 'var(--danger)' }}>
                                      {v.ox?.p?.f?.exp?.err}
                                    </span>
                                  </>
                                ) : null}
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                                <label htmlFor="pay-cvv" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>
                                  رمز الأمان (CVV)
                                </label>
                                <input
                                  id="pay-cvv"
                                  value={v.ox?.p?.f?.cvv?.v ?? ''}
                                  onInput={v.ox?.p?.on_cvv}
                                  inputMode="numeric"
                                  autoComplete="cc-csc"
                                  dir="ltr"
                                  maxLength={3}
                                  placeholder="000"
                                  style={css(
                                    `width:100%;height:46px;padding:0 16px;border-radius:10px;background:${v.ox?.p?.f?.cvv?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;border:1px solid ${v.ox?.p?.f?.cvv?.bd ?? ''}`,
                                  )}
                                  className="zp-017"
                                />
                                {v.ox?.p?.f?.cvv?.has ? (
                                  <>
                                    <span role="alert" style={{ fontSize: '13px', color: 'var(--danger)' }}>
                                      {v.ox?.p?.f?.cvv?.err}
                                    </span>
                                  </>
                                ) : null}
                              </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                              <label htmlFor="pay-name" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>
                                الاسم على البطاقة
                              </label>
                              <input
                                id="pay-name"
                                value={v.ox?.p?.f?.name?.v ?? ''}
                                onInput={v.ox?.p?.on_name}
                                autoComplete="cc-name"
                                placeholder="الاسم كما يظهر على البطاقة"
                                style={css(
                                  `width:100%;height:46px;padding:0 16px;border-radius:10px;background:${v.ox?.p?.f?.name?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;border:1px solid ${v.ox?.p?.f?.name?.bd ?? ''}`,
                                )}
                                className="zp-017"
                              />
                              {v.ox?.p?.f?.name?.has ? (
                                <>
                                  <span role="alert" style={{ fontSize: '13px', color: 'var(--danger)' }}>
                                    {v.ox?.p?.f?.name?.err}
                                  </span>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </>
                      ) : null}
                      {v.ox?.p?.isApple ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '16px',
                              minHeight: '56px',
                              boxSizing: 'border-box',
                              borderRadius: '12px',
                              color: 'var(--ink)',
                              fontSize: '14px',
                              lineHeight: '24px',
                              backgroundColor: '#1EACFF1F',
                              border: '1px solid #2996D7',
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M12 8v5M12 16.5v.5M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                            </svg>
                            <span style={{ color: '#0051A2', fontWeight: '600' }}>
                              عند الضغط على «إتمام الدفع» ستظهر نافذة Apple Pay لتأكيد الدفع على جهازك.
                            </span>
                          </div>
                        </>
                      ) : null}
                      {v.ox?.p?.isTransfer ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '16px',
                              minHeight: '56px',
                              boxSizing: 'border-box',
                              borderRadius: '12px',
                              color: 'var(--ink)',
                              fontSize: '14px',
                              lineHeight: '24px',
                              backgroundColor: '#1EACFF1F',
                              border: '1px solid #2996D7',
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M12 8v5M12 16.5v.5M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                            </svg>
                            <span style={{ color: '#0051A2', fontWeight: '600' }}>
                              ستظهر بيانات الحساب والمرجع المطلوب في الخطوة التالية. لن يبدأ التجهيز إلا بعد التحقق من التحويل.
                            </span>
                          </div>
                        </>
                      ) : null}
                      <button
                        onClick={v.ox?.p?.go}
                        disabled={v.ox?.p?.busy}
                        style={{
                          height: '52px',
                          padding: '0 24px',
                          borderRadius: '10px',
                          border: '1px solid rgba(255,255,255,.2)',
                          background: '#996C2E',
                          color: '#fff',
                          fontSize: '16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          width: '100%',
                        }}
                        className="zp-002"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
                        </svg>
                        {v.ox?.p?.cta}
                        <span style={{ fontWeight: '500', opacity: '.9' }}>· {v.ox?.p?.r?.totalLabel}</span>
                      </button>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          color: 'var(--muted)',
                          textAlign: 'center',
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
                        </svg>
                        لا نحفظ بيانات البطاقة، وتتم معالجة الدفع عبر قناة آمنة.
                      </span>
                    </div>
                  </>
                ) : null}
                {v.ox?.p?.transferView ? (
                  <>
                    <div
                      style={{
                        background: 'var(--card)',
                        borderRadius: '22px',
                        boxShadow: 'var(--card-shadow)',
                        padding: 'clamp(18px,3vw,28px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 240px', minWidth: '0' }}>
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
                              <path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
                            </svg>
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                            <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>{v.ox?.p?.tTitle}</h2>
                          </div>
                        </div>
                        <span
                          style={{
                            padding: '5px 12px',
                            borderRadius: '36px',
                            background: 'var(--info-soft)',
                            color: 'var(--info)',
                            fontSize: '13px',
                            fontWeight: '600',
                          }}
                        >
                          {v.ox?.p?.tBadge}
                        </span>
                      </div>
                      <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,3vw,28px))' }} />
                      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        {list(v.ox?.p?.tsteps).map((x: any, $index: number) => (
                          <Fragment key={$index}>
                            <div
                              style={{
                                flex: '1 1 0',
                                minWidth: '0',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                textAlign: 'center',
                              }}
                            >
                              <span
                                style={css(
                                  `position:absolute;top:13px;left:calc(-50% + 16px);right:calc(50% + 16px);height:2px;background:${x?.line ?? ''};display:${x?.lineDisp ?? ''}`,
                                )}
                              />
                              <span
                                style={css(
                                  `position:relative;width:28px;height:28px;border-radius:50%;background:${x?.bg ?? ''};box-shadow:${x?.ring ?? ''};color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700`,
                                )}
                              >
                                {x?.n}
                              </span>
                              <span style={css(`font-size:13px;font-weight:${x?.fw ?? ''};color:${x?.color ?? ''}`)}>{x?.t}</span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      {v.ox?.p?.transfer ? (
                        <>
                          <span
                            style={{
                              alignSelf: 'flex-start',
                              padding: '3px 10px',
                              borderRadius: '36px',
                              background: 'var(--info-soft)',
                              color: 'var(--info)',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}
                          >
                            بيانات الحساب أدناه بيانات تجريبية — تُستبدل ببيانات المستفيد المعتمدة من النظام
                          </span>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              background: 'var(--card-2)',
                              borderRadius: '16px',
                              boxShadow: 'inset 0 0 0 1px var(--line)',
                              padding: '4px 18px',
                            }}
                          >
                            {list(v.ox?.p?.bank).map((b: any, $index: number) => (
                              <Fragment key={$index}>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '8px 12px',
                                    padding: '12px 0',
                                    borderBottom: '1px solid var(--line)',
                                  }}
                                >
                                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{b?.k}</span>
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span dir={b?.dir} style={{ fontSize: '15px', fontWeight: '600', color: 'var(--ink)', wordBreak: 'break-all' }}>
                                      {b?.v}
                                    </span>
                                    <button
                                      onClick={b?.copy}
                                      aria-label="نسخ"
                                      title="نسخ"
                                      style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '8px',
                                        border: '0',
                                        background: 'transparent',
                                        color: 'var(--muted)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                      }}
                                      className="zp-027"
                                    >
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                      >
                                        <path d="M9 9h11v11H9zM5 15V6a2 2 0 0 1 2-2h9" />
                                      </svg>
                                    </button>
                                  </span>
                                </div>
                              </Fragment>
                            ))}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: '2px',
                              padding: '14px 16px',
                              borderRadius: '14px',
                              background: 'var(--gold-soft)',
                              boxShadow: 'inset 0 0 0 1px var(--gold-3)',
                              textAlign: 'center',
                            }}
                          >
                            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink-2)' }}>المبلغ المطلوب تحويله</span>
                            <span style={{ fontSize: 'clamp(26px,4vw,32px)', fontWeight: '700', color: 'var(--gold-on-soft)' }}>{v.ox?.p?.r?.totalLabel}</span>
                          </div>
                          <ol
                            style={{
                              margin: '0',
                              padding: '0 20px 0 0',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '6px',
                              fontSize: '14px',
                              lineHeight: '1.8',
                              color: 'var(--ink-2)',
                            }}
                          >
                            <li>حوّل المبلغ كاملاً إلى الحساب أعلاه.</li>
                            <li>اكتب رقم الطلب كمرجع للتحويل، ليتم ربط الدفعة بطلبك.</li>
                            <li>ارفع صورة أو ملف إيصال التحويل ثم أرسله للتحقق.</li>
                          </ol>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)' }}>إثبات التحويل</span>
                            <label
                              htmlFor="pay-proof"
                              style={css(
                                `display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:1.5px dashed ${v.ox?.p?.fileBd ?? ''};background:var(--card-2);cursor:pointer;color:var(--ink-2);font-size:14px`,
                              )}
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
                                <path d="M12 16V5M7 9l5-5 5 5M5 20h14" />
                              </svg>
                              <span style={{ flex: '1', minWidth: '0', wordBreak: 'break-all' }}>{v.ox?.p?.fileLabel}</span>
                            </label>
                            <input
                              id="pay-proof"
                              type="file"
                              accept=".pdf,.png,.jpg,.jpeg"
                              onChange={v.ox?.p?.onFile}
                              style={{ position: 'absolute', width: '1px', height: '1px', opacity: '0', pointerEvents: 'none' }}
                            />
                            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>PDF أو صورة، حتى ٥ ميجابايت.</span>
                            {v.ox?.p?.fileErrHas ? (
                              <>
                                <span role="alert" style={{ fontSize: '13px', color: 'var(--danger)' }}>
                                  {v.ox?.p?.fileErr}
                                </span>
                              </>
                            ) : null}
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            <button
                              onClick={v.ox?.p?.sendProof}
                              style={css(
                                `height:52px;padding:0 24px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:#996C2E;color:#fff;font-size:16px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;flex:2 1 220px;opacity:${v.ox?.p?.proofOp ?? ''}`,
                              )}
                              className="zp-002"
                            >
                              إرسال إثبات التحويل
                            </button>
                            <button
                              onClick={v.ox?.p?.backToMethods}
                              style={{
                                height: '52px',
                                padding: '0 22px',
                                borderRadius: '10px',
                                border: '1px solid var(--line)',
                                background: 'transparent',
                                color: 'var(--ink)',
                                fontSize: '15px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                flex: '1 1 160px',
                              }}
                            >
                              تغيير وسيلة الدفع
                            </button>
                          </div>
                        </>
                      ) : null}
                      {v.ox?.p?.awaiting ? (
                        <>
                          <div
                            role="status"
                            style={{
                              display: 'flex',
                              gap: '14px',
                              alignItems: 'flex-start',
                              padding: '16px',
                              borderRadius: '12px',
                              backgroundColor: '#1EACFF1F',
                              border: '1px solid #2996D7',
                            }}
                          >
                            <span
                              style={{
                                width: '20px',
                                height: '20px',
                                marginTop: '3px',
                                flexShrink: '0',
                                borderRadius: '50%',
                                border: '2px solid var(--gold-soft)',
                                borderTopColor: 'var(--info)',
                                animation: 'zzspin .8s linear infinite',
                              }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <strong style={{ fontSize: '16px', color: 'var(--ink)' }}>تم استلام إثبات التحويل</strong>
                              <span style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                                طلبك بانتظار التحقق من التحويل. هذا لا يعني أن الدفع تأكد، ولن يبدأ التجهيز إلا بعد التحقق وفق قواعد الطلب. سنُشعرك فور التأكيد.
                              </span>
                              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>الملف المرسل: {v.ox?.p?.fileName}</span>
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            <button
                              onClick={v.ox?.p?.back}
                              style={{
                                height: '52px',
                                padding: '0 24px',
                                borderRadius: '10px',
                                border: '1px solid rgba(255,255,255,.2)',
                                background: '#996C2E',
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                flex: '2 1 220px',
                              }}
                              className="zp-002"
                            >
                              العودة إلى طلباتي
                            </button>
                            {v.demoTools ? (
                            <button
                              onClick={v.ox?.p?.confirmSample}
                              style={{
                                height: '52px',
                                padding: '0 22px',
                                borderRadius: '10px',
                                border: '1px solid var(--line)',
                                background: 'transparent',
                                color: 'var(--ink)',
                                fontSize: '15px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                flex: '1 1 200px',
                              }}
                            >
                              معاينة: تأكيد التحويل
                            </button>
                            ) : null}
                          </div>
                          <span
                            style={{
                              alignSelf: 'flex-start',
                              padding: '3px 10px',
                              borderRadius: '36px',
                              background: 'var(--info-soft)',
                              color: 'var(--info)',
                              fontSize: '12px',
                              fontWeight: '600',
                            }}
                          >
                            زر المعاينة يعرض حالة «تم تأكيد الدفع» ولا يظهر في النسخة الفعلية
                          </span>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>
              <div style={{ flex: '1 1 320px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                  style={{
                    background: 'var(--card)',
                    borderRadius: '22px',
                    boxShadow: 'var(--card-shadow)',
                    padding: 'clamp(18px,3vw,28px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 240px', minWidth: '0' }}>
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
                          <path d="M7 3h10v18l-2.5-1.5L12 21l-2.5-1.5L7 21zM10 8h4M10 12h4" />
                        </svg>
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                        <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>ملخص الطلب</h2>
                        <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>المنتجات والكميات في هذا الطلب.</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,3vw,28px))' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {list(v.ox?.p?.r?.lines).map((l: any, $index: number) => (
                      <Fragment key={$index}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '9px 0', borderBottom: '1px solid var(--line)' }}>
                          <span
                            style={css(
                              `width:42px;height:42px;flex-shrink:0;border-radius:10px;background:var(--card-2) url('${l?.img ?? ''}') center/contain no-repeat;box-shadow:inset 0 0 0 1px var(--line)`,
                            )}
                          />
                          <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <span style={{ fontSize: '14px', color: 'var(--ink)' }}>{l?.t}</span>
                            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                              {l?.q} كرتون × {l?.priceLabel}
                            </span>
                          </span>
                          <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)', whiteSpace: 'nowrap' }}>{l?.sum}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--ink-2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>المجموع الفرعي</span>
                      <span>{v.ox?.p?.r?.subtotalLabel}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>الشحن</span>
                      <span>{v.ox?.p?.r?.shippingLabel}</span>
                    </div>
                    {v.ox?.p?.r?.discount ? (
                      <>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>الخصم</span>
                          <span>{v.ox?.p?.r?.discountLabel}</span>
                        </div>
                      </>
                    ) : null}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--muted)' }}>
                      <span>منها ضريبة القيمة المضافة</span>
                      <span>{v.ox?.p?.r?.vatLabel}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px',
                      padding: '14px 16px',
                      borderRadius: '14px',
                      background: 'var(--gold-soft)',
                      boxShadow: 'inset 0 0 0 1px var(--gold-3)',
                      textAlign: 'center',
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink-2)' }}>المبلغ المستحق</span>
                    <span style={{ fontSize: 'clamp(28px,4vw,34px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--gold-on-soft)' }}>
                      {v.ox?.p?.r?.totalLabel}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>شامل ضريبة القيمة المضافة</span>
                  </div>
                  <span style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--muted)' }}>{v.ox?.p?.r?.delivery}</span>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
