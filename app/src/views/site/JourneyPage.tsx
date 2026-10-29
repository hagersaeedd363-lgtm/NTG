import { Fragment } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';

export function JourneyPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="05 رحلة ماء زمزم" style={{ background: 'var(--bg)', padding: '88px 0' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column' }}>
          {list(v.stations).map((s: any, $index: number) => (
            <Fragment key={$index}>
              <div style={{ display: 'flex', gap: 'clamp(18px,3vw,36px)', alignItems: 'stretch' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: '0' }}>
                  <span
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--card)',
                      boxShadow: 'inset 0 0 0 1.5px var(--gold-3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      color: 'var(--gold-2)',
                    }}
                  >
                    {s?.n}
                  </span>
                  <span style={{ flex: '1', width: '1.5px', background: 'var(--line)', margin: '8px 0' }} />
                </div>
                <div style={{ flex: '1', minWidth: '0', padding: '6px 0 56px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>المحطة {s?.n}</span>
                  <h2 style={{ margin: '0', fontSize: 'clamp(26px,2.8vw,36px)', fontWeight: '700', lineHeight: '1.25', color: 'var(--ink)' }}>{s?.h}</h2>
                  {list(s?.ps).map((p: any, $index: number) => (
                    <Fragment key={$index}>
                      <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.85', color: 'var(--ink-2)', textWrap: 'pretty' }}>{p}</p>
                    </Fragment>
                  ))}
                  {s?.hasCallout ? (
                    <>
                      <div
                        style={{
                          marginTop: '6px',
                          padding: '24px 26px',
                          borderRadius: '15px 9px 15px 15px',
                          background: 'var(--bg-alt)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)' }}>{s?.callout?.q}</span>
                        <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.8', color: 'var(--ink-2)' }}>{s?.callout?.a}</p>
                      </div>
                    </>
                  ) : null}
                  {s?.hasBullets ? (
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '14px' }}>
                        {list(s?.bullets).map((b: any, $index: number) => (
                          <Fragment key={$index}>
                            <div
                              style={{
                                background: 'var(--card)',
                                borderRadius: '18px',
                                boxShadow: 'var(--card-shadow)',
                                padding: '22px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                              }}
                            >
                              <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink)' }}>{b?.k}</span>
                              <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>{b?.v}</p>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                      <button
                        onClick={v.go?.buy}
                        style={{
                          alignSelf: 'flex-start',
                          marginTop: '12px',
                          height: '48px',
                          padding: '0 32px',
                          borderRadius: '9px',
                          background: '#996C2E',
                          border: '1px solid rgba(255,255,255,.2)',
                          color: '#fff',
                          fontSize: '17px',
                          cursor: 'pointer',
                        }}
                        className="zp-002"
                      >
                        اقتنِ ماء زمزم
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
