import { Fragment } from 'react';
import type { V } from '../../types';
import { Alert, ICON } from '../../portal/ui';
import { css, list } from '../../lib/dc';

export function OrdersView({ v }: { v: V }) {
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
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '0' }}>
            <button
              onClick={v.ox?.backOrders}
              aria-label="رجوع"
              style={{
                width: '48px',
                height: '48px',
                padding: '0',
                borderRadius: '12px',
                border: '0',
                background: 'var(--card-2)',
                boxShadow: 'inset 0 0 0 1px var(--line)',
                color: 'var(--ink)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
              }}
              className="zp-023"
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
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            {v.ox?.odOff ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
                  <h1 style={{ margin: '0', fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: 'var(--ink)' }}>طلباتي</h1>
                  <p style={{ margin: '0', fontSize: '14px', lineHeight: '24px', color: 'var(--muted)' }}>تابع جميع طلبات مياه زمزم من مكان واحد.</p>
                </div>
              </>
            ) : null}
            {v.ox?.odOn ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
                    <h1 dir="ltr" style={{ margin: '0', fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: 'var(--ink)' }}>
                      {v.ox?.od?.id}
                    </h1>
                    <span
                      style={css(
                        `display:inline-flex;align-items:center;gap:8px;height:24px;padding:0 12px;border-radius:8px;background:${v.ox?.od?.chipBg ?? ''};color:${v.ox?.od?.chipFg ?? ''};box-shadow:inset 0 0 0 1px ${v.ox?.od?.chipBd ?? ''};font-size:12px;font-weight:500;white-space:nowrap`,
                      )}
                    >
                      {v.ox?.od?.statusLabel}
                    </span>
                  </div>
                  <p style={{ margin: '0', fontSize: '14px', lineHeight: '24px', color: 'var(--muted)' }}>
                    {v.ox?.od?.date} · {v.ox?.od?.units}
                  </p>
                </div>
              </>
            ) : null}
          </div>
          {v.ox?.odOff ? (
            <>
              {v.ox?.canNew ? (
              <button
                onClick={v.ox?.newOrder}
                style={{
                  height: '48px',
                  padding: '0 24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,.2)',
                  background: '#996C2E',
                  color: '#fff',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '16px',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                className="zp-002"
              >
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
                  <path d="M12 5v14M5 12h14" />
                </svg>
                طلب جديد
              </button>
              ) : null}
            </>
          ) : null}
        </div>
        {v.ox?.odOff && v.ox?.blockNote ? <Alert tone="warn" title={v.ox?.blockNote} /> : null}
        {v.ox?.odOff && v.ox?.payNote ? (
          <Alert tone="warn" icon={ICON.card} title={v.ox.payNote}>
            تمت الموافقة، ويبدأ التجهيز بعد تأكيد الدفع.
          </Alert>
        ) : null}
        {v.ox?.odOff ? (
          <>
            <section
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                role="tablist"
                style={{ display: 'flex', gap: '32px', boxShadow: 'inset 0 -1px 0 var(--line)', overflowX: 'auto', maxWidth: '100%', padding: '0 24px' }}
                className="zz-orders-tabs"
              >
                {list(v.ox?.ordersTabs).map((t: any, $index: number) => (
                  <Fragment key={$index}>
                    <button
                      onClick={t?.onClick}
                      role="tab"
                      aria-selected={t?.active}
                      style={css(
                        `display:inline-flex;align-items:center;gap:8px;height:56px;padding:0;border:0;box-shadow:inset 0 -2px 0 ${t?.ul ?? ''};background:transparent;color:${t?.fg ?? ''};font-size:16px;font-weight:${t?.fw ?? ''};cursor:pointer;white-space:nowrap;transition:color .2s,border-color .2s`,
                      )}
                      className="zp-013"
                    >
                      {t?.label}
                      <span
                        style={css(
                          `display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;box-sizing:border-box;border-radius:8px;background:${t?.countBg ?? ''};color:${t?.countFg ?? ''};font-size:12px;font-weight:500`,
                        )}
                      >
                        {t?.count}
                      </span>
                    </button>
                  </Fragment>
                ))}
              </div>
              <div
                style={{ padding: '16px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--line)' }}
              >
                <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: '540px', minWidth: '0' }}>
                  <input
                    value={v.ox?.ordersQ ?? ''}
                    onInput={v.ox?.onOrdersQ}
                    type="search"
                    placeholder="ابحث برقم الطلب أو المنتج"
                    aria-label="ابحث برقم الطلب أو المنتج"
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '0 48px',
                      borderRadius: '12px',
                      border: '1px solid var(--line)',
                      background: 'var(--card)',
                      color: 'var(--ink-2)',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      WebkitAppearance: 'none',
                      appearance: 'none',
                    }}
                    className="zp-020"
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    style={{ position: 'absolute', right: '14px', top: '9px', color: 'var(--gold-2)', pointerEvents: 'none' }}
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M20 20l-4.2-4.2" />
                  </svg>
                  {v.ox?.ordersQHas ? (
                    <>
                      <button
                        onClick={v.ox?.clearOrdersQ}
                        aria-label="مسح البحث"
                        style={{
                          position: 'absolute',
                          left: '4px',
                          top: '4px',
                          width: '32px',
                          height: '32px',
                          borderRadius: '10px',
                          border: '0',
                          background: 'transparent',
                          color: 'var(--muted)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        className="zp-029"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </button>
                    </>
                  ) : null}
                </div>
                <div style={{ position: 'relative', flex: '0 1 240px', minWidth: '200px' }}>
                  <select
                    value={v.ox?.ordersStatus ?? ''}
                    onChange={v.ox?.onOrdersStatus}
                    aria-label="تصفية حسب الحالة"
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '0 16px 0 40px',
                      borderRadius: '12px',
                      border: '1px solid var(--line)',
                      background: 'var(--card)',
                      color: 'var(--ink-2)',
                      fontSize: '14px',
                      outline: 'none',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                      WebkitAppearance: 'none',
                      appearance: 'none',
                    }}
                    className="zp-020"
                  >
                    {list(v.ox?.ordersStatusOptions).map((st: any, $index: number) => (
                      <Fragment key={$index}>
                        <option value={st?.v ?? ''}>{st?.t}</option>
                      </Fragment>
                    ))}
                  </select>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ position: 'absolute', left: '14px', top: '11px', color: 'var(--muted)', pointerEvents: 'none' }}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <span style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--muted)', marginInlineStart: 'auto' }}>{v.ox?.ordersShowing}</span>
              </div>
              {v.ox?.ordersHasRows ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,2fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) 32px',
                        alignItems: 'center',
                        gap: '16px 24px',
                        padding: '0 24px',
                        height: '48px',
                        background: 'var(--card-2)',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: 'var(--muted)',
                      }}
                      className="zz-th"
                    >
                      {list(v.ox?.sortCols).map((sc: any, $index: number) => (
                        <Fragment key={$index}>
                          <button
                            onClick={sc?.onClick}
                            style={css(
                              `display:inline-flex;align-items:center;gap:4px;justify-self:start;height:32px;padding:0;border:0;background:transparent;color:${sc?.fg ?? ''};font-size:13px;font-weight:500;cursor:pointer;font-family:inherit`,
                            )}
                            className="zp-013"
                          >
                            {sc?.l}
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
                              style={css(`opacity:${sc?.op ?? ''}`)}
                            >
                              <path d={sc?.arrow} />
                            </svg>
                          </button>
                        </Fragment>
                      ))}
                      <span />
                    </div>
                    {list(v.ox?.ordersRows).map((or: any, $index: number) => (
                      <Fragment key={$index}>
                        <div
                          onClick={or?.view}
                          role="button"
                          tabIndex={0}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,2fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) 32px',
                            alignItems: 'center',
                            gap: '16px 24px',
                            padding: '16px 24px',
                            minHeight: '72px',
                            boxSizing: 'border-box',
                            borderTop: '1px solid var(--line)',
                            cursor: 'pointer',
                          }}
                          className="zz-tr"
                        >
                          <span style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
                            <span style={{ fontSize: '12px', color: 'var(--muted)' }} className="zz-lb">
                              رقم الطلب
                            </span>
                            <span dir="ltr" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px', color: 'var(--ink)', textAlign: 'right' }}>
                              {or?.ref}
                            </span>
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '0' }}>
                            <span
                              style={{
                                width: '40px',
                                height: '40px',
                                flexShrink: '0',
                                borderRadius: '8px',
                                background: 'var(--card-2)',
                                boxShadow: 'inset 0 0 0 1px var(--line)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <span style={css(`width:80%;height:80%;display:block;background:${or?.thumbBg ?? ''}`)} />
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
                              <span style={{ fontSize: '12px', color: 'var(--muted)' }} className="zz-lb">
                                المنتجات
                              </span>
                              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '0' }}>
                                <span
                                  style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '24px',
                                    color: 'var(--ink)',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    minWidth: '0',
                                  }}
                                >
                                  {or?.pFirst}
                                </span>
                                {or?.hasMore ? (
                                  <>
                                    <span
                                      style={{
                                        flexShrink: '0',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        height: '24px',
                                        padding: '0 10px',
                                        borderRadius: '8px',
                                        background: 'var(--gold-soft)',
                                        color: 'var(--gold-on-soft)',
                                        boxShadow: 'inset 0 0 0 1px var(--gold-3)',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                      }}
                                    >
                                      {or?.pMore}
                                    </span>
                                  </>
                                ) : null}
                              </span>
                              <span style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>{or?.unitsLabel}</span>
                            </span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '12px', color: 'var(--muted)' }} className="zz-lb">
                              التاريخ
                            </span>
                            <span style={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px', color: 'var(--ink)' }}>{or?.date}</span>
                          </span>
                          <span style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '12px', color: 'var(--muted)' }} className="zz-lb">
                              الإجمالي
                            </span>
                            <strong style={{ fontSize: '14px', fontWeight: '500', lineHeight: '24px', color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                              {or?.totalLabel}
                            </strong>
                          </span>
                          <span
                            style={css(
                              `display:inline-flex;align-items:center;gap:8px;height:24px;padding:0 12px;border-radius:8px;justify-self:start;background:${or?.chipBg ?? ''};color:${or?.chipFg ?? ''};box-shadow:inset 0 0 0 1px ${or?.chipBd ?? ''};font-size:12px;font-weight:500;white-space:nowrap`,
                            )}
                          >
                            {or?.statusLabel}
                          </span>
                          <span
                            aria-label="عرض الطلب"
                            title="عرض الطلب"
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'var(--card-2)',
                              boxShadow: 'inset 0 0 0 1px var(--line)',
                              color: 'var(--gold-on-soft)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              justifySelf: 'end',
                            }}
                          >
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
                              <path d="M2 12s3.600-6.500 10-6.500S22 12 22 12s-3.600 6.500-10 6.500S2 12 2 12z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </>
              ) : null}
              {v.ox?.ordersEmpty ? (
                <>
                  <div style={{ padding: '48px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                    <span
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'var(--card-2)',
                        boxShadow: 'inset 0 0 0 1px var(--line)',
                        color: 'var(--gold-2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 7h16M4 12h16M4 17h10" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>لا توجد طلبات مطابقة</span>
                    <span style={{ fontSize: '14px', lineHeight: '24px', color: 'var(--muted)' }}>جرّب تغيير البحث أو الفلتر، أو ابدأ طلباً جديداً.</span>
                    {v.ox?.canNew ? (
                    <button
                      onClick={v.ox?.newOrder}
                      style={{
                        marginTop: '16px',
                        height: '48px',
                        padding: '0 24px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,.2)',
                        background: '#996C2E',
                        color: '#fff',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '16px',
                      }}
                      className="zp-002"
                    >
                      طلب جديد
                    </button>
                    ) : null}
                  </div>
                </>
              ) : null}
            </section>
          </>
        ) : null}
        {v.ox?.odOn ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                role="status"
                style={css(
                  `display: flex; flex-wrap: wrap; align-items: flex-start; gap: 16px; padding: 16px 24px; min-height: 56px; box-sizing: border-box; border-radius: 12px; background: ${v.ox?.od?.alBg ?? ''}; border: 1px solid ${v.ox?.od?.alBd ?? ''}; border-color: #88C0F8; border-width: 1px`,
                )}
              >
                <span
                  aria-hidden="true"
                  style={css(`width:24px;height:24px;flex-shrink:0;color:${v.ox?.od?.alFg ?? ''};display:flex;align-items:center;justify-content:center`)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={v.ox?.od?.pn?.ic} />
                  </svg>
                </span>
                <span style={{ flex: '1 1 280px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={css(`font-size:14px;font-weight:600;line-height:24px;color:${v.ox?.od?.alFg ?? ''}`)}>
                    {v.ox?.od?.pn?.title} · {v.ox?.od?.pn?.desc}
                    {v.ox?.od?.waitPay ? <> · مستحق قبل {v.ox?.od?.dueLabel}</> : null}
                  </span>
                  {v.ox?.od?.hasDisc ? (
                    <>
                      <span
                        style={css(
                          `align-self:flex-start;display:inline-flex;align-items:center;gap:8px;height:24px;padding:0 12px;border-radius:8px;background:${v.ox?.od?.alFg ?? ''};color:#fff;font-size:12px;font-weight:500;line-height:24px;white-space:nowrap`,
                        )}
                      >
                        خصم {v.ox?.od?.discPct} · وفّرت {v.ox?.od?.savedLabel}
                      </span>
                    </>
                  ) : null}
                </span>
                <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignSelf: 'center' }}>
                  {v.ox?.od?.pn?.act ? (
                    <>
                      <button
                        onClick={v.ox?.od?.pn?.onAct}
                        style={{
                          height: '40px',
                          padding: '0 20px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255,255,255,.2)',
                          background: '#996C2E',
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                        className="zp-002"
                      >
                        {v.ox?.od?.pn?.actLabel}
                      </button>
                    </>
                  ) : null}
                  {v.ox?.od?.pn?.act2 ? (
                    <>
                      <button
                        onClick={v.ox?.od?.pn?.onAct2}
                        style={{
                          height: '40px',
                          padding: '0 20px',
                          borderRadius: '12px',
                          border: '1px solid var(--line)',
                          background: 'var(--card)',
                          color: 'var(--ink)',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                        className="zp-030"
                      >
                        {v.ox?.od?.pn?.act2Label}
                      </button>
                    </>
                  ) : null}
                </span>
              </div>
              <div
                style={{
                  background: 'var(--card)',
                  borderRadius: '24px',
                  boxShadow: 'var(--card-shadow)',
                  padding: '20px clamp(18px,2.5vw,28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a1.5 1.5 0 1 0 0-.01M17 19a1.5 1.5 0 1 0 0-.01" />
                    </svg>
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0' }}>
                    <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>مسار الطلب</h2>
                    <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>تابع مراحل طلبك حتى التسليم.</p>
                  </div>
                </div>
                <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
                <div style={{ display: 'flex', overflowX: 'auto', padding: '8px 4px' }} className="zz-orders-tabs">
                  {list(v.ox?.od?.stages).map((ts: any, $index: number) => (
                    <Fragment key={$index}>
                      <div style={{ flex: '1 0 140px', minWidth: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                          <span style={css(`flex:1;height:2px;border-radius:1px;background:${ts?.bBg ?? ''}`)} />
                          <span
                            style={css(
                              `width:32px;height:32px;flex-shrink:0;border-radius:50%;background:${ts?.bg ?? ''};box-shadow:${ts?.ring ?? ''};color:#fff;display:flex;align-items:center;justify-content:center;margin:0 8px`,
                            )}
                          >
                            {ts?.done ? (
                              <>
                                <svg
                                  width="16"
                                  height="16"
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
                          <span style={css(`flex:1;height:2px;border-radius:1px;background:${ts?.aBg ?? ''}`)} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 8px', textAlign: 'center' }}>
                          <span style={css(`font-size:14px;line-height:24px;font-weight:${ts?.fw ?? ''};color:${ts?.color ?? ''}`)}>{ts?.t}</span>
                          <span style={css(`font-size:13px;line-height:20px;color:${ts?.subColor ?? ''}`)}>{ts?.sub}</span>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ flex: '1.5 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {v.ox?.od?.waitPay ? (
                    <>
                      <div
                        style={{
                          background: 'var(--card)',
                          borderRadius: '24px',
                          boxShadow: 'var(--card-shadow)',
                          padding: '20px clamp(18px,2.5vw,28px)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '20px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                              <path d="M3 6h18v12H3zM3 10h18M7 15h3" />
                            </svg>
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0' }}>
                            <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>فاتورة سداد</h2>
                            <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>تفاصيل المبلغ المستحق ومرجع الدفع</p>
                          </div>
                        </div>
                        <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            padding: '24px',
                            borderRadius: '16px',
                            background:
                              'radial-gradient(120% 140% at 0% 0%,rgba(212,168,67,.38),rgba(212,168,67,0) 55%),linear-gradient(135deg,#99702A 0%,#7A5522 52%,#4A3213 100%)',
                            color: '#fff',
                            boxShadow: '0 8px 24px rgba(74,50,19,.28)',
                          }}
                        >
                          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '13px', lineHeight: '20px', color: '#fff', opacity: '.9' }}>رقم الفاتورة</span>
                              <span dir="ltr" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '24px', color: '#fff' }}>
                                {v.ox?.od?.invNo}
                              </span>
                            </span>
                            <span style={{ fontSize: '36px', fontWeight: '700', lineHeight: '1.1', color: '#fff', whiteSpace: 'nowrap' }}>
                              {v.ox?.od?.totalLabel}
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                height: '24px',
                                padding: '0 12px',
                                borderRadius: '8px',
                                background: '#FFF6DB',
                                color: '#8A5A00',
                                fontSize: '12px',
                                fontWeight: '500',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {v.ox?.od?.daysLeft}
                            </span>
                            <span style={{ fontSize: '14px', lineHeight: '24px', color: '#fff' }}>مستحق قبل {v.ox?.od?.dueLabel}</span>
                          </div>
                          <div style={{ height: '1px', background: 'rgba(255,255,255,.35)' }} />
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 32px', justifyContent: 'space-between' }}>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '13px', lineHeight: '20px', color: '#fff', opacity: '.9' }}>مرجع الدفع</span>
                              <span dir="ltr" style={{ fontSize: '14px', lineHeight: '24px', color: '#fff' }}>
                                {v.ox?.od?.payRef}
                              </span>
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <span style={{ fontSize: '13px', lineHeight: '20px', color: '#fff', opacity: '.9' }}>الجهة المصدرة</span>
                              <span style={{ fontSize: '14px', lineHeight: '24px', color: '#fff' }}>وزارة البيئة والمياه والزراعة</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div
                    style={{
                      background: 'var(--card)',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '20px clamp(18px,2.5vw,28px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0' }}>
                        <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>معلومات الطلب</h2>
                        <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>تفاصيل الطلب المقدَّم</p>
                      </div>
                    </div>
                    <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>رقم الطلب</span>
                        <span dir="ltr" style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>
                          {v.ox?.od?.id}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>الغرض</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              height: '24px',
                              padding: '0 10px',
                              borderRadius: '8px',
                              background: 'var(--gold-soft)',
                              color: 'var(--gold-on-soft)',
                              boxShadow: 'inset 0 0 0 1px var(--gold-3)',
                              fontSize: '12px',
                              fontWeight: '500',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {v.ox?.od?.pPurpose}
                          </span>
                        </span>
                      </div>
                      {v.ox?.od?.hasEtype ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: '16px',
                              fontSize: '14px',
                              lineHeight: '24px',
                            }}
                          >
                            <span style={{ color: 'var(--muted)', flexShrink: '0' }}>نوع الجهة</span>
                            <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>
                              <span
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  height: '24px',
                                  padding: '0 10px',
                                  borderRadius: '8px',
                                  background: 'var(--gold-soft)',
                                  color: 'var(--gold-on-soft)',
                                  boxShadow: 'inset 0 0 0 1px var(--gold-3)',
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {v.ox?.od?.pEtype}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : null}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>المنتج</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.pProducts}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>الكمية</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.unitsN}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>المبلغ الإجمالي</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.totalLabel}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>تاريخ التقديم</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.date}</span>
                      </div>
                      {v.ox?.od?.hasNotes ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: '16px',
                              fontSize: '14px',
                              lineHeight: '24px',
                            }}
                          >
                            <span style={{ color: 'var(--muted)', flexShrink: '0' }}>ملاحظات الطلب</span>
                            <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.notes}</span>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div
                    style={{
                      background: 'var(--card)',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '20px clamp(18px,2.5vw,28px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                          <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0' }}>
                        <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>معلومات التوصيل</h2>
                        <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>العنوان وجهة الاتصال</p>
                      </div>
                    </div>
                    <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>عنوان التسليم</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.dAddr}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>العنوان الوطني</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.dNat}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>المدينة</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.dCity}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>جهة الاتصال</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.cName}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>رقم الهاتف</span>
                        <span dir="ltr" style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>
                          {v.ox?.od?.cPhone}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>البريد الإلكتروني</span>
                        <span dir="ltr" style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>
                          {v.ox?.od?.cEmail}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '24px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>ملاحظات التوصيل</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.dNotes}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flex: '1 1 320px',
                    minWidth: '0',
                    position: 'sticky',
                    top: '24px',
                    alignSelf: 'flex-start',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                  }}
                >
                  <div
                    style={{
                      background: 'var(--card)',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '20px clamp(18px,2.5vw,28px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0' }}>
                        <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>ملخص الطلب</h2>
                        <p style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>المنتجات والكميات</p>
                      </div>
                    </div>
                    <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {list(v.ox?.od?.lines).map((l: any, $index: number) => (
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
                              <span style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>
                                {l?.q} × {l?.priceLabel}
                              </span>
                            </span>
                            <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink)', whiteSpace: 'nowrap' }}>{l?.sum}</span>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--ink-2)' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '22px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>المجموع الفرعي</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.subtotalLabel}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '22px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>الشحن</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.shippingLabel}</span>
                      </div>
                      {v.ox?.od?.hasDisc ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: '16px',
                              fontSize: '14px',
                              lineHeight: '22px',
                            }}
                          >
                            <span style={{ color: 'var(--muted)', flexShrink: '0' }}>الخصم</span>
                            <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.discountLabel}</span>
                          </div>
                        </>
                      ) : null}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '16px',
                          fontSize: '14px',
                          lineHeight: '22px',
                        }}
                      >
                        <span style={{ color: 'var(--muted)', flexShrink: '0' }}>ضريبة القيمة المضافة</span>
                        <span style={{ color: 'var(--ink)', fontWeight: '500', textAlign: 'left', minWidth: '0' }}>{v.ox?.od?.vatLabel}</span>
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
                      <span style={{ fontSize: '28px', fontWeight: '700', lineHeight: '1.1', color: '#fff', whiteSpace: 'nowrap' }}>
                        {v.ox?.od?.totalLabel}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      background: 'var(--card)',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '20px clamp(18px,2.5vw,28px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                          <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z" />
                        </svg>
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0' }}>
                        <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>تحتاج مساعدة؟</h2>
                        <p dir="ltr" style={{ margin: '0', fontSize: '13px', lineHeight: '20px', color: 'var(--muted)', textAlign: 'right' }}>
                          support@zamzam.gov.sa
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={v.ox?.contactSupport}
                      style={{
                        height: '46px',
                        padding: '0 20px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                      className="zp-031"
                    >
                      تواصل مع الدعم
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
