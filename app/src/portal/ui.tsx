/**
 * Portal UI kit. Measurements, colours and states follow the design system the generated
 * screens use (cards r24, fields 46px r12, gold #996C2E actions, 56px single-line alerts).
 */
import type { CSSProperties, ReactNode } from 'react';

export const GOLD = '#996C2E';

export const ICON = {
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7',
  bld: 'M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M8 7h4M8 11h4M8 15h4M3 21h18',
  shield: 'M12 3l7 3v5.5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V6zM9 12l2 2 4-4',
  lock: 'M5 11h14v10H5zM8 11V8a4 4 0 0 1 8 0v3',
  clock: 'M12 7v5l3 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0',
  alert: 'M12 7v5M12 16.5h.01M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  x: 'M7 7l10 10M17 7L7 17',
  card: 'M3 6h18v12H3zM3 10h18M7 15h3',
  bank: 'M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18',
  box: 'M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5',
  chevron: 'M6 9l6 6 6-6',
  arrowNext: 'M19 12H5M11 6l-6 6 6 6',
  arrowBack: 'M5 12h14M13 6l6 6-6 6',
  doc: 'M6 3h8l4 4v14H6zM14 3v5h5',
  mail: 'M3 5h18v14H3zM3 7l9 6 9-6',
  info: 'M12 11v6M12 7.5h.01M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0',
};

export function Icon({ d, size = 20, sw = 1.7, style }: { d: string; size?: number; sw?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>
      <path d={d} />
    </svg>
  );
}

export const cardStyle: CSSProperties = {
  background: 'var(--card)',
  borderRadius: '24px',
  boxShadow: 'var(--card-shadow)',
  padding: '20px clamp(18px,2.5vw,28px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

export function Card({ children, style, id }: { children: ReactNode; style?: CSSProperties; id?: string }) {
  return (
    <section id={id} style={{ ...cardStyle, ...style }}>
      {children}
    </section>
  );
}

export function IconTile({ d, size = 40 }: { d: string; size?: number }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: size > 48 ? 16 : 12,
        background: 'var(--card-2)',
        boxShadow: 'inset 0 0 0 1px var(--line)',
        color: 'var(--gold-2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon d={d} size={size > 48 ? 26 : 20} />
    </span>
  );
}

/** Card title row: icon tile, title, one-line description, optional trailing element, then a divider. */
export function CardHeader({ icon, title, desc, aside }: { icon: string; title: string; desc?: string; aside?: ReactNode }) {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, minHeight: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '1 1 280px', minWidth: 0 }}>
          <IconTile d={icon} />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, lineHeight: '24px', color: 'var(--ink)', textWrap: 'balance' }}>{title}</h2>
            {desc ? <p style={{ margin: 0, fontSize: 14, lineHeight: '22px', color: 'var(--muted)' }}>{desc}</p> : null}
          </div>
        </div>
        {aside}
      </div>
      <div style={{ height: 1, background: 'var(--line)', margin: '0 calc(-1*clamp(18px,2.5vw,28px))' }} />
    </>
  );
}

export function PageTitle({ icon, eyebrow, title, desc, aside }: { icon: string; eyebrow?: string; title: string; desc?: string; aside?: ReactNode }) {
  return (
    <Card style={{ padding: 'clamp(20px,2.5vw,28px)', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
      <IconTile d={icon} size={56} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0, flex: '1 1 300px' }}>
        {eyebrow ? <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--gold-2)', fontWeight: 600 }}>{eyebrow}</span> : null}
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: '32px', color: 'var(--ink)', textWrap: 'balance' }}>{title}</h1>
        {desc ? <p style={{ margin: 0, fontSize: 16, lineHeight: '24px', color: 'var(--ink-2)' }}>{desc}</p> : null}
      </div>
      {aside}
    </Card>
  );
}

export const formGrid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),540px))',
  gap: '24px',
};

