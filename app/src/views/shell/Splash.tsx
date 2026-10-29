import type { V } from '../../types';

export function Splash({ v }: { v: V }) {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: '0',
          zIndex: '200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#2a2824',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '-40px',
            background: "url('assets/hero-light.jpg') center/cover no-repeat",
            filter: 'blur(28px) saturate(.7)',
            transform: 'scale(1.08)',
          }}
        />
        <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg,rgba(40,38,34,.25),rgba(20,22,24,.75))' }} />
        <div style={{ position: 'absolute', inset: '0', background: "url('assets/callig-light.svg') center/120% auto no-repeat" }} />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
            padding: '24px',
            textAlign: 'center',
            animation: 'zzfade .9s ease both',
          }}
        >
          <span style={{ fontFamily: 'var(--font-quote)', fontSize: 'clamp(22px,2.2vw,30px)', color: 'rgba(239,225,190,.75)' }}>قال رسول الله ﷺ</span>
          <p
            style={{
              margin: '0',
              fontFamily: 'var(--font-quote)',
              fontSize: 'clamp(44px,5.8vw,82px)',
              lineHeight: '1.45',
              color: '#fff',
              fontWeight: '700',
              maxWidth: '760px',
              textWrap: 'balance',
            }}
          >
            “خَيْرُ مَاءٍ عَلَى وَجْهِ الْأَرْضِ مَاءُ زَمْزَمَ”
          </p>
          <div
            style={{
              marginTop: '48px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2px solid rgba(239,225,190,.25)',
              borderTopColor: '#EFE1BE',
              animation: 'zzspin 1s linear infinite',
            }}
          />
        </div>
      </div>
    </>
  );
}
