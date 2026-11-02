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
        marginTop: 8,
        maxWidth: '100%',
        boxSizing: 'border-box',
        alignSelf: 'flex-start',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: 6,
        borderRadius: 999,
        background: 'rgba(255,255,255,.14)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.3), 0 8px 24px rgba(0,0,0,.18)',
        color: '#fff',
        animation: 'zzfade .6s ease both',
      }}
    >
      <button
        type="button"
        onClick={() => portal.openOrders(o.id)}
        style={{ minWidth: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '0 6px 0 14px', height: 40, border: 0, background: 'transparent', color: 'inherit', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        <span style={{ width: 32, height: 32, flexShrink: 0, borderRadius: '50%', background: warn ? '#F5B25B' : '#7EC996', color: '#1F1A12', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d={icon} size={16} sw={2} />
        </span>
        <span style={{ minWidth: 0, fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{message(o, a)}</span>
        <span aria-hidden style={{ width: 1, height: 18, flexShrink: 0, background: 'rgba(255,255,255,.3)', margin: '0 4px' }} />
        <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, fontWeight: 700, color: '#F0D29E' }}>
          عرض الطلب
          <Icon d={ICON.arrowNext} size={14} sw={2} />
        </span>
      </button>
      <button
        type="button"
        onClick={() => setClosed(true)}
        aria-label="إخفاء"
        title="إخفاء"
        style={{ width: 32, height: 32, flexShrink: 0, padding: 0, border: 0, borderRadius: '50%', background: 'rgba(255,255,255,.12)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon d={ICON.x} size={12} sw={2.2} />
      </button>
    </aside>
  );
}
