import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function ReportsPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="10 التقارير والإصدارات" style={{ background: 'var(--bg)', padding: '48px 0 96px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {list(v.reportChips).map((c: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  onClick={c?.onClick}
                  style={css(
                    `height:40px;padding:0 18px;border-radius:36px;border:1px solid ${c?.bd ?? ''};background:${c?.bg ?? ''};color:${c?.fg ?? ''};font-size:15px;cursor:pointer`,
                  )}
                >
                  {c?.label}
                </button>
              </Fragment>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
            {list(v.reports).map((r: any, $index: number) => (
              <Fragment key={$index}>
                <div
                  style={{
                    background: 'var(--card)',
                    borderRadius: '24px',
                    boxShadow: 'var(--card-shadow)',
                    padding: '20px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'stretch',
                  }}
                >
                  <span
                    style={{
                      width: '56px',
                      height: '56px',
                      flexShrink: '0',
                      borderRadius: '14px',
                      background: 'var(--gold-soft)',
                      color: 'var(--gold-2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                      <path d="M14 3v5h5" />
                      <path d="M9 13h6M9 17h4" />
                    </svg>
                  </span>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '0', maxWidth: '540px', width: '100%' }}>
                    <span style={{ fontSize: '14px', color: 'var(--gold-2)' }}>{r?.catLabel}</span>
                    <span style={{ fontSize: '19px', fontWeight: '700', lineHeight: '1.45', color: 'var(--ink)' }}>{r?.title}</span>
                    <span style={{ fontSize: '14px', color: 'var(--muted)' }}>
                      {r?.date} · {r?.size}
                    </span>
                    <button
                      onClick={r?.onClick}
                      style={{
                        marginTop: 'auto',
                        alignSelf: 'flex-start',
                        height: '38px',
                        padding: '0 16px',
                        borderRadius: '9px',
                        border: '1px solid var(--line)',
                        background: 'transparent',
                        color: 'var(--ink)',
                        fontSize: '15px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      className="zp-008"
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
                      >
                        <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
                      </svg>
                      تحميل
                    </button>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
