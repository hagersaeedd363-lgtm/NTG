import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function SiteHeader({ v }: { v: V }) {
  return (
    <>
      <header
        style={css(
          `position:fixed;top:0;left:0;right:0;z-index:60;background:${v.headerBg ?? ''};backdrop-filter:${v.headerBlur ?? ''};-webkit-backdrop-filter:${v.headerBlur ?? ''};transition:background .3s`,
        )}
      >
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '16px clamp(16px,2.5vw,32px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <button
            onClick={v.go?.home}
            aria-label="الرئيسية"
            style={{ background: 'none', border: '0', padding: '0', cursor: 'pointer', display: 'flex', flexShrink: '0' }}
          >
            <span style={{ display: 'block', width: '168px', height: '40px', background: "url('assets/logo-sm-gold.svg') right center/contain no-repeat" }} />
          </button>
          {v.desktop ? (
            <>
              <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="zz-header-nav">
                {list(v.navItems).map((item: any, $index: number) => (
                  <Fragment key={$index}>
                    <div onMouseEnter={item?.onEnter} onMouseLeave={item?.onLeave} style={{ position: 'relative', padding: '10px 0' }}>
                      <button
                        onClick={item?.onClick}
                        style={css(
                          `background:none;border:0;padding:0;cursor:pointer;display:flex;align-items:center;gap:4px;font-size:20px;line-height:20px;color:${item?.color ?? ''};white-space:nowrap`,
                        )}
                        className="zp-000"
                      >
                        <span>{item?.label}</span>
                        {item?.hasMenu ? (
                          <>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </>
                        ) : null}
                      </button>
                      {item?.open ? (
                        <>
                          <div
                            style={{
                              position: 'absolute',
                              top: '100%',
                              right: '-16px',
                              minWidth: '250px',
                              padding: '8px',
                              borderRadius: '14px',
                              background: 'rgba(17,22,27,.96)',
                              backdropFilter: 'blur(14px)',
                              boxShadow: '0 18px 40px rgba(0,0,0,.35),inset 0 0 0 1px rgba(255,255,255,.08)',
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
                                  style={css(
                                    `background:${c?.bg ?? ''};border:0;border-radius:9px;padding:11px 14px;text-align:right;cursor:pointer;font-size:17px;color:${c?.color ?? ''};white-space:nowrap`,
                                  )}
                                  className="zp-001"
                                >
                                  {c?.label}
                                </button>
                              </Fragment>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </Fragment>
                ))}
              </nav>
            </>
          ) : null}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: '0' }} className="zz-header-actions">
            {v.desktop ? (
              <>
                <button
                  onClick={v.scrollToBuyPack}
                  style={{
                    height: '40px',
                    padding: '0 18px',
                    borderRadius: '8.89px',
                    background: '#996C2E',
                    border: '1px solid rgba(255,255,255,.2)',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap',
                  }}
                  className="zz-header-buy zp-002"
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
                  padding: '0 14px',
                  borderRadius: '8.89px',
                  background: 'rgba(255,255,255,.17)',
                  border: '0',
                  boxShadow: 'inset 0 0 0 .556px #F9F9FB,0 0 0 .556px #F9F9FB',
                  color: '#fff',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                }}
                className="zz-header-account zp-003"
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
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
                {v.desktop ? (
                  <>
                    <span>{v.ox?.authLabel}</span>
                  </>
                ) : null}
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
                      minWidth: '200px',
                      padding: '8px',
                      borderRadius: '12px',
                      background: 'var(--card)',
                      boxShadow: 'var(--card-shadow),0 0 0 1px var(--line)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    <button
                      role="menuitem"
                      onClick={v.ox?.acctProfile}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        border: '0',
                        borderRadius: '8px',
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
                        borderRadius: '8px',
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
                    <div style={{ height: '1px', background: 'var(--line)', margin: '4px 0' }} />
                    <button
                      role="menuitem"
                      onClick={v.ox?.acctLogout}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        border: '0',
                        borderRadius: '8px',
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
                borderRadius: '8.89px',
                background: 'rgba(255,255,255,.1)',
                border: '0',
                boxShadow: 'inset 0 0 0 .556px #F9F9FB,0 0 0 .556px #F9F9FB',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              className="zp-005"
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
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8.89px',
                    background: 'rgba(255,255,255,.1)',
                    border: '0',
                    boxShadow: 'inset 0 0 0 .556px #F9F9FB',
                    color: '#fff',
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
