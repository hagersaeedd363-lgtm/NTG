import { ETYPES, PILL_ICONS, PURPOSES, REGIONS } from '../../data/portal';
import { portal, type PortalState } from '../store';
import type { Account, Identity } from '../types';
import {
  ActionBar,
  Alert,
  Card,
  CardHeader,
  ChoiceCards,
  DataGroup,
  Field,
  Hint,
  ICON,
  Icon,
  LockTag,
  NafathTag,
  PageTitle,
  Pills,
  PrimaryButton,
  ReadOnlyField,
  RequiredNote,
  SecondaryButton,
  SelectField,
  Spinner,
  Tag,
  formGrid,
} from '../ui';

const hasErrors = (e: Record<string, string>) => Object.values(e).some(Boolean);

export function IdentityCard({ identity }: { identity: Identity }) {
  return (
    <Card>
      <CardHeader icon={ICON.user} title="بيانات الهوية" desc="جُلبت من نفاذ بعد التحقق من هويتك، ولا يمكن تعديلها." aside={<NafathTag />} />
      <div style={formGrid}>
        <ReadOnlyField id="id-name" label="الاسم الكامل" value={identity.fullName} source="نفاذ" />
        <ReadOnlyField id="id-nid" label="رقم الهوية الوطنية / الإقامة" value={identity.nationalId} ltr source="نفاذ" />
        <ReadOnlyField id="id-phone" label="رقم الجوال" value={identity.phone} ltr source="نفاذ" />
        <ReadOnlyField id="id-email" label="البريد الإلكتروني" value={identity.email} ltr source="نفاذ" />
      </div>
    </Card>
  );
}

const TYPES = [
  { id: 'individual', t: 'فرد', d: 'حساب شخصي بهويتك من نفاذ، دون بيانات إضافية', icon: ICON.user },
  { id: 'company', t: 'جهة', d: 'شركة أو جهة حكومية أو غير ربحية، تتطلب بيانات المنشأة', icon: ICON.bld },
];

export function AccountTypeCard({ s }: { s: PortalState }) {
  return (
    <Card>
      <CardHeader icon={ICON.shield} title="نوع الحساب" desc="يحدد هذا الاختيار البيانات المطلوبة للتسجيل، ولا يمكن تغييره بعد الاعتماد." />
      <ChoiceCards label="نوع الحساب" options={TYPES} value={s.reg.type} onChange={(id) => portal.setAccountType(id as 'individual' | 'company')} />
      {s.errors.type ? (
        <span role="alert" style={{ fontSize: 14, color: 'var(--danger)' }}>
          {s.errors.type}
        </span>
      ) : null}
      {s.reg.type === 'individual' ? <Hint>يكفي حساب الفرد بيانات الهوية من نفاذ، ولا نطلب منك إدخال أي بيانات أخرى.</Hint> : null}
    </Card>
  );
}

