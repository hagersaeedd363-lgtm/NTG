import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function StoryPage({ v }: { v: V }) {
  return (
    <>
      {v.isOverview ? (
        <>
          <section data-screen-label="03 قصة زمزم" style={{ background: 'var(--bg)', padding: '40px 0 40px' }}>
            <div
              style={{
                maxWidth: '880px',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                fontSize: '20px',
                lineHeight: '30px',
                color: 'var(--ink-2)',
                textWrap: 'pretty',
              }}
            >
              <p style={{ margin: '0' }}>
                ليست زمزم بئراً في مدينة، بل موضعٌ في ذاكرة أمة. من لحظة تفجّرها تحت قدمي رضيع، إلى منظومة تقنية تخدم ملايين القاصدين اليوم، مرّت البئر بأربعة
                آلاف عام من الطمر والحفر، والعناية والتوسعة.
              </p>
              <p style={{ margin: '0' }}>
                جمعنا هنا قصتها موثّقةً من مصادرها: القرآن الكريم، وكتب السنة، وكتب أخبار مكة، ورحلات الرحّالة المسلمين، وأرشيف دارة الملك عبدالعزيز.
              </p>
            </div>
          </section>
          <section style={{ background: 'var(--bg)', padding: '0 0 96px' }}>
            <div
              style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 clamp(16px,5.6vw,80px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
                gap: '20px',
              }}
            >
              {list(v.chapterCards).map((c: any, $index: number) => (
                <Fragment key={$index}>
                  <button
                    onClick={c?.onClick}
                    style={{
                      textAlign: 'right',
                      background: 'var(--card)',
                      border: '0',
                      borderRadius: 'var(--r-lg)',
                      boxShadow: 'var(--card-shadow)',
                      padding: '24px 22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      cursor: 'pointer',
                      color: 'var(--ink)',
                      minHeight: '190px',
                      transition: 'transform .2s',
                    }}
                    className="zp-010"
                  >
                    <span style={{ fontSize: '36px', lineHeight: '44px', color: 'var(--gold-3)' }}>{c?.n}</span>
                    <span style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}>{c?.title}</span>
                    <p style={{ margin: '0', fontSize: '16px', lineHeight: '24px', color: 'var(--ink-2)', flex: '1' }}>{c?.line}</p>
                    <span style={{ fontSize: '16px', color: 'var(--gold-2)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      اقرأ الفصل
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M15 6l-6 6 6 6" />
                      </svg>
                    </span>
                  </button>
                </Fragment>
              ))}
            </div>
          </section>
          <section style={{ background: 'var(--bg-alt)', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
            <div
              style={{
                flex: '1 1 420px',
                padding: '72px max(clamp(16px,5.6vw,80px),calc(50% - 728px)) 72px clamp(24px,4vw,56px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: '18px',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  padding: '0 8px',
                  height: '24px',
                  alignItems: 'center',
                  borderRadius: 'var(--r-sm)',
                  background: 'var(--card-2)',
                  boxShadow: 'inset 0 0 0 1px var(--line)',
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '18px',
                  color: 'var(--ink)',
                }}
              >
                قصة الرحمة
              </span>
              <h2 style={{ margin: '0', fontSize: '30px', fontWeight: '700', lineHeight: '38px', color: 'var(--ink)', maxWidth: '600px' }}>
                تفجّرت حيث لا يُنتظر الماء، استجابةً لدعاءٍ صادق
              </h2>
              <button
                onClick={v.film?.hagar}
                style={{
                  height: '40px',
                  padding: '0 16px',
                  borderRadius: 'var(--r-sm)',
                  background: 'var(--gold)',
                  border: '0',
                  color: '#fff',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                className="zp-002"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
                شاهد فيلم نشأة البئر
              </button>
            </div>
            <div style={{ flex: '1 1 420px', minHeight: '300px', background: 'var(--kaaba-img) center/cover no-repeat', borderRadius: 'var(--r-lg)' }} />
          </section>
        </>
      ) : null}
      {v.isChapter ? (
        <>
          <section style={{ background: 'var(--bg)', padding: '40px 0 40px' }}>
            <div
              style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 clamp(16px,5.6vw,80px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '48px',
                alignItems: 'flex-start',
              }}
            >
              <aside style={{ flex: '1 1 260px', maxWidth: '340px', position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '14px', color: 'var(--muted)', padding: '0 14px 10px' }}>فصول القصة</span>
                {list(v.chapterNav).map((c: any, $index: number) => (
                  <Fragment key={$index}>
                    <button
                      onClick={c?.onClick}
                      style={css(`display:flex;gap:12px;align-items:center;text-align:right;border:0;border-radius:var(--r-md);padding:12px 14px;background:${c?.bg ?? ''};box-shadow:${c?.shadow ?? ''};color:${c?.color ?? ''};font-size:16px;cursor:pointer`,
                      )}
                      className="zp-013"
                    >
                      <span style={{ fontSize: '14px', color: 'var(--gold-2)', width: '22px' }}>{c?.n}</span>
                      <span>{c?.title}</span>
                    </button>
                  </Fragment>
                ))}
              </aside>
              <article style={{ flex: '3 1 520px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
                {v.chapter?.film ? (
                  <>
                    <button
                      onClick={v.chapter?.playFilm}
                      aria-label={v.chapter?.filmTitle}
                      style={css(`position:relative;aspect-ratio:16/7;border:0;padding:0;border-radius:var(--r-lg);overflow:hidden;background:${v.chapter?.filmBg ?? ''};cursor:pointer`,
                      )}
                    >
                      <span style={{ position: 'absolute', inset: '0', background: 'rgba(0,0,0,.35)' }} />
                      <span
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '68px',
                          height: '68px',
                          margin: '-34px 0 0 -34px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,.18)',
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                          <path d="M8 5.5v13l11-6.5z" />
                        </svg>
                      </span>
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '18px',
                          right: '22px',
                          left: '22px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '6px',
                          color: '#fff',
                          textAlign: 'right',
                        }}
                      >
                        <span style={{ padding: '3px 10px', borderRadius: 'var(--r-sm)', background: 'rgba(0,0,0,.4)', fontSize: '14px' }}>{v.chapter?.filmMeta}</span>
                        <span style={{ fontSize: '16px', fontWeight: '600' }}>{v.chapter?.filmTitle}</span>
                      </span>
                    </button>
                  </>
                ) : null}
                {list(v.chapter?.blocks).map((b: any, $index: number) => (
                  <Fragment key={$index}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <h3 style={{ margin: '0', fontSize: 'clamp(24px,2.4vw,30px)', fontWeight: '700', lineHeight: '1.35', color: 'var(--ink)' }}>{b?.h}</h3>
                      {list(b?.ps).map((p: any, $index: number) => (
                        <Fragment key={$index}>
                          <p style={{ margin: '0', fontSize: '18px', lineHeight: '28px', color: 'var(--ink-2)', textWrap: 'pretty' }}>{p}</p>
                        </Fragment>
                      ))}
                      {b?.hasQuote ? (
                        <>
                          <blockquote
                            style={{
                              margin: '0',
                              padding: '24px',
                              borderRadius: 'var(--r-lg)',
                              background: 'var(--card)',
                              border: '1px solid var(--line)',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '16px',
                            }}
                          >
                            <span aria-hidden="true" style={{ fontFamily: 'Georgia,serif', fontSize: '48px', lineHeight: '32px', height: '24px', fontWeight: '700', color: 'var(--gold)' }}>”</span>
                            <span style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--ink-2)' }}>{b?.quote}</span>
                            <span style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600', color: 'var(--ink)' }}>{b?.cite}</span>
                          </blockquote>
                        </>
                      ) : null}
                      {b?.hasRows ? (
                        <>
                          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--card-shadow)', background: 'var(--card)' }}>
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
                                background: 'var(--card-2)',
                                fontSize: '16px',
                                color: 'var(--muted)',
                              }}
                            >
                              <span style={{ padding: '14px 20px' }}>{b?.headK}</span>
                              <span style={{ padding: '14px 20px' }}>{b?.headV}</span>
                            </div>
                            {list(b?.rows).map((r: any, $index: number) => (
                              <Fragment key={$index}>
                                <div
                                  style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
                                    borderTop: '1px solid var(--line)',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                  }}
                                >
                                  <span style={{ padding: '14px 20px', color: 'var(--ink)', fontWeight: '600' }}>{r?.k}</span>
                                  <span style={{ padding: '14px 20px', color: 'var(--ink-2)' }}>{r?.v}</span>
                                </div>
                              </Fragment>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {list(b?.after).map((p: any, $index: number) => (
                        <Fragment key={$index}>
                          <p style={{ margin: '0', fontSize: '18px', lineHeight: '28px', color: 'var(--ink-2)', textWrap: 'pretty' }}>{p}</p>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                ))}
                <div
                  style={{
                    padding: '20px 24px',
                    borderRadius: 'var(--r-md)',
                    boxShadow: 'inset 0 0 0 1px var(--line)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>المصادر</span>
                  <span style={{ fontSize: '16px', lineHeight: '24px', color: 'var(--ink-2)' }}>{v.chapter?.sources}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px' }}>
                  {v.hasPrev ? (
                    <>
                      <button
                        onClick={v.prevChapter}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '4px',
                          padding: '14px 20px',
                          borderRadius: 'var(--r-md)',
                          border: '1px solid var(--line)',
                          background: 'transparent',
                          color: 'var(--ink)',
                          cursor: 'pointer',
                          textAlign: 'right',
                        }}
                        className="zp-008"
                      >
                        <span style={{ fontSize: '14px', color: 'var(--muted)' }}>الفصل السابق</span>
                        <span style={{ fontSize: '16px' }}>{v.prevCh}</span>
                      </button>
                    </>
                  ) : null}
                  {v.hasNext ? (
                    <>
                      <button
                        onClick={v.nextChapter}
                        style={{
                          marginInlineStart: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          gap: '4px',
                          padding: '14px 20px',
                          borderRadius: 'var(--r-md)',
                          border: '0',
                          background: 'var(--gold)',
                          color: '#fff',
                          cursor: 'pointer',
                        }}
                        className="zp-002"
                      >
                        <span style={{ fontSize: '14px', opacity: '.8' }}>الفصل التالي</span>
                        <span style={{ fontSize: '16px' }}>{v.nextCh}</span>
                      </button>
                    </>
                  ) : null}
                </div>
              </article>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
