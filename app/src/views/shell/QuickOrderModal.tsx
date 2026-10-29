import type { V } from '../../types';

export function QuickOrderModal({ v }: { v: V }) {
  return (
    <>
      <div
        onClick={v.closeModals}
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: '120',
          background: 'rgba(0,0,0,.55)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          onClick={v.stop}
          role="dialog"
          aria-modal="true"
          style={{
            position: 'relative',
            width: '520px',
            maxWidth: '100%',
            borderRadius: '24px',
            background: 'var(--card)',
            boxShadow: 'var(--card-shadow),0 30px 60px rgba(0,0,0,.25)',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            color: 'var(--ink)',
            animation: 'zzfade .25s ease both',
          }}
        >
          {v.orderPending ? (
            <>
              <span style={{ fontSize: '30px', fontWeight: '700' }}>تأكيد الطلب</span>
              <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '14px', background: 'var(--card-2)', padding: '6px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: '17px' }}>
                  <span style={{ color: 'var(--muted)' }}>المنتج</span>
                  <span>كرتون ماء زمزم (24 عبوة * 330 مل)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: '17px' }}>
                  <span style={{ color: 'var(--muted)' }}>الكمية</span>
                  <span>{v.qty} صندوق</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', fontSize: '17px' }}>
                  <span style={{ color: 'var(--muted)' }}>إجمالي العبوات</span>
                  <span>{v.bottles} عبوة</span>
                </div>
              </div>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.7', color: 'var(--muted)' }}>يُستكمل الطلب والاستلام عبر القنوات الرسمية المعتمدة.</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={v.confirmOrder}
                  style={{
                    flex: '1',
                    height: '52px',
                    borderRadius: '9px',
                    border: '0',
                    background: '#A47C1C',
                    color: '#fff',
                    fontSize: '17px',
                    cursor: 'pointer',
                  }}
                  className="zp-011"
                >
                  تأكيد الطلب
                </button>
                <button
                  onClick={v.closeModals}
                  style={{
                    flex: '1',
                    height: '52px',
                    borderRadius: '9px',
                    border: '1px solid var(--line)',
                    background: 'transparent',
                    color: 'var(--ink)',
                    fontSize: '17px',
                    cursor: 'pointer',
                  }}
                >
                  إلغاء
                </button>
              </div>
            </>
          ) : null}
          {v.orderDone ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center', padding: '12px 0' }}>
                <span
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--gold-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-2)',
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <span style={{ fontSize: '28px', fontWeight: '700' }}>تم استلام طلبك</span>
                <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
                  {v.qty} صندوق — {v.bottles} عبوة. يمكنك متابعة الطلب عبر تطبيق نسك.
                </p>
                <button
                  onClick={v.finishOrder}
                  style={{
                    height: '48px',
                    padding: '0 36px',
                    borderRadius: '9px',
                    border: '0',
                    background: '#996C2E',
                    color: '#fff',
                    fontSize: '17px',
                    cursor: 'pointer',
                  }}
                >
                  حسنًا
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
