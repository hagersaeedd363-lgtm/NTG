import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function MobileNav({ v }: { v: V }) {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: '80',
          background: 'rgba(12,14,18,.97)',
          color: '#fff',
          overflowY: 'auto',
          animation: 'zzfade .2s ease both',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' }}>
          <span style={{ display: 'block', width: '150px', height: '36px', background: "url('assets/logo-sm-gold.svg') right center/contain no-repeat" }} />
          <button
            onClick={v.closeMobileNav}
            aria-label="إغلاق"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              border: '0',
              background: 'rgba(255,255,255,.08)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div style={{ padding: '8px 24px 40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {list(v.mobileGroups).map((g: any, $index: number) => (
            <Fragment key={$index}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '14px', color: '#D4A843', paddingBottom: '6px' }}>{g?.title}</span>
                {list(g?.items).map((c: any, $index: number) => (
                  <Fragment key={$index}>
                    <button
                      onClick={c?.onClick}
                      style={css(
                        `background:none;border:0;border-bottom:1px solid rgba(255,255,255,.07);padding:14px 0;text-align:right;font-size:20px;color:${c?.color ?? ''};cursor:pointer`,
                      )}
                    >
                      {c?.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          ))}
          <button
            onClick={v.scrollToBuyPack}
            style={{
              height: '52px',
              borderRadius: '9px',
              background: '#996C2E',
              border: '0',
              color: '#fff',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
            className="zp-002"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 4h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2" />
              <circle cx="9.5" cy="19.5" r="1.3" />
              <circle cx="17" cy="19.5" r="1.3" />
            </svg>
            اقتن زمزم
          </button>
          <button
            onClick={v.ox?.openLogin}
            style={{
              height: '52px',
              borderRadius: '9px',
              background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.25)',
              color: '#fff',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            {v.ox?.authLabel}
          </button>
        </div>
      </div>
    </>
  );
}