const inputBase: CSSProperties = {
  width: '100%',
  height: 46,
  padding: '0 16px',
  borderRadius: 12,
  color: 'var(--ink)',
  fontSize: 16,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

function Label({ htmlFor, children, required, lock }: { htmlFor: string; children: ReactNode; required?: boolean; lock?: boolean }) {
  return (
    <label htmlFor={htmlFor} style={{ display: 'flex', alignItems: 'center', gap: 6, minHeight: 20, fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
      {children}
      {required ? (
        <span aria-hidden="true" style={{ color: 'var(--danger)' }}>
          *
        </span>
      ) : null}
      {lock ? (
        <span style={{ display: 'flex', color: 'var(--muted)' }} title="غير قابل للتعديل">
          <Icon d={ICON.lock} size={14} sw={1.8} />
        </span>
      ) : null}
    </label>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <span id={id} role="alert" style={{ fontSize: 14, lineHeight: '22px', color: 'var(--danger)' }}>
      {msg}
    </span>
  ) : null;
}

export function Hint({ children }: { children: ReactNode }) {
  return <span style={{ fontSize: 13, lineHeight: '20px', color: 'var(--muted)' }}>{children}</span>;
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange?: (v: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  ltr?: boolean;
  type?: string;
  inputMode?: 'numeric' | 'tel' | 'email' | 'text';
  maxLength?: number;
  autoComplete?: string;
  hint?: string;
  span?: boolean;
}

/** Text field: white when empty, tinted once filled, red border and message on error. */
export function Field({ id, label, value, onChange, error, required, placeholder, ltr, type = 'text', inputMode, maxLength, autoComplete, hint, span }: FieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, gridColumn: span ? '1/-1' : undefined }}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        dir={ltr ? 'ltr' : undefined}
        inputMode={inputMode}
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? id + '-err' : undefined}
        style={{ ...inputBase, border: '1px solid ' + (error ? 'var(--danger)' : 'var(--line)'), background: value ? 'var(--card-2)' : 'var(--card)', textAlign: ltr ? 'right' : undefined }}
        className="zp-020"
      />
      {hint && !error ? <Hint>{hint}</Hint> : null}
      <FieldError id={id + '-err'} msg={error} />
    </div>
  );
}

/** Read-only value (Nafath or registry data): tinted, lock icon on the label, not focusable for edit. */
export function ReadOnlyField({ id, label, value, ltr, source }: { id: string; label: string; value: string; ltr?: boolean; source?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
      <Label htmlFor={id} lock>
        {label}
      </Label>
      <input
        id={id}
        value={value || '—'}
        readOnly
        aria-readonly="true"
        dir={ltr ? 'ltr' : undefined}
        title={source}
        style={{ ...inputBase, border: '1px solid var(--line)', background: 'var(--card-2)', color: value ? 'var(--ink)' : 'var(--muted)', textAlign: ltr ? 'right' : undefined, cursor: 'default' }}
      />
    </div>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  required,
  disabled,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  hint?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <div style={{ position: 'relative' }}>
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          style={{
            ...inputBase,
            appearance: 'none',
            paddingLeft: 40,
            border: '1px solid ' + (error ? 'var(--danger)' : 'var(--line)'),
            background: value ? 'var(--card-2)' : 'var(--card)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.6 : 1,
          }}
          className="zp-020"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span style={{ position: 'absolute', left: 14, top: 13, pointerEvents: 'none', color: 'var(--muted)', display: 'flex' }}>
          <Icon d={ICON.chevron} size={18} />
        </span>
      </div>
      {hint && !error ? <Hint>{hint}</Hint> : null}
      <FieldError id={id + '-err'} msg={error} />
    </div>
  );
}

export type AlertTone = 'bad' | 'warn' | 'info' | 'ok';
const ALERT: Record<AlertTone, [string, string, string]> = {
  bad: ['var(--al-bad-bg)', 'var(--al-bad-bd)', 'var(--al-bad-fg)'],
  warn: ['var(--al-warn-bg)', 'var(--al-warn-bd)', 'var(--al-warn-fg)'],
  info: ['var(--al-info-bg)', 'var(--al-info-bd)', 'var(--al-info-fg)'],
  ok: ['var(--al-ok-bg)', 'var(--al-ok-bd)', 'var(--al-ok-fg)'],
};

