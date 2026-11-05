import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function DataTabs({ v }: { v: V }) {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '40px 0 0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)' }}>
          <div
            role="tablist"
            style={{ overflowY: 'hidden', scrollbarWidth: 'none', display: 'flex', gap: '0', overflowX: 'auto', borderBottom: '1px solid var(--line)' }}
          >
            {list(v.dataTabs).map((t: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  role="tab"
                  onClick={t?.onClick}
                  style={css(`background:none;border:0;border-radius:var(--r-sm) var(--r-sm) 0 0;border-bottom:2px solid ${t?.bd ?? ''};padding:12px 16px;margin-bottom:-1px;font-size:14px;line-height:20px;font-weight:${t?.fw ?? '500'};color:${t?.color ?? ''};cursor:pointer;white-space:nowrap;font-family:inherit`,
                  )}
                  className="dga-tab"
                >
                  {t?.label}
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
