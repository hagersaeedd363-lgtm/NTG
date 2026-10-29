import { orderStatusLabel } from './rules';
import { portal, type PortalState } from './store';
import { ACCOUNT_STATUS_LABEL } from './rules';
import { GOLD, ICON, Icon } from './ui';

const btn = (on = false) => ({
  height: 32,
  padding: '0 12px',
  borderRadius: 8,
  border: '1px solid ' + (on ? GOLD : 'var(--line)'),
  background: on ? 'var(--gold-soft)' : 'var(--card-2)',
  color: 'var(--ink)',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'inherit',
});

/**
 * Prototype-only controls that stand in for the back office: approve or reject the account,
 * accept or reject orders, confirm transfers, choose the next payment result.
 */
export function DemoPanel({ s }: { s: PortalState }) {
  const a = portal.account(s);
  const orders = portal.myOrders(s).filter((o) => !o.sample || ['review', 'accepted', 'preparing', 'ready'].includes(o.status)).slice(0, 6);
  const open = s.demo.panelOpen;
  const setDemo = (p: Partial<PortalState['demo']>) => portal.set((st) => ({ demo: { ...st.demo, ...p } }));
  return (
    <div style={{ position: 'fixed', bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))', left: 'calc(16px + env(safe-area-inset-left, 0px))', zIndex: 140, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
      {open ? (
        <div
          role="region"
          aria-label="أدوات المعاينة"
          style={{ width: 'min(360px, calc(100vw - 32px))', maxHeight: '70vh', overflowY: 'auto', background: 'var(--card)', borderRadius: 16, boxShadow: 'var(--card-shadow),0 20px 50px rgba(0,0,0,.25)', padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <strong style={{ fontSize: 15, color: 'var(--ink)' }}>أدوات المعاينة</strong>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>تحاكي قرارات الجهة المختصة ونتائج الدفع. لا تظهر في النسخة الفعلية.</span>
          </div>

          <section style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>الحساب</span>
            {a ? (
              <>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                  {a.identity.fullName} · {ACCOUNT_STATUS_LABEL[a.status]}
                </span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <button type="button" style={btn(a.status === 'approved')} onClick={() => portal.demoAccount('approved')}>
                    اعتماد الحساب
                  </button>
                  <button type="button" style={btn(a.status === 'rejected')} onClick={() => portal.demoAccount('rejected')}>
                    رفض الحساب
                  </button>
                </div>
              </>
            ) : (
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>لا يوجد مستخدم مسجّل الدخول.</span>
            )}
          </section>

          {orders.length ? (
            <section style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>الطلبات</span>
              {orders.map((o) => (
                <div key={o.id} style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 10, borderRadius: 10, background: 'var(--card-2)' }}>
                  <span style={{ fontSize: 12, color: 'var(--ink-2)' }}>
                    <span dir="ltr">{o.id}</span> · {orderStatusLabel(o, a)}
                  </span>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {o.status === 'review' ? (
                      <>
                        <button type="button" style={btn()} onClick={() => portal.demoOrder(o.id, 'accept')}>
                          قبول الطلب
                        </button>
                        <button type="button" style={btn()} onClick={() => portal.demoOrder(o.id, 'reject')}>
                          رفض الطلب
                        </button>
                      </>
                    ) : null}
                    {o.status === 'accepted' && o.payment.state === 'verifying' ? (
                      <button type="button" style={btn()} onClick={() => portal.demoOrder(o.id, 'confirmTransfer')}>
                        تأكيد التحويل
                      </button>
                    ) : null}
                    {o.status === 'preparing' || o.status === 'ready' ? (
                      <button type="button" style={btn()} onClick={() => portal.demoOrder(o.id, 'advance')}>
                        {o.status === 'preparing' ? 'جاهز' : 'مكتمل'}
                      </button>
                    ) : null}
                  </div>
                </div>
              ))}
            </section>
          ) : null}

          <section style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>نتيجة الدفع التالية</span>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {(
                [
                  ['success', 'نجاح'],
                  ['fail', 'فشل'],
                  ['unconfirmed', 'لم تتأكد'],
                ] as const
              ).map(([k, t]) => (
                <button key={k} type="button" aria-pressed={s.demo.payOutcome === k} style={btn(s.demo.payOutcome === k)} onClick={() => setDemo({ payOutcome: k })}>
                  {t}
                </button>
              ))}
            </div>
          </section>

          <button type="button" style={{ ...btn(), alignSelf: 'flex-start' }} onClick={() => portal.demoReset()}>
            إعادة ضبط بيانات المعاينة
          </button>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setDemo({ panelOpen: !open })}
        aria-expanded={open}
        style={{ height: 44, padding: '0 18px', borderRadius: 36, border: 0, background: GOLD, color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,.25)', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'inherit' }}
        className="zp-002"
      >
        <Icon d={open ? ICON.x : ICON.shield} size={18} />
        أدوات المعاينة
      </button>
    </div>
  );
}
