import type { CSSProperties } from 'react';

interface ImageSlotProps {
  id?: string;
  shape?: 'rect' | 'rounded' | 'circle' | 'pill';
  placeholder?: string;
  src?: string;
  style?: CSSProperties;
}

const RADIUS = { rect: 0, rounded: 12, circle: '50%', pill: 9999 } as const;

/** Image area awaiting final photography; shows a captioned placeholder until `src` is set. */
export function ImageSlot({ id, shape = 'rounded', placeholder = 'صورة', src, style }: ImageSlotProps) {
  const radius = RADIUS[shape];
  return (
    <div id={id} style={{ position: 'relative', display: 'block', width: '100%', height: '100%', aspectRatio: '3/2', overflow: 'hidden', borderRadius: radius, ...style }}>
      {src ? (
        <img src={src} alt={placeholder} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div role="img" aria-label={placeholder} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, padding: 12, textAlign: 'center', background: 'rgba(127,127,127,.08)', border: '1.5px dashed color-mix(in srgb, currentColor 35%, transparent)', borderRadius: radius, font: '500 13px/1.3 inherit' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.45 }} aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="9" cy="10" r="2" />
            <path d="M21 16l-5-5-9 9" />
          </svg>
          <span style={{ opacity: 0.75, maxWidth: '90%' }}>{placeholder}</span>
        </div>
      )}
    </div>
  );
}
