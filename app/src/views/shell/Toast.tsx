import type { V } from '../../types';

export function Toast({ v }: { v: V }) {
  return (
    <>
      <div
        role="status"
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '150',
          background: '#0C0D0E',
          color: '#fff',
          padding: '14px 22px',
          borderRadius: 'var(--r-md)',
          boxShadow: '0 12px 30px rgba(0,0,0,.3),inset 0 0 0 1px rgba(255,255,255,.1)',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          animation: 'zzfade .2s ease both',
          maxWidth: 'calc(100vw - 32px)',
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold-3)', flexShrink: '0' }} />
        {v.toast}
      </div>
    </>
  );
}