/** Status banner. One colour and weight for the text, per the design's alert style. */
export function Alert({ tone, title, children, icon, action }: { tone: AlertTone; title?: string; children?: ReactNode; icon?: string; action?: ReactNode }) {
  const [bg, bd, fg] = ALERT[tone];
  return (
    <div
      role={tone === 'bad' ? 'alert' : 'status'}
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, padding: 16, minHeight: 56, boxSizing: 'border-box', borderRadius: 12, border: '1px solid ' + bd, background: bg }}
    >
      <span style={{ color: fg, display: 'flex', flexShrink: 0 }}>
        <Icon d={icon || (tone === 'ok' ? ICON.check : tone === 'info' ? ICON.info : tone === 'warn' ? ICON.clock : ICON.alert)} size={24} sw={2} />
      </span>
      <span style={{ flex: '1 1 260px', minWidth: 0, fontSize: 14, fontWeight: 600, lineHeight: '24px', color: fg }}>
        {title ? <>{title} </> : null}
        {children ? <span style={{ fontWeight: 500 }}>{children}</span> : null}
      </span>
      {action}
    </div>
  );
}

export type TagTone = 'info' | 'gold' | 'warn' | 'bad' | 'prog' | 'ok' | 'muted';
export const TAG: Record<TagTone, [string, string, string]> = {
  info: ['var(--tag-info-bg)', 'var(--tag-info-fg)', 'var(--tag-info-bd)'],
  gold: ['var(--tag-gold-bg)', 'var(--tag-gold-fg)', 'var(--tag-gold-bd)'],
  warn: ['var(--tag-warn-bg)', 'var(--tag-warn-fg)', 'var(--tag-warn-bd)'],
  bad: ['var(--tag-bad-bg)', 'var(--tag-bad-fg)', 'var(--tag-bad-bd)'],
  prog: ['var(--tag-prog-bg)', 'var(--tag-prog-fg)', 'var(--tag-prog-bd)'],
  ok: ['var(--tag-ok-bg)', 'var(--tag-ok-fg)', 'var(--tag-ok-bd)'],
  muted: ['var(--card-2)', 'var(--muted)', 'var(--line)'],
};

/**
 * The one tag style used across the portal (same as the order-status chips):
 * 24px tall, radius 8, tinted fill with a 1px inset border, 12px medium text.
 */
export function Tag({ tone, children, dot, lead }: { tone: TagTone; children: ReactNode; dot?: boolean; lead?: ReactNode }) {
  const [bg, fg, bd] = TAG[tone];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 24,
        padding: '0 12px',
        borderRadius: 8,
        background: bg,
        color: fg,
        boxShadow: 'inset 0 0 0 1px ' + bd,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '24px',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      {dot ? <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: '50%', background: fg, flexShrink: 0 }} /> : null}
      {lead}
      {children}
    </span>
  );
}

export function LockTag({ children = 'غير قابلة للتعديل' }: { children?: ReactNode }) {
  return (
    <Tag tone="muted" lead={<Icon d={ICON.lock} size={13} sw={1.8} />}>
      {children}
    </Tag>
  );
}

export function NafathTag({ children = 'من نفاذ · غير قابلة للتعديل' }: { children?: ReactNode }) {
  return (
    <Tag tone="gold" lead={<img src="assets/nafath.png" alt="" style={{ width: 16, height: 16, borderRadius: 4, display: 'block', marginInlineStart: -4 }} />}>
      {children}
    </Tag>
  );
}

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  busy?: boolean;
  icon?: string;
  full?: boolean;
  style?: CSSProperties;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export function PrimaryButton({ children, onClick, disabled, busy, icon, full, style, type = 'button', ariaLabel }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || busy}
      aria-busy={busy || undefined}
      aria-label={ariaLabel}
      style={{
        height: 48,
        padding: '0 24px',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,.2)',
        background: GOLD,
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        cursor: disabled || busy ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        minWidth: 130,
        width: full ? '100%' : undefined,
        fontFamily: 'inherit',
        ...style,
      }}
      className={disabled || busy ? undefined : 'zp-002'}
    >
      {busy ? <Spinner light /> : null}
      {children}
      {icon && !busy ? <Icon d={icon} size={18} /> : null}
    </button>
  );
}

