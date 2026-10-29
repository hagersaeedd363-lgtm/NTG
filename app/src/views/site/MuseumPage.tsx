import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function MuseumPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="04 متحف زمزم" style={{ background: 'var(--bg)', padding: '56px 0 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)' }}>
          <div
            role="tablist"
            style={{ overflowY: 'hidden', scrollbarWidth: 'none', display: 'flex', gap: '28px', overflowX: 'auto', borderBottom: '1px solid var(--line)' }}
          >
            {list(v.museumTabs).map((t: any, $index: number) => (
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
        </div>
      </section>
      <section style={{ background: 'var(--bg)', padding: '48px 0 96px' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)' }}>
          {v.mt?.t0 ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', animation: 'zzfade .3s ease both' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                  <div
                    style={{
                      flex: '1 1 460px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      fontSize: '19px',
                      lineHeight: '1.85',
                      color: 'var(--ink-2)',
                    }}
                  >
                    <h2 style={{ margin: '0 0 6px', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>
                      عن المتحف
                    </h2>
                    <p style={{ margin: '0' }}>
                      متحف زمزم مساحة معرفية تعرّف بقصة ماء زمزم المبارك وتاريخه ومنظومة خدمته، ضمن مسار الزوار المخصص للتعريف بالبئر وما أحاط بها من عناية عبر
                      العصور.
                    </p>
                    <p style={{ margin: '0' }}>
                      يجمع المتحف بين السرد التاريخي الموثّق والعرض التقني الحديث، فينتقل الزائر من قصة هاجر وإسماعيل عليهما السلام، مروراً بعصور السقاية
                      وأدواتها، وصولاً إلى المختبرات وخطوط الإنتاج التي تحفظ نقاء الماء اليوم.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
                      <button
                        onClick={v.go?.museumAxes}
                        style={{
                          height: '40px',
                          padding: '7px 28px',
                          borderRadius: '9px',
                          background: '#996C2E',
                          border: '1px solid rgba(255,255,255,.2)',
                          color: '#fff',
                          fontSize: '16px',
                          cursor: 'pointer',
                        }}
                        className="zp-002"
                      >
                        محاور العرض بالتفصيل
                      </button>
                      <button
                        onClick={v.go?.museumVisit}
                        style={{
                          height: '40px',
                          padding: '7px 24px',
                          borderRadius: '9px',
                          background: 'transparent',
                          border: '1px solid var(--line)',
                          color: 'var(--ink)',
                          fontSize: '16px',
                          cursor: 'pointer',
                        }}
                        className="zp-008"
                      >
                        خطّط لزيارتك
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: '1 1 380px',
                      minHeight: '340px',
                      alignSelf: 'stretch',
                      borderRadius: '0 161px 0 0',
                      background: 'repeating-linear-gradient(45deg,var(--ph-a) 0 10px,var(--ph-b) 10px 20px)',
                      boxShadow: 'inset 0 0 0 1px var(--line)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'ui-monospace,monospace',
                      fontSize: '13px',
                      color: 'var(--muted)',
                    }}
                  >
                    صورة المتحف
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: '24px',
                    background: '#5E5951',
                    color: '#fff',
                    overflow: 'hidden',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'stretch',
                  }}
                >
                  <div style={{ flex: '1 1 340px', minHeight: '300px', position: 'relative', background: "url('assets/da38.jpg') center/cover no-repeat" }}>
                    <span style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg,rgba(20,18,15,.78),rgba(20,18,15,.35))' }} />
                    <span
                      style={{
                        position: 'absolute',
                        inset: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '14px',
                      }}
                    >
                      <span
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,.12)',
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.45)',
                          backdropFilter: 'blur(6px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 3h12M6 21h12M7 3v3.5a5 5 0 0 0 2.2 4.1L12 12l2.8-1.4A5 5 0 0 0 17 6.5V3M7 21v-3.5a5 5 0 0 1 2.2-4.1L12 12l2.8 1.4a5 5 0 0 1 2.2 4.1V21" />
                        </svg>
                      </span>
                      <span style={{ padding: '6px 16px', borderRadius: '36px', background: 'rgba(0,0,0,.35)', fontSize: '15px' }}>قيد الإعداد</span>
                    </span>
                  </div>
                  <div
                    style={{
                      flex: '1.3 1 420px',
                      padding: 'clamp(24px,3.5vw,44px)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        padding: '6px 14px',
                        borderRadius: '36px',
                        background: 'rgba(130,130,130,.15)',
                        boxShadow: 'inset 0 0 0 1px #fff',
                        fontSize: '14px',
                        fontWeight: '700',
                        lineHeight: '1.08',
                      }}
                    >
                      قبل الافتتاح
                    </span>
                    <p style={{ margin: '0', fontSize: '21px', lineHeight: '1.7' }}>
                      متحف زمزم قيد الإعداد. سنعلن عن موعد الافتتاح وآلية الزيارة عبر هذه الصفحة وقنواتنا الرسمية.
                    </p>
                    {v.notSent?.notify ? (
                      <>
                        <form onSubmit={v.submit?.notify} noValidate={true} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <label htmlFor="museum-email" style={{ fontSize: '14px', color: 'rgba(255,255,255,.8)' }}>
                            البريد الإلكتروني
                          </label>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            <input
                              id="museum-email"
                              name="email"
                              type="email"
                              dir="ltr"
                              placeholder="name@example.com"
                              style={{
                                flex: '1 1 220px',
                                minWidth: '0',
                                height: '46px',
                                padding: '0 16px',
                                borderRadius: '9px',
                                border: '1px solid rgba(255,255,255,.3)',
                                background: 'rgba(255,255,255,.1)',
                                color: '#fff',
                                fontSize: '16px',
                                outline: 'none',
                                textAlign: 'right',
                              }}
                              className="zp-014"
                            />
                            <button
                              type="submit"
                              style={{
                                height: '52px',
                                padding: '0 20px',
                                borderRadius: '9px',
                                border: '0',
                                background: '#fff',
                                color: '#070F25',
                                fontSize: '17px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              أشعرني عند الافتتاح
                            </button>
                          </div>
                          <span style={{ fontSize: '13px', color: '#FFD2C9', minHeight: '16px' }}>{v.err?.notify?.email}</span>
                        </form>
                      </>
                    ) : null}
                    {v.sent?.notify ? (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '18px' }}>
                          <span
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              background: 'rgba(255,255,255,.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12.5l4.5 4.5L19 7.5" />
                            </svg>
                          </span>
                          سنُشعرك فور الإعلان عن موعد الافتتاح.
                        </div>
                      </>
                    ) : null}
                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,.18)' }} />
                    <button
                      onClick={v.downloadProfile}
                      style={{
                        height: '48px',
                        padding: '0 20px',
                        borderRadius: '9px',
                        border: '1px solid rgba(255,255,255,.4)',
                        background: 'transparent',
                        color: '#fff',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                      className="zp-015"
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
                        <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
                      </svg>
                      تحميل الملف التعريفي لمتحف زمزم
                      <span style={{ fontSize: '13px', opacity: '.7' }}>PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {v.mt?.t1 ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', animation: 'zzfade .3s ease both' }}>
                <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>ماذا ستجد</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '20px' }}>
                  {list(v.museumAxes).map((a: any, $index: number) => (
                    <Fragment key={$index}>
                      <div
                        style={{
                          background: 'var(--card)',
                          borderRadius: '24px',
                          boxShadow: 'var(--card-shadow)',
                          padding: '26px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                        }}
                      >
                        <span style={{ fontSize: '15px', color: 'var(--gold-2)' }}>{a?.n}</span>
                        <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>{a?.t}</span>
                        <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)', flex: '1' }}>{a?.d}</p>
                        <button
                          onClick={a?.onClick}
                          style={{
                            alignSelf: 'flex-start',
                            marginTop: '4px',
                            background: 'none',
                            border: '0',
                            padding: '0',
                            color: 'var(--gold-2)',
                            fontSize: '15px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                          className="zp-016"
                        >
                          اقرأ المزيد
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M15 6l-6 6 6 6" />
                          </svg>
                        </button>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          ) : null}
          {v.mt?.t2 ? (
            <>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', animation: 'zzfade .3s ease both' }}>
                <div style={{ flex: '1.3 1 460px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>خطط لزيارتك</h2>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--card-shadow)', background: 'var(--card)' }}>
                    {list(v.museumInfo).map((r: any, $index: number) => (
                      <Fragment key={$index}>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)',
                            borderBottom: '1px solid var(--line)',
                            fontSize: '17px',
                          }}
                        >
                          <span style={{ padding: '16px 20px', color: 'var(--ink)', fontWeight: '600' }}>{r?.k}</span>
                          <span style={{ padding: '16px 20px', color: 'var(--muted)' }}>{r?.v}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <button
                    onClick={v.bookVisit}
                    style={{
                      alignSelf: 'flex-start',
                      height: '48px',
                      padding: '0 32px',
                      borderRadius: '9px',
                      background: '#996C2E',
                      border: '1px solid rgba(255,255,255,.2)',
                      color: '#fff',
                      fontSize: '17px',
                      cursor: 'pointer',
                    }}
                    className="zp-002"
                  >
                    احجز زيارتك
                  </button>
                </div>
                <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div
                    style={{
                      background: 'var(--card)',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                    }}
                  >
                    <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>إرشادات الزيارة</span>
                    {list(v.museumRules).map((r: any, $index: number) => (
                      <Fragment key={$index}>
                        <div style={{ display: 'flex', gap: '10px', fontSize: '16px', lineHeight: '1.6', color: 'var(--ink-2)' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-3)', marginTop: '10px', flexShrink: '0' }} />
                          {r}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <div
                    style={{
                      background: 'var(--card)',
                      borderRadius: '24px',
                      boxShadow: 'var(--card-shadow)',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>سهولة الوصول للمتحف</span>
                    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.7', color: 'var(--ink-2)' }}>نلتزم بأن تكون تجربة الزيارة متاحة لجميع الفئات.</p>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {v.mt?.t3 ? (
            <>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start', animation: 'zzfade .3s ease both' }}>
                <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>
                    الزيارات المدرسية والجماعية
                  </h2>
                  <p style={{ margin: '0', fontSize: '19px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
                    نستقبل زيارات المدارس والجامعات والجهات والمجموعات السياحية بترتيب مسبق، مع إمكانية تخصيص جولة مصحوبة بمرشد.
                  </p>
                </div>
                <div
                  style={{
                    flex: '1.4 1 460px',
                    minWidth: '0',
                    background: 'var(--card)',
                    borderRadius: '24px',
                    boxShadow: 'var(--card-shadow)',
                    padding: 'clamp(20px,3vw,36px)',
                  }}
                >
                  {v.notSent?.group ? (
                    <>
                      <form
                        onSubmit={v.submit?.group}
                        noValidate={true}
                        style={css(`display:grid;grid-template-columns:${v.formCols ?? ''};gap:6px 20px;align-items:start`)}
                      >
                        <div
                          style={{
                            gridColumn: '1/-1',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            paddingBottom: '16px',
                            marginBottom: '10px',
                            borderBottom: '1px solid var(--line)',
                          }}
                        >
                          <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--ink)' }}>نموذج طلب زيارة جماعية</span>
                        </div>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          اسم الجهة
                          <input
                            data-fillbg="1"
                            name="org"
                            style={{
                              width: '100%',
                              height: '46px',
                              padding: '0 16px',
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
                          <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.group?.org}</span>
                        </label>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          نوع الجهة
                          <span style={{ position: 'relative', display: 'block' }}>
                            <select
                              data-fillbg="1"
                              name="kind"
                              style={{
                                width: '100%',
                                height: '46px',
                                padding: '0 16px',
                                borderRadius: '12px',
                                border: '1px solid var(--line)',
                                background: 'var(--card)',
                                color: 'var(--ink)',
                                fontSize: '16px',
                                outline: 'none',
                                boxSizing: 'border-box',
                                appearance: 'none',
                                WebkitAppearance: 'none',
                                paddingLeft: '44px',
                                cursor: 'pointer',
                              }}
                              className="zp-017"
                            >
                              <option value="">اختر</option>
                              <option>مدرسة</option>
                              <option>جامعة</option>
                              <option>جهة حكومية أو خاصة</option>
                              <option>مجموعة سياحية</option>
                            </select>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              style={{ position: 'absolute', left: '16px', top: '18px', color: 'var(--muted)', pointerEvents: 'none' }}
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                          <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.group?.kind}</span>
                        </label>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          اسم المنسّق
                          <input
                            data-fillbg="1"
                            name="person"
                            style={{
                              width: '100%',
                              height: '46px',
                              padding: '0 16px',
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
                          <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.group?.person}</span>
                        </label>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          رقم الجوال
                          <input
                            data-fillbg="1"
                            name="phone"
                            inputMode="numeric"
                            dir="ltr"
                            placeholder="05XXXXXXXX"
                            style={{
                              width: '100%',
                              height: '46px',
                              padding: '0 16px',
                              borderRadius: '12px',
                              border: '1px solid var(--line)',
                              background: 'var(--card)',
                              color: 'var(--ink)',
                              fontSize: '16px',
                              outline: 'none',
                              boxSizing: 'border-box',
                              textAlign: 'right',
                            }}
                            className="zp-017"
                          />
                          <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.group?.phone}</span>
                        </label>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          البريد الإلكتروني
                          <input
                            data-fillbg="1"
                            name="email"
                            type="email"
                            dir="ltr"
                            placeholder="name@example.com"
                            style={{
                              width: '100%',
                              height: '46px',
                              padding: '0 16px',
                              borderRadius: '12px',
                              border: '1px solid var(--line)',
                              background: 'var(--card)',
                              color: 'var(--ink)',
                              fontSize: '16px',
                              outline: 'none',
                              boxSizing: 'border-box',
                              textAlign: 'right',
                            }}
                            className="zp-017"
                          />
                          <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.group?.email}</span>
                        </label>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          عدد الزوار
                          <input
                            data-fillbg="1"
                            name="count"
                            type="number"
                            min={1}
                            placeholder="0"
                            style={{
                              width: '100%',
                              height: '46px',
                              padding: '0 16px',
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
                          <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.group?.count}</span>
                        </label>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          التاريخ المفضّل
                          <input
                            data-fillbg="1"
                            name="date"
                            type="date"
                            style={{
                              width: '100%',
                              height: '46px',
                              padding: '0 16px',
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
                          <span style={{ fontSize: '13px', lineHeight: '16px', color: 'var(--danger)', minHeight: '16px' }}>{v.err?.group?.date}</span>
                        </label>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            minWidth: '0',
                            maxWidth: '540px',
                            width: '100%',
                            fontSize: '15px',
                            fontWeight: '500',
                            color: 'var(--ink)',
                          }}
                        >
                          <span>نوع الجولة</span>
                          <label
                            style={{
                              height: '52px',
                              padding: '0 16px',
                              borderRadius: '12px',
                              border: '1px solid var(--line)',
                              background: 'var(--card-2)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              fontSize: '16px',
                              fontWeight: '400',
                              color: 'var(--ink)',
                              cursor: 'pointer',
                              boxSizing: 'border-box',
                            }}
                          >
                            <input name="guide" type="checkbox" style={{ width: '20px', height: '20px', margin: '0', accentColor: '#996C2E' }} />
                            جولة مصحوبة بمرشد
                          </label>
                          <span style={{ minHeight: '16px' }} />
                        </div>
                        <button
                          type="submit"
                          style={{
                            gridColumn: '1/-1',
                            marginTop: '8px',
                            height: '52px',
                            borderRadius: '9px',
                            border: '0',
                            background: '#996C2E',
                            color: '#fff',
                            fontSize: '17px',
                            cursor: 'pointer',
                          }}
                          className="zp-002"
                        >
                          إرسال الطلب
                        </button>
                      </form>
                    </>
                  ) : null}
                  {v.sent?.group ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', padding: '32px 0' }}>
                        <span
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'var(--gold-soft)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--gold-2)',
                          }}
                        >
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                          </svg>
                        </span>
                        <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }}>تسلّمنا طلب الزيارة</span>
                        <p style={{ margin: '0', fontSize: '17px', color: 'var(--ink-2)' }}>سنتواصل معك لتأكيد الموعد.</p>
                        <button
                          onClick={v.resetForm?.group}
                          style={{
                            height: '44px',
                            padding: '0 24px',
                            borderRadius: '9px',
                            border: '1px solid var(--line)',
                            background: 'transparent',
                            color: 'var(--ink)',
                            fontSize: '16px',
                            cursor: 'pointer',
                          }}
                        >
                          طلب جديد
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
