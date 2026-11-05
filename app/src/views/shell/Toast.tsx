import type { V } from '../../types';
import { ICON, Icon } from '../../portal/ui';

/**
 * DS Notification Toast (neutral): white, r8, shadow-3xl, 16/24 horizontal/vertical padding,
 * featured icon (40, neutral fill), Text md semibold message, 8px neutral edge on the start side.
 * Shown at the top of the screen, as the DS describes.
 */
export function Toast({ v }: { v: V }) {
  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        top: 120,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 150,
        width: 'min(484px,calc(100vw - 32px))',
        boxSizing: 'border-box',
        background: 'var(--card)',
        color: 'var(--ink)',
        padding: '16px 24px',
        borderRadius: 'var(--r-md)',
        boxShadow: '0 32px 64px -12px rgba(16,24,40,.14),inset 0 0 0 1px var(--line)',
        borderInlineStart: '8px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        animation: 'zzfade .2s ease both',
      }}
    >
      <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--r-full)', background: 'var(--card-2)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon d={ICON.info} size={20} sw={1.8} />
      </span>
      <span style={{ flex: 1, minWidth: 0, fontSize: 16, lineHeight: '24px', fontWeight: 600 }}>{v.toast}</span>
    </div>
  );
}
