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
  return (
    <aside
      aria-label="طلبك النشط"
      style={{
        width: '100%',
        boxSizing: 'border-box',
        marginTop: 8,
        padding: '10px 10px 10px 14px',
        borderRadius: 14,
        background: 'rgba(12,13,14,.42)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.28)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        animation: 'zzfade .6s ease both',
      }}
    >
      <span style={{ width: 8, height: 8, flexShrink: 0, borderRadius: '50%', background: warn ? '#F5B25B' : '#7EC996', boxShadow: '0 0 0 4px rgba(255,255,255,.12)', marginInlineStart: 4 }} />
      <span style={{ flex: 1, minWidth: 0, fontSize: 15, fontWeight: 600, lineHeight: '22px' }}>{message(o, a)}</span>
      <button
        type="button"
        onClick={() => portal.openOrders(o.id)}
        style={{ height: 36, flexShrink: 0, padding: '0 14px', border: 0, borderRadius: 10, background: '#996C2E', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'inherit' }}
      >
        عرض الطلب
        <Icon d={ICON.arrowNext} size={14} sw={2} />
      </button>
      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="إخفاء"
        title="إخفاء"
        style={{ width: 28, height: 28, flexShrink: 0, padding: 0, border: 0, borderRadius: 8, background: 'transparent', color: 'rgba(255,255,255,.75)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon d={ICON.x} size={14} sw={2} />
      </button>
    </aside>
  );
}
