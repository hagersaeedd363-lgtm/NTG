import { ACCOUNT_STATUS_LABEL, createOrderBlockReason, orderStatusLabel, orderTone } from '../rules';
import { portal, type PortalState } from '../store';
import type { Account } from '../types';
import { ETYPES, PILL_ICONS, REGIONS } from '../../data/portal';
import { ActionBar, Alert, Card, CardHeader, DataRows, Field, ICON, Icon, PageTitle, Pills, PrimaryButton, SecondaryButton, SelectField, Tag, formGrid } from '../ui';
import { IdentityCard } from './Account';

const AR = (n: number) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d]);

function StatusRow({ label, tone, value, note }: { label: string; tone: 'info' | 'ok' | 'bad' | 'gold'; value: string; note: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16, borderRadius: 16, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)', minWidth: 0 }}>
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
    ? ['تراجع الجهة المختصة بيانات حسابك وطلبك.', 'نُشعرك بقرار اعتماد الحساب وقبول الطلب، كلٌّ على حدة.', 'بعد اعتماد الحساب وقبول الطلب يظهر زر «إتمام الدفع» في طلباتي.', 'يبدأ تجهيز الطلب بعد تأكيد الدفع.']
    : ['تراجع الجهة المختصة بيانات طلبك.', 'بعد قبول الطلب يظهر زر «إتمام الدفع» في طلباتي.', 'يبدأ تجهيز الطلب بعد تأكيد الدفع.'];
  const units = o.lines.reduce((n, l) => n + l.qty, 0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'zzfade .3s ease both' }}>
      <Card style={{ alignItems: 'center', textAlign: 'center', padding: 'clamp(28px,4vw,48px)', gap: 16 }}>
        <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(46,160,90,.12)', color: '#2E8B57', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d={ICON.check} size={34} sw={2} />
        </span>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: '32px', color: 'var(--ink)' }}>{fresh ? 'تم إرسال طلبك وبيانات تسجيلك' : 'تم إرسال طلبك'}</h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: '26px', color: 'var(--ink-2)', maxWidth: 620 }}>
          {fresh ? 'حفظنا بيانات تسجيلك وطلبك، وكلاهما الآن قيد المراجعة. لن يُطلب منك أي دفع قبل اعتماد حسابك وقبول الطلب.' : 'طلبك الآن قيد مراجعة الجهة المختصة. لن يُطلب منك أي دفع قبل قبول الطلب.'}
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
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px', borderRadius: 12, border: '1px dashed var(--gold-3)', background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
        >
          <span dir="ltr">{o.id}</span>
          <Icon d="M9 9h10v10H9zM5 15V5h10" size={16} />
        </button>
      </Card>

      <Card>
        <CardHeader icon={ICON.clock} title="الحالة الآن" desc="حالة الحساب وحالة الطلب قراران منفصلان، ونعرض كلاً منهما على حدة." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 16 }}>
          <StatusRow label="حالة الحساب" tone={fresh ? 'info' : 'ok'} value={ACCOUNT_STATUS_LABEL[a.status]} note={fresh ? 'تراجع الجهة المختصة بيانات تسجيلك.' : 'حسابك معتمد مسبقاً.'} />
          <StatusRow label="حالة الطلب" tone="info" value={orderStatusLabel(o, a)} note={AR(units) + ' كرتون · ' + portal.sar(o.total) + ' · ' + (o.delivery.mode === 'pickup' ? 'استلام من المستودع' : 'توصيل إلى العنوان')} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>ماذا بعد؟</span>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {steps.map((t, i) => (
              <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: '24px', color: 'var(--ink-2)' }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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

/** Pending or rejected account: status, restrictions, submitted data read-only. */
export function AccountStatusScreen({ s }: { s: PortalState }) {
  const a = portal.account(s);
  if (!a) return null;
  const orders = portal.myOrders(s);
  const pending = a.status === 'pending';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'zzfade .3s ease both' }}>
      <PageTitle
        icon={pending ? ICON.clock : ICON.alert}
        eyebrow={'حسابي · ' + a.identity.fullName}
        title={pending ? 'حسابك قيد المراجعة' : 'تعذّر اعتماد حسابك'}
        desc={pending ? 'استلمنا بيانات تسجيلك في ' + a.submittedAt + '، وتراجعها الجهة المختصة الآن. سنُشعرك بالقرار.' : 'راجعت الجهة المختصة بيانات تسجيلك ولم تعتمد الحساب.'}
        aside={<Tag tone={pending ? 'info' : 'bad'} dot>{ACCOUNT_STATUS_LABEL[a.status]}</Tag>}
      />
      {pending ? (
        <Alert tone="warn" title="الوصول محدود حتى اعتماد حسابك.">
          لا يمكنك إنشاء طلبات جديدة أو الدفع قبل الاعتماد.{orders.length ? ' يمكنك متابعة طلبك المقدَّم.' : ''}
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
          لا يمكن إنشاء طلبات بهذا الحساب. للاستفسار تواصل معنا.
        </Alert>
      )}

      <Card>
        <CardHeader icon={ICON.box} title="طلباتك" desc={orders.length ? 'الطلبات المرتبطة بحسابك وحالتها.' : 'لا توجد طلبات مرتبطة بحسابك.'} />
        {orders.length ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {orders.map((o) => (
              <div key={o.id} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 16px', borderRadius: 16, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
                  <strong dir="ltr" style={{ fontSize: 15, color: 'var(--ink)' }}>
                    {o.id}
                  </strong>
                  <span style={{ fontSize: 14, color: 'var(--muted)' }}>{o.date}</span>
                  <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>{portal.sar(o.total)}</span>
                  <Tag tone={orderTone(o, a) === 'prog' ? 'prog' : orderTone(o, a)}>{orderStatusLabel(o, a)}</Tag>
                </div>
                <SecondaryButton onClick={() => portal.openOrders(o.id)} style={{ height: 40 }}>
                  عرض الطلب
                </SecondaryButton>
              </div>
            ))}
          </div>
        ) : null}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          <PrimaryButton disabled>طلب جديد</PrimaryButton>
          <span style={{ fontSize: 14, color: 'var(--muted)' }}>{createOrderBlockReason(a, s.db.orders)}</span>
        </div>
      </Card>

      <IdentityCard identity={a.identity} />
      <Card>
        <CardHeader icon={a.type === 'company' ? ICON.bld : ICON.user} title="بيانات التسجيل المرسلة" desc="للاطلاع فقط. لا يمكن تعديلها أثناء المراجعة." />
        <DataRows rows={[{ k: 'نوع الحساب', v: a.type === 'company' ? 'جهة' : 'فرد' }, { k: 'تاريخ الإرسال', v: a.submittedAt }, ...companyRows(a)]} />
      </Card>
      <ActionBar>
        <SecondaryButton onClick={() => portal.logout()}>تسجيل الخروج</SecondaryButton>
      </ActionBar>
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
              <Field id="ed-cocr" label="السجل التجاري" required value={e.cr} onChange={(v) => portal.setEdit({ cr: v.replace(/\D/g, '').slice(0, 10) })} error={e.errors.cr} placeholder="10 أرقام" inputMode="numeric" ltr />
              <SelectField id="ed-coregion" label="المنطقة" required value={e.region} onChange={(v) => portal.setEdit({ region: v })} options={Object.keys(REGIONS)} placeholder="اختر المنطقة" error={e.errors.region} />
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
              <SelectField id="ed-idtype" label="نوع الهوية" required value={e.repIdType} onChange={(v) => portal.setEdit({ repIdType: v })} options={['هوية وطنية', 'إقامة']} placeholder="اختر نوع الهوية" error={e.errors.repIdType} />
              <Field id="ed-repid" label="رقم هوية / إقامة ممثل المؤسسة" required value={e.repId} onChange={(v) => portal.setEdit({ repId: v.replace(/\D/g, '').slice(0, 10) })} error={e.errors.repId} inputMode="numeric" ltr />
              <Field id="ed-repname" label="اسم ممثل المؤسسة كامل" required value={e.repName} onChange={(v) => portal.setEdit({ repName: v })} error={e.errors.repName} />
              <Field id="ed-repphone" label="رقم جوال ممثل المؤسسة" required value={e.repPhone} onChange={(v) => portal.setEdit({ repPhone: v })} error={e.errors.repPhone} inputMode="tel" ltr />
              <Field id="ed-repemail" label="بريد الممثل الإلكتروني" required value={e.repEmail} onChange={(v) => portal.setEdit({ repEmail: v })} error={e.errors.repEmail} inputMode="email" ltr />
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
