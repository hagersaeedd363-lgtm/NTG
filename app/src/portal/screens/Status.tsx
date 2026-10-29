import { ACCOUNT_STATUS_LABEL, orderStatusLabel } from '../rules';
import { portal, type PortalState } from '../store';
import type { Account } from '../types';
import { ETYPES, PILL_ICONS, REGIONS } from '../../data/portal';
import {
  ActionBar,
  Alert,
  Card,
  CardHeader,
  DataCard,
  DataRows,
  Field,
  GOLD,
  ICON,
  Icon,
  LockTag,
  NafathTag,
  PageTitle,
  Pills,
  PrimaryButton,
  SecondaryButton,
  SelectField,
  Tag,
  cardStyle,
  formGrid,
} from '../ui';
import { IdentityCard } from './Account';

const AR = (n: number) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d]);

function StatusRow({ label, tone, value, note }: { label: string; tone: 'info' | 'ok' | 'bad' | 'gold'; value: string; note: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 16,
        borderRadius: 16,
        background: 'var(--card-2)',
        boxShadow: 'inset 0 0 0 1px var(--line)',
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{label}</span>
        <Tag tone={tone} dot>
          {value}
        </Tag>
      </div>
      <span style={{ fontSize: 14, lineHeight: '22px', color: 'var(--ink-2)' }}>{note}</span>
    </div>
  );
}

function companyRows(a: Account) {
  const c = a.company;
  if (!c) return [];
  return [
    { k: 'نوع الجهة', v: c.entityType },
    { k: 'اسم المؤسسة', v: c.name },
    { k: 'السجل التجاري', v: c.cr, ltr: true },
    { k: 'المنطقة والمدينة', v: [c.region, c.city].filter(Boolean).join(' — ') },
    { k: 'ممثل المؤسسة', v: c.repName },
    { k: 'هوية الممثل', v: (c.repIdType ? c.repIdType + ' · ' : '') + c.repId },
    { k: 'جوال الممثل', v: c.repPhone, ltr: true },
    { k: 'بريد الممثل', v: c.repEmail, ltr: true },
  ];
}

export function DoneScreen({ s }: { s: PortalState }) {
  const a = portal.account(s);
  const o = portal.order(s.lastOrderId, s);
  if (!a || !o) return null;
  const fresh = a.status === 'pending' && a.entry === 'order';
  const steps = fresh
    ? [
        'تراجع الجهة المختصة بيانات حسابك وطلبك.',
        'نُشعرك بقرار اعتماد الحساب وقبول الطلب، كلٌّ على حدة.',
        'بعد اعتماد الحساب وقبول الطلب يظهر زر «إتمام الدفع» في طلباتي.',
        'يبدأ تجهيز الطلب بعد تأكيد الدفع.',
      ]
    : ['تراجع الجهة المختصة بيانات طلبك.', 'بعد قبول الطلب يظهر زر «إتمام الدفع» في طلباتي.', 'يبدأ تجهيز الطلب بعد تأكيد الدفع.'];
  const units = o.lines.reduce((n, l) => n + l.qty, 0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'zzfade .3s ease both' }}>
      <Card style={{ alignItems: 'center', textAlign: 'center', padding: 'clamp(28px,4vw,48px)', gap: 16 }}>
        <span
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'rgba(46,160,90,.12)',
            color: '#2E8B57',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon d={ICON.check} size={34} sw={2} />
        </span>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: '32px', color: 'var(--ink)' }}>
          {fresh ? 'تم إرسال طلبك وبيانات تسجيلك' : 'تم إرسال طلبك'}
        </h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: '26px', color: 'var(--ink-2)', maxWidth: 620 }}>
          {fresh
            ? 'حفظنا بيانات تسجيلك وطلبك، وكلاهما الآن قيد المراجعة. لن يُطلب منك أي دفع قبل اعتماد حسابك وقبول الطلب.'
            : 'طلبك الآن قيد مراجعة الجهة المختصة. لن يُطلب منك أي دفع قبل قبول الطلب.'}
        </p>
        <button
          type="button"
          onClick={() => {
            try {
              void navigator.clipboard?.writeText(o.id);
            } catch {
              /* clipboard unavailable */
            }
            portal.toast('تم نسخ رقم الطلب');
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            height: 40,
            padding: '0 16px',
            borderRadius: 12,
            border: '1px dashed var(--gold-3)',
            background: 'var(--gold-soft)',
            color: 'var(--gold-on-soft)',
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          <span dir="ltr">{o.id}</span>
          <Icon d="M9 9h10v10H9zM5 15V5h10" size={16} />
        </button>
      </Card>

      <Card>
        <CardHeader icon={ICON.clock} title="الحالة الآن" desc="حالة الحساب وحالة الطلب قراران منفصلان، ونعرض كلاً منهما على حدة." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 16 }}>
          <StatusRow
            label="حالة الحساب"
            tone={fresh ? 'info' : 'ok'}
            value={ACCOUNT_STATUS_LABEL[a.status]}
            note={fresh ? 'تراجع الجهة المختصة بيانات تسجيلك.' : 'حسابك معتمد مسبقاً.'}
          />
          <StatusRow
            label="حالة الطلب"
            tone="info"
            value={orderStatusLabel(o, a)}
            note={AR(units) + ' كرتون · ' + portal.sar(o.total) + ' · ' + (o.delivery.mode === 'pickup' ? 'استلام من المستودع' : 'توصيل إلى العنوان')}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>ماذا بعد؟</span>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {steps.map((t, i) => (
              <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: '24px', color: 'var(--ink-2)' }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: 'var(--gold-soft)',
                    color: 'var(--gold-on-soft)',
                    fontSize: 12,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {AR(i + 1)}
                </span>
                {t}
              </li>
            ))}
          </ol>
        </div>
        {fresh ? <Alert tone="info">لا يمكنك إنشاء طلب آخر قبل اعتماد حسابك. يمكنك متابعة هذا الطلب من طلباتي.</Alert> : null}
      </Card>

      <ActionBar>
        <SecondaryButton onClick={() => portal.navigate('home')}>العودة إلى الرئيسية</SecondaryButton>
        <PrimaryButton onClick={() => portal.openOrders(o.id)} icon={ICON.arrowNext}>
          متابعة الطلب
        </PrimaryButton>
      </ActionBar>
    </div>
  );
}

