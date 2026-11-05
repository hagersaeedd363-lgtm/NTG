import { Fragment } from 'react';
import { BuyBanner } from './BuyBanner';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';
import { ActiveOrderCard, activeOrders } from '../../portal/ActiveOrderCard';
import { usePortal } from '../../portal/store';
import { ICON, Icon } from '../../portal/ui';
import { AccordionItem, AccordionList, CardText, CHEV_LEFT, CHEV_RIGHT, DsButton, DsIconButton, DsTag, dsCard, FeaturedIcon, Metric, PLAY, PlayBadge, Section, SectionHeader } from '../ds';

/** Icons for the metric cards (pumping, sterilising, coolers, taps, lab tests). */
const STAT_ICONS = [
  ICON.clock,
  'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
  ICON.box,
  'M5 10h10a4 4 0 0 1 4 4v1M9 10V6h4M19 18v2',
  'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3',
];
const STATION_ICON = 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z';
const SERVICE_ICONS = [ICON.shield, ICON.user, ICON.bld, ICON.doc];

export function HomePage({ v }: { v: V }) {
  const hasActive = activeOrders(usePortal()).length > 0;
  const scrollPartners = (dir: number) => document.getElementById('partners-row')?.scrollBy({ left: dir * 320, behavior: 'smooth' });

  return (
    <>
      {/* DS hero: content (Display xl semibold 60/72, Text xl 20/30, primary button) beside the image */}
      <section data-screen-label="01 الرئيسية" style={{ background: 'var(--bg-alt)', padding: '40px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32 }}>
          <div style={{ flex: '1 1 520px', maxWidth: 624, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'var(--ink)' }}>
              <DsTag>من مكة المكرمة</DsTag>
              <h1 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 600 }}>زمزم .. من قلب البئر الى قلب الانسان</h1>
              <p style={{ margin: 0, fontSize: '20px', lineHeight: '30px', fontWeight: 400 }}>
                من بئرٍ في جوف المسجد الحرام، لم ينقطع ماؤها منذ آلاف السنين، إلى يد كل قاصدٍ لبيت الله. منظومةٌ متكاملة تسحب وتعالج وتعبّئ وتوزّع ماء زمزم
                المبارك، بمعايير تليق بمكانته.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <DsButton primary onClick={v.go?.buy}>
                اقتنِ ماء زمزم
              </DsButton>
              <DsButton onClick={v.film?.global} icon={PLAY} ariaLabel="تشغيل فيلم عالمية زمزم">
                عالمية زمزم — فيلم دعائي
              </DsButton>
            </div>
            {hasActive ? <ActiveOrderCard /> : null}
          </div>
          <div style={{ flex: '1 1 480px', position: 'relative', minHeight: 440, alignSelf: 'stretch', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--hero-img) 30% 12%/cover no-repeat' }}>
            {v.desktop ? (
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: 24,
                  bottom: 0,
                  width: 200,
                  height: 352,
                  background: "url('assets/bottle.png') 50% 57.37%/102.613% 152.005% no-repeat,url('assets/bottle-2.png') 50% 57.37%/102.613% 152.005% no-repeat",
                  filter: 'drop-shadow(-15px 6px 15px rgba(0,0,0,.25))',
                }}
              />
            ) : null}
          </div>
        </div>
      </section>

      <Section>
        <span role="img" aria-label="شعار مشروع سقيا زمزم" style={{ display: 'block', width: 'min(320px,70vw)', aspectRatio: '488/116.8', background: "url('assets/logo-lg-gold.svg') right center/contain no-repeat" }} />
        <SectionHeader
          tag="مشروع خادم الحرمين الشريفين لسقيا زمزم"
          title="الجهة الرسمية المعنيّة بماء زمزم"
          action={<DsButton onClick={v.go?.about}>تعرّف أكثر</DsButton>}
          desc={
            <>
              <p style={{ margin: 0 }}>
                مشروع خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز لسقيا زمزم هو الجهة المسؤولة عن سحب ماء زمزم المبارك من البئر، ومعالجته وتعبئته وتوزيعه على
                ضيوف الرحمن داخل الحرمين الشريفين وخارجهما.
              </p>
              <p style={{ margin: 0 }}>
                نعمل ضمن منظومة وطنية تضم عدداً من الجهات ذات العلاقة، وتحت إشرافٍ يضمن أن يصل الماء إلى قاصديه بالنقاء الذي خرج به من البئر، ودون أن يُضاف إليه
                أو يُنتقص منه شيء.
              </p>
            </>
          }
        />
        <button
          type="button"
          onClick={v.openVideo}
          aria-label="تشغيل فيلم مراحل التصنيع"
          style={{ position: 'relative', width: '100%', maxWidth: 800, aspectRatio: '950/563', border: 0, padding: 0, borderRadius: 'var(--r-lg)', background: '#000', overflow: 'hidden', cursor: 'pointer' }}
        >
          <span style={{ position: 'absolute', inset: 0, background: "url('assets/bottle.png') center 55%/auto 115% no-repeat", opacity: 0.35, filter: 'grayscale(1) brightness(.6)' }} />
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PlayBadge />
          </span>
          <span style={{ position: 'absolute', bottom: 16, right: 16 }}>
            <DsTag onColor>فيلم عن مراحل التصنيع</DsTag>
          </span>
        </button>
      </Section>

      <section data-screen-label="قصة زمزم - تمهيد" style={{ background: 'var(--bg-alt)', padding: '40px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 32 }}>
          <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
            <SectionHeader
              tag="قصة زمزم"
              title="قصةٌ بدأت قبل أربعة آلاف عام"
              desc={
                <>
                  <p style={{ margin: 0 }}>
                    حين تُرك إسماعيل عليه السلام رضيعاً مع أمه هاجر في وادٍ غير ذي زرع، وسعت بين الصفا والمروة سبعاً بحثاً عن الماء، تفجّرت زمزم. ومنذ ذلك اليوم لم
                    تنقطع.
                  </p>
                  <p style={{ margin: 0 }}>
                    طُمرت واندثر أثرها قروناً، ثم أُعيد حفرها. عظّمها العرب قبل الإسلام، وشرب منها النبي ﷺ، وحملها الصحابة إلى الآفاق، وتعاقب على خدمتها الخلفاء
                    والملوك.
                  </p>
                </>
              }
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <DsButton primary onClick={v.go?.story}>
                تعرّف أكثر
              </DsButton>
              <DsButton onClick={v.film?.hagar} icon={PLAY}>
                شاهد الفيلم (٣:٣٧)
              </DsButton>
            </div>
          </div>
          <div style={{ flex: '1 1 420px', minHeight: 340, borderRadius: 'var(--r-lg)', background: 'var(--kaaba-img) center/cover no-repeat' }} />
        </div>
      </section>

      <Section label="أفلام زمزم">
        <SectionHeader tag="المكتبة المرئية" title="أفلام زمزم" action={<DsButton onClick={v.go?.gallery}>كل المواد المرئية</DsButton>} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {[
            { onClick: v.film?.hagar, label: 'تشغيل فيلم السيدة هاجر ونشأة البئر', bg: 'var(--kaaba-img) center/cover no-repeat', title: 'السيدة هاجر ونشأة البئر', tags: ['فيلم درامي', '٣:٣٧'], big: true },
            { onClick: v.openVideo, label: 'تشغيل فيلم مراحل التصنيع', bg: "#000 url('assets/bottle.png') center 55%/auto 125% no-repeat", title: 'فيلم عن مراحل التصنيع', tags: ['برومو دعائي'] },
            { onClick: v.film?.global, label: 'تشغيل فيلم عالمية زمزم', bg: 'var(--hero-img) 30% 12%/cover no-repeat', title: 'عالمية زمزم', tags: ['أفلام دعائية'] },
          ].map((f) => (
            <button key={f.title} type="button" onClick={f.onClick} aria-label={f.label} className="dga-card-link" style={{ ...dsCard, flex: f.big ? '2 1 520px' : '1 1 300px', cursor: 'pointer', fontFamily: 'inherit' }}>
              <span style={{ position: 'relative', display: 'block', height: f.big ? 320 : 200, borderRadius: 'var(--r-md)', overflow: 'hidden', background: f.bg }}>
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayBadge size={f.big ? 64 : 48} />
                </span>
              </span>
              <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {f.tags.map((t) => (
                  <DsTag key={t}>{t}</DsTag>
                ))}
              </span>
              <CardText title={f.title} />
            </button>
          ))}
        </div>
      </Section>

      <Section label="بالأرقام">
        <SectionHeader
          tag="بالأرقام"
          title="أثر يمتد بخدمة ماء زمزم"
          action={<DsButton onClick={v.go?.stats}>كل المؤشرات</DsButton>}
          desc={<p style={{ margin: 0 }}>نعمل يوميًا على إيصال بركة ماء زمزم عبر منظومة متكاملة تضمن النقاء، وتحفظ الأصالة، وتُيسّر الوصول.</p>}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32 }}>
          {list(v.homeStats).map((s: any, i: number) => (
            <Metric key={i} icon={STAT_ICONS[i % STAT_ICONS.length]} value={s?.v} label={s?.l} />
          ))}
        </div>
      </Section>

      <Section band label="رحلة ماء زمزم - تمهيد">
        <SectionHeader
          tag="رحلة ماء زمزم"
          title="من البئر إلى يديك"
          action={<DsButton onClick={v.go?.journey}>الرحلة كاملة</DsButton>}
          desc={<p style={{ margin: 0 }}>لا يصل ماء زمزم إلى ضيف الرحمن صدفةً. بين البئر واليد ستّ محطات، تمرّ فيها كل قطرة تحت رقابةٍ متصلة لا تتوقف على مدار الساعة</p>}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
          {list(v.stationCards).map((s: any, $index: number) => (
            <Fragment key={$index}>
              <button type="button" onClick={v.go?.journey} className="dga-card-link" style={{ ...dsCard, cursor: 'pointer', fontFamily: 'inherit' }}>
                <FeaturedIcon d={STATION_ICON} />
                <CardText title={s?.title} text={s?.short} />
                <DsTag>المحطة {s?.n}</DsTag>
              </button>
            </Fragment>
          ))}
        </div>
      </Section>

      <Section label="خدماتنا">
        <SectionHeader tag="خدماتنا" title="خدمات سقيا زمزم" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
          {list(v.services).map((s: any, i: number) => (
            <Fragment key={i}>
              <div style={dsCard}>
                <FeaturedIcon d={SERVICE_ICONS[i % SERVICE_ICONS.length]} />
                <CardText title={s?.t} text={s?.d} />
                <DsTag>{s?.n}</DsTag>
                <div style={{ display: 'flex', marginTop: 'auto' }}>
                  <DsButton onClick={s?.onClick}>{s?.cta}</DsButton>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Section>

      <BuyBanner />

      <Section label="قنوات توفر أخرى">
        <SectionHeader
          title="قنوات توفر أخرى"
          action={<DsButton onClick={v.go?.buy}>اعرض أقرب نقطة بيع</DsButton>}
          desc={<p style={{ margin: 0 }}>يتوفر ماء زمزم في صالات المغادرة في مطار الملك عبدالعزيز الدولي أو في نقاط بيع مختارة مثل كارفور ولولو هايبرماركت.</p>}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {[
            ['assets/partner-1.png', 'مطار الملك عبدالعزيز الدولي'],
            ['assets/partner-2.png', 'كارفور'],
            ['assets/partner-3.png', 'لولو هايبرماركت'],
          ].map(([src, alt]) => (
            <div key={src} style={{ ...dsCard, flex: '0 0 auto', width: 220, height: 112, alignItems: 'center', justifyContent: 'center' }}>
              <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: 72, objectFit: 'contain', filter: 'var(--logo-filter)' }} />
            </div>
          ))}
        </div>
      </Section>

      <Section band label="التحقق من المنتج الأصلي - تمهيد">
        <SectionHeader
          tag="التحقق من المنتج الأصلي"
          title="تأكّد أنك تشرب ماء زمزم الأصلي"
          desc={<p style={{ margin: 0 }}>ماء زمزم لا يُعبَّأ إلا في منشآت المشروع، ولا يُوزَّع إلا عبر قنوات معتمدة. أي عبوة تحمل اسم زمزم خارج هذه القنوات لا نضمن مصدرها ولا محتواها.</p>}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <DsButton primary onClick={v.go?.verify}>
            كيف تتحقق
          </DsButton>
          <DsButton onClick={v.go?.verifyReport}>بلّغ عن منتج مشتبه به</DsButton>
        </div>
      </Section>

      <Section band label="آخر الأخبار">
        <SectionHeader tag="المركز الإعلامي" title="آخر الأخبار" action={<DsButton onClick={v.go?.news}>كل الأخبار</DsButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {list(v.latestNews).map((n: any, $index: number) => (
            <Fragment key={$index}>
              <div style={dsCard}>
                <span style={css(`position:relative;display:block;width:100%;height:250px;border-radius:var(--r-md);background:${n?.img ?? ''}`)} />
                <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                  <DsTag>{n?.cat}</DsTag>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: '14px', lineHeight: '20px', color: 'var(--muted)' }}>
                    <Icon d="M4 5h16v15H4zM4 10h16M9 3v4M15 3v4" size={16} />
                    {n?.dateH}
                  </span>
                </span>
                <CardText title={n?.title} />
                <div style={{ display: 'flex', marginTop: 'auto' }}>
                  <DsButton primary onClick={n?.onClick}>
                    اقرأ الخبر
                  </DsButton>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Section>

      <Section label="الشركاء والجهات ذات العلاقة">
        <SectionHeader tag="منظومة وطنية" title="الشركاء والجهات ذات العلاقة" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <DsIconButton d={CHEV_RIGHT} label="السابق" onClick={() => scrollPartners(1)} />
          <div id="partners-row" style={{ flex: 1, minWidth: 0, display: 'flex', gap: 16, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {list(v.stakeholders).map((s: any, $index: number) => (
              <Fragment key={$index}>
                <button
                  type="button"
                  onClick={v.go?.aboutStake}
                  aria-label={s?.name}
                  title={s?.name}
                  className="dga-card-link"
                  style={{ ...dsCard, flex: '0 0 auto', width: 168, height: 112, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <span role="img" aria-label="" style={css(`display:var(--show-l);width:${s?.mw ?? ''};height:${s?.mh ?? ''};max-width:100%;background:${s?.logoLBg ?? ''}`)} />
                  <span role="img" aria-label="" style={css(`display:var(--show-d);width:${s?.mw ?? ''};height:${s?.mh ?? ''};max-width:100%;background:${s?.logoDBg ?? ''}`)} />
                </button>
              </Fragment>
            ))}
          </div>
          <DsIconButton d={CHEV_LEFT} label="التالي" onClick={() => scrollPartners(-1)} />
        </div>
      </Section>

      <Section band label="الأسئلة الشائعة - مختصر">
        <SectionHeader tag="الأسئلة الشائعة" title="إجابات مباشرة لأكثر ما يُسأل عنه" action={<DsButton onClick={v.go?.faq}>كل الأسئلة</DsButton>} />
        <AccordionList>
          {list(v.topFaq).map((f: any, i: number) => (
            <AccordionItem key={i} first={i === 0} q={f?.q} a={f?.a} open={f?.open} onClick={f?.onClick} />
          ))}
        </AccordionList>
      </Section>
    </>
  );
}
