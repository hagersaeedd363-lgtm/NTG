import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function SiteHeader({ v }: { v: V }) {
  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'var(--card)' }}>
        {/* DGA Digital Stamp */}
        <div style={{ height: 32, padding: '0 32px', background: 'var(--card-2)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span aria-hidden="true" style={{ width: 20, height: 14, borderRadius: 2, background: '#006923', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: 11, height: 2, borderRadius: 1, background: '#fff', marginTop: 4 }} />
            </span>
            <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 500, color: 'var(--ink)', whiteSpace: 'nowrap' }}>موقع حكومي مسجل لدى هيئة الحكومة الرقمية</span>
            <a
              href="https://raqmi.dga.gov.sa/platforms/platforms"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, lineHeight: '20px', color: 'var(--dga-stamp-link)', whiteSpace: 'nowrap' }}
            >
              كيف تتحقق؟
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
        {/* DGA Nav Header */}
        <div
          style={{
            height: 72,
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
            <button
              onClick={v.go?.home}
              aria-label="الرئيسية"
              style={{ background: 'none', border: '0', padding: '4px', cursor: 'pointer', display: 'flex', flexShrink: '0' }}
            >
              <span style={{ display: 'block', width: '160px', height: '48px', background: "url('assets/logo-sm-gold.svg') right center/contain no-repeat" }} />
            </button>
            {v.desktop ? (
              <nav style={{ display: 'flex', alignItems: 'center' }} className="zz-header-nav">
                {list(v.navItems).map((item: any, $index: number) => (
                  <Fragment key={$index}>
                    <div onMouseEnter={item?.onEnter} onMouseLeave={item?.onLeave} style={{ position: 'relative' }}>
                      <button
                        onClick={item?.onClick}
                        aria-current={item?.active ? 'page' : undefined}
                        style={{
                          height: 72,
                          padding: '8px 16px',
                          background: 'none',
                          border: 0,
                          borderRadius: 'var(--r-sm)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          fontSize: 16,
                          lineHeight: '24px',
                          fontWeight: 500,
                          color: item?.active ? 'var(--gold-2)' : 'var(--ink)',
                          whiteSpace: 'nowrap',
                          position: 'relative',
                          fontFamily: 'inherit',
                        }}
                        className="dga-navlink"
                      >
                        <span>{item?.label}</span>
                        {item?.hasMenu ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        ) : null}
                        {item?.active ? <span aria-hidden="true" style={{ position: 'absolute', left: 16, right: 16, bottom: 0, height: 3, borderRadius: '3px 3px 0 0', background: 'var(--gold)' }} /> : null}
                      </button>
                      {item?.open ? (
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            minWidth: '240px',
                            padding: '8px',
                            borderRadius: 'var(--r-md)',
                            background: 'var(--card)',
                            boxShadow: 'inset 0 0 0 1px var(--line),var(--shadow-lg)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2px',
                            animation: 'zzfade .18s ease both',
                          }}
                        >
                          {list(item?.children).map((c: any, $index: number) => (
                            <Fragment key={$index}>
                              <button
                                onClick={c?.onClick}
                                style={{
                                  background: c?.active ? 'var(--card-2)' : 'transparent',
                                  border: 0,
                                  borderRadius: 'var(--r-sm)',
                                  padding: '10px 12px',
                                  textAlign: 'right',
                                  cursor: 'pointer',
                                  fontSize: 16,
                                  lineHeight: '24px',
                                  fontWeight: 500,
                                  color: c?.active ? 'var(--gold-2)' : 'var(--ink)',
                                  whiteSpace: 'nowrap',
                                  fontFamily: 'inherit',
                                }}
                                className="dga-navlink"
                              >
                                {c?.label}
                              </button>
                            </Fragment>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </Fragment>
                ))}
              </nav>
            ) : null}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: '0' }} className="zz-header-actions">
            {v.desktop ? (
              <>
                <button
                  onClick={v.scrollToBuyPack}
                  style={{
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: 'var(--r-sm)',
                    background: 'var(--gold)',
                    border: '0',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap',
                    fontFamily: 'inherit',
                  }}
                  className="zz-header-buy dga-btn dga-btn-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 4h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2" />
                    <circle cx="9.5" cy="19.5" r="1.3" />
                    <circle cx="17" cy="19.5" r="1.3" />
                  </svg>
                  اقتن زمزم
                </button>
              </>
            ) : null}
            <div style={{ position: 'relative', display: 'flex' }}>
              <button
                onClick={v.ox?.acctClick}
                aria-haspopup="menu"
                aria-expanded={v.ox?.acctOpen}
                aria-label={v.ox?.authLabel}
                style={{
                  height: '40px',
                  padding: '0 16px',
                  borderRadius: 'var(--r-sm)',
                  background: 'var(--card)',
                  border: '1px solid var(--field-bd)',
                  color: 'var(--ink)',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  fontFamily: 'inherit',
                }}
                className="zz-header-account dga-btn dga-btn-secondary"
              >
                {v.ox?.signedIn ? (
                  <>
                    <span
                      aria-hidden="true"
                      style={css(
                        `width:28px;height:28px;flex-shrink:0;border-radius:50%;background:${v.ox?.chipBg ?? ''};color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;margin-inline-start:-6px;white-space:nowrap`,
                      )}
                    >
                      {v.ox?.hasPhoto ? null : v.ox?.initials}
                    </span>
                    {v.desktop ? <span style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.ox?.firstName}</span> : null}
                    {v.desktop ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    ) : null}
                  </>
                ) : (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                    </svg>
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
                      top: '48px',
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
                        style={css(
                          `width:44px;height:44px;flex-shrink:0;border-radius:50%;background:${v.ox?.photoBg ?? ''};color:var(--gold-on-soft);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;white-space:nowrap`,
                        )}
                      >
                        {v.ox?.hasPhoto ? null : v.ox?.initials}
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0', textAlign: 'right' }}>
                        <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.ox?.fullName}</span>
                        <span style={{ fontSize: '13px', color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.ox?.acctSub}</span>
                        <span
                          style={css(
                            `align-self:flex-start;margin-top:4px;display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 10px;border-radius:var(--r-sm);font-size:12px;font-weight:500;background:var(--tag-${v.ox?.statusTone}-bg);color:var(--tag-${v.ox?.statusTone}-fg);box-shadow:inset 0 0 0 1px var(--tag-${v.ox?.statusTone}-bd)`,
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
                        fontSize: '15px',
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
                        fontSize: '15px',
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
                        fontSize: '15px',
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
                        fontSize: '15px',
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
            <button
              onClick={v.toggleTheme}
              aria-label="تبديل الوضع"
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
              className="dga-btn dga-btn-secondary"
            >
              {v.isLight ? (
                <>
                  <svg
                    width="22"
                    height="22"
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4.2" />
                    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
                  </svg>
                </>
              ) : null}
            </button>
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
      </header>
    </>
  );
}
