import { useState } from 'react';
import { isPayable, orderTone } from './rules';
import { portal, usePortal, type PortalState } from './store';
import type { Account, Order } from './types';
import { ICON, Icon } from './ui';

/** Lower number = shown first: orders waiting for the customer come before the rest. */
function priority(o: Order, a: Account): number {
  if (isPayable(a, o)) return 0;
  if (o.status === 'accepted' && o.payment.state === 'verifying') return 1;
  if (o.status === 'ready') return 2;
  if (o.status === 'review') return 3;
  if (o.status === 'accepted') return 4;
  return 5; // preparing
}

/** One short sentence about the order. */
function message(o: Order, a: Account): string {
  const pick = o.delivery.mode === 'pickup';
  if (isPayable(a, o)) return 'طلبك بانتظار إثبات الدفع';
  if (o.status === 'accepted' && o.payment.state === 'verifying') return 'نراجع إيصال الدفع لطلبك';
  if (o.status === 'accepted' && o.payment.state === 'paid') return 'تم التحقق من الدفع لطلبك';
  if (o.status === 'accepted') return 'تم قبول طلبك وبانتظار اعتماد حسابك';
  if (o.status === 'ready') return pick ? 'طلبك جاهز للاستلام' : 'طلبك جاهز للشحن';
  if (o.status === 'preparing') return 'طلبك قيد التجهيز';
  return 'طلبك قيد المراجعة';
}

/** Orders still in progress for the signed-in customer. */
export function activeOrders(s: PortalState): Order[] {
  return portal.account(s) ? portal.myOrders(s).filter((o) => o.status !== 'rejected' && o.status !== 'completed') : [];
}

/**
 * Reminder on the home page for signed-in customers with active orders, in the hero's glass style.
 * One line about the order that needs them most, with «عرض الطلب». Can be closed.
 */
export function ActiveOrderCard() {
  const s = usePortal();
  const [closed, setClosed] = useState(false);
  const a = portal.account(s);
  if (!a || closed) return null;
  const active = activeOrders(s).sort((x, y) => priority(x, a) - priority(y, a));
  if (!active.length) return null;
  const o = active[0];
  const warn = orderTone(o, a) === 'warn';
  const icon = warn ? ICON.doc : o.status === 'preparing' || o.status === 'ready' ? ICON.box : ICON.clock;
  return (
    <aside
      aria-label="طلبك النشط"
      style={{
        maxWidth: '100%',
        boxSizing: 'border-box',
        alignSelf: 'stretch',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        borderRadius: 'var(--r-md)',
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderInlineStart: '4px solid ' + (warn ? 'var(--al-warn-fg)' : 'var(--gold)'),
        boxShadow: 'var(--shadow-md)',
        color: 'var(--ink)',
      }}
    >
      <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--r-full)', background: warn ? 'var(--al-warn-bg)' : 'var(--gold-soft)', color: warn ? 'var(--al-warn-fg)' : 'var(--gold-on-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon d={icon} size={20} sw={1.8} />
      </span>
      <span style={{ flex: 1, minWidth: 0, fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}>{message(o, a)}</span>
      <button
        type="button"
        onClick={() => portal.openOrders(o.id)}
        className="dga-btn dga-btn-text"
        style={{ flexShrink: 0, border: 0, background: 'none', padding: 0, fontSize: '14px', lineHeight: '20px', fontWeight: 500, color: 'var(--gold-2)', textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer', fontFamily: 'inherit' }}
      >
        عرض الطلب
      </button>
      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="إخفاء"
        title="إخفاء"
        className="dga-btn dga-btn-neutral"
        style={{ width: 32, height: 32, flexShrink: 0, padding: 0, border: 0, borderRadius: 'var(--r-sm)', background: 'transparent', color: 'var(--ink)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon d={ICON.x} size={20} sw={1.8} />
      </button>
    </aside>
  );
}
