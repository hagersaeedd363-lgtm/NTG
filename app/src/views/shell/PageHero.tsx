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
          minHeight: '460px',
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
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '150px clamp(16px,2.5vw,32px) 64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '18px',
            animation: 'zzfade .5s ease both',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '15px', color: 'rgba(255,255,255,.65)' }}>
            <button
              onClick={v.go?.home}
              style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.65)', fontSize: '15px', cursor: 'pointer' }}
              className="zp-000"
            >
              الرئيسية
            </button>
            {list(v.crumbs).map((cr: any, $index: number) => (
              <Fragment key={$index}>
                <span style={{ opacity: '.5' }}>/</span>
                <button
                  onClick={cr?.onClick}
                  style={{ background: 'none', border: '0', padding: '0', color: 'rgba(255,255,255,.65)', fontSize: '15px', cursor: 'pointer' }}
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
              padding: '6px 14px',
              borderRadius: '36px',
              background: 'rgba(130,130,130,.15)',
              boxShadow: 'inset 0 0 0 1px #fff',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '1.08',
            }}
          >
            {v.meta?.tag}
          </span>
          <h1 style={{ margin: '0', fontSize: 'clamp(36px,5vw,60px)', lineHeight: '1.35', fontWeight: '700', textWrap: 'balance' }}>{v.meta?.title}</h1>
          <p
            style={{
              margin: '0',
              maxWidth: '680px',
              fontSize: 'clamp(18px,1.7vw,22px)',
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
