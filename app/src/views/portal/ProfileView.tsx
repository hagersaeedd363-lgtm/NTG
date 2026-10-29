import { Fragment } from 'react';
import type { V } from '../../types';
import { LockTag, NafathTag, Tag } from '../../portal/ui';
import { css, list } from '../../lib/dc';

export function ProfileView({ v }: { v: V }) {
  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          animation: 'zzfade .3s ease both',
        }}
      >
        {v.ox?.hasMissing ? (
          <>
            <div
              role="alert"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 24px',
                minHeight: '72px',
                boxSizing: 'border-box',
                borderRadius: '12px',
                border: '1px solid #F3B3AE',
                backgroundColor: '#FFF1F2',
              }}
            >
              <span style={{ color: '#B42318', display: 'flex', flexShrink: '0' }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 7v5M12 16.5h.01" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <span style={{ flex: '1', minWidth: '0', fontSize: '14px', fontWeight: '600', lineHeight: '24px', color: '#B42318' }}>
                حسابك جديد، أكمل بياناتك لتوثيقه هذا حساب جديد. أكمل البيانات المطلوبة أدناه لتتم مراجعتها وتوثيق حسابك. يمكنك أيضاً بدء طلب جديد وتعبئتها أثناء
                الخطوات.
              </span>
            </div>
          </>
        ) : null}
        {v.ox?.inReview ? (
          <>
            <div
              role="alert"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                minHeight: '56px',
                boxSizing: 'border-box',
                borderRadius: '12px',
                border: '1px solid #F0D78C',
                background: '#FFF6DB',
              }}
            >
              <span style={{ color: '#8A5A00', display: 'flex', flexShrink: '0' }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 7v5M12 16.5h.01" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <span style={{ flex: '1', minWidth: '0', fontSize: '14px', fontWeight: '600', lineHeight: '24px', color: '#8A5A00' }}>
                حسابك قيد المراجعة استلمنا بياناتك وهي قيد المراجعة من الجهة المختصة، ولم يكتمل توثيق الحساب بعد. يمكنك إنشاء أول طلب أثناء انتظار الموافقة.
              </span>
            </div>
          </>
        ) : null}
        {v.ox?.unverified ? (
          <>
            <div
              role="alert"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                minHeight: '56px',
                boxSizing: 'border-box',
                borderRadius: '12px',
                border: '1px solid #F3B3AE',
                background: '#FFEBEC',
              }}
            >
              <span style={{ color: '#B42318', display: 'flex', flexShrink: '0' }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 7v5M12 16.5h.01" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <span style={{ flex: '1', minWidth: '0', fontSize: '14px', fontWeight: '600', lineHeight: '24px', color: '#B42318' }}>
                حسابك بانتظار التحقق لا يمكنك إنشاء طلبات قبل التحقق من حسابك.
              </span>
            </div>
          </>
        ) : null}
        <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
          <aside
            style={{
              flex: '1 1 360px',
              minWidth: '0',
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative', width: '64px', height: '64px' }}>
                <span
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--gold-soft)',
                    boxShadow: '0 0 0 4px var(--card),0 0 0 5px var(--gold-3)',
                    color: 'var(--gold-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <span
                    role="img"
                    aria-label="الصورة الشخصية"
                    style={css(`position:absolute;inset:0;background-size:cover;background-position:center;background-image:${v.ox?.photoCss ?? ''}`)}
                  />
                  {v.ox?.noPhoto ? (
                    <>
                      <svg
                        width="32"
                        height="32"
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
                    </>
                  ) : null}
                </span>
                <button
                  onClick={v.ox?.pickPhoto}
                  aria-label="تغيير الصورة الشخصية"
                  title="تغيير الصورة"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    insetInlineStart: '-4px',
                    width: '32px',
                    height: '32px',
                    padding: '0',
                    borderRadius: '50%',
                    border: '2px solid var(--card)',
                    background: '#996C2E',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="zp-002"
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
                    aria-hidden="true"
                  >
                    <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
                    <circle cx="12" cy="13" r="3.5" />
                  </svg>
                </button>
                <input type="file" accept="image/png,image/jpeg,image/webp" ref={v.ox?.photoRef} onChange={v.ox?.onPhoto} style={{ display: 'none' }} />
              </div>
              {v.ox?.hasPhoto ? (
                <>
                  <button
                    onClick={v.ox?.removePhoto}
                    style={{
                      border: '0',
                      background: 'transparent',
                      padding: '0',
                      height: '24px',
                      color: 'var(--muted)',
                      fontSize: '13px',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                    }}
                    className="zp-013"
                  >
                    إزالة الصورة
                  </button>
                </>
              ) : null}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '0' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>
                {v.ox?.userName}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', width: '100%' }}>
                {v.ox?.badge?.naf ? (
                  <NafathTag>{v.ox?.badge?.t}</NafathTag>
                ) : (
                  <Tag tone="gold" dot>
                    {v.ox?.badge?.t}
                  </Tag>
                )}
                {v.ox?.profDone ? (
                  <Tag tone="ok" dot>
                    ملفك مكتمل
                  </Tag>
                ) : null}
              </div>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'var(--line)' }} />
            <button
              onClick={v.ox?.editProfile}
              style={css(
                `width:100%;height:48px;border-radius:12px;border:1px solid ${v.ox?.editBd ?? ''};background:${v.ox?.editBg ?? ''};color:${v.ox?.editFg ?? ''};font-size:16px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px`,
              )}
              className="zp-028"
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
                aria-hidden="true"
              >
                <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3z" />
                <path d="M14.5 7.5l3 3" />
              </svg>
              {v.ox?.editLabel}
            </button>
            <button
              onClick={v.ox?.openPwEdit}
              style={{
                width: '100%',
                height: '48px',
                borderRadius: '12px',
                border: '1px solid var(--line)',
                background: 'transparent',
                color: 'var(--ink)',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
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
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              {v.ox?.pwBtn}
            </button>
          </aside>
          <div style={{ flex: '3 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {list(v.ox?.profSecs).map((sec: any, $index: number) => (
              <Fragment key={$index}>
                <section style={{ background: 'var(--card)', borderRadius: '24px', boxShadow: 'var(--card-shadow)', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', borderBottom: '1px solid var(--line)' }}>
                    <span
                      style={{
                        width: '40px',
                        height: '40px',
                        flexShrink: '0',
                        borderRadius: '12px',
                        background: 'var(--card-2)',
                        boxShadow: 'inset 0 0 0 1px var(--line)',
                        color: 'var(--gold-2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d={sec?.icon} />
                      </svg>
                    </span>
                    <h2 style={{ margin: '0', fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: 'var(--ink)' }}>{sec?.title}</h2>
                    {sec?.note ? (
                      <span style={{ marginInlineStart: 'auto' }}>
                        <LockTag>{sec?.note}</LockTag>
                      </span>
                    ) : null}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}>
                    {list(sec?.rows).map((pr: any, $index: number) => (
                      <Fragment key={$index}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0',
                            padding: '16px 24px',
                            minWidth: '0',
                            borderBottom: '1px solid var(--line)',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', lineHeight: '24px', color: 'var(--muted)' }}>
                            {pr?.k}
                            {pr?.lock ? (
                              <>
                                <span style={{ display: 'flex', opacity: '.8' }}>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                  >
                                    <rect x="5" y="11" width="14" height="9" rx="2" />
                                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                                  </svg>
                                </span>
                              </>
                            ) : null}
                          </span>
                          <span
                            dir={pr?.dir}
                            style={css(
                              `font-size: 14px; font-weight: 600; line-height: 24px; color: ${pr?.color ?? ''}; text-align: right; overflow-wrap: anywhere`,
                            )}
                          >
                            {pr?.v}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </section>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
