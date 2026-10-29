import type { V } from '../../types';
import { ICON, Icon, PrimaryButton, SecondaryButton } from '../ui';

/** The provider has not reported a result yet: the order stays unpaid and paying again is blocked. */
export function PaymentUnconfirmed({ v }: { v: V }) {
  const p = v.ox?.p;
  return (
    <div
      role="status"
      aria-live="polite"
      style={{ background: 'var(--card)', borderRadius: 22, boxShadow: 'var(--card-shadow)', padding: 'clamp(18px,3vw,28px)', paddingBlock: 'clamp(32px,6vw,56px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}
    >
      <span style={{ width: 56, height: 56, borderRadius: '50%', background: '#E8F3FB', color: '#14598A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon d={ICON.clock} size={28} sw={2} />
      </span>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, lineHeight: '28px', color: 'var(--ink)' }}>لم يتأكد الدفع بعد</h3>
      <p style={{ margin: 0, maxWidth: '48ch', fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)' }}>
        لم تصلنا نتيجة العملية من جهة الدفع حتى الآن، لذلك لم نعتبر الطلب مدفوعاً. لا تُعِد الدفع قبل تحديث الحالة حتى لا يُخصم المبلغ مرتين.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: 'var(--ink-2)' }}>
        <span>
          المبلغ: <strong style={{ color: 'var(--ink)' }}>{p?.r?.totalLabel}</strong>
        </span>
        <span>
          وسيلة الدفع: <strong style={{ color: 'var(--ink)' }}>{p?.mlabel}</strong>
        </span>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <PrimaryButton onClick={p?.refresh}>تحديث حالة الدفع</PrimaryButton>
        <SecondaryButton onClick={p?.back}>العودة إلى طلباتي</SecondaryButton>
      </div>
    </div>
  );
}
