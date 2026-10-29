import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function ReviewStep({ v }: { v: V }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'zzfade .3s ease both' }}>
        {v.ox?.isNewAcct ? (
          <>
            <div
              role="note"
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
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#2996D7',
              }}
            >
              <span style={{ color: 'var(--info)', display: 'flex' }}>
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
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5M12 8h.01" />
                </svg>
              </span>
              <span style={{ color: '#0051A2', fontWeight: '600' }}>
                {v.ox?.reviewNote}
              </span>
            </div>
          </>
        ) : null}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
          <div
            style={{
              flex: '1.5 1 440px',
              minWidth: '0',
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: '20px clamp(18px,2.5vw,28px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', minHeight: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 280px', minWidth: '0' }}>
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
                    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>طريقة الاستلام</h2>
                  </div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '13px',
                      lineHeight: '20px',
                      color: 'var(--muted)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%',
                    }}
                  >
                    اختر كيف تريد استلام طلبك.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
            <div role="radiogroup" aria-label="طريقة الاستلام" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {list(v.ox?.deliveries).map((d: any, $index: number) => (
                <Fragment key={$index}>
                  <button
                    role="radio"
                    aria-checked={d?.sel}
                    onClick={d?.onClick}
                    style={css(
                      `display:flex;align-items:center;gap:12px;padding:10px 16px;border-radius:12px;border:1px solid ${d?.bd2 ?? ''};background:${d?.bg ?? ''};color:var(--ink);cursor:pointer;text-align:right;width:100%`,
                    )}
                  >
                    <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '0' }}>
                      <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '24px' }}>{d?.t}</span>
                      <span style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--ink-2)' }}>{d?.d}</span>
                    </span>
                    <span
                      style={css(
                        `width:20px;height:20px;flex-shrink:0;border-radius:50%;background:${d?.dotBg ?? ''};box-shadow:${d?.dotRing ?? ''};display:flex;align-items:center;justify-content:center`,
                      )}
                    >
                      <span style={css(`width:8px;height:8px;border-radius:50%;background:${d?.dotIn ?? ''}`)} />
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#996C2E', whiteSpace: 'nowrap' }}>{v.ox?.locTitle}</span>
                <span style={{ flex: '1', height: '1px', background: 'var(--line)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,200px),1fr))', gap: '16px 20px', alignItems: 'start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', width: '100%' }}>
                    <label
                      htmlFor="of-region"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '24px',
                        color: 'var(--ink)',
                      }}
                    >
                      المنطقة
                    </label>
                    <span style={{ position: 'relative', display: 'block' }}>
                      <select
                        id="of-region"
                        value={v.f?.region?.v ?? ''}
                        onChange={v.f?.region?.on}
                        aria-required="true"
                        style={css(
                          `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid ${v.f?.region?.bd ?? ''};background:${v.f?.region?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;appearance:none;-webkit-appearance:none;padding-left:44px;cursor:pointer`,
                        )}
                        className="zp-020"
                      >
                        <option value="">اختر المنطقة</option>
                        {list(v.ox?.regions).map((op: any, $index: number) => (
                          <Fragment key={$index}>
                            <option value={op ?? ''}>{op}</option>
                          </Fragment>
                        ))}
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
                    {v.f?.region?.hasE ? (
                      <>
                        <span role="alert" style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--danger)' }}>
                          {v.f?.region?.e}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', width: '100%' }}>
                    <label
                      htmlFor="of-city"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '24px',
                        color: 'var(--ink)',
                      }}
                    >
                      المدينة
                    </label>
                    <span style={{ position: 'relative', display: 'block' }}>
                      <select
                        id="of-city"
                        value={v.f?.city?.v ?? ''}
                        onChange={v.f?.city?.on}
                        aria-required="true"
                        style={css(
                          `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid ${v.f?.city?.bd ?? ''};background:${v.f?.city?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;appearance:none;-webkit-appearance:none;padding-left:44px;cursor:pointer`,
                        )}
                        className="zp-020"
                      >
                        <option value="">اختر المدينة</option>
                        {list(v.ox?.cities).map((op: any, $index: number) => (
                          <Fragment key={$index}>
                            <option value={op ?? ''}>{op}</option>
                          </Fragment>
                        ))}
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
                    {v.f?.city?.hasE ? (
                      <>
                        <span role="alert" style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--danger)' }}>
                          {v.f?.city?.e}
                        </span>
                      </>
                    ) : null}
                  </div>
                  {v.ox?.isPickup ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', width: '100%' }}>
                        <label
                          htmlFor="of-warehouse"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '15px',
                            fontWeight: '500',
                            lineHeight: '24px',
                            color: 'var(--ink)',
                          }}
                        >
                          المستودع
                        </label>
                        <span style={{ position: 'relative', display: 'block' }}>
                          <select
                            id="of-warehouse"
                            value={v.f?.warehouse?.v ?? ''}
                            onChange={v.f?.warehouse?.on}
                            aria-required="true"
                            style={css(
                              `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid ${v.f?.warehouse?.bd ?? ''};background:${v.f?.warehouse?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;appearance:none;-webkit-appearance:none;padding-left:44px;cursor:pointer`,
                            )}
                            className="zp-020"
                          >
                            <option value="">اختر المستودع</option>
                            {list(v.ox?.warehouses).map((op: any, $index: number) => (
                              <Fragment key={$index}>
                                <option value={op ?? ''}>{op}</option>
                              </Fragment>
                            ))}
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
                        {v.f?.warehouse?.hasE ? (
                          <>
                            <span role="alert" style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--danger)' }}>
                              {v.f?.warehouse?.e}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                  {v.ox?.isAddress ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', width: '100%', gridColumn: '1/-1' }}>
                        {v.ox?.locErr ? (
                          <>
                            <div
                              role="alert"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                minHeight: '56px',
                                boxSizing: 'border-box',
                                borderRadius: '12px',
                                border: '1px solid #F0D78C',
                                background: '#FFF6DB',
                                color: '#8A5A00',
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '24px',
                              }}
                            >
                              <span style={{ display: 'flex', flexShrink: '0' }}>
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
                                  <path d="M12 7v5M12 16.5h.01" />
                                  <circle cx="12" cy="12" r="10" />
                                </svg>
                              </span>
                              <span>{v.ox?.locErr}</span>
                            </div>
                          </>
                        ) : null}
                        {v.ox?.hasMapAddress ? (
                          <>
                            <span
                              style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12px', lineHeight: '1.7', color: 'var(--gold-2)' }}
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                style={{ flexShrink: '0', marginTop: '2px' }}
                              >
                                <path d="M5 12.5l4.5 4.5L19 7.5" />
                              </svg>
                              {v.ox?.mapAddressLabel}
                            </span>
                          </>
                        ) : null}
                        <label
                          htmlFor="of-national"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '15px',
                            fontWeight: '500',
                            lineHeight: '24px',
                            color: 'var(--ink)',
                          }}
                        >
                          العنوان الوطني
                        </label>
                        <div style={{ position: 'relative' }}>
                          <input
                            id="of-national"
                            value={v.f?.nationalAddress?.v ?? ''}
                            onChange={v.f?.nationalAddress?.on}
                            placeholder="مثال: 1234 ABCD 5678"
                            dir="ltr"
                            aria-required="true"
                            style={css(
                              `width:100%;height:46px;padding:0 16px 0 56px;border-radius:12px;border:1px solid ${v.f?.nationalAddress?.bd ?? ''};background:${v.f?.nationalAddress?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;text-align:right`,
                            )}
                            className="zp-020"
                          />
                          <button
                            type="button"
                            onClick={v.ox?.detectLoc}
                            disabled={v.ox?.locBusy}
                            aria-label="تحديد موقعي تلقائياً"
                            title="تحديد موقعي تلقائياً"
                            style={css(
                              `position:absolute;left:6px;top:6px;width:34px;height:34px;padding:0;border-radius:9px;border:1px solid var(--gold-3);background:var(--gold-soft);color:var(--gold-on-soft);cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:${v.ox?.locOpacity ?? ''}`,
                            )}
                            className="zp-025"
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
                              <circle cx="12" cy="12" r="3" />
                              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          </button>
                        </div>
                        {v.f?.nationalAddress?.hasE ? (
                          <>
                            <span role="alert" style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--danger)' }}>
                              {v.f?.nationalAddress?.e}
                            </span>
                          </>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label
                  htmlFor="of-notes"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '500', lineHeight: '24px', color: 'var(--ink)' }}
                >
                  ملاحظات على الطلب
                  <span style={{ fontSize: '14px', fontWeight: '400', color: 'var(--muted)' }}>(اختياري)</span>
                </label>
                <textarea
                  id="of-notes"
                  value={v.ox?.orderNotes ?? ''}
                  onChange={v.ox?.onNotes}
                  maxLength={500}
                  rows={2}
                  placeholder="أي تعليمات خاصة بالتوصيل أو التغليف..."
                  style={css(
                    `width:100%;min-height:72px;padding:12px 16px;border-radius:12px;border:1px solid ${v.ox?.notesBd ?? ''};background:${v.ox?.notesBg ?? ''};color:var(--ink);font-size:16px;font-weight:400;line-height:24px;outline:none;box-sizing:border-box;resize:vertical;font-family:inherit`,
                  )}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  <span role="alert" style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--danger)' }}>
                    {v.ox?.e?.orderNotes}
                  </span>
                  <span style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>
                    {v.ox?.notesCount}
                    /٥٠٠
                  </span>
                </div>
              </div>
            </div>
            <div style={{ height: '1px', background: 'var(--line)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#996C2E', whiteSpace: 'nowrap' }}>من سيستلم الطلب؟</span>
                <span style={{ flex: '1', height: '1px', background: 'var(--line)' }} />
              </div>
              <p
                style={{
                  margin: '0',
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: 'var(--muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}
              >
                أنت المستلم افتراضياً، ويمكنك تعديل الاسم ورقم الجوال.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,200px),1fr))', gap: '16px 20px', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', width: '100%' }}>
                <label htmlFor="of-recvName" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>
                  اسم المستلم
                </label>
                <input
                  id="of-recvName"
                  value={v.f?.recvName?.v ?? ''}
                  onChange={v.f?.recvName?.on}
                  placeholder="الاسم الكامل للمستلم"
                  autoComplete="off"
                  style={css(
                    `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid ${v.f?.recvName?.bd ?? ''};background:${v.f?.recvName?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;text-align:right`,
                  )}
                  className="zp-020"
                />
                {v.f?.recvName?.hasE ? (
                  <>
                    <span role="alert" style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--danger)' }}>
                      {v.f?.recvName?.e}
                    </span>
                  </>
                ) : null}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', width: '100%' }}>
                <label htmlFor="of-recvPhone" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>
                  جوال المستلم
                </label>
                <input
                  id="of-recvPhone"
                  value={v.f?.recvPhone?.v ?? ''}
                  onChange={v.f?.recvPhone?.on}
                  placeholder="05XXXXXXXX"
                  inputMode="tel"
                  dir="ltr"
                  style={css(
                    `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid ${v.f?.recvPhone?.bd ?? ''};background:${v.f?.recvPhone?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;text-align:right`,
                  )}
                  className="zp-020"
                />
                {v.f?.recvPhone?.hasE ? (
                  <>
                    <span role="alert" style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--danger)' }}>
                      {v.f?.recvPhone?.e}
                    </span>
                  </>
                ) : null}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', width: '100%' }}>
                <label htmlFor="of-recvEmail" style={{ fontSize: '15px', fontWeight: '500', color: 'var(--ink)' }}>
                  بريد المستلم الإلكتروني
                </label>
                <input
                  id="of-recvEmail"
                  value={v.f?.recvEmail?.v ?? ''}
                  onChange={v.f?.recvEmail?.on}
                  placeholder="name@example.com"
                  inputMode="email"
                  type="email"
                  dir="ltr"
                  autoComplete="off"
                  style={css(
                    `width:100%;height:46px;padding:0 16px;border-radius:12px;border:1px solid ${v.f?.recvEmail?.bd ?? ''};background:${v.f?.recvEmail?.bg ?? ''};color:var(--ink);font-size:16px;outline:none;box-sizing:border-box;text-align:right`,
                  )}
                  className="zp-020"
                />
                {v.f?.recvEmail?.hasE ? (
                  <>
                    <span role="alert" style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--danger)' }}>
                      {v.f?.recvEmail?.e}
                    </span>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div
            style={{
              flex: '1 1 320px',
              minWidth: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'sticky',
              top: '24px',
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                minWidth: '0',
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                padding: '20px clamp(18px,2.5vw,28px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', minHeight: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 280px', minWidth: '0' }}>
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
                      <path d="M7 3h10a1 1 0 0 1 1 1v17l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1zM9 8h6M9 12h6" />
                    </svg>
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>ملخص الطلب</h2>
                    </div>
                    <p
                      style={{
                        margin: '0',
                        fontSize: '13px',
                        lineHeight: '20px',
                        color: 'var(--muted)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                      }}
                    >
                      المنتجات والكميات
                    </p>
                  </div>
                </div>
                <button
                  onClick={v.ox?.editProducts}
                  aria-label="تعديل المنتجات"
                  title="تعديل المنتجات"
                  style={{
                    width: '40px',
                    height: '40px',
                    flexShrink: '0',
                    borderRadius: '12px',
                    border: '1px solid var(--line)',
                    background: 'transparent',
                    color: 'var(--gold-2)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="zp-026"
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
                    <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3z" />
                    <path d="M14.5 7.5l3 3" />
                  </svg>
                </button>
              </div>
              <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {list(v.ox?.lines).map((l: any, $index: number) => (
                  <Fragment key={$index}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                      <span
                        style={{
                          width: '48px',
                          height: '48px',
                          flexShrink: '0',
                          borderRadius: '10px',
                          background: 'var(--card-2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={css(`width:80%;height:80%;display:block;background:${l?.imgBg ?? ''}`)} />
                      </span>
                      <span style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '15px', fontWeight: '600', lineHeight: '22px', color: 'var(--ink)' }}>{l?.t}</span>
                        <span style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>{l?.qx}</span>
                      </span>
                      <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink)', whiteSpace: 'nowrap' }}>{l?.sum}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--ink-2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', fontSize: '14px', lineHeight: '22px' }}>
                  <span style={{ color: 'var(--muted)', flexShrink: '0' }}>المجموع الفرعي</span>
                  <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.subtotalLabel}</span>
                </div>
                {v.ox?.hasShipping ? (
                  <>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', fontSize: '14px', lineHeight: '22px' }}
                    >
                      <span style={{ color: 'var(--muted)', flexShrink: '0' }}>الشحن</span>
                      <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.shippingLabel}</span>
                    </div>
                  </>
                ) : null}
                {v.ox?.hasDiscount ? (
                  <>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', fontSize: '14px', lineHeight: '22px' }}
                    >
                      <span style={{ color: 'var(--muted)', flexShrink: '0' }}>الخصم</span>
                      <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>− {v.ox?.discountLabel}</span>
                    </div>
                  </>
                ) : null}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', fontSize: '14px', lineHeight: '22px' }}>
                  <span style={{ color: 'var(--muted)', flexShrink: '0' }}>منها ضريبة القيمة المضافة (١٥٪)</span>
                  <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.vatLabel}</span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 20px',
                  borderRadius: '16px',
                  background: '#996C2E',
                  color: '#fff',
                }}
              >
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: '#fff' }}>الإجمالي</span>
                  <span style={{ fontSize: '13px', color: '#fff' }}>شامل ضريبة القيمة المضافة</span>
                </span>
                <span style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.1', color: '#fff', whiteSpace: 'nowrap' }}>{v.ox?.totalLabel}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: 'var(--card)',
            borderRadius: '24px',
            boxShadow: 'var(--card-shadow)',
            padding: '14px 18px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <button
            onClick={v.ox?.back}
            aria-label="رجوع"
            title="رجوع"
            style={{
              width: '44px',
              height: '44px',
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
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: '14px' }}>
            {v.ox?.hasErr ? (
              <>
                <span role="alert" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--danger)' }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v5M12 16h.01" />
                  </svg>
                  أكمل الحقول المطلوبة المُعلّمة بـ *
                </span>
              </>
            ) : null}
            <button
              onClick={v.ox?.submit}
              style={{
                height: '44px',
                padding: '0 22px',
                borderRadius: '9px',
                border: '1px solid rgba(255,255,255,.2)',
                background: '#996C2E',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                minWidth: '220px',
                boxShadow: '0 6px 16px rgba(153,108,46,.3)',
              }}
              className="zp-002"
            >
              <span style={{ fontWeight: '700' }}>{v.ox?.submitLabel}</span>
              <span aria-hidden="true" style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,.45)' }} />
              <span style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>{v.ox?.totalLabel}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
