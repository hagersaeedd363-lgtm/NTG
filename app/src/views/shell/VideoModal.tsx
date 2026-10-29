import type { V } from '../../types';
import { css } from '../../lib/dc';

export function VideoModal({ v }: { v: V }) {
  return (
    <>
      <div
        onClick={v.closeModals}
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: '120',
          background: 'rgba(0,0,0,.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          onClick={v.stop}
          style={{ width: '1000px', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: '14px', animation: 'zzfade .25s ease both' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', color: '#fff', paddingLeft: '52px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '600' }}>{v.vid?.title}</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.65)' }}>{v.vid?.meta}</span>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              background: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {v.vid?.embed ? (
              <>
                <iframe
                  src={v.vid?.src}
                  title={v.vid?.title}
                  allow="autoplay; fullscreen"
                  allowFullScreen={true}
                  style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', border: '0' }}
                />
              </>
            ) : null}
            {v.vid?.noEmbed ? (
              <>
                <span style={css(`position:absolute;inset:0;background:${v.vid?.poster ?? ''};opacity:.35`)} />
                <span
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '14px',
                    color: 'rgba(255,255,255,.8)',
                    textAlign: 'center',
                    padding: '0 24px',
                  }}
                >
                  <span
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,.14)',
                      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                      <path d="M8 5.5v13l11-6.5z" />
                    </svg>
                  </span>
                  <span style={{ fontSize: '15px' }}>يُضاف ملف الفيلم عند اعتماده</span>
                </span>
              </>
            ) : null}
          </div>
          <button
            onClick={v.closeModals}
            aria-label="إغلاق"
            style={{
              position: 'fixed',
              left: '24px',
              top: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '0',
              background: 'rgba(255,255,255,.12)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
