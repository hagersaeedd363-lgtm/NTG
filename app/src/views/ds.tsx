/**
 * DGA Platforms Code — site building blocks, taken from the Figma references
 * (Section, Section header, Button, Card, Featured icon, Metric, Chip, Accordion, Breadcrumb,
 * Page header). Colours come from the Zamzam palette tokens; everything else follows the DS.
 */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { Icon } from '../portal/ui';

export type { IconSvgElement };
/** DS icon set (Hugeicons, stroke rounded, 1.5 stroke on a 24 grid). */
export function Hi({ icon, size = 24, style }: { icon: IconSvgElement; size?: number; style?: CSSProperties }) {
  return <HugeiconsIcon icon={icon} size={size} strokeWidth={1.5} color="currentColor" style={style} aria-hidden="true" />;
}

export const PLAY = 'M8 5.5v13l11-6.5z';
export const CHEV_DOWN = 'M6 9l6 6 6-6';
export const CHEV_LEFT = 'M15 6l-6 6 6 6';
export const CHEV_RIGHT = 'M9 6l6 6-6 6';

/**
 * One page container for every band (digital stamp, header, sections, page headers, footer):
 * 1280px content, 80px gutters at 1440 (shrinking on smaller screens), centred — so both
 * edges line up on every row of the page.
 */
export const wrap: CSSProperties = { width: '100%', maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)', boxSizing: 'border-box' };

/** Section: 40px vertical padding, 80px gutters, 1280px content. `band` = neutral band background. */
export function Section({ children, band, label, id, gap = 32 }: { children: ReactNode; band?: boolean; label?: string; id?: string; gap?: number }) {
  return (
    <section id={id} data-screen-label={label} style={{ background: band ? 'var(--bg-alt)' : 'var(--bg)', padding: '40px 0' }}>
      <div style={{ ...wrap, display: 'flex', flexDirection: 'column', gap }}>{children}</div>
    </section>
  );
}

/** DS neutral tag (24px, r4, 12/18 medium). */
export function DsTag({ children, onColor, tone }: { children: ReactNode; onColor?: boolean; tone?: 'brand' | 'neutral' | 'info' }) {
  const t = tone === 'brand' ? ['var(--gold-soft)', 'var(--gold-3)', 'var(--gold-on-soft)'] : tone === 'info' ? ['var(--bg-alt)', 'var(--field-bd)', 'var(--ink-2)'] : null;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
        height: 24,
        padding: '0 8px',
        borderRadius: 'var(--r-sm)',
        background: onColor ? 'rgba(255,255,255,.12)' : t ? t[0] : 'var(--card-2)',
        boxShadow: 'inset 0 0 0 1px ' + (onColor ? 'rgba(255,255,255,.4)' : t ? t[1] : 'var(--line)'),
        color: onColor ? '#fff' : t ? t[2] : 'var(--ink)',
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

export const btnStyle = btnBase;

/**
 * DS button (Large, 40px, r4, Text md medium, 16px padding, 4px gap, 24px icon):
 * primary = brand fill + white text; secondary = card fill + neutral border (border-neutral-primary);
 * onColor = white fill + default text (on photos / dark bands); onColorSecondary = outline in white.
 */
export function DsButton({
  children,
  onClick,
  primary,
  onColor,
  icon,
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
  onColor?: 'primary' | 'secondary';
  icon?: string;
  ariaLabel?: string;
}) {
  const look: CSSProperties =
    onColor === 'primary'
      ? { border: 0, background: '#FFFFFF', color: '#1C1915' }
      : onColor === 'secondary'
        ? { border: '1px solid #FFFFFF', background: 'transparent', color: '#FFFFFF' }
        : primary
          ? { border: 0, background: 'var(--gold)', color: '#FFFFFF' }
          : { border: '1px solid var(--line)', background: 'var(--card)', color: 'var(--ink)' };
  const cls = onColor ? 'dga-btn dga-btn-oncolor' : 'dga-btn ' + (primary ? 'dga-btn-primary' : 'dga-btn-secondary');
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls} style={{ ...btnBase, ...look }}>
      {icon ? <Icon d={icon} size={24} /> : null}
      {children}
    </button>
  );
}

