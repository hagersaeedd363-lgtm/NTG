import { Fragment } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';

export function OrderStepsModal({ v }: { v: V }) {
  return (
    <>
      <div
        onClick={v.closeModals}
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: '120',
          background: 'rgba(0,0,0,.55)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          onClick={v.stop}
          role="dialog"
          aria-modal="true"
          aria-label="خطوات الطلب"
          style={{
            position: 'relative',
            width: '573px',
            maxWidth: '100%',
            borderRadius: '15px',
            background: '#5E5951',
            boxShadow: '0 8px 24px rgba(0,0,0,.05)',
            padding: '56px 40px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            color: '#fff',
            animation: 'zzfade .25s ease both',
          }}
        >
          <button
            onClick={v.closeModals}
            aria-label="إغلاق"
            style={{
              position: 'absolute',
              left: '18px',
              top: '16px',
              width: '32px',
              height: '32px',
              border: '0',
              background: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '37px', fontWeight: '700', lineHeight: '1.1' }}>خطوات الطلب</span>
            <span style={{ fontSize: '24px', opacity: '.7', lineHeight: '1.1' }}>للأفراد — Individuals</span>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            {list(v.orderSteps).map((s: any, $index: number) => (
              <Fragment key={$index}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingBottom: '24px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      flexShrink: '0',
                      borderRadius: '16px',
                      boxShadow: 'inset 0 0 0 1.5px #fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    {s?.n}
                  </div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '21px', lineHeight: '1.3' }}>{s?.ar}</span>
                    <span dir="ltr" style={{ fontSize: '16px', opacity: '.8', lineHeight: '1.3', textAlign: 'right' }}>
                      {s?.en}
                    </span>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div style={{ width: '100%', display: 'flex', gap: '12px' }}>
            <button
              onClick={v.closeModals}
              style={{
                flex: '1',
                height: '48px',
                borderRadius: '7.34px',
                border: '0',
                background: '#fff',
                color: '#070F25',
                fontSize: '20px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              حسنًا
            </button>
            <button
              onClick={v.stepsToBuy}
              style={{
                flex: '1',
                height: '48px',
                borderRadius: '7.34px',
                border: '1px solid rgba(255,255,255,.4)',
                background: 'transparent',
                color: '#fff',
                fontSize: '18px',
                cursor: 'pointer',
              }}
              className="zp-015"
            >
              قنوات الشراء
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
