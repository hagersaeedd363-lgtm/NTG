import { DEMO_TOOLS } from '../config';
import type { V } from '../types';
import { OrdersView } from '../views/portal/OrdersView';
import { PasswordView } from '../views/portal/PasswordView';
import { PaymentView } from '../views/portal/PaymentView';
import { ProductsStep } from '../views/portal/ProductsStep';
import { ProfileView } from '../views/portal/ProfileView';
import { ReviewStep } from '../views/portal/ReviewStep';
import { DemoPanel } from './DemoPanel';
import { AccountStep, RegisterScreen } from './screens/Account';
import { AuthScreen, NafathDialog } from './screens/Auth';
import { AccountStatusScreen, DoneScreen, EditProfileScreen } from './screens/Status';
import { createOrderBlockReason } from './rules';
import { portal, usePortal, type PortalState } from './store';
import { Alert, Card, ICON, PrimaryButton, SecondaryButton, Stepper } from './ui';
import { portalVals } from './vals';

function FlowStepper({ s }: { s: PortalState }) {
  const isNew = portal.isNewFlow(s);
  const order = ['account', 'products', 'review'] as const;
  const cur = order.indexOf(s.flow.step);
  return (
    <Stepper
      steps={[
        { label: 'التحقق عبر نفاذ', done: true, cur: false },
        ...order.map((id, i) => ({
          label: id === 'account' ? (isNew ? 'التسجيل' : 'بياناتك') : id === 'products' ? 'المنتجات' : 'المراجعة',
          done: i < cur,
          cur: i === cur,
          onClick: i < cur ? () => portal.stepTo(id) : undefined,
        })),
      ]}
    />
  );
}

/** Approved accounts: shortcuts above the profile, plus any pending profile-change request. */
function ProfileActions({ s }: { s: PortalState }) {
  const a = portal.account(s)!;
  const review = portal.myOrders(s).filter((o) => o.status === 'review').length;
  const payable = portal.myOrders(s).filter((o) => o.status === 'accepted' && (o.payment.state === 'none' || o.payment.state === 'failed')).length;
  return (
    <>
      {a.changeRequest ? (
        <Alert
          tone="warn"
          title={'طلب تعديل البيانات قيد المراجعة (' + a.changeRequest.labels.join('، ') + ').'}
          action={
            <SecondaryButton onClick={() => portal.startEdit()} style={{ height: 40 }}>
              عرض الطلب
            </SecondaryButton>
          }
        >
          أُرسل في {a.changeRequest.at}. تبقى بياناتك الحالية سارية حتى الاعتماد، ويمكنك إنشاء الطلبات ومتابعتها خلال المراجعة.
        </Alert>
      ) : null}
      {payable ? (
        <Alert tone="warn" icon={ICON.card} title={'لديك ' + (payable === 1 ? 'طلب' : 'طلبات') + ' بانتظار الدفع.'} action={<SecondaryButton onClick={() => portal.openOrders()} style={{ height: 40 }}>عرض طلباتي</SecondaryButton>}>
          تمت الموافقة، ويبدأ التجهيز بعد تأكيد الدفع.
        </Alert>
      ) : null}
      <Card style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <strong style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>أهلاً، {a.identity.fullName.split(' ')[0]}</strong>
          <span style={{ fontSize: 14, color: 'var(--muted)' }}>{review ? 'لديك طلبات قيد المراجعة. سنُشعرك فور اتخاذ القرار.' : 'حسابك معتمد ويمكنك إنشاء طلب جديد في أي وقت.'}</span>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SecondaryButton onClick={() => portal.openOrders()}>طلباتي</SecondaryButton>
          <PrimaryButton onClick={() => portal.newOrder()}>طلب جديد</PrimaryButton>
        </div>
      </Card>
    </>
  );
}

export function PortalPage({ v }: { v: V }) {
  const s = usePortal();
  const view = portal.guardView(s.view);
  const vx = portalVals(v, s);
  const a = portal.account(s);
  let body;
  switch (view) {
    case 'auth':
      body = <AuthScreen s={s} />;
      break;
    case 'register':
      body = s.verified ? <RegisterScreen s={s} /> : <AuthScreen s={s} />;
      break;
    case 'flow':
      if (!a && !s.verified) body = <AuthScreen s={s} />;
      else if (a && createOrderBlockReason(a, s.db.orders)) body = <AccountStatusScreen s={s} />;
      else
        body = (
          <>
            <FlowStepper s={s} />
            {s.flow.step === 'account' ? <AccountStep s={s} /> : null}
            {s.flow.step === 'products' ? <ProductsStep v={vx} /> : null}
            {s.flow.step === 'review' ? <ReviewStep v={vx} /> : null}
          </>
        );
      break;
    case 'done':
      body = <DoneScreen s={s} />;
      break;
    case 'status':
      body = <AccountStatusScreen s={s} />;
      break;
    case 'profile':
      body = (
        <>
          <ProfileActions s={s} />
          <ProfileView v={vx} />
        </>
      );
      break;
    case 'editProfile':
      body = <EditProfileScreen s={s} />;
      break;
    case 'password':
      body = <PasswordView v={vx} />;
      break;
    case 'orders':
      body = <OrdersView v={vx} />;
      break;
    case 'pay':
      body = vx.ox.p ? <PaymentView v={vx} /> : <OrdersView v={vx} />;
      break;
  }
  return (
    <section id="oflow" data-screen-label="16 طلب ماء زمزم" style={{ background: 'var(--bg)', padding: '48px 0 96px' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: 24 }}>{body}</div>
      {s.nafath ? <NafathDialog n={s.nafath} /> : null}
      {DEMO_TOOLS ? <DemoPanel s={s} /> : null}
    </section>
  );
}
