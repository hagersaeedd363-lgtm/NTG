import { Fragment, useState, type CSSProperties, type ReactNode } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';
import { Icon } from '../../portal/ui';
import { SecondNavHeader } from './Platform';
import {
  Analytics01Icon,
  CheckmarkBadge01Icon,
  ChemistryIcon,
  CustomerService01Icon,
  HelpCircleIcon,
  HierarchyIcon,
  InformationCircleIcon,
  LandmarkIcon,
  RouteIcon,
  Search01Icon,
  ShieldUserIcon,
  LanguageSquareIcon,
  UserIcon,
  ArrowDown01Icon,
} from '@hugeicons/core-free-icons';
import { Hi, wrap, type IconSvgElement } from '../ds';

/** DS Nav Header Sub-Menu content: groups (label in brand colour) of items with a boxed icon, title and supporting line. */
const MEGA: Record<string, Array<{ label: string; items: Array<[string, IconSvgElement, string]> }>> = {
  'عن المشروع': [
    { label: 'المشروع', items: [['about', InformationCircleIcon, 'نبذة عن المشروع ورؤيته ورسالته'], ['museum', LandmarkIcon, 'متحف يروي قصة البئر ومنظومة خدمتها']] },
    { label: 'ماء زمزم', items: [['journey', RouteIcon, 'ست محطات من البئر إلى ضيف الرحمن'], ['quality', ShieldUserIcon, 'رقابة متصلة من المصدر حتى ضيف الرحمن'], ['properties', ChemistryIcon, 'التركيب والخصائص الفيزيائية والكيميائية']] },
    { label: 'الثقة والبيانات', items: [['verify', CheckmarkBadge01Icon, 'كيف تميّز العبوة الأصلية وتبلّغ عن المشتبه بها'], ['stats', Analytics01Icon, 'المؤشرات والتقارير والاعتمادات']] },
  ],
  'الدعم والمساعدة': [
    { label: 'المساعدة', items: [['faq', HelpCircleIcon, 'إجابات مباشرة لأكثر ما يُسأل عنه'], ['contact', CustomerService01Icon, 'استفساراتك وملاحظاتك وبلاغاتك']] },
    { label: 'تصفّح الموقع', items: [['search', Search01Icon, 'ابحث في صفحات الموقع والأسئلة والأخبار'], ['sitemap', HierarchyIcon, 'جميع صفحات الموقع في مكان واحد']] },
  ],
};