/** Approval steps for a pending or rejected account, drawn like the order timeline. */
function ApprovalSteps({ a }: { a: Account }) {
  const rejected = a.status === 'rejected';
  const steps = [
    { t: 'تم استلام بيانات التسجيل', sub: a.submittedAt, state: 'done' as const },
    rejected
      ? { t: 'تعذّر اعتماد الحساب', sub: 'راجعت الجهة المختصة بياناتك', state: 'bad' as const }
      : { t: 'قيد المراجعة', sub: 'تراجع الجهة المختصة بياناتك', state: 'cur' as const },
    ...(rejected ? [] : [{ t: 'اعتماد الحساب', sub: 'تُتاح الطلبات والدفع بعد الاعتماد', state: 'todo' as const }]),
  ];
  return (
    <ol aria-label="مراحل اعتماد الحساب" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', width: '100%' }}>
      {steps.map((st, i) => {
        const bg = st.state === 'bad' ? 'var(--danger)' : st.state === 'todo' ? 'var(--card)' : GOLD;
        const ring =
          st.state === 'cur'
            ? '0 0 0 4px var(--gold-soft)'
            : st.state === 'bad'
              ? '0 0 0 4px rgba(180,55,42,.18)'
              : st.state === 'todo'
                ? 'inset 0 0 0 1.5px var(--line)'
                : 'none';
        return (
          <li key={st.t} style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 24, flexShrink: 0 }}>
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: bg,
                  boxShadow: ring,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {st.state === 'done' ? (
                  <Icon d={ICON.check} size={14} sw={2} />
                ) : st.state === 'bad' ? (
                  <Icon d={ICON.x} size={12} sw={2.2} />
                ) : st.state === 'cur' ? (
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />
                ) : null}
              </span>
              {i < steps.length - 1 ? <span style={{ flex: 1, width: 2, minHeight: 16, background: st.state === 'done' ? GOLD : 'var(--line)' }} /> : null}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: i < steps.length - 1 ? 14 : 0, minWidth: 0 }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: st.state === 'cur' || st.state === 'bad' ? 700 : 500,
                  lineHeight: '24px',
                  color: st.state === 'todo' ? 'var(--muted)' : 'var(--ink)',
                }}
              >
                {st.t}
              </span>
              <span
                style={{
                  fontSize: 13,
                  lineHeight: '20px',
                  color: st.state === 'cur' ? 'var(--gold-on-soft)' : st.state === 'bad' ? 'var(--danger)' : 'var(--muted)',
                }}
              >
                {st.sub}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Pending or rejected account: status, restrictions, submitted data read-only. Same layout as «حسابي». */
/**
 * Shown when a pending or rejected account presses «اقتن»: why ordering is not possible yet and
 * what to do next. The full account data stays on the status page under «حسابي».
 */
export function BlockedOrderScreen({ s }: { s: PortalState }) {
  const a = portal.account(s);
  if (!a) return null;
  const rejected = a.status === 'rejected';
  const order = portal.myOrders(s).find((o) => !o.sample);
  const primary = rejected ? (
    <PrimaryButton full onClick={() => (window.location.hash = '#contact')}>تواصل معنا</PrimaryButton>
  ) : order ? (
    <PrimaryButton full onClick={() => portal.openOrders(order.id)}>متابعة طلبي</PrimaryButton>
  ) : (
    <PrimaryButton full onClick={() => portal.openProfile()}>عرض بيانات حسابي</PrimaryButton>
  );
  return (
    <section
      aria-labelledby="blocked-title"
      style={{ ...cardStyle, width: '100%', maxWidth: 560, margin: '0 auto', boxSizing: 'border-box', alignItems: 'center', textAlign: 'center', padding: 'clamp(24px,4vw,40px)', gap: 20, animation: 'zzfade .3s ease both' }}
    >
      <span
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: rejected ? 'var(--al-bad-bg)' : 'var(--gold-soft)',
          color: rejected ? 'var(--al-bad-fg)' : 'var(--gold-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon d={rejected ? ICON.alert : ICON.clock} size={30} />
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Tag tone={rejected ? 'bad' : 'info'} dot>
          {rejected ? 'حساب مرفوض' : 'حسابك قيد المراجعة'}
        </Tag>
        <h2 id="blocked-title" style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, lineHeight: '32px', color: 'var(--ink)' }}>
          {rejected ? 'لا يمكن إنشاء طلبات بهذا الحساب' : 'لا يمكنك إنشاء طلب جديد الآن'}
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: '26px', color: 'var(--ink-2)', maxWidth: 440 }}>
          {rejected
            ? 'سبب الرفض: ' + (a.rejectReason || 'لم تُذكر أسباب.')
            : order
              ? 'طلبك المقدَّم مع بيانات التسجيل قيد المراجعة. يمكنك إنشاء طلبات جديدة بعد اعتماد حسابك، وسنُشعرك فور اعتماده.'
              : 'يمكنك إنشاء الطلبات بعد اعتماد حسابك، وسنُشعرك فور اعتماده.'}
        </p>
      </div>
      <div style={{ width: '100%', padding: '16px 20px', borderRadius: 16, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)', boxSizing: 'border-box', textAlign: 'right' }}>
        <ApprovalSteps a={a} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
        {primary}
        {rejected || order ? (
          <SecondaryButton full onClick={() => portal.openProfile()}>
            عرض بيانات حسابي
          </SecondaryButton>
        ) : null}
        <button
          type="button"
          onClick={() => portal.goHome()}
          style={{ alignSelf: 'center', height: 40, padding: '0 12px', border: 0, background: 'none', color: 'var(--gold-on-soft)', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
        >
          العودة للرئيسية
        </button>
      </div>
    </section>
  );
}

export function AccountStatusScreen({ s }: { s: PortalState }) {
  const a = portal.account(s);
  if (!a) return null;
  const orders = portal.myOrders(s);
  const pending = a.status === 'pending';
  const c = a.company;
  const readOnly = <LockTag>للاطلاع فقط</LockTag>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'zzfade .3s ease both' }}>
      {pending ? (
        <Alert
          tone="warn"
          title="الوصول محدود حتى اعتماد حسابك."
          action={
            orders.length ? (
              <SecondaryButton onClick={() => portal.openOrders()} style={{ height: 40 }}>
                طلباتي
              </SecondaryButton>
            ) : undefined
          }
        >
          لا يمكنك إنشاء طلبات جديدة أو الدفع قبل الاعتماد.{orders.length ? ' تابع طلبك المقدَّم من «طلباتي».' : ''}
        </Alert>
      ) : (
        <Alert
          tone="bad"
          title={'سبب الرفض: ' + (a.rejectReason || 'لم تُذكر أسباب.')}
          action={
            <SecondaryButton onClick={() => (window.location.hash = '#contact')} style={{ height: 40 }}>
              تواصل معنا
            </SecondaryButton>
          }
        >
          لا يمكن إنشاء طلبات بهذا الحساب.
        </Alert>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
        <aside style={{ ...cardStyle, flex: '1 1 300px', maxWidth: '100%', alignItems: 'center', textAlign: 'center', padding: 24, gap: 16 }}>
          <span
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'var(--gold-soft)',
              boxShadow: '0 0 0 2px var(--card),0 0 0 3px var(--gold-3)',
              color: 'var(--gold-2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon d={c ? ICON.bld : ICON.user} size={28} />
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, lineHeight: '24px', color: 'var(--ink)' }}>
              {a.identity.fullName}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
              <NafathTag>موثّق عبر نفاذ</NafathTag>
              <Tag tone={pending ? 'info' : 'bad'} dot>
                {pending ? 'حسابك قيد المراجعة' : 'حساب مرفوض'}
              </Tag>
            </div>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>{c ? 'جهة · ' + c.name : 'فرد'}</span>
          </div>
          <div style={{ width: '100%', height: 1, background: 'var(--line)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', textAlign: 'right' }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>مراحل اعتماد الحساب</span>
            <ApprovalSteps a={a} />
          </div>
          <div style={{ width: '100%', height: 1, background: 'var(--line)' }} />
          <SecondaryButton full onClick={() => portal.logout()}>
            تسجيل الخروج
          </SecondaryButton>
        </aside>

        <div style={{ flex: '2 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>

          <DataCard
            icon={ICON.user}
            title="البيانات الشخصية"
            aside={<NafathTag>من نفاذ</NafathTag>}
            rows={[
              { k: 'الاسم الكامل', v: a.identity.fullName, lock: true },
              { k: 'رقم الهوية الوطنية / الإقامة', v: a.identity.nationalId, ltr: true, lock: true },
              { k: 'رقم الجوال', v: a.identity.phone, ltr: true, lock: true },
              { k: 'البريد الإلكتروني', v: a.identity.email, ltr: true, lock: true },
            ]}
          />
          {c ? (
            <>
              <DataCard
                icon={ICON.bld}
                title="بيانات المنشأة"
                aside={readOnly}
                rows={[
                  { k: 'اسم المؤسسة', v: c.name },
                  { k: 'نوع الجهة', v: c.entityType },
                  { k: 'السجل التجاري', v: c.cr, ltr: true },
                  { k: 'المنطقة والمدينة', v: [c.region, c.city].filter(Boolean).join(' — ') },
                ]}
              />
              <DataCard
                icon={ICON.user}
                title="بيانات ممثل المؤسسة"
                aside={readOnly}
                rows={[
                  { k: 'اسم الممثل', v: c.repName },
                  { k: 'هوية الممثل', v: (c.repIdType ? c.repIdType + ' · ' : '') + c.repId },
                  { k: 'جوال الممثل', v: c.repPhone, ltr: true },
                  { k: 'بريد الممثل', v: c.repEmail, ltr: true },
                ]}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/** Approved accounts: Nafath data stays locked; company and representative changes go through review. */
export function EditProfileScreen({ s }: { s: PortalState }) {
  const a = portal.account(s);
  const e = s.edit;
  if (!a || !e) return null;
  const company = a.type === 'company' && a.company;
  const req = a.changeRequest;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'zzfade .3s ease both' }}>
      <PageTitle icon={ICON.user} title="تحديث البيانات" desc="بيانات الهوية من نفاذ ولا تُعدّل هنا. يمكنك طلب تعديل بيانات المؤسسة والممثل." />
      {company ? (
        req ? (
          <Alert tone="warn" title={'لديك طلب تعديل قيد المراجعة منذ ' + req.at + '.'}>
            الحقول المعروضة تشمل تعديلاتك المرسلة. إرسال طلب جديد يستبدل الطلب الحالي.
          </Alert>
        ) : (
          <Alert tone="info">تُرسل التعديلات إلى الجهة المختصة للمراجعة. تبقى بياناتك الحالية سارية، ويمكنك إنشاء الطلبات ومتابعتها خلال المراجعة.</Alert>
        )
      ) : null}
      <IdentityCard identity={a.identity} />
      {company ? (
        <>
          <Card>
            <CardHeader icon={ICON.bld} title="بيانات المؤسسة" desc="عدّل ما تريد تغييره، وسيُراجع قبل اعتماده." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
                نوع الجهة <span style={{ color: 'var(--danger)' }}>*</span>
              </span>
              <Pills label="نوع الجهة" options={ETYPES} value={e.entityType} onChange={(v) => portal.setEdit({ entityType: v })} icons={PILL_ICONS} />
              {e.errors.entityType ? (
                <span role="alert" style={{ fontSize: 14, color: 'var(--danger)' }}>
                  {e.errors.entityType}
                </span>
              ) : null}
            </div>
            <div style={formGrid}>
              <Field id="ed-coname" label="اسم المؤسسة" required value={e.name} onChange={(v) => portal.setEdit({ name: v })} error={e.errors.name} />
              <Field
                id="ed-cocr"
                label="السجل التجاري"
                required
                value={e.cr}
                onChange={(v) => portal.setEdit({ cr: v.replace(/\D/g, '').slice(0, 10) })}
                error={e.errors.cr}
                placeholder="10 أرقام"
                inputMode="numeric"
                ltr
              />
              <SelectField
                id="ed-coregion"
                label="المنطقة"
                required
                value={e.region}
                onChange={(v) => portal.setEdit({ region: v })}
                options={Object.keys(REGIONS)}
                placeholder="اختر المنطقة"
                error={e.errors.region}
              />
              <SelectField
                id="ed-cocity"
                label="المدينة"
                required
                value={e.city}
                onChange={(v) => portal.setEdit({ city: v })}
                options={portal.cities(e.region)}
                placeholder="اختر المدينة"
                disabled={!e.region}
                hint={e.region ? undefined : 'اختر المنطقة أولاً.'}
                error={e.errors.city}
              />
            </div>
          </Card>
          <Card>
            <CardHeader icon={ICON.user} title="بيانات ممثل المؤسسة" desc="عدّل ما تريد تغييره، وسيُراجع قبل اعتماده." />
            <div style={formGrid}>
              <SelectField
                id="ed-idtype"
                label="نوع الهوية"
                required
                value={e.repIdType}
                onChange={(v) => portal.setEdit({ repIdType: v })}
                options={['هوية وطنية', 'إقامة']}
                placeholder="اختر نوع الهوية"
                error={e.errors.repIdType}
              />
              <Field
                id="ed-repid"
                label="رقم هوية / إقامة ممثل المؤسسة"
                required
                value={e.repId}
                onChange={(v) => portal.setEdit({ repId: v.replace(/\D/g, '').slice(0, 10) })}
                error={e.errors.repId}
                inputMode="numeric"
                ltr
              />
              <Field
                id="ed-repname"
                label="اسم ممثل المؤسسة كامل"
                required
                value={e.repName}
                onChange={(v) => portal.setEdit({ repName: v })}
                error={e.errors.repName}
              />
              <Field
                id="ed-repphone"
                label="رقم جوال ممثل المؤسسة"
                required
                value={e.repPhone}
                onChange={(v) => portal.setEdit({ repPhone: v })}
                error={e.errors.repPhone}
                inputMode="tel"
                ltr
              />
              <Field
                id="ed-repemail"
                label="بريد الممثل الإلكتروني"
                required
                value={e.repEmail}
                onChange={(v) => portal.setEdit({ repEmail: v })}
                error={e.errors.repEmail}
                inputMode="email"
                ltr
              />
            </div>
          </Card>
        </>
      ) : (
        <Alert tone="info">كل بيانات حساب الفرد مأخوذة من نفاذ، ولا توجد بيانات أخرى يمكن تعديلها هنا.</Alert>
      )}
      {e.errors.form ? <Alert tone="bad">{e.errors.form}</Alert> : null}
      <ActionBar onBack={() => portal.openProfile()}>
        {company && req ? <SecondaryButton onClick={() => portal.cancelChangeRequest()}>إلغاء الطلب الحالي</SecondaryButton> : null}
        {company ? <PrimaryButton onClick={() => portal.saveEdit()}>إرسال طلب التعديل</PrimaryButton> : null}
      </ActionBar>
    </div>
  );
}
