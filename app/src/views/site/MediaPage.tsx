import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function MediaPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="12 المركز الإعلامي" style={{ background: 'var(--bg)', padding: '40px 0 96px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div
            role="tablist"
            style={{ overflowY: 'hidden', scrollbarWidth: 'none', display: 'flex', gap: '28px', overflowX: 'auto', borderBottom: '1px solid var(--line)' }}
          >
            {list(v.mediaTabs).map((t: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  role="tab"
                  onClick={t?.onClick}
                  style={css(
                    `background:none;border:0;border-bottom:3px solid ${t?.bd ?? ''};padding:14px 0;margin-bottom:-1px;font-size:18px;color:${t?.color ?? ''};cursor:pointer;white-space:nowrap`,
                  )}
                >
                  {t?.label}
                </button>
              </Fragment>
            ))}
          </div>
          {v.md?.t0 ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', animation: 'zzfade .3s ease both' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px' }}>
                  <button
                    onClick={v.mediaTabNews}
                    style={{
                      textAlign: 'right',
                      background: 'var(--card)',
                      border: '0',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      cursor: 'pointer',
                      color: 'var(--ink)',
                      minHeight: '160px',
                    }}
                    className="zp-018"
                  >
                    <span style={{ fontSize: '22px', fontWeight: '700' }}>الأخبار</span>
                    <span style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)', flex: '1' }}>مستجدّات المشروع ومبادراته وإنجازاته</span>
                    <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>تصفّح</span>
                  </button>
                  <button
                    onClick={v.mediaTabPress}
                    style={{
                      textAlign: 'right',
                      background: 'var(--card)',
                      border: '0',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      cursor: 'pointer',
                      color: 'var(--ink)',
                      minHeight: '160px',
                    }}
                    className="zp-018"
                  >
                    <span style={{ fontSize: '22px', fontWeight: '700' }}>البيانات الصحفية</span>
                    <span style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)', flex: '1' }}>البيانات الرسمية الصادرة عن المشروع</span>
                    <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>تصفّح</span>
                  </button>
                  <button
                    onClick={v.mediaTabGallery}
                    style={{
                      textAlign: 'right',
                      background: 'var(--card)',
                      border: '0',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      cursor: 'pointer',
                      color: 'var(--ink)',
                      minHeight: '160px',
                    }}
                    className="zp-018"
                  >
                    <span style={{ fontSize: '22px', fontWeight: '700' }}>المكتبة المرئية</span>
                    <span style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)', flex: '1' }}>صور وفيديوهات وإنفوجرافيك متاحة للتحميل</span>
                    <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>تصفّح</span>
                  </button>
                  <button
                    onClick={v.mediaTabId}
                    style={{
                      textAlign: 'right',
                      background: 'var(--card)',
                      border: '0',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      cursor: 'pointer',
                      color: 'var(--ink)',
                      minHeight: '160px',
                    }}
                    className="zp-018"
                  >
                    <span style={{ fontSize: '22px', fontWeight: '700' }}>الهوية والشعار</span>
                    <span style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)', flex: '1' }}>الشعار الرسمي وضوابط استخدامه</span>
                    <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>تصفّح</span>
                  </button>
                </div>
                <div
                  style={{
                    borderRadius: '24px',
                    background: 'var(--card)',
                    boxShadow: 'var(--card-shadow)',
                    padding: 'clamp(20px,3vw,36px)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ flex: '1 1 380px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                    <span
                      style={{
                        width: '56px',
                        height: '56px',
                        flexShrink: '0',
                        borderRadius: '14px',
                        background: 'var(--gold-soft)',
                        color: 'var(--gold-2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2.5" />
                        <path d="M4 7l8 6 8-6" />
                      </svg>
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <h2 style={{ margin: '0', fontSize: 'clamp(22px,2.2vw,28px)', fontWeight: '700', lineHeight: '1.35', color: 'var(--ink)' }}>
                        التواصل الإعلامي
                      </h2>
                      <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                        للاستفسارات الإعلامية وطلبات التغطية والمقابلات، تواصل مع الإدارة الإعلامية.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: '0 1 auto',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '16px',
                      background: 'var(--card-2)',
                      boxShadow: 'inset 0 0 0 1px var(--line)',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 10px' }}>
                      <span style={{ fontSize: '13px', color: 'var(--muted)' }}>البريد الإلكتروني</span>
                      <a href="mailto:media@zamzam.sa" dir="ltr" style={{ fontSize: '18px', fontWeight: '500', textAlign: 'right' }}>
                        media@zamzam.sa
                      </a>
                    </div>
                    <button
                      onClick={v.copyMediaEmail}
                      aria-label="نسخ البريد الإلكتروني"
                      title="نسخ"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className="zp-008"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="8" y="8" width="12" height="12" rx="2" />
                        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                    </button>
                    <a
                      href="mailto:media@zamzam.sa"
                      style={{
                        height: '44px',
                        padding: '0 20px',
                        borderRadius: '10px',
                        background: '#996C2E',
                        color: '#fff',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                      }}
                    >
                      راسلنا
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {v.md?.t1 ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', animation: 'zzfade .3s ease both' }}>
                <div
                  style={{
                    borderRadius: '20px',
                    background: 'var(--card)',
                    boxShadow: 'var(--card-shadow)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <input
                      data-fillbg="1"
                      value={v.newsQ ?? ''}
                      onInput={v.onNewsQ}
                      placeholder="ابحث في الأخبار"
                      aria-label="ابحث في الأخبار"
                      style={{
                        width: '100%',
                        height: '46px',
                        padding: '0 46px 0 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        background: 'var(--card)',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      className="zp-017"
                    />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      style={{ position: 'absolute', right: '16px', top: '16px', color: 'var(--muted)' }}
                    >
                      <circle cx="11" cy="11" r="6.5" />
                      <path d="M20 20l-4.2-4.2" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', alignItems: 'center' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px', color: 'var(--muted)', minWidth: '44px' }}>السنة</span>
                        {list(v.newsYearChips).map((c: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              onClick={c?.onClick}
                              style={css(
                                `height:36px;padding:0 14px;border-radius:36px;border:1px solid ${c?.bd ?? ''};background:${c?.bg ?? ''};color:${c?.fg ?? ''};font-size:14px;cursor:pointer`,
                              )}
                            >
                              {c?.label}
                            </button>
                          </Fragment>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px', color: 'var(--muted)', minWidth: '44px' }}>التصنيف</span>
                        {list(v.newsCatChips).map((c: any, $index: number) => (
                          <Fragment key={$index}>
                            <button
                              onClick={c?.onClick}
                              style={css(
                                `height:36px;padding:0 14px;border-radius:36px;border:1px solid ${c?.bd ?? ''};background:${c?.bg ?? ''};color:${c?.fg ?? ''};font-size:14px;cursor:pointer`,
                              )}
                            >
                              {c?.label}
                            </button>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <span style={{ fontSize: '14px', color: 'var(--muted)' }}>{v.newsCount}</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '24px' }}>
                  {list(v.newsList).map((n: any, $index: number) => (
                    <Fragment key={$index}>
                      <button
                        onClick={n?.onClick}
                        style={{
                          textAlign: 'right',
                          background: 'var(--card)',
                          border: '0',
                          borderRadius: '24px',
                          boxShadow: 'var(--card-shadow)',
                          padding: '0',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          cursor: 'pointer',
                          color: 'var(--ink)',
                          transition: 'transform .2s',
                        }}
                        className="zp-010"
                      >
                        <span style={css(`position:relative;display:block;width:100%;aspect-ratio:16/9;background:${n?.img ?? ''}`)}>
                          <span
                            style={{
                              position: 'absolute',
                              top: '14px',
                              right: '14px',
                              padding: '5px 12px',
                              borderRadius: '36px',
                              background: 'rgba(12,13,14,.62)',
                              backdropFilter: 'blur(6px)',
                              color: '#fff',
                              fontSize: '13px',
                            }}
                          >
                            {n?.cat}
                          </span>
                        </span>
                        <span style={{ flex: '1', padding: '18px 20px 18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                          <span style={{ flex: '1', fontSize: '18px', fontWeight: '700', lineHeight: '1.55' }}>{n?.title}</span>
                          <span
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '12px',
                              paddingTop: '14px',
                              borderTop: '1px solid var(--line)',
                              fontSize: '14px',
                              color: 'var(--muted)',
                            }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                <rect x="4" y="5" width="16" height="15" rx="2" />
                                <path d="M4 10h16M9 3v4M15 3v4" />
                              </svg>
                              {n?.dateH}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold-2)' }}>
                              اقرأ الخبر
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M15 6l-6 6 6 6" />
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                    </Fragment>
                  ))}
                </div>
                {v.newsEmpty ? (
                  <>
                    <div
                      style={{
                        padding: '48px',
                        textAlign: 'center',
                        borderRadius: '24px',
                        boxShadow: 'inset 0 0 0 1px var(--line)',
                        fontSize: '18px',
                        color: 'var(--muted)',
                      }}
                    >
                      لا توجد أخبار مطابقة لبحثك.
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
          {v.md?.detail ? (
            <>
              <article
                style={{
                  maxWidth: '860px',
                  width: '100%',
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  animation: 'zzfade .3s ease both',
                }}
              >
                <button
                  onClick={v.backToNews}
                  style={{
                    alignSelf: 'flex-start',
                    background: 'none',
                    border: '0',
                    padding: '0',
                    color: 'var(--gold-2)',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                  العودة إلى الأخبار
                </button>
                <div
                  role="img"
                  aria-label={v.newsItem?.title}
                  style={css(`width:100%;aspect-ratio:16/7;border-radius:24px;background:${v.newsItem?.img ?? ''}`)}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px', fontSize: '15px', color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--gold-2)' }}>{v.newsItem?.cat}</span>
                  <span>{v.newsItem?.dateH}</span>
                  <span>{v.newsItem?.dateG}</span>
                </div>
                {list(v.newsItem?.body).map((p: any, $index: number) => (
                  <Fragment key={$index}>
                    <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.95', color: 'var(--ink-2)' }}>{p}</p>
                  </Fragment>
                ))}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', paddingTop: '20px', borderTop: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '15px', color: 'var(--muted)', marginInlineEnd: '4px' }}>شارك الخبر</span>
                  <button
                    onClick={v.shareX}
                    aria-label="مشاركة عبر X"
                    title="مشاركة عبر X"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      border: '1px solid var(--line)',
                      background: 'var(--card)',
                      color: 'var(--ink)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0',
                    }}
                    className="zp-008"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button
                    onClick={v.share}
                    aria-label="نسخ الرابط"
                    title="نسخ الرابط"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      border: '1px solid var(--line)',
                      background: 'var(--card)',
                      color: 'var(--ink)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0',
                    }}
                    className="zp-008"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
                      <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
                    </svg>
                  </button>
                  <button
                    onClick={v.shareWa}
                    aria-label="مشاركة عبر واتساب"
                    title="مشاركة عبر واتساب"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      border: '1px solid var(--line)',
                      background: 'var(--card)',
                      color: 'var(--ink)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0',
                    }}
                    className="zp-008"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.5 20.5l1.3-4A8.5 8.5 0 1 1 8 19.6z" />
                      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2z" />
                    </svg>
                  </button>
                </div>
                <span style={{ marginTop: '24px', fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }}>أخبار ذات صلة</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px' }}>
                  {list(v.relatedNews).map((n: any, $index: number) => (
                    <Fragment key={$index}>
                      <button
                        onClick={n?.onClick}
                        style={{
                          textAlign: 'right',
                          background: 'var(--card)',
                          border: '0',
                          borderRadius: '18px',
                          boxShadow: 'var(--card-shadow)',
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          cursor: 'pointer',
                          color: 'var(--ink)',
                        }}
                        className="zp-018"
                      >
                        <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{n?.dateH}</span>
                        <span style={{ fontSize: '17px', fontWeight: '600', lineHeight: '1.5' }}>{n?.title}</span>
                      </button>
                    </Fragment>
                  ))}
                </div>
              </article>
            </>
          ) : null}
          {v.md?.t2 ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', animation: 'zzfade .3s ease both' }}>
                <p style={{ margin: '0', maxWidth: '820px', fontSize: '18px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                  البيانات الرسمية الصادرة عن سقيا زمزم. تُنشر هنا كاملةً وقابلة للتحميل، ويُستشهد بها بذكر المصدر.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '24px',
                    background: 'var(--card)',
                    boxShadow: 'var(--card-shadow)',
                    overflow: 'hidden',
                  }}
                >
                  {list(v.press).map((p: any, $index: number) => (
                    <Fragment key={$index}>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '16px',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '22px 26px',
                          borderBottom: '1px solid var(--line)',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: '1 1 360px' }}>
                          <span style={{ fontSize: '19px', fontWeight: '600', color: 'var(--ink)', lineHeight: '1.5' }}>{p?.title}</span>
                          <span style={{ fontSize: '14px', color: 'var(--muted)' }}>
                            {p?.date} · {p?.size}
                          </span>
                        </div>
                        <button
                          onClick={p?.onClick}
                          style={{
                            height: '40px',
                            padding: '0 18px',
                            borderRadius: '9px',
                            border: '1px solid var(--line)',
                            background: 'transparent',
                            color: 'var(--ink)',
                            fontSize: '15px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                          className="zp-008"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
                          </svg>
                          تحميل
                        </button>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          ) : null}
          {v.md?.t3 ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', animation: 'zzfade .3s ease both' }}>
                <p style={{ margin: '0', maxWidth: '820px', fontSize: '18px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                  مواد بصرية عالية الجودة عن ماء زمزم ومنظومة سقيا زمزم، متاحة للإعلاميين والباحثين والجمهور.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {list(v.galleryChips).map((c: any, $index: number) => (
                    <Fragment key={$index}>
                      <button
                        onClick={c?.onClick}
                        style={css(
                          `height:40px;padding:0 18px;border-radius:36px;border:1px solid ${c?.bd ?? ''};background:${c?.bg ?? ''};color:${c?.fg ?? ''};font-size:15px;cursor:pointer`,
                        )}
                      >
                        {c?.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: '16px' }}>
                  {list(v.gallery).map((g: any, $index: number) => (
                    <Fragment key={$index}>
                      <button
                        onClick={g?.onClick}
                        style={css(
                          `position:relative;aspect-ratio:4/3;border:0;padding:0;border-radius:18px;overflow:hidden;background:${g?.bg ?? ''};box-shadow:var(--card-shadow);cursor:pointer;text-align:right`,
                        )}
                      >
                        {g?.noImg ? (
                          <>
                            <span
                              style={{
                                position: 'absolute',
                                inset: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'ui-monospace,monospace',
                                fontSize: '12px',
                                color: 'var(--muted)',
                              }}
                            >
                              {g?.cat}
                            </span>
                          </>
                        ) : null}
                        {g?.isVideo ? (
                          <>
                            <span
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '52px',
                                height: '52px',
                                margin: '-26px 0 0 -26px',
                                borderRadius: '50%',
                                background: 'rgba(0,0,0,.45)',
                                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.6)',
                                backdropFilter: 'blur(6px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                                <path d="M8 5.5v13l11-6.5z" />
                              </svg>
                            </span>
                          </>
                        ) : null}
                        <span
                          style={{
                            position: 'absolute',
                            inset: 'auto 0 0 0',
                            padding: '28px 14px 12px',
                            background: 'linear-gradient(0deg,rgba(0,0,0,.65),rgba(0,0,0,0))',
                            display: 'flex',
                            color: '#fff',
                            fontSize: '14px',
                          }}
                        >
                          <span>{g?.cat}</span>
                        </span>
                      </button>
                    </Fragment>
                  ))}
                </div>
                <div style={{ borderRadius: '18px', background: 'var(--bg-alt)', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink)' }}>شروط الاستخدام</span>
                  <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                    تُستخدم المواد لأغراض إعلامية وتعليمية وغير تجارية، مع الإشارة إلى المصدر. لا يجوز تعديل المواد بما يغيّر مضمونها، ولا استخدامها في سياق
                    تجاري أو ترويجي دون إذن مسبق.
                  </p>
                </div>
              </div>
            </>
          ) : null}
          {v.md?.t4 ? (
            <>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', animation: 'zzfade .3s ease both' }}>
                <div style={{ flex: '1.2 1 420px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                    الشعار الرسمي لسقيا زمزم وملفاته المعتمدة للاستخدام الإعلامي.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
                    <div
                      style={{
                        aspectRatio: '16/9',
                        borderRadius: '18px',
                        background: '#F4F1EB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--card-shadow)',
                      }}
                    >
                      <span style={{ width: '70%', aspectRatio: '212/51', background: "url('assets/logo-sm-gold.svg') center/contain no-repeat" }} />
                    </div>
                    <div
                      style={{
                        aspectRatio: '16/9',
                        borderRadius: '18px',
                        background: '#0C0D0E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ width: '70%', aspectRatio: '212/51', background: "url('assets/logo-sm-gold.svg') center/contain no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 14px 8px 8px',
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px var(--line)',
                      }}
                    >
                      <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#D4A843' }} />
                      <span dir="ltr" style={{ fontFamily: 'ui-monospace,monospace', fontSize: '13px', color: 'var(--ink-2)' }}>
                        #D4A843
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 14px 8px 8px',
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px var(--line)',
                      }}
                    >
                      <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#996C2E' }} />
                      <span dir="ltr" style={{ fontFamily: 'ui-monospace,monospace', fontSize: '13px', color: 'var(--ink-2)' }}>
                        #996C2E
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 14px 8px 8px',
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px var(--line)',
                      }}
                    >
                      <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0C0D0E', boxShadow: 'inset 0 0 0 1px var(--line)' }} />
                      <span dir="ltr" style={{ fontFamily: 'ui-monospace,monospace', fontSize: '13px', color: 'var(--ink-2)' }}>
                        #0C0D0E
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 14px 8px 8px',
                        borderRadius: '12px',
                        boxShadow: 'inset 0 0 0 1px var(--line)',
                      }}
                    >
                      <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#EFEDEA', boxShadow: 'inset 0 0 0 1px var(--line)' }} />
                      <span dir="ltr" style={{ fontFamily: 'ui-monospace,monospace', fontSize: '13px', color: 'var(--ink-2)' }}>
                        #EFEDEA
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <button
                      onClick={v.downloadLogo}
                      style={{
                        height: '48px',
                        padding: '0 28px',
                        borderRadius: '9px',
                        border: '1px solid rgba(255,255,255,.2)',
                        background: '#996C2E',
                        color: '#fff',
                        fontSize: '17px',
                        cursor: 'pointer',
                      }}
                      className="zp-002"
                    >
                      حمّل ملفات الشعار
                    </button>
                    <button
                      onClick={v.downloadGuide}
                      style={{
                        height: '48px',
                        padding: '0 22px',
                        borderRadius: '9px',
                        border: '1px solid var(--line)',
                        background: 'transparent',
                        color: 'var(--ink)',
                        fontSize: '16px',
                        cursor: 'pointer',
                      }}
                    >
                      دليل الاستخدام المختصر
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    flex: '1 1 340px',
                    background: 'var(--card)',
                    borderRadius: '24px',
                    boxShadow: 'var(--card-shadow)',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                  }}
                >
                  <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>ضوابط الاستخدام</span>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-3)', marginTop: '11px', flexShrink: '0' }} />
                    يُستخدم الشعار بصورته المعتمدة دون تعديل في الألوان أو النسب أو العناصر.
                  </div>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-3)', marginTop: '11px', flexShrink: '0' }} />
                    لا يُستخدم الشعار بما يوحي بشراكة أو اعتماد أو تأييد من المشروع دون إذن كتابي.
                  </div>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-3)', marginTop: '11px', flexShrink: '0' }} />
                    لا يُدمج الشعار مع شعارات أخرى دون موافقة مسبقة.
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
