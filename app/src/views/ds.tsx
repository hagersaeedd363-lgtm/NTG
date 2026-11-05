/**
 * DGA Platforms Code — site building blocks, taken from the Figma references
 * (Section, Section header, Button, Card, Featured icon, Metric, Chip, Accordion, Breadcrumb,
 * Page header). Colours come from the Zamzam palette tokens; everything else follows the DS.
 */
import type { CSSProperties, ReactNode } from 'react';
import { Icon } from '../portal/ui';

export const PLAY = 'M8 5.5v13l11-6.5z';
export const CHEV_DOWN = 'M6 9l6 6 6-6';
export const CHEV_LEFT = 'M15 6l-6 6 6 6';
export const CHEV_RIGHT = 'M9 6l6 6-6 6';

/** Section: 40px vertical padding, 80px gutters, 1280px content. `band` = neutral band background. */
export function Section({ children, band, label, id, gap = 32 }: { children: ReactNode; band?: boolean; label?: string; id?: string; gap?: number }) {
  return (
    <section id={id} data-screen-label={label} style={{ background: band ? 'var(--bg-alt)' : 'var(--bg)', padding: '40px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)', display: 'flex', flexDirection: 'column', gap }}>{children}</div>
    </section>
  );
}

/** DS neutral tag (24px, r4, 12/18 medium). */
export function DsTag({ children, onColor }: { children: ReactNode; onColor?: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
        height: 24,
        padding: '0 8px',
        borderRadius: 'var(--r-sm)',
        background: onColor ? 'rgba(255,255,255,.12)' : 'var(--card-2)',
        boxShadow: 'inset 0 0 0 1px ' + (onColor ? 'rgba(255,255,255,.4)' : 'var(--line)'),
        color: onColor ? '#fff' : 'var(--ink)',
        fontSize: 12,
        lineHeight: '18px',
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}

const btnBase: CSSProperties = {
  height: 40,
  padding: '0 16px',
  borderRadius: 'var(--r-sm)',
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontFamily: 'inherit',
  flexShrink: 0,
};

/** DS button: primary (brand fill) or secondary (outline). */
export function DsButton({ children, onClick, primary, icon, ariaLabel }: { children: ReactNode; onClick?: () => void; primary?: boolean; icon?: string; ariaLabel?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={'dga-btn ' + (primary ? 'dga-btn-primary' : 'dga-btn-secondary')}
      style={{ ...btnBase, border: primary ? 0 : '1px solid var(--field-bd)', background: primary ? 'var(--gold)' : 'var(--card)', color: primary ? '#fff' : 'var(--ink)' }}
    >
      {icon ? <Icon d={icon} size={20} /> : null}
      {children}
    </button>
  );
}

/** DS neutral icon button (40×40, neutral fill) — carousel arrows. */
export function DsIconButton({ d, onClick, label }: { d: string; onClick?: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} className="dga-btn dga-btn-neutral" style={{ ...btnBase, width: 40, padding: 0, border: 0, background: 'var(--card-2)', color: 'var(--ink)' }}>
      <Icon d={d} size={24} sw={1.6} />
    </button>
  );
}

/** Section header: Display sm bold title with the action at the end, then the description (16/24). */
export function SectionHeader({ title, desc, tag, action }: { title: ReactNode; desc?: ReactNode; tag?: ReactNode; action?: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {tag ? <DsTag>{tag}</DsTag> : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32 }}>
        <h2 style={{ flex: '1 1 320px', margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 700, color: 'var(--ink)' }}>{title}</h2>
        {action}
      </div>
      {desc ? <div style={{ maxWidth: 964, display: 'flex', flexDirection: 'column', gap: 16, fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>{desc}</div> : null}
    </div>
  );
}

/** DS card: white, 1px border, r16, 16px padding, 24px gap. */
export const dsCard: CSSProperties = {
  background: 'var(--card)',
  border: '1px solid var(--line)',
  borderRadius: 'var(--r-lg)',
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  color: 'var(--ink)',
  textAlign: 'right',
  minWidth: 0,
};

/** Featured icon: brand-light circle (48 → 24 icon, 56 → 28 icon). */
export function FeaturedIcon({ d, size = 48 }: { d: string; size?: 40 | 48 | 56 }) {
  return (
    <span style={{ width: size, height: size, flexShrink: 0, borderRadius: 'var(--r-full)', background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon d={d} size={size === 56 ? 28 : size === 48 ? 24 : 20} sw={1.6} />
    </span>
  );
}

/** Card title + text (Text lg bold 18/28, Text md regular 16/24). */
export function CardText({ title, text }: { title: ReactNode; text?: ReactNode }) {
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)' }}>
      <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700 }}>{title}</span>
      {text ? <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 400 }}>{text}</span> : null}
    </span>
  );
}