export function SecondaryButton({ children, onClick, disabled, icon, full, style, ariaLabel }: BtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      style={{
        height: 48,
        padding: '0 20px',
        borderRadius: 12,
        border: '1px solid var(--gold-3)',
        background: 'var(--card)',
        color: 'var(--gold-on-soft)',
        fontSize: 15,
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: full ? '100%' : undefined,
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
        ...style,
      }}
      className={disabled ? undefined : 'zp-019'}
    >
      {icon ? <Icon d={icon} size={18} /> : null}
      {children}
    </button>
  );
}

export function TextButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ background: 'none', border: 0, padding: 0, fontSize: 15, lineHeight: '24px', fontWeight: 700, color: 'var(--gold-2)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 5, fontFamily: 'inherit' }}
    >
      {children}
    </button>
  );
}

export function Spinner({ light, size = 18 }: { light?: boolean; size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: '2px solid ' + (light ? 'rgba(255,255,255,.35)' : 'var(--line)'),
        borderTopColor: light ? '#fff' : GOLD,
        animation: 'zzspin 1s linear infinite',
        flexShrink: 0,
      }}
    />
  );
}

/** Footer bar of a step: back button on the right, status text and main action on the left. */
export function ActionBar({ onBack, children, note }: { onBack?: () => void; children: ReactNode; note?: ReactNode }) {
  return (
    <div style={{ ...cardStyle, padding: '14px 18px', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          aria-label="رجوع"
          title="رجوع"
          style={{ width: 44, height: 44, padding: 0, borderRadius: 12, border: 0, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)', color: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
          className="zp-023"
        >
          <Icon d={ICON.arrowBack} sw={1.8} />
        </button>
      ) : (
        <span />
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: 14 }}>
        {note}
        {children}
      </div>
    </div>
  );
}

export function RequiredNote({ hasErrors }: { hasErrors: boolean }) {
  return hasErrors ? (
    <span role="alert" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--danger)' }}>
      <Icon d={ICON.alert} size={16} />
      أكمل الحقول المطلوبة المُعلّمة بـ *
    </span>
  ) : (
    <span style={{ fontSize: 13, color: 'var(--muted)' }}>
      الحقول المُعلّمة بـ <span style={{ color: 'var(--danger)' }}>*</span> مطلوبة
    </span>
  );
}

/** Single-choice pills with icons (order purpose, entity type). */
export function Pills({ options, value, onChange, icons, label }: { options: string[]; value: string; onChange: (v: string) => void; icons?: Record<string, string>; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {options.map((t) => {
        const sel = value === t;
        return (
          <button
            key={t}
            type="button"
            role="radio"
            aria-checked={sel}
            onClick={() => onChange(t)}
            style={{
              height: 40,
              padding: '0 16px',
              borderRadius: 12,
              border: '1px solid ' + (sel ? GOLD : 'var(--line)'),
              background: sel ? 'var(--gold-soft)' : 'var(--card-2)',
              color: 'var(--ink)',
              fontSize: 15,
              fontWeight: sel ? 600 : 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'inherit',
            }}
          >
            {icons?.[t] ? (
              <span style={{ color: 'var(--gold-2)', display: 'flex' }}>
                <Icon d={icons[t]} size={16} />
              </span>
            ) : null}
            {t}
          </button>
        );
      })}
    </div>
  );
}