/** Company details. In the order journey the order purpose sits inside the first card. */
export function CompanyCards({ s, withPurpose }: { s: PortalState; withPurpose?: boolean }) {
  const { reg, errors } = s;
  const c = reg.company;
  const found = reg.crStatus === 'found';
  const looked = found || reg.crStatus === 'notfound';
  const regions = Object.keys(REGIONS);
  return (
    <>
      <Card>
        <CardHeader
          icon={ICON.bld}
          title="بيانات الجهة"
          desc={withPurpose ? 'حدّد نوع الجهة وغرض الطلب، ثم ابحث عن المؤسسة بالاسم للتحقق منها.' : 'حدّد نوع الجهة، ثم ابحث عن المؤسسة بالاسم للتحقق منها.'}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
            نوع الجهة <span style={{ color: 'var(--danger)' }}>*</span>
          </span>
          <Pills label="نوع الجهة" options={ETYPES} value={c.entityType} onChange={(v) => portal.setCompany({ entityType: v })} icons={PILL_ICONS} />
          {errors['co.entityType'] ? (
            <span role="alert" style={{ fontSize: 14, color: 'var(--danger)' }}>
              {errors['co.entityType']}
            </span>
          ) : (
            <Hint>يساعدنا نوع الجهة في توجيه طلبك للفريق المختص. تحصل الجهات غير الربحية على خصم ٥٠٪.</Hint>
          )}
        </div>
        {withPurpose ? <PurposeField s={s} /> : null}
        <div style={{ height: 1, background: 'var(--line)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 1104 }}>
          <label htmlFor="co-query" style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
            اسم المؤسسة <span style={{ color: 'var(--danger)' }}>*</span>
          </label>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <input
              id="co-query"
              value={reg.crQuery}
              readOnly={found}
              onChange={(e) => portal.set((st) => ({ reg: { ...st.reg, crQuery: e.target.value, crStatus: '' }, errors: { ...st.errors, crQuery: '' } }))}
              onKeyDown={(e) => e.key === 'Enter' && portal.checkCompany()}
              placeholder="أدخل اسم المؤسسة"
              aria-invalid={!!errors.crQuery}
              style={{
                flex: '1 1 280px',
                height: 46,
                padding: '0 16px',
                borderRadius: 12,
                border: '1px solid ' + (errors.crQuery ? 'var(--danger)' : 'var(--line)'),
                background: reg.crQuery ? 'var(--card-2)' : 'var(--card)',
                color: 'var(--ink)',
                fontSize: 16,
                outline: 'none',
                fontFamily: 'inherit',
                minWidth: 0,
              }}
              className="zp-020"
            />
            {found ? (
              <SecondaryButton onClick={() => portal.resetCompanyLookup()} style={{ height: 46 }}>
                تغيير المؤسسة
              </SecondaryButton>
            ) : (
              <SecondaryButton onClick={() => portal.checkCompany()} icon={reg.crStatus === 'loading' ? undefined : ICON.search} disabled={reg.crStatus === 'loading'} style={{ height: 46 }}>
                {reg.crStatus === 'loading' ? (
                  <>
                    <Spinner /> جارٍ البحث…
                  </>
                ) : (
                  'تحقق من المؤسسة'
                )}
              </SecondaryButton>
            )}
          </div>
          {errors.crQuery ? (
            <span role="alert" style={{ fontSize: 14, color: 'var(--danger)' }}>
              {errors.crQuery}
            </span>
          ) : (
            <Hint>نبحث عن المؤسسة في السجل التجاري ونعرض بياناتها تلقائياً.</Hint>
          )}
        </div>
        {found ? <Alert tone="ok" title="وجدنا المؤسسة في السجل التجاري.">أكملنا اسمها وسجلها التجاري ومنطقتها ومدينتها. أكمل بيانات الممثل.</Alert> : null}
        {reg.crStatus === 'notfound' ? <Alert tone="warn" title="لم نجد المؤسسة في السجل التجاري.">أدخل بياناتها يدوياً أدناه، وستراجعها الجهة المختصة.</Alert> : null}
      </Card>

      {looked ? (
        <Card>
          <CardHeader icon={ICON.bld} title="بيانات المؤسسة" desc="أضف معلومات مؤسستك والممثل لإكمال التحقق." aside={found ? <LockTag>بيانات السجل التجاري مقفلة</LockTag> : undefined} />
          <div style={formGrid}>
            {found ? (
              <>
                <ReadOnlyField id="co-name" label="اسم المؤسسة" value={c.name} source="السجل التجاري" />
                <ReadOnlyField id="co-cr" label="السجل التجاري" value={c.cr} ltr source="السجل التجاري" />
              </>
            ) : (
              <>
                <Field id="co-name" label="اسم المؤسسة" required value={c.name} onChange={(v) => portal.setCompany({ name: v })} error={errors['co.name']} />
                <Field
                  id="co-cr"
                  label="السجل التجاري"
                  required
                  value={c.cr}
                  onChange={(v) => portal.setCompany({ cr: v.replace(/\D/g, '').slice(0, 10) })}
                  error={errors['co.cr']}
                  placeholder="10 أرقام"
                  inputMode="numeric"
                  ltr
                />
              </>
            )}
            <SelectField id="co-idtype" label="نوع الهوية" required value={c.repIdType} onChange={(v) => portal.setCompany({ repIdType: v })} options={['هوية وطنية', 'إقامة']} placeholder="اختر نوع الهوية" error={errors['co.repIdType']} />
            <Field
              id="co-repid"
              label="رقم هوية / إقامة ممثل المؤسسة"
              required
              value={c.repId}
              onChange={(v) => portal.setCompany({ repId: v.replace(/\D/g, '').slice(0, 10) })}
              error={errors['co.repId']}
              placeholder="رقم هوية / إقامة من 10 أرقام"
              inputMode="numeric"
              ltr
            />
            <Field id="co-repname" label="اسم ممثل المؤسسة كامل" required value={c.repName} onChange={(v) => portal.setCompany({ repName: v })} error={errors['co.repName']} placeholder="الاسم الكامل للممثل" />
            <Field id="co-repphone" label="رقم جوال ممثل المؤسسة" required value={c.repPhone} onChange={(v) => portal.setCompany({ repPhone: v })} error={errors['co.repPhone']} placeholder="05XXXXXXXX" inputMode="tel" ltr />
            <Field id="co-repemail" label="بريد الممثل الإلكتروني" required value={c.repEmail} onChange={(v) => portal.setCompany({ repEmail: v })} error={errors['co.repEmail']} placeholder="email@example.com" inputMode="email" ltr />
            {found ? (
              <>
                <ReadOnlyField id="co-region" label="المنطقة" value={c.region} source="السجل التجاري" />
                <ReadOnlyField id="co-city" label="المدينة" value={c.city} source="السجل التجاري" />
              </>
            ) : (
              <>
                <SelectField id="co-region" label="المنطقة" required value={c.region} onChange={(v) => portal.setCompany({ region: v })} options={regions} placeholder="اختر المنطقة" error={errors['co.region']} />
                <SelectField
                  id="co-city"
                  label="المدينة"
                  required
                  value={c.city}
                  onChange={(v) => portal.setCompany({ city: v })}
                  options={portal.cities(c.region)}
                  placeholder="اختر المدينة"
                  disabled={!c.region}
                  hint={c.region ? undefined : 'اختر المنطقة أولاً.'}
                  error={errors['co.city']}
                />
              </>
            )}
          </div>
          <Hint>بيانات الممثل مأخوذة مبدئياً من هويتك في نفاذ، ويمكنك تعديلها إن كان الممثل شخصاً آخر. هذه البيانات مطلوبة لإكمال التحقق وإصدار الفاتورة.</Hint>
        </Card>
      ) : null}
    </>
  );
}

function PurposeField({ s, hint = true }: { s: PortalState; hint?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
        غرض الطلب <span style={{ color: 'var(--danger)' }}>*</span>
      </span>
      <Pills label="غرض الطلب" options={PURPOSES} value={s.draft.purpose} onChange={(v) => portal.setDraft({ purpose: v })} icons={PILL_ICONS} />
      {s.errors.purpose ? (
        <span role="alert" style={{ fontSize: 14, color: 'var(--danger)' }}>
          {s.errors.purpose}
        </span>
      ) : hint ? (
        <Hint>اختر الغرض الأقرب لهذا الطلب.</Hint>
      ) : null}
    </div>
  );
}

function PurposeCard({ s }: { s: PortalState }) {
  return (
    <Card>
      <CardHeader icon={ICON.doc} title="تفاصيل الطلب" desc="اختر الغرض الأقرب لهذا الطلب." />
      <PurposeField s={s} hint={false} />
    </Card>
  );
}

function personalRows(a: Account) {
  const id = a.identity;
  return [
    { k: 'الاسم الكامل', v: id.fullName, lock: true },
    { k: 'رقم الهوية الوطنية / الإقامة', v: id.nationalId, ltr: true, lock: true },
    { k: 'رقم الجوال', v: id.phone, ltr: true, lock: true },
    { k: 'البريد الإلكتروني', v: id.email, ltr: true, lock: true },
  ];
}

function companyRows(a: Account) {
  const c = a.company!;
  return [
    { k: 'اسم المؤسسة', v: c.name, lock: true },
    { k: 'السجل التجاري', v: c.cr, ltr: true, lock: true },
    { k: 'نوع الجهة', v: c.entityType, lock: true },
    { k: 'المنطقة والمدينة', v: [c.region, c.city].filter(Boolean).join(' — '), lock: true },
  ];
}

function repRows(a: Account) {
  const c = a.company!;
  return [
    { k: 'الاسم', v: c.repName, lock: true },
    { k: 'رقم ' + (c.repIdType || 'الهوية'), v: c.repId, ltr: true, lock: true },
    { k: 'رقم الجوال', v: c.repPhone, ltr: true, lock: true },
    { k: 'البريد الإلكتروني', v: c.repEmail, ltr: true, lock: true },
  ];
}

/** Registered and approved: confirm, summarise, and only ask for the order purpose. */
function ExistingSummary({ s, a }: { s: PortalState; a: Account }) {
  const open = s.flow.detailsOpen;
  const company = a.type === 'company' && a.company;
  return (
    <>
      <Alert tone="ok" title="أنت مسجّل لدينا وحسابك معتمد.">
        نكمل الطلب ببيانات حسابك المسجّلة، ولا تحتاج إلى إدخالها مرة أخرى.
      </Alert>
      <Card>
        <CardHeader icon={company ? ICON.bld : ICON.user} title="بيانات حسابك" desc="مسجّلة ومعتمدة. لتعديلها استخدم «تحديث البيانات» في حسابي." aside={<LockTag />} />
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '12px 16px', borderRadius: 16, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: '1 1 260px' }}>
            <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: '50%', background: 'var(--gold-soft)', color: 'var(--gold-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon d={company ? ICON.bld : ICON.user} />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 16, fontWeight: 700, lineHeight: '24px', color: 'var(--ink)' }}>{a.identity.fullName}</span>
                <Tag tone="ok" dot>
                  حساب معتمد
                </Tag>
              </span>
              <span style={{ fontSize: 13, lineHeight: '20px', color: 'var(--muted)', overflowWrap: 'anywhere' }}>
                {company ? 'جهة · ' + company.name : 'فرد'}
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => portal.toggleDetails()}
            aria-expanded={open}
            aria-controls="acct-details"
            style={{ height: 40, padding: '0 14px', borderRadius: 12, border: '1px solid var(--line)', background: 'var(--card)', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'var(--gold-on-soft)', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
            className="zp-019"
          >
            {open ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
            <Icon d={ICON.chevron} size={16} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
          </button>
        </div>
        {open ? (
          <div id="acct-details" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DataGroup icon={ICON.user} title="البيانات الشخصية" aside={<NafathTag>من نفاذ</NafathTag>} rows={personalRows(a)} />
            {company ? (
              <>
                <DataGroup icon={ICON.bld} title="بيانات المنشأة" aside={<Tag tone="muted">معتمد</Tag>} rows={companyRows(a)} />
                <DataGroup icon={ICON.shield} title="ممثل المؤسسة" aside={<Tag tone="muted">معتمد</Tag>} rows={repRows(a)} />
              </>
            ) : null}
          </div>
        ) : null}
      </Card>
      {company ? <PurposeCard s={s} /> : null}
      <ActionBar onBack={() => portal.back()} note={<RequiredNote hasErrors={hasErrors(s.errors)} />}>
        <PrimaryButton onClick={() => portal.nextFromAccount()} icon={ICON.arrowNext}>
          متابعة إلى المنتجات
        </PrimaryButton>
      </ActionBar>
    </>
  );
}

export function AccountStep({ s }: { s: PortalState }) {
  const a = portal.account(s);
  if (a) return <ExistingSummary s={s} a={a} />;
  const identity = s.verified!;
  return (
    <>
      <Alert tone="warn" title="أنت غير مسجّل بعد.">
        أكمل بيانات التسجيل أدناه، وستُرسل للمراجعة مع طلبك. يتاح الدفع بعد اعتماد حسابك وقبول الطلب.
      </Alert>
      <IdentityCard identity={identity} />
      <AccountTypeCard s={s} />
      {s.reg.type === 'company' ? <CompanyCards s={s} withPurpose /> : null}
      <ActionBar onBack={() => portal.back()} note={<RequiredNote hasErrors={hasErrors(s.errors)} />}>
        <PrimaryButton onClick={() => portal.nextFromAccount()} icon={ICON.arrowNext}>
          متابعة إلى المنتجات
        </PrimaryButton>
      </ActionBar>
    </>
  );
}

/** Flow B: registration without an order. */
export function RegisterScreen({ s }: { s: PortalState }) {
  const identity = s.verified!;
  return (
    <>
      <PageTitle icon={ICON.shield} eyebrow="إنشاء حساب جديد · الخطوة ٢ من ٢" title="استكمال بيانات الحساب" desc="تم التحقق من هويتك عبر نفاذ. اختر نوع الحساب وأكمل البيانات المطلوبة، ثم أرسلها للمراجعة." />
      <Alert tone="info">بعد الإرسال يصبح حسابك قيد المراجعة. لا يمكنك إنشاء طلبات أو الوصول إلى طلباتي حتى تعتمده الجهة المختصة، وسنُشعرك بالقرار.</Alert>
      <IdentityCard identity={identity} />
      <AccountTypeCard s={s} />
      {s.reg.type === 'company' ? <CompanyCards s={s} /> : null}
      <ActionBar onBack={() => portal.backToLogin()} note={<RequiredNote hasErrors={hasErrors(s.errors)} />}>
        <PrimaryButton onClick={() => portal.submitRegistration()}>إرسال للمراجعة</PrimaryButton>
      </ActionBar>
    </>
  );
}