/** Metric card: featured icon 56, value Display lg regular in brand colour, label 16/24. */
export function Metric({ icon, value, label }: { icon: string; value: ReactNode; label: ReactNode }) {
  return (
    <div style={{ ...dsCard, border: 0, alignItems: 'center', textAlign: 'center' }}>
      <FeaturedIcon d={icon} size={56} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 48, lineHeight: '60px', fontWeight: 400, color: 'var(--gold)', whiteSpace: 'nowrap' }}>{value}</span>
        <span style={{ fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>{label}</span>
      </span>
    </div>
  );
}

/** DS chip — Large (32px), neutral style, square corners (r4); selected = dark neutral with white text. */
export function Chip({ children, selected, onClick, count }: { children: ReactNode; selected?: boolean; onClick?: () => void; count?: ReactNode }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={!!selected}
      onClick={onClick}
      className={selected ? undefined : 'dga-chip'}
      style={{
        height: 32,
        padding: '0 12px',
        borderRadius: 'var(--r-sm)',
        border: 0,
        background: selected ? 'var(--ink-2)' : 'var(--card-2)',
        color: selected ? 'var(--card)' : 'var(--ink)',
        fontSize: 16,
        lineHeight: '24px',
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
      }}
    >
      {children}
      {count != null ? <span style={{ fontSize: 12, lineHeight: '18px', opacity: 0.8 }}>({count})</span> : null}
    </button>
  );
}

/** DS accordion item: flush row with 1px dividers, 16px padding, 16 semibold question, 16px chevron. */
export function AccordionItem({ q, a, open, onClick, first }: { q: ReactNode; a?: ReactNode; open?: boolean; onClick?: () => void; first?: boolean }) {
  return (
    <div style={{ borderTop: first ? undefined : '1px solid var(--line)' }}>
      <button
        type="button"
        onClick={onClick}
        aria-expanded={!!open}
        className="dga-acc"
        style={{ width: '100%', padding: 16, border: 0, background: 'transparent', display: 'flex', alignItems: 'center', gap: 16, textAlign: 'right', cursor: 'pointer', color: 'var(--ink)', fontFamily: 'inherit' }}
      >
        <span style={{ flex: 1, fontSize: 16, lineHeight: '24px', fontWeight: 600 }}>{q}</span>
        <Icon d={CHEV_DOWN} size={16} sw={1.8} style={{ flexShrink: 0, transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      {open && a ? <div style={{ padding: '0 16px 16px', fontSize: 16, lineHeight: '24px', color: 'var(--ink-2)', animation: 'zzfade .2s ease both' }}>{a}</div> : null}
    </div>
  );
}

export function AccordionList({ children }: { children: ReactNode }) {
  return <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>{children}</div>;
}

/** DS breadcrumb: Text sm; previous levels are neutral links, the current level is the disabled tone. */
export function Breadcrumb({ items }: { items: Array<{ label: ReactNode; onClick?: () => void }> }) {
  return (
    <nav aria-label="مسار التنقل" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4 }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            {last ? (
              <span aria-current="page" style={{ fontSize: 14, lineHeight: '20px', color: 'var(--muted)' }}>
                {it.label}
              </span>
            ) : (
              <button type="button" onClick={it.onClick} className="dga-crumb" style={{ background: 'none', border: 0, padding: 0, fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)', cursor: 'pointer', fontFamily: 'inherit' }}>
                {it.label}
              </button>
            )}
            {!last ? <Icon d={CHEV_LEFT} size={16} sw={1.8} style={{ color: 'var(--muted)' }} /> : null}
          </span>
        );
      })}
    </nav>
  );
}

/** Media tile (video/image card) used inside DS cards: r8 image with an overlaid play button. */
export function PlayBadge({ size = 56 }: { size?: number }) {
  return (
    <span style={{ width: size, height: size, borderRadius: 'var(--r-full)', background: 'rgba(255,255,255,.9)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
      <svg width={size * 0.4} height={size * 0.4} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={PLAY} />
      </svg>
    </span>
  );
}