/** DS neutral icon button (40×40, neutral fill) — carousel arrows. */
export function DsIconButton({ d, onClick, label }: { d: string; onClick?: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} className="dga-btn dga-btn-neutral" style={{ ...btnBase, width: 40, padding: 0, border: 0, background: 'var(--card-2)', color: 'var(--ink)' }}>
      <Icon d={d} size={24} />
    </button>
  );
}

/** Section header: Display sm bold title with the action at the end, then the description (16/24). */
export function SectionHeader({ title, desc, action }: { title: ReactNode; desc?: ReactNode; action?: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
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
export function FeaturedIcon({ d, hi, size = 48 }: { d?: string; hi?: IconSvgElement; size?: 40 | 48 | 56 }) {
  const s = size === 40 ? 20 : size === 56 ? 28 : 24;
  return (
    <span style={{ width: size, height: size, flexShrink: 0, borderRadius: 'var(--r-full)', background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {hi ? <Hi icon={hi} size={s} /> : d ? <Icon d={d} size={s} /> : null}
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
export function Metric({ icon, hi, value, label }: { icon?: string; hi?: IconSvgElement; value: ReactNode; label: ReactNode }) {
  return (
    <div style={{ ...dsCard, border: 0, alignItems: 'center', textAlign: 'center' }}>
      <FeaturedIcon d={icon} hi={hi} size={56} />
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

/** DS carousel controls: 12px dots, 8px apart, 12px padding; the current dot is the brand colour. */
export function CarouselDots({ count, index, onPick, onColor }: { count: number; index: number; onPick: (i: number) => void; onColor?: boolean }) {
  if (count < 2) return null;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div role="tablist" aria-label="التنقل بين الشرائح" style={{ display: 'flex', gap: 8, padding: 12 }}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={'الشريحة ' + (i + 1)}
            onClick={() => onPick(i)}
            style={{ width: 12, height: 12, padding: 0, border: 0, borderRadius: 'var(--r-full)', cursor: 'pointer', background: i === index ? (onColor ? '#FFFFFF' : 'var(--gold)') : onColor ? 'rgba(255,255,255,.5)' : 'var(--line)' }}
          />
        ))}
      </div>
    </div>
  );
}

/** DS carousel: a row of fixed-width cards (16px apart) that scrolls by page, with the dots underneath. */
export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      setPages(Math.max(1, Math.ceil((el.scrollWidth - 1) / el.clientWidth)));
      setPage(Math.round(Math.abs(el.scrollLeft) / el.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.addEventListener('scroll', measure, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', measure);
    };
  }, []);
  const pick = (i: number) => {
    const el = ref.current;
    if (!el) return;
    // RTL: scrollLeft runs from 0 towards negative values.
    el.scrollTo({ left: -i * el.clientWidth, behavior: 'smooth' });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div ref={ref} role="region" aria-label={label} style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}>
        {children}
      </div>
      <CarouselDots count={pages} index={page} onPick={pick} />
    </div>
  );
}

/** DS logo card (Partners): white card, 1px border, r16, 16px padding, image only. */
export function LogoCard({ children, onClick, label }: { children: ReactNode; onClick?: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="dga-card-link"
      style={{ flex: '0 0 auto', minWidth: 98, height: 100, padding: 16, boxSizing: 'border-box', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </button>
  );
}

/** DS search box: 40px field, r4, search icon at the start, Text md placeholder. */
export function SearchBox({ value, onInput, placeholder, label, width = 320 }: { value: string; onInput?: (e: any) => void; placeholder: string; label: string; width?: number | string }) {
  return (
    <div style={{ position: 'relative', width, maxWidth: '100%' }}>
      <input
        value={value}
        onInput={onInput}
        placeholder={placeholder}
        aria-label={label}
        type="search"
        className="dga-field"
        style={{ width: '100%', height: 40, boxSizing: 'border-box', paddingInlineStart: 44, paddingInlineEnd: 8, borderRadius: 'var(--r-sm)', border: '1px solid var(--field-bd)', background: 'var(--card)', color: 'var(--ink)', fontSize: 16, lineHeight: '24px', outline: 'none', fontFamily: 'inherit' }}
      />
      <span style={{ position: 'absolute', insetInlineStart: 16, top: 10, color: 'var(--ink)', display: 'flex', pointerEvents: 'none' }}>
        <Icon d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5" size={20} />
      </span>
    </div>
  );
}

/** DS horizontal tab list: 1px divider under the row; tab 12/16 padding, Text sm; selected = bold + 2px brand underline. */
export function Tabs({ items, label }: { items: Array<{ label: ReactNode; selected?: boolean; onClick?: () => void; count?: ReactNode }>; label: string }) {
  return (
    <div role="tablist" aria-label={label} style={{ display: 'flex', overflowX: 'auto', borderBottom: '1px solid var(--line)', scrollbarWidth: 'none' }}>
      {items.map((t, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={!!t.selected}
          onClick={t.onClick}
          className="dga-tab"
          style={{
            background: 'none',
            border: 0,
            borderRadius: 'var(--r-sm) var(--r-sm) 0 0',
            borderBottom: '2px solid ' + (t.selected ? 'var(--gold)' : 'transparent'),
            marginBottom: -1,
            padding: '16px 16px 14px',
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: t.selected ? 700 : 500,
            color: t.selected ? 'var(--ink)' : 'var(--ink-2)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {t.label}
          {t.count != null ? <span style={{ fontSize: 12, lineHeight: '18px', color: 'var(--muted)', fontWeight: 500 }}>({t.count})</span> : null}
        </button>
      ))}
    </div>
  );
}

/** DS Progress Indicator (horizontal): 24px markers joined by a line; completed = brand fill + check, current = brand ring. */
export function ProgressSteps({ steps }: { steps: Array<{ title: ReactNode; desc?: ReactNode; state?: 'done' | 'current' | 'todo' }> }) {
  return (
    <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: `repeat(${steps.length},minmax(0,1fr))`, gap: 0 }}>
      {steps.map((s, i) => {
        const st = s.state || 'todo';
        const last = i === steps.length - 1;
        return (
          <li key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  borderRadius: 9999,
                  boxSizing: 'border-box',
                  background: st === 'done' ? 'var(--gold)' : 'var(--card)',
                  border: st === 'done' ? 0 : '1.5px solid ' + (st === 'current' ? 'var(--gold)' : 'var(--field-bd)'),
                  color: st === 'done' ? '#FFFFFF' : st === 'current' ? 'var(--gold)' : 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  lineHeight: '18px',
                  fontWeight: 600,
                }}
              >
                {st === 'done' ? <Icon d="M6 12.5l4 4 8-9" size={16} /> : (i + 1).toLocaleString('ar-EG')}
              </span>
              {!last ? <span aria-hidden="true" style={{ flex: 1, height: 2, margin: '0 8px', borderRadius: 2, background: st === 'done' ? 'var(--gold)' : 'var(--line)' }} /> : null}
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingInlineEnd: 16 }}>
              <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 600, color: 'var(--ink)' }}>{s.title}</span>
              {s.desc ? <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{s.desc}</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/** DS Vertical Tab List: 16px items, selected = bold ink with a 4px brand bar on the start side. */
export function VerticalTabs({ items, value, onChange, label }: { items: ReactNode[]; value: number; onChange: (i: number) => void; label: string }) {
  return (
    <div role="tablist" aria-orientation="vertical" aria-label={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.map((it, i) => {
        const on = i === value;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(i)}
            className={on ? undefined : 'dga-tab'}
            style={{
              minHeight: 40,
              padding: '8px 16px',
              border: 0,
              borderInlineStart: '4px solid ' + (on ? 'var(--gold)' : 'transparent'),
              borderRadius: 0,
              background: 'transparent',
              color: on ? 'var(--ink)' : 'var(--ink-2)',
              fontSize: 16,
              lineHeight: '24px',
              fontWeight: on ? 700 : 400,
              textAlign: 'right',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            {it}
          </button>
        );
      })}
    </div>
  );
}

/** DS Quote: card with a brand quotation mark, Text lg quote and a semibold citation. */
export function Quote({ children, cite }: { children: ReactNode; cite?: ReactNode }) {
  return (
    <blockquote style={{ margin: 0, padding: 24, borderRadius: 'var(--r-lg)', background: 'var(--card)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <span aria-hidden="true" style={{ fontFamily: 'Georgia,serif', fontSize: 48, lineHeight: '32px', height: 24, fontWeight: 700, color: 'var(--gold)' }}>”</span>
      <span style={{ fontSize: 20, lineHeight: '30px', color: 'var(--ink)' }}>{children}</span>
      {cite ? <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 600, color: 'var(--ink-2)' }}>{cite}</span> : null}
    </blockquote>
  );
}
