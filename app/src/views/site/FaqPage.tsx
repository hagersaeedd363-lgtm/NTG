import { Fragment } from 'react';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';

export function FaqPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="13 الأسئلة الشائعة" style={{ background: 'var(--bg)', padding: '64px 0 96px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ position: 'relative' }}>
            <input
              data-fillbg="1"
              value={v.faqQ ?? ''}
              onInput={v.onFaqQ}
              placeholder="ابحث عن سؤال"
              aria-label="ابحث عن سؤال"
              style={{
                width: '100%',
                height: '46px',
                padding: '0 48px 0 18px',
                borderRadius: '14px',
                border: '1px solid var(--line)',
                background: 'var(--card)',
                color: 'var(--ink)',
                fontSize: '17px',
                outline: 'none',
                boxShadow: 'var(--card-shadow)',
              }}
              className="zp-017"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              style={{ position: 'absolute', right: '18px', top: '18px', color: 'var(--muted)' }}
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="M20 20l-4.2-4.2" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {list(v.faqChips).map((c: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  onClick={c?.onClick}
                  style={css(
                    `height:40px;padding:0 6px 0 16px;border-radius:36px;border:1px solid ${c?.bd ?? ''};background:${c?.bg ?? ''};color:${c?.fg ?? ''};font-size:15px;cursor:pointer;display:flex;align-items:center;gap:10px`,
                  )}
                >
                  <span>{c?.label}</span>
                  <span
                    style={{
                      height: '28px',
                      padding: '0 10px',
                      borderRadius: '36px',
                      background: 'rgba(127,127,127,.18)',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c?.count}
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
          {list(v.faqGroups).map((g: any, $index: number) => (
            <Fragment key={$index}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <h2 style={{ margin: '0', fontSize: '24px', fontWeight: '700', color: 'var(--ink)' }}>{g?.title}</h2>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>{g?.count}</span>
                </div>
                {list(g?.items).map((f: any, $index: number) => (
                  <Fragment key={$index}>
                    <div style={{ borderRadius: '15px 9px 15px 15px', background: 'var(--card)', boxShadow: 'var(--card-shadow)', overflow: 'hidden' }}>
                      <button
                        onClick={f?.onClick}
                        aria-expanded={f?.open}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: '0',
                          padding: '22px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                          textAlign: 'right',
                          cursor: 'pointer',
                          color: 'var(--ink)',
                          fontSize: '19px',
                          lineHeight: '1.45',
                        }}
                      >
                        <span>{f?.q}</span>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          style={css(`flex-shrink:0;transition:transform .25s;transform:${f?.rot ?? ''}`)}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      {f?.open ? (
                        <>
                          <p
                            style={{
                              margin: '0',
                              padding: '0 20px 22px',
                              fontSize: '17px',
                              lineHeight: '1.8',
                              color: 'var(--ink-2)',
                              animation: 'zzfade .2s ease both',
                            }}
                          >
                            {f?.a}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </Fragment>
                ))}
              </div>
            </Fragment>
          ))}
          {v.faqEmpty ? (
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
                لم نجد سؤالاً مطابقاً.{' '}
                <a href="#contact" onClick={v.go?.contact}>
                  تواصل معنا
                </a>
              </div>
            </>
          ) : null}
          <div
            style={{
              marginTop: '24px',
              borderRadius: '24px',
              background: 'var(--bg-alt)',
              padding: '32px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '22px', fontWeight: '700', color: 'var(--ink)' }}>لم تجد إجابتك؟</span>
              <span style={{ fontSize: '17px', color: 'var(--ink-2)' }}>نستقبل استفساراتك وملاحظاتك وبلاغاتك.</span>
            </div>
            <button
              onClick={v.go?.contact}
              style={{
                height: '44px',
                padding: '0 28px',
                borderRadius: '9px',
                border: '1px solid rgba(255,255,255,.2)',
                background: '#996C2E',
                color: '#fff',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              className="zp-002"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