/** Large radio cards (account type). */
export function ChoiceCards({ options, value, onChange, label }: { options: Array<{ id: string; t: string; d: string; icon: string }>; value: string; onChange: (id: string) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} style={formGrid}>
      {options.map((o) => {
        const sel = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={sel}
            onClick={() => onChange(o.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: 16,
              borderRadius: 16,
              border: '1px solid ' + (sel ? GOLD : 'var(--line)'),
              background: sel ? 'var(--gold-soft)' : 'var(--card-2)',
              cursor: 'pointer',
              textAlign: 'right',
              fontFamily: 'inherit',
              color: 'var(--ink)',
            }}
          >
            <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--card)', color: 'var(--gold-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon d={o.icon} size={22} />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
              <span style={{ fontSize: 16, fontWeight: 700, lineHeight: '24px' }}>{o.t}</span>
              <span style={{ fontSize: 13, lineHeight: '20px', color: 'var(--muted)' }}>{o.d}</span>
            </span>
            <span
              aria-hidden="true"
              style={{ width: 20, height: 20, borderRadius: '50%', background: sel ? GOLD : 'transparent', boxShadow: sel ? 'none' : 'inset 0 0 0 1.5px var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              {sel ? <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} /> : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** Horizontal stepper, same drawing as the design's order steps. */
export function Stepper({ steps }: { steps: Array<{ label: string; done: boolean; cur: boolean; onClick?: () => void }> }) {
  return (
    <nav aria-label="خطوات الطلب" style={{ ...cardStyle, padding: '20px clamp(6px,2vw,28px)', flexDirection: 'row', alignItems: 'flex-start', gap: 0, overflowX: 'auto' }}>
      {steps.map((s, i) => {
        const line = s.done || s.cur ? GOLD : 'var(--line)';
        return (
          <div key={s.label} style={{ flex: '1 1 0', minWidth: 'clamp(68px,20vw,92px)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            {i > 0 ? <span style={{ position: 'absolute', top: 17, left: 'calc(50% + 24px)', right: 'calc(-50% + 24px)', height: 2, borderRadius: 2, background: line }} /> : null}
            <button
              type="button"
              onClick={s.onClick}
              disabled={!s.onClick}
              aria-current={s.cur ? 'step' : undefined}
              aria-label={s.label}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: 0,
                padding: 0,
                background: s.done ? GOLD : 'var(--card)',
                boxShadow: s.cur ? 'inset 0 0 0 1.5px ' + GOLD + ',0 0 0 5px var(--gold-soft)' : s.done ? 'none' : 'inset 0 0 0 1px var(--line)',
                color: s.done ? '#fff' : s.cur ? 'var(--gold-2)' : 'var(--muted)',
                fontSize: 14,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: s.onClick ? 'pointer' : 'default',
                fontFamily: 'inherit',
              }}
            >
              {s.done ? <Icon d={ICON.check} size={16} /> : '١٢٣٤٥'[i]}
            </button>
            <span style={{ fontSize: 'clamp(12px,3.3vw,14px)', lineHeight: 1.4, color: s.cur ? 'var(--gold-2)' : s.done ? 'var(--ink)' : 'var(--muted)', fontWeight: s.cur ? 700 : 400, whiteSpace: 'nowrap' }}>
              {s.label}
            </span>
          </div>
        );
      })}
    </nav>
  );
}

type Row = { k: string; v: string; ltr?: boolean; lock?: boolean };

/**
 * Label/value rows in the profile data-card style: two per line (one on phones), hairline
 * dividers, 13px muted label with optional lock, 14px semibold value.
 */
export function DataRows({ rows, title, aside }: { rows: Row[]; title?: string; aside?: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      {title ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8, paddingBottom: 8 }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, lineHeight: '24px', color: 'var(--ink)' }}>{title}</h3>
          {aside}
        </div>
      ) : null}
      {/* Up to three cells per line on wide screens, two on tablets, one on phones. */}
      <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(max(min(100%,200px),calc(33.333% - 1px)),1fr))', overflow: 'hidden', borderTop: title ? '1px solid var(--line)' : undefined }}>
        {rows.map((r) => (
          <div key={r.k} style={{ display: 'flex', flexDirection: 'column', padding: '10px 0 10px 24px', minWidth: 0, borderBottom: '1px solid var(--line)', marginBottom: -1 }}>
            <dt style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, lineHeight: '22px', color: 'var(--muted)' }}>
              {r.k}
              {r.lock ? (
                <span style={{ display: 'flex', opacity: 0.8 }}>
                  <Icon d={ICON.lock} size={14} sw={1.8} />
                </span>
              ) : null}
            </dt>
            <dd dir={r.ltr ? 'ltr' : undefined} style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: '24px', color: r.v ? 'var(--ink)' : 'var(--muted)', textAlign: 'right', overflowWrap: 'anywhere' }}>
              {r.v || '—'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * A titled group of read-only values inside a larger card: tinted panel, small icon header and
 * up to three values per line, so several groups in one card stay clearly apart.
 */
export function DataGroup({ icon, title, aside, rows }: { icon: string; title: string; aside?: ReactNode; rows: Row[] }) {
  return (
    <section style={{ borderRadius: 16, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)', overflow: 'hidden', minWidth: 0 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>
        <span style={{ width: 32, height: 32, flexShrink: 0, borderRadius: 10, background: 'var(--card)', boxShadow: 'inset 0 0 0 1px var(--line)', color: 'var(--gold-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d={icon} size={17} />
        </span>
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, lineHeight: '24px', color: 'var(--ink)' }}>{title}</h3>
        {aside ? <span style={{ marginInlineStart: 'auto' }}>{aside}</span> : null}
      </div>
      <dl style={{ margin: 0, padding: '14px 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(max(min(100%,200px),calc(25% - 15px)),1fr))', gap: '14px 20px' }}>
        {rows.map((r) => (
          <div key={r.k} style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            <dt style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, lineHeight: '20px', color: 'var(--muted)' }}>
              {r.k}
              {r.lock ? (
                <span style={{ display: 'flex', opacity: 0.7 }}>
                  <Icon d={ICON.lock} size={13} sw={1.8} />
                </span>
              ) : null}
            </dt>
            <dd dir={r.ltr ? 'ltr' : undefined} style={{ margin: 0, fontSize: 15, fontWeight: 600, lineHeight: '24px', color: r.v ? 'var(--ink)' : 'var(--muted)', textAlign: 'right', overflowWrap: 'anywhere' }}>
              {r.v || '—'}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/**
 * Data card in the profile style: icon header with an optional tag, then label/value cells
 * two per row with hairline dividers (one per row on phones).
 */
export function DataCard({ icon, title, aside, rows }: { icon: string; title: string; aside?: ReactNode; rows: Row[] }) {
  return (
    <section style={{ background: 'var(--card)', borderRadius: 24, boxShadow: 'var(--card-shadow)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, padding: '16px 24px', borderBottom: '1px solid var(--line)' }}>
        <IconTile d={icon} />
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600, lineHeight: '24px', color: 'var(--ink)' }}>{title}</h2>
        {aside ? <span style={{ marginInlineStart: 'auto' }}>{aside}</span> : null}
      </div>
      <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(max(min(100%,240px),calc(50% - 1px)),1fr))' }}>
        {rows.map((r) => (
          <div key={r.k} style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', minWidth: 0, borderBottom: '1px solid var(--line)', marginBottom: -1 }}>
            <dt style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, lineHeight: '24px', color: 'var(--muted)' }}>
              {r.k}
              {r.lock ? (
                <span style={{ display: 'flex', opacity: 0.8 }}>
                  <Icon d={ICON.lock} size={14} sw={1.8} />
                </span>
              ) : null}
            </dt>
            <dd dir={r.ltr ? 'ltr' : undefined} style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: '24px', color: r.v ? 'var(--ink)' : 'var(--muted)', textAlign: 'right', overflowWrap: 'anywhere' }}>
              {r.v || '—'}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Modal({ children, label, onClose }: { children: ReactNode; label: string; onClose?: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 120, background: 'rgba(12,13,14,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ ...cardStyle, width: 'min(480px,100%)', padding: 32, gap: 20, animation: 'zzfade .25s ease both', maxHeight: '90vh', overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  );
}
