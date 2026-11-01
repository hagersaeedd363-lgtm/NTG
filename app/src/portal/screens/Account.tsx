import { ETYPES, PILL_ICONS, PURPOSES, REGIONS } from '../../data/portal';
import { passwordRules, portal, type PortalState } from '../store';
import type { Account, Identity } from '../types';
import {
  ActionBar,
  Alert,
  Card,
  CardHeader,
  ChoiceCards,
  Field,
  formGrid,
  GOLD,
  Hint,
  Icon,
  ICON,
  LockTag,
  NafathTag,
  Pills,
  PrimaryButton,
  ReadOnlyField,
  RequiredNote,
  SecondaryButton,
  SelectField,
  Spinner,
  Stepper,
  Tag,
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

/** Registered and approved: confirm, summarise, and only ask for the order purpose. */
function ExistingSummary({ s, a }: { s: PortalState; a: Account }) {
  const company = a.type === 'company' && a.company;
  return (
    <>
      <Card>
        <CardHeader
          icon={ICON.doc}
          title="تفاصيل الطلب"
          desc={company ? 'اختر الغرض الأقرب لهذا الطلب.' : 'نكمل طلبك ببيانات حسابك المعتمدة.'}
          aside={
            <span title="الطلب باسم" style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px 6px 6px', borderRadius: 12, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)', minWidth: 0 }}>
                <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: 8, background: 'var(--gold-soft)', color: 'var(--gold-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon d={company ? ICON.bld : ICON.user} size={14} />
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', overflowWrap: 'anywhere' }}>{company ? company.name : a.identity.fullName}</span>
                <Tag tone="ok" dot>
                  معتمد
                </Tag>
              </span>
            </span>
          }
        />
        {company ? <PurposeField s={s} hint={false} /> : null}
      </Card>
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
/** Optional email-sign-in password while registering from the header. Off by default. */
function PasswordOptionCard({ s, email }: { s: PortalState; email: string }) {
  const p = s.regPw;
  const rules = passwordRules(p.n1, p.n2);
  return (
    <Card>
      <CardHeader
        icon={ICON.lock}
        title="تسجيل الدخول بالبريد الإلكتروني"
        desc={'اختياري: عيّن كلمة مرور لتسجيل الدخول ببريدك ' + email + ' إلى جانب نفاذ.'}
        divider={p.on}
        aside={
          <button
            type="button"
            role="switch"
            aria-checked={p.on}
            onClick={() => portal.setRegPw({ on: !p.on })}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: 0, border: 0, background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}
          >
            تعيين كلمة مرور الآن
            <span style={{ width: 44, height: 24, borderRadius: 999, background: p.on ? GOLD : 'var(--line)', position: 'relative', transition: 'background .2s', flexShrink: 0 }}>
              <span style={{ position: 'absolute', top: 3, insetInlineStart: p.on ? 23 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,.25)', transition: 'inset-inline-start .2s' }} />
            </span>
          </button>
        }
      />
      {p.on ? (
        <>
          <div style={formGrid}>
            <Field id="reg-pw1" label="كلمة المرور" value={p.n1} onChange={(v) => portal.setRegPw({ n1: v })} type={p.show ? 'text' : 'password'} ltr autoComplete="new-password" placeholder="٨ أحرف على الأقل" />
            <Field id="reg-pw2" label="تأكيد كلمة المرور" value={p.n2} onChange={(v) => portal.setRegPw({ n2: v })} type={p.show ? 'text' : 'password'} ltr autoComplete="new-password" />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
              {rules.map((r) => (
                <li key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: r.ok ? 'var(--al-ok-fg)' : 'var(--muted)' }}>
                  <Icon d={r.ok ? ICON.check : ICON.info} size={15} sw={2} />
                  {r.t}
                </li>
              ))}
            </ul>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-2)', cursor: 'pointer' }}>
              <input type="checkbox" checked={p.show} onChange={() => portal.setRegPw({ show: !p.show })} />
              إظهار كلمة المرور
            </label>
          </div>
          {s.errors.regPw ? <Alert tone="bad" compact title={s.errors.regPw} /> : null}
        </>
      ) : null}
    </Card>
  );
}

export function RegisterScreen({ s }: { s: PortalState }) {
  const identity = s.verified!;
  return (
    <>
      <Stepper
        steps={[
          { label: 'التحقق عبر نفاذ', done: true, cur: false },
          { label: 'بيانات الحساب', done: false, cur: true },
          { label: 'الإرسال للمراجعة', done: false, cur: false },
          { label: 'اعتماد الحساب', done: false, cur: false },
        ]}
      />
      <IdentityCard identity={identity} />
      <PasswordOptionCard s={s} email={identity.email} />
      <AccountTypeCard s={s} />
      {s.reg.type === 'company' ? <CompanyCards s={s} /> : null}
      <ActionBar onBack={() => portal.backToLogin()} note={<RequiredNote hasErrors={hasErrors(s.errors)} />}>
        <PrimaryButton onClick={() => portal.submitRegistration()}>إرسال للمراجعة</PrimaryButton>
      </ActionBar>
    </>
  );
}
