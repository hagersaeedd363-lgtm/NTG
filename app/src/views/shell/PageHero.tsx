import { Fragment } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';

export function PageHero({ v }: { v: V }) {
  return (
    <>
      <section
        data-screen-label={v.meta?.title}
        style={{
          position: 'relative',
          minHeight: '320px',
          display: 'flex',
          alignItems: 'flex-end',
          backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.62) 0%,rgba(0,0,0,.3) 45%,rgba(0,0,0,.82) 100%),var(--inner-img)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 42%',
          color: '#fff',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '64px clamp(16px,5.6vw,80px) 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '18px',
            animation: 'zzfade .5s ease both',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,.8)' }}>
            <button
              onClick={v.go?.home}
              style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.8)', fontSize: '14px', cursor: 'pointer' }}
              className="zp-000"
            >
              الرئيسية
            </button>
            {list(v.crumbs).map((cr: any, $index: number) => (
              <Fragment key={$index}>
                <span style={{ opacity: '.5' }}>/</span>
                <button
                  onClick={cr?.onClick}
                  style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.8)', fontSize: '14px', cursor: 'pointer' }}
                  className="zp-000"
                >
                  {cr?.label}
                </button>
              </Fragment>
            ))}
          </div>
          <span
            style={{
              display: 'inline-flex',
              padding: '0 8px',
              height: '24px',
              alignItems: 'center',
              borderRadius: 'var(--r-sm)',
              background: 'rgba(255,255,255,.12)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.4)',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '18px',
            }}
          >
            {v.meta?.tag}
          </span>
          <h1 style={{ margin: '0', fontSize: 'clamp(32px,3.4vw,48px)', lineHeight: '1.25', fontWeight: '700', textWrap: 'balance' }}>{v.meta?.title}</h1>
          <p
            style={{
              margin: '0',
              maxWidth: '680px',
              fontSize: '20px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,.86)',
              textWrap: 'pretty',
            }}
          >
            {v.meta?.lead}
          </p>
        </div>
      </section>
    </>
  );
}
