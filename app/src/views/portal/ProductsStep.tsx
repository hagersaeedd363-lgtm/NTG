import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function ProductsStep({ v }: { v: V }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'zzfade .3s ease both' }}>
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
                  <path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5zM3 7.5l9 4.5 9-4.5M12 12v9" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>اختر المنتجات والكميات</h2>
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
                  {v.ox?.maxHint}
                </p>
              </div>
            </div>
          </div>
          <div style={{ height: '1px', background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,max(208px,calc((100% - 96px)/4))),1fr))', gap: '16px' }}>
            {list(v.ox?.products).map((p: any, $index: number) => (
              <Fragment key={$index}>
                <div
                  style={css(
                    `display:flex;flex-direction:column;gap:10px;padding:14px;border-radius:16px;border:${p?.bw ?? ''} solid ${p?.bd ?? ''};box-shadow:${p?.shadow ?? ''},${p?.ring ?? ''};background:${p?.cardBg ?? ''};transition:border-color .2s,box-shadow .2s,background .2s`,
                  )}
                >
                  <div
                    style={{
                      position: 'relative',
                      height: '150px',
                      borderRadius: '12px',
                      background: 'radial-gradient(closest-side at 50% 55%,var(--card),var(--card-2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxSizing: 'border-box',
                      padding: '8px',
                    }}
                  >
                    <span role="img" aria-label={p?.t} style={css(`width:100%;height:100%;display:block;background:${p?.imgBg ?? ''};`)} />
                    {p?.sel ? (
                      <>
                        <span
                          style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            minWidth: '30px',
                            height: '30px',
                            padding: '0 9px',
                            boxSizing: 'border-box',
                            borderRadius: '15px',
                            background: '#996C2E',
                            color: '#fff',
                            fontSize: '14px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {p?.q}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '1' }}>
                    <span style={{ fontSize: '17px', fontWeight: '700', lineHeight: '26px', color: 'var(--ink)' }}>{p?.t}</span>
                    <span style={{ fontSize: '13px', lineHeight: '22px', color: 'var(--muted)' }}>{p?.pack}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '2px 8px',
                      paddingTop: '8px',
                      borderTop: '1px dashed var(--line)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '4px', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: '18px', fontWeight: '700', lineHeight: '28px', color: 'var(--gold-2)' }}>{p?.priceLabel}</span>
                      <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ كرتون</span>
                    </span>
                    {p?.sel ? (
                      <>
                        <span style={{ fontSize: '13px', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                          المجموع <strong style={{ fontSize: '16px', color: 'var(--ink)' }}>{p?.lineLabel}</strong>
                        </span>
                      </>
                    ) : null}
                  </div>
                  <div
                    style={{
                      height: '38px',
                      borderRadius: '10px',
                      background: 'var(--card-2)',
                      boxShadow: 'inset 0 0 0 1px var(--line)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '3px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <button
                      onClick={p?.inc}
                      aria-label="زيادة"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '7px',
                        border: '0',
                        background: '#996C2E',
                        boxShadow: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: '0',
                      }}
                      className="zp-002"
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
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                    <input
                      value={p?.q ?? ''}
                      onChange={p?.onQ}
                      inputMode="numeric"
                      max={p?.maxQ}
                      aria-label="الكمية"
                      style={css(
                        `flex:1;min-width:0;height:32px;border:0;background:transparent;text-align:center;font-size:15px;font-weight:600;color:${p?.qColor ?? ''};outline:none`,
                      )}
                    />
                    <button
                      onClick={p?.dec}
                      aria-label="إنقاص"
                      style={css(
                        `width:32px;height:32px;border-radius:7px;border:0;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;opacity:${p?.decOp ?? ''};`,
                      )}
                      className="zp-024"
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
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'sticky',
            bottom: '16px',
            zIndex: '5',
            background: 'var(--card)',
            borderRadius: '24px',
            boxShadow: 'var(--card-shadow),0 12px 32px rgba(0,0,0,.12)',
            padding: '14px 18px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px' }}>
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
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
              <span style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>الكمية</span>
              <span style={{ fontSize: '18px', lineHeight: '26px', fontWeight: '700', color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                {v.ox?.cartCount} كرتون <span style={{ fontSize: '13px', fontWeight: '400', color: 'var(--muted)' }}>· {v.ox?.bottlesCount} عبوة</span>
              </span>
            </span>
            <span style={{ width: '1px', height: '36px', background: 'var(--line)' }} />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
              <span style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)' }}>الإجمالي قبل الخصم والشحن</span>
              <span style={{ fontSize: '18px', lineHeight: '26px', fontWeight: '700', color: 'var(--gold-2)', whiteSpace: 'nowrap' }}>
                {v.ox?.cartTotalLabel}
              </span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '14px', color: 'var(--danger)' }}>{v.ox?.e?.cart}</span>
            <button
              onClick={v.ox?.nextProducts}
              style={{
                height: '44px',
                padding: '0 22px',
                borderRadius: '9px',
                border: '1px solid rgba(255,255,255,.2)',
                background: '#996C2E',
                color: '#fff',
                fontSize: '17px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                minWidth: '130px',
              }}
              className="zp-002"
            >
              متابعة
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