function MegaMenu({ item, go }: { item: any; go: any }) {
  const kids: any[] = list(item?.children);
  const byId = (id: string) => kids.find((c) => c?.id === id);
  const groups = MEGA[item?.label] || [{ label: item?.label, items: kids.map((c) => [c?.id, InformationCircleIcon, ''] as [string, IconSvgElement, string]) }];
  return (
    <div role="menu" aria-label={item?.label} style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--card)', borderTop: '1px solid var(--line)', boxShadow: '0 12px 16px -4px rgba(16,24,40,.08),0 4px 6px -2px rgba(16,24,40,.03)', animation: 'zzfade .18s ease both' }}>
      <div style={{ ...wrap, display: 'flex', flexWrap: 'wrap', gap: 24, paddingTop: 32, paddingBottom: 32 }}>
        {groups.map((g) => (
          <div key={g.label} style={{ flex: '1 1 240px', minWidth: 240, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ padding: '0 16px', fontSize: 18, lineHeight: '28px', fontWeight: 700, color: 'var(--gold-2)' }}>{g.label}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {g.items.map(([id, icon, desc]) => {
                const c = byId(id);
                const label = c?.label || ({ search: 'البحث', sitemap: 'خريطة الموقع' } as any)[id] || id;
                const onClick = c?.onClick || go?.[id];
                return (
                  <button
                    key={id}
                    role="menuitem"
                    onClick={onClick}
                    aria-current={c?.active ? 'page' : undefined}
                    className="dga-navlink"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '8px 16px', border: 0, borderRadius: 'var(--r-md)', background: c?.active ? 'var(--card-2)' : 'transparent', textAlign: 'right', cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--r-md)', background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Hi icon={icon} />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                      <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: c?.active ? 700 : 500, color: c?.active ? 'var(--gold-2)' : 'var(--ink)' }}>{label}</span>
                      {desc ? <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{desc}</span> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const LINK_I = 'M13.5 10.5l-3 3M9.6 7.8l1.2-1.2a4 4 0 0 1 5.6 5.6l-1.2 1.2M14.4 16.2l-1.2 1.2a4 4 0 0 1-5.6-5.6l1.2-1.2';
const LOCK_I = 'M6 10h12v10H6zM8.5 10V7.5a3.5 3.5 0 0 1 7 0V10M12 14v2';

/** DS Digital Stamp: neutral 32px bar, flag + statement + «كيف تتحقق؟» toggle; expands to the two checks. */
function DigitalStamp() {
  const [open, setOpen] = useState(false);
  const item = (d: string, title: ReactNode, text: string) => (
    <div style={{ flex: '1 1 420px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
      <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--r-full)', border: '1px solid var(--dga-stamp-link)', color: 'var(--dga-stamp-link)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon d={d} size={20} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 600, color: 'var(--ink)' }}>{title}</span>
        <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{text}</span>
      </span>
    </div>
  );
  return (
    <div style={{ background: 'var(--card-2)' }}>
      <div style={{ ...wrap, minHeight: 32, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span aria-hidden="true" style={{ width: 20, height: 14, borderRadius: 2, background: '#006923', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ width: 11, height: 2, borderRadius: 1, background: '#fff', marginTop: 4 }} />
        </span>
        <span style={{ fontSize: 12, lineHeight: '18px', fontWeight: 500, color: 'var(--ink)' }}>موقع حكومي مسجل لدى هيئة الحكومة الرقمية</span>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="dga-stamp-panel"
          className="dga-stamp-link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: 0, border: 0, background: 'none', fontSize: 12, lineHeight: '18px', fontWeight: 500, color: 'var(--dga-stamp-link)', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
        >
          كيف تتحقق؟
          <Icon d="M6 9l6 6 6-6" size={16} style={{ transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }} />
        </button>
      </div>
      {open ? (
        <div id="dga-stamp-panel" style={{ ...wrap, paddingTop: 16, paddingBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 24, animation: 'zzfade .18s ease both' }}>
          {item(
            LINK_I,
            <>
              روابط المواقع الإلكترونية الرسمية الحكومية تنتهي بـ <span style={{ color: 'var(--dga-stamp-link)' }}>gov.sa</span>
            </>,
            'جميع روابط المواقع الرسمية التابعة للجهات الحكومية في المملكة العربية السعودية تنتهي بـ gov.sa.',
          )}
          {item(
            LOCK_I,
            <>
              المواقع الإلكترونية الحكومية الموثوقة تستخدم بروتوكول <span style={{ color: 'var(--dga-stamp-link)' }}>HTTPS</span>
            </>,
            'تحقق من أن الموقع يستخدم بروتوكول HTTPS.',
          )}
        </div>
      ) : null}
    </div>
  );
}

const hAct: CSSProperties = {
  height: 72,
  padding: '0 16px',
  border: 0,
  borderRadius: 'var(--r-sm)',
  background: 'transparent',
  color: 'var(--ink)',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontFamily: 'inherit',
};

export function SiteHeader({ v }: { v: V }) {
  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'var(--card)' }}>
        <DigitalStamp />
        {v.desktop ? <SecondNavHeader onTheme={v.toggleTheme} isDark={v.isDark} /> : null}
        {/* DGA Nav Header: logo + menu items at the start, header actions at the end, 1px divider */}
        <div style={{ position: 'relative', borderBottom: '1px solid var(--line)' }}>
        <div style={{ ...wrap, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
            <button onClick={v.go?.home} aria-label="الرئيسية" style={{ background: 'none', border: '0', padding: 0, cursor: 'pointer', display: 'flex', flexShrink: 0 }}>
              <img src="assets/zamzam-logo.png" alt="" style={{ display: 'block', height: 58, width: 'auto' }} />
            </button>
            {v.desktop ? (
              <nav aria-label="القائمة الرئيسية" style={{ display: 'flex', alignItems: 'center' }} className="zz-header-nav">
                {list(v.navItems).map((item: any, $index: number) => (
                  <Fragment key={$index}>
                    <div onMouseEnter={item?.onEnter} onMouseLeave={item?.onLeave} style={{ position: 'static' }}>
                      <button
                        onClick={item?.onClick}
                        aria-current={item?.active ? 'page' : undefined}
                        aria-haspopup={item?.hasMenu ? 'menu' : undefined}
                        aria-expanded={item?.hasMenu ? !!item?.open : undefined}
                        style={{
                          height: 72,
                          padding: '8px 16px',
                          background: item?.active ? 'var(--gold)' : 'transparent',
                          border: 0,
                          borderRadius: 'var(--r-sm)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          fontSize: 16,
                          lineHeight: '24px',
                          fontWeight: item?.active ? 600 : 500,
                          color: item?.active ? '#FFFFFF' : 'var(--ink)',
                          whiteSpace: 'nowrap',
                          fontFamily: 'inherit',
                        }}
                        className="dga-menu"
                      >
                        <span>{item?.label}</span>
                        {item?.hasMenu ? <Hi icon={ArrowDown01Icon} size={20} style={{ transition: 'transform .2s', transform: item?.open ? 'rotate(180deg)' : 'none' }} /> : null}
                      </button>
                      {item?.open ? <MegaMenu item={item} go={v.go} /> : null}
                    </div>
                  </Fragment>
                ))}
              </nav>
            ) : null}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: '0' }} className="zz-header-actions">
            {v.desktop ? (
              <>
                <button onClick={v.go?.search} aria-label="البحث" aria-current={v.pg?.search ? 'page' : undefined} className="dga-hact" style={hAct}>
                  <Hi icon={Search01Icon} />
                  <span className="zz-hact-label">البحث</span>
                </button>
                <button onClick={v.langToast} aria-label="English" lang="en" className="dga-hact" style={hAct}>
                  <Hi icon={LanguageSquareIcon} />
                  <span className="zz-hact-label">English</span>
                </button>
              </>
            ) : null}
            <div style={{ position: 'relative', display: 'flex' }}>
              <button
                onClick={v.ox?.acctClick}
                aria-haspopup="menu"
                aria-expanded={v.ox?.acctOpen}
                aria-label={v.ox?.authLabel}
                style={hAct}
                className="zz-header-account dga-hact"
              >
                {v.ox?.signedIn ? (
                  <>
                    <span
                      aria-hidden="true"
                      style={css(`width:28px;height:28px;flex-shrink:0;border-radius:50%;background:${v.ox?.chipBg ?? ''};color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;margin-inline-start:-6px;white-space:nowrap`,
                      )}
                    >
                      {v.ox?.hasPhoto ? null : v.ox?.initials}
                    </span>
                    {v.desktop ? <span style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.ox?.firstName}</span> : null}
                    {v.desktop ? (
                      <Icon d="M6 9l6 6 6-6" size={20} />
                    ) : null}
                  </>
                ) : (
                  <>
                    <Hi icon={UserIcon} />
                    {v.desktop ? <span>{v.ox?.authLabel}</span> : null}
                  </>
                )}
              </button>
              {v.ox?.acctOpen ? (
                <>
                  <button
                    aria-label="إغلاق"
                    onClick={v.ox?.acctClose}
                    style={{ position: 'fixed', inset: '0', zIndex: '70', background: 'transparent', border: '0', cursor: 'default' }}
                  />
                  <div
                    role="menu"
                    style={{
                      position: 'absolute',
                      top: '72px',
                      left: '0',
                      zIndex: '71',
                      minWidth: '260px',
                      padding: '8px',
                      borderRadius: 'var(--r-md)',
                      background: 'var(--card)',
                      boxShadow: 'var(--card-shadow),0 0 0 1px var(--line)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px 12px', borderBottom: '1px solid var(--line)', marginBottom: '4px' }}>
                      <span
                        aria-hidden="true"
                        style={css(`width:44px;height:44px;flex-shrink:0;border-radius:50%;background:${v.ox?.photoBg ?? ''};color:var(--gold-on-soft);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;white-space:nowrap`,
                        )}
                      >
                        {v.ox?.hasPhoto ? null : v.ox?.initials}
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0', textAlign: 'right' }}>
                        <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.ox?.fullName}</span>
                        <span style={{ fontSize: '14px', color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.ox?.acctSub}</span>
                        <span
                          style={css(`align-self:flex-start;margin-top:4px;display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:var(--r-sm);font-size:12px;font-weight:500;background:var(--tag-${v.ox?.statusTone}-bg);color:var(--tag-${v.ox?.statusTone}-fg);box-shadow:inset 0 0 0 1px var(--tag-${v.ox?.statusTone}-bd)`,
                          )}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
                          {v.ox?.statusLabel}
                        </span>
                      </span>
                    </div>
                    <button
                      role="menuitem"
                      onClick={v.ox?.acctProfile}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        border: '0',
                        borderRadius: 'var(--r-sm)',
                        background: 'transparent',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'right',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      className="zp-004"
                    >
                      حسابي
                    </button>
                    <button
                      role="menuitem"
                      onClick={v.ox?.acctOrders}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        border: '0',
                        borderRadius: 'var(--r-sm)',
                        background: 'transparent',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'right',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      className="zp-004"
                    >
                      طلباتي
                    </button>
                    {v.ox?.pwLabel ? (<button
                      role="menuitem"
                      onClick={v.ox?.acctPassword}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        border: '0',
                        borderRadius: 'var(--r-sm)',
                        background: 'transparent',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'right',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      className="zp-004"
                    >
                      {v.ox?.pwLabel}
                    </button>) : null}
                    <div style={{ height: '1px', background: 'var(--line)', margin: '4px 0' }} />
                    <button
                      role="menuitem"
                      onClick={v.ox?.acctLogout}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        border: '0',
                        borderRadius: 'var(--r-sm)',
                        background: 'transparent',
                        color: 'var(--danger)',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'right',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      className="zp-004"
                    >
                      تسجيل الخروج
                    </button>
                  </div>
                </>
              ) : null}
            </div>
            {!v.desktop ? (
            <button
              onClick={v.toggleTheme}
              aria-label="تبديل الوضع"
              title="تبديل الوضع"
              style={{ ...hAct, width: 56, padding: 0, justifyContent: 'center' }}
              className="dga-hact"
            >
              {v.isLight ? (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                  </svg>
                </>
              ) : null}
              {v.isDark ? (
                <>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4.2" />
                    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
                  </svg>
                </>
              ) : null}
            </button>
            ) : null}
            {v.showHeaderMenu ? (
              <>
                <button
                  onClick={v.openMobileNav}
                  aria-label="القائمة"
                  className="dga-btn dga-btn-secondary"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--r-sm)',
                    background: 'var(--card)',
                    border: '1px solid var(--field-bd)',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </button>
              </>
            ) : null}
          </div>
        </div>
        </div>
      </header>
    </>
  );
}
