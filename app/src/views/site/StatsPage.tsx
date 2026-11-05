import { Fragment } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';

export function StatsPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="09 الأرقام والإحصائيات" style={{ background: 'var(--bg)', padding: '40px 0 40px' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)', display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {list(v.statGroups).map((g: any, $index: number) => (
            <Fragment key={$index}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <h2 style={{ margin: '0', fontSize: '30px', fontWeight: '700', color: 'var(--ink)', whiteSpace: 'nowrap' }}>{g?.t}</h2>
                  <span style={{ flex: '1', height: '1px', background: 'var(--line)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '16px' }}>
                  {list(g?.items).map((it: any, $index: number) => (
                    <Fragment key={$index}>
                      <div
                        style={{
                          background: 'var(--card)',
                          borderRadius: 'var(--r-lg)',
                          boxShadow: 'var(--card-shadow)',
                          padding: '24px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          minHeight: '130px',
                        }}
                      >
                        <span style={{ fontSize: '16px', color: 'var(--muted)' }}>{it?.l}</span>
                        {it?.has ? (
                          <>
                            <span style={{ fontSize: 'clamp(34px,3.4vw,46px)', lineHeight: '1.1', color: 'var(--ink)' }}>{it?.v}</span>
                            <span style={{ fontSize: '16px', lineHeight: '24px', color: 'var(--ink-2)' }}>{it?.u}</span>
                          </>
                        ) : null}
                        {it?.pending ? (
                          <>
                            <span
                              style={{
                                marginTop: 'auto',
                                alignSelf: 'flex-start',
                                padding: '5px 12px',
                                borderRadius: 'var(--r-sm)',
                                background: 'var(--card-2)',
                                boxShadow: 'inset 0 0 0 1px var(--line)',
                                fontSize: '14px',
                                color: 'var(--muted)',
                              }}
                            >
                              قيد التحديث
                            </span>
                          </>
                        ) : null}
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
          <div
            style={{
              padding: '18px 22px',
              borderRadius: 'var(--r-md)',
              boxShadow: 'inset 0 0 0 1px var(--line)',
              fontSize: '16px',
              color: 'var(--ink-2)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px 18px',
            }}
          >
            <strong style={{ color: 'var(--ink)', fontWeight: '600' }}>آخر تحديث للبيانات:</strong>
            <span>سبتمبر ٢٠٢٥م</span>
            <span>المصدر: قسم جودة المياه — المختبر المركزي</span>
          </div>
        </div>
      </section>
    </>
  );
}
