import { useState } from 'react';
import { isPayable, orderStatusLabel, orderTone } from './rules';
import { portal, usePortal, type PortalState } from './store';
import type { Account, Order } from './types';
import { ICON, Icon } from './ui';

const AR = (n: number | string) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d]);

/** Lower number = shown first: orders waiting for the customer come before the rest. */
function priority(o: Order, a: Account): number {
  if (isPayable(a, o)) return 0;
  if (o.status === 'accepted' && o.payment.state === 'verifying') return 1;
  if (o.status === 'ready') return 2;
  if (o.status === 'review') return 3;
  if (o.status === 'accepted') return 4;
  return 5; // preparing
}

/** One short line under the status: what to do next, or what to expect. */
function keyFact(o: Order, a: Account): [string, string] {
  const pick = o.delivery.mode === 'pickup';
  if (isPayable(a, o)) return ['المطلوب', 'ارفع إثبات الدفع'];
  if (o.payment.state === 'verifying') return ['الآن', 'نراجع الإيصال'];
  if (o.status === 'ready') return [pick ? 'جاهز للاستلام من' : 'جاهز للشحن إلى', (pick ? o.delivery.warehouse : o.delivery.city) || '—'];
  if (o.status === 'preparing' && o.receiveDate) return [pick ? 'موعد الاستلام المتوقع' : 'موعد التوصيل المتوقع', o.receiveDate];
  if (o.status === 'review') return ['الآن', 'تراجع الجهة المختصة الطلب'];
  return ['الإجمالي', portal.sar(o.total)];
}

/** Orders still in progress for the signed-in customer. */
export function activeOrders(s: PortalState): Order[] {
  return portal.account(s) ? portal.myOrders(s).filter((o) => o.status !== 'rejected' && o.status !== 'completed') : [];
}

/**
 * Reminder on the home page for signed-in customers with active orders, in the hero's glass style.
 * Shows the order that needs them most, with a link to the rest. Can be closed for the visit.
 */
export function ActiveOrderCard({ inline }: { inline?: boolean }) {
  const s = usePortal();
  const [closed, setClosed] = useState(false);
  const a = portal.account(s);
  if (!a || closed) return null;
  const active = activeOrders(s).sort((x, y) => priority(x, a) - priority(y, a));
  if (!active.length) return null;
  const o = active[0];
  const tone = orderTone(o, a);
  const [k, v] = keyFact(o, a);
  const more = active.length - 1;
  return (
    <aside
      aria-label="طلبك النشط"
      style={{
        width: inline ? '100%' : 340,
        maxWidth: '100%',
        boxSizing: 'border-box',
        padding: 18,
        borderRadius: 20,
        background: 'rgba(12,13,14,.42)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.28), 0 12px 40px rgba(0,0,0,.25)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        textAlign: 'right',
        animation: 'zzfade .6s ease both',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: tone === 'warn' ? '#F5B25B' : '#7EC996', boxShadow: '0 0 0 4px rgba(255,255,255,.12)' }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.85)' }}>{tone === 'warn' ? 'طلب يحتاج إجراءك' : 'طلبك النشط'}</span>
        <span dir="ltr" style={{ marginInlineStart: 'auto', fontSize: 12, color: 'rgba(255,255,255,.7)' }}>
          {o.id}
        </span>
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="إخفاء"
          title="إخفاء"
          style={{ width: 24, height: 24, padding: 0, border: 0, borderRadius: 6, background: 'transparent', color: 'rgba(255,255,255,.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon d={ICON.x} size={14} sw={2} />
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, borderRadius: 12, overflow: 'hidden', background: 'rgba(255,255,255,.14)' }}>
        <div style={{ padding: '10px 12px', background: 'rgba(12,13,14,.35)', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.7)' }}>الحالة</span>
          <span style={{ fontSize: 14, fontWeight: 700 }}>{orderStatusLabel(o, a)}</span>
        </div>
        <div style={{ padding: '10px 12px', background: 'rgba(12,13,14,.35)', display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.7)' }}>{k}</span>
          <span style={{ fontSize: 14, fontWeight: 700, overflowWrap: 'anywhere' }}>{v}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => portal.openOrders(o.id)}
        style={{ height: 44, border: 0, borderRadius: 12, background: '#996C2E', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit' }}
      >
        عرض الطلب
        <Icon d={ICON.arrowNext} size={16} sw={2} />
      </button>
      {more > 0 ? (
        <button
          type="button"
          onClick={() => portal.openOrders()}
          style={{ alignSelf: 'center', padding: 0, border: 0, background: 'none', color: 'rgba(255,255,255,.85)', fontSize: 13, textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer', fontFamily: 'inherit' }}
        >
          {'+' + AR(more) + (more === 1 ? ' طلب نشط آخر' : more === 2 ? ' طلبان نشطان آخران' : ' طلبات نشطة أخرى')}
        </button>
      ) : null}
    </aside>
  );
}
