import type { V } from '../../types';
import { ImageSlot } from '../../components/ImageSlot';

export function QualityPage({ v }: { v: V }) {
  return (
    <>
      <section data-screen-label="06 الجودة والسلامة" style={{ background: 'var(--bg)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexWrap: 'wrap', gap: '48px' }}>
          <div style={{ flex: '1 1 440px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px' }}>
            <span
              style={{
                display: 'inline-flex',
                padding: '6px 14px',
                borderRadius: '36px',
                background: 'rgba(130,130,130,.15)',
                boxShadow: 'inset 0 0 0 1px var(--ink)',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '1.08',
                color: 'var(--ink)',
              }}
            >
              دورنا
            </span>
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>قسم جودة المياه</h2>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.85', color: 'var(--ink-2)' }}>
              قسم جودة المياه هو الجهة المعنيّة بضمان جودة وسلامة ماء زمزم المبارك في جميع مراحله. يرتكز عمله على منظومة علمية تشمل الرقابة والتحليل والتطوير
              المستمر، وتطبيق الممارسات والمعايير المعتمدة من الجهات الوطنية والدولية المختصة بجودة مياه الشرب.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 440px',
              background: 'var(--card)',
              borderRadius: '24px',
              boxShadow: 'var(--card-shadow)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)', paddingBottom: '10px' }}>مهامنا الرئيسة</span>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '12px 0',
                borderTop: '1px solid var(--line)',
                fontSize: '17px',
                lineHeight: '1.65',
                color: 'var(--ink-2)',
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  flexShrink: '0',
                  borderRadius: '50%',
                  background: 'var(--gold-soft)',
                  color: 'var(--gold-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              مراقبة جودة المياه في جميع مراحل الإنتاج والمعالجة والتعبئة والنقل والتوزيع.
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '12px 0',
                borderTop: '1px solid var(--line)',
                fontSize: '17px',
                lineHeight: '1.65',
                color: 'var(--ink-2)',
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  flexShrink: '0',
                  borderRadius: '50%',
                  background: 'var(--gold-soft)',
                  color: 'var(--gold-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              متابعة أداء وكفاءة أنظمة التنقية والتعقيم.
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '12px 0',
                borderTop: '1px solid var(--line)',
                fontSize: '17px',
                lineHeight: '1.65',
                color: 'var(--ink-2)',
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  flexShrink: '0',
                  borderRadius: '50%',
                  background: 'var(--gold-soft)',
                  color: 'var(--gold-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              الإشراف الفني على المختبر المركزي وإدارة برامج الرصد والتحقق والتحليل الدوري.
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '12px 0',
                borderTop: '1px solid var(--line)',
                fontSize: '17px',
                lineHeight: '1.65',
                color: 'var(--ink-2)',
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  flexShrink: '0',
                  borderRadius: '50%',
                  background: 'var(--gold-soft)',
                  color: 'var(--gold-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              إعداد التقارير الفنية ومؤشرات الأداء ورفعها لدعم القرارات التشغيلية.
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '12px 0',
                borderTop: '1px solid var(--line)',
                fontSize: '17px',
                lineHeight: '1.65',
                color: 'var(--ink-2)',
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  flexShrink: '0',
                  borderRadius: '50%',
                  background: 'var(--gold-soft)',
                  color: 'var(--gold-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              قيادة مبادرات التحسين المستمر ورفع كفاءة أنظمة الجودة والتشغيل.
            </div>
          </div>
        </div>
      </section>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-deep)', color: '#fff', padding: '96px 0' }}>
        <div
          style={{
            position: 'absolute',
            width: '1000px',
            height: '900px',
            left: '-420px',
            top: '-300px',
            background: 'radial-gradient(closest-side,rgba(104,93,73,.9),rgba(0,0,0,0))',
            opacity: '.6',
          }}
        />
        <div
          style={{
            position: 'relative',
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'stretch' }}>
            <div style={{ flex: '1 1 460px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
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
                ٢٤ ساعة يومياً
              </span>
              <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.6vw,48px)', fontWeight: '700', lineHeight: '1.15' }}>المختبر المركزي</h2>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,.82)' }}>
                يعمل المختبر على مدار ٢٤ ساعة يومياً، ضمن إجراءات تشغيلية معتمدة تتماشى مع المعايير الصادرة عن الهيئة السعودية للمواصفات والمقاييس والجودة
                (SASO).
              </p>
              <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.8', color: 'rgba(255,255,255,.82)' }}>
                يضم فريقاً فنياً متخصصاً في الكيمياء والميكروبيولوجي، يعمل بنظام المناوبات لضمان استمرارية التحليل والمراقبة والتوثيق دون انقطاع، ويطبّق إجراءات
                التشغيل القياسية (SOPs) وممارسات السلامة الحيوية والمخبرية المعتمدة، وفق معايير الاعتماد الدولية (ISO/IEC 17025)
              </p>
            </div>
            <div style={{ flex: '1 1 380px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: '1fr 1fr', gap: '12px', minHeight: '340px' }}>
              <div style={{ gridRow: '1/3', position: 'relative', borderRadius: '0 120px 0 0', overflow: 'hidden', background: 'rgba(255,255,255,.06)' }}>
                <ImageSlot id="lab-main" shape="rect" placeholder="صورة المختبر المركزي" />
              </div>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: 'rgba(255,255,255,.06)' }}>
                <ImageSlot id="lab-team" shape="rect" placeholder="الفريق الفني" />
              </div>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: 'rgba(255,255,255,.06)' }}>
                <ImageSlot id="lab-devices" shape="rect" placeholder="أجهزة التحليل" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: '24px',
              borderTop: '1px solid rgba(255,255,255,.15)',
              paddingTop: '36px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: 'clamp(40px,4.4vw,60px)', lineHeight: '1.08' }}>١٥٬٩٢٠</span>
              <span style={{ fontSize: '17px', color: 'rgba(255,255,255,.75)' }}>عدد العينات — ٢٠٢٤م</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: 'clamp(40px,4.4vw,60px)', lineHeight: '1.08' }}>٨٨٬٨٠٥</span>
              <span style={{ fontSize: '17px', color: 'rgba(255,255,255,.75)' }}>عدد التحاليل — ٢٠٢٤م</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: 'clamp(40px,4.4vw,60px)', lineHeight: '1.08' }}>—</span>
              <span style={{ fontSize: '17px', color: 'rgba(255,255,255,.75)' }}>نسبة التغيّر في التحاليل</span>
            </div>
          </div>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)' }}>أرقام المختبر — محدَّث حتى سبتمبر ٢٠٢٥م</span>
        </div>
      </section>
      <section style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 clamp(16px,2.5vw,32px)', display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <h2 style={{ margin: '0', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: '700', lineHeight: '1.2', color: 'var(--ink)' }}>أقسام المختبر</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--card-2)' }}>
                <ImageSlot id="lab-reception" shape="rect" placeholder="صورة استقبال العينات" />
              </div>
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>استقبال العينات</span>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                  البوابة الأولى للتحليل. يتحقق من هوية العينة ومطابقتها لنموذج الطلب، ويفحص سلامة العبوة ودرجة الحرارة ووسيلة النقل، ويسجّل البيانات إلكترونياً
                  في نظام إدارة المعلومات المخبرية (LIMS) لضمان تتبّع العينة من لحظة استلامها حتى إصدار النتيجة.
                </p>
              </div>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--card-2)' }}>
                <ImageSlot id="lab-physical" shape="rect" placeholder="صورة القسم الفيزيائي" />
              </div>
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>القسم الفيزيائي</span>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                  يقيس الخصائص الفيزيائية التي تُعدّ المؤشر الأول على جودة المياه: درجة الحرارة، والعكارة، والتوصيلية الكهربائية، والرقم الهيدروجيني، واللون
                  والرائحة. نتائجه مرجع أساسي لتفسير أي تغيّر يُلاحظ في النظام التشغيلي.
                </p>
              </div>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--card-2)' }}>
                <ImageSlot id="lab-chemistry" shape="rect" placeholder="صورة قسم الكيمياء" />
              </div>
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>قسم الكيمياء</span>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>ينقسم إلى فرعين:</p>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                  <strong style={{ color: 'var(--ink)' }}>الكيمياء العضوية:</strong> تحليل المركبات العضوية التي قد توجد بنسب ضئيلة جداً، باستخدام أجهزة
                  الكروماتوغرافيا الغازية والسائلة (GC/MS و HPLC)
                </p>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                  <strong style={{ color: 'var(--ink)' }}>الكيمياء غير العضوية:</strong> قياس تراكيز العناصر والمعادن الذائبة — الصوديوم والكالسيوم والمغنيسيوم
                  والبوتاسيوم والكلوريد والكبريتات والنترات — إضافةً إلى الرقم الهيدروجيني والتوصيلية الكهربائية وإجمالي المواد الصلبة الذائبة، باستخدام مطياف
                  الامتصاص الذري (AAS) ومحللات الأيونات.
                </p>
              </div>
            </div>
            <div
              style={{
                background: 'var(--card)',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--card-2)' }}>
                <ImageSlot id="lab-micro" shape="rect" placeholder="صورة قسم الميكروبيولوجي" />
              </div>
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '21px', fontWeight: '700', color: 'var(--ink)' }}>قسم الميكروبيولوجي</span>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.75', color: 'var(--ink-2)' }}>
                  خط الدفاع الأخير. يراقب السلامة الميكروبية للمياه عبر الكشف عن البكتيريا الممرضة بتقنيات الترشيح الغشائي، وتحليل الفطريات والخمائر، والرصد
                  الميكروبي العام، ويستخدم التحليل الجزيئي (PCR) عند الحاجة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div
          style={{
            maxWidth: '1520px',
            margin: '0 auto',
            padding: '0 clamp(16px,2.5vw,32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h2 style={{ margin: '0', fontSize: 'clamp(26px,2.8vw,36px)', fontWeight: '700', color: 'var(--ink)' }}>التحقق الخارجي</h2>
            <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.8', color: 'var(--ink-2)' }}>
              يجري المختبر مقارنات وتحقّقاً خارجياً (اختبارات الكفاءة)، بالتعاون مع مختبرات معتمدة محلياً ودولياً، بما يعزز موثوقية النتائج ودقة الأداء.
            </p>
          </div>
          <button
            onClick={v.go?.certs}
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
            الاعتمادات والشهادات
          </button>
        </div>
      </section>
    </>
  );
}
