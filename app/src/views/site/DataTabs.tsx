import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function DataTabs({ v }: { v: V }) {
  return (
    <>
      <section style={{ background: 'var(--bg)', padding: '40px 0 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)' }}>
          <div
            role="tablist"
            style={{ overflowY: 'hidden', scrollbarWidth: 'none', display: 'flex', gap: '28px', overflowX: 'auto', borderBottom: '1px solid var(--line)' }}
          >
            {list(v.dataTabs).map((t: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  role="tab"
                  onClick={t?.onClick}
                  style={css(
                    `background:none;border:0;border-bottom:3px solid ${t?.bd ?? ''};padding:14px 0;margin-bottom:-1px;font-size:18px;color:${t?.color ?? ''};cursor:pointer;white-space:nowrap`,
                  )}
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
