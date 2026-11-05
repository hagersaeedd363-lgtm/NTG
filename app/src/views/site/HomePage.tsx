import type { ReactNode } from 'react';
import { BuyBanner } from './BuyBanner';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';
import { ActiveOrderCard, activeOrders } from '../../portal/ActiveOrderCard';
import { usePortal } from '../../portal/store';
import { ICON } from '../../portal/ui';
import { AccordionItem, AccordionList, CardText, Carousel, CHEV_LEFT, CHEV_RIGHT, DsButton, DsIconButton, DsTag, dsCard, FeaturedIcon, LogoCard, Metric, PLAY, PlayBadge, Section, SectionHeader, wrap } from '../ds';

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
  const scrollPartners = (dir: number) => document.getElementById('partners-row')?.scrollBy({ left: dir * 236, behavior: 'smooth' });
  const P = (t: ReactNode) => <p style={{ margin: 0 }}>{t}</p>;

  return (
    <>
      {/* DS Hero Section: full-bleed photo with the dark brand overlay; Display xl semibold 60/72 + Text xl 20/30 in white, on-color buttons */}
      <section data-screen-label="01 الرئيسية" style={{ position: 'relative', background: 'var(--hero-img) 30% 30%/cover no-repeat', padding: '40px 0' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(42,34,23,.8)' }} />
        <div style={{ ...wrap, position: 'relative', minHeight: 411, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 32 }}>
          <div style={{ maxWidth: 624, display: 'flex', flexDirection: 'column', gap: 24, color: '#FFFFFF' }}>
            <h1 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 600, letterSpacing: '-0.02em' }}>زمزم .. من قلب البئر الى قلب الانسان</h1>
            <p style={{ margin: 0, fontSize: 20, lineHeight: '30px', fontWeight: 400 }}>
              من بئرٍ في جوف المسجد الحرام، لم ينقطع ماؤها منذ آلاف السنين، إلى يد كل قاصدٍ لبيت الله. منظومةٌ متكاملة تسحب وتعالج وتعبّئ وتوزّع ماء زمزم المبارك،
              بمعايير تليق بمكانته.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <DsButton onColor="primary" onClick={v.go?.buy}>
              اقتنِ ماء زمزم
            </DsButton>
            <DsButton onColor="secondary" onClick={v.film?.global} icon={PLAY} ariaLabel="تشغيل فيلم عالمية زمزم">
              عالمية زمزم — فيلم دعائي
            </DsButton>
          </div>
          {hasActive ? (
            <div style={{ width: '100%', maxWidth: 624 }}>
              <ActiveOrderCard />
            </div>
          ) : null}
        </div>
      </section>

      {/* DS About Us Section: section header (title + action, description) and the metric cards */}
      <Section label="من نحن">
        <SectionHeader
          title="الجهة الرسمية المعنيّة بماء زمزم"
          action={<DsButton onClick={v.go?.about}>تعرّف أكثر</DsButton>}
          desc={
            <>
              {P('مشروع خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز لسقيا زمزم هو الجهة المسؤولة عن سحب ماء زمزم المبارك من البئر، ومعالجته وتعبئته وتوزيعه على ضيوف الرحمن داخل الحرمين الشريفين وخارجهما.')}
              {P('نعمل ضمن منظومة وطنية تضم عدداً من الجهات ذات العلاقة، وتحت إشرافٍ يضمن أن يصل الماء إلى قاصديه بالنقاء الذي خرج به من البئر، ودون أن يُضاف إليه أو يُنتقص منه شيء.')}
            </>
          }
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
          {list(v.homeStats).map((s: any, i: number) => (
            <div key={i} style={{ flex: '0 1 224px', minWidth: 180 }}>
              <Metric icon={STAT_ICONS[i % STAT_ICONS.length]} value={s?.v} label={s?.l} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <DsButton onClick={v.go?.stats}>كل المؤشرات</DsButton>
        </div>
      </Section>

      {/* DS Services Section: band, section header, carousel of service cards (icon, title, text, tags, actions) */}
      <Section band label="خدماتنا">
        <SectionHeader title="خدمات سقيا زمزم" />
        <Carousel label="خدمات سقيا زمزم">
          {list(v.services).map((s: any, i: number) => (
            <div key={i} style={{ ...dsCard, flex: '0 0 320px', scrollSnapAlign: 'start' }}>
              <FeaturedIcon d={SERVICE_ICONS[i % SERVICE_ICONS.length]} />
              <CardText title={s?.t} text={s?.d} />
              {s?.n ? (
                <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  <DsTag>{s?.n}</DsTag>
                </span>
              ) : null}
              <div style={{ display: 'flex', gap: 16, marginTop: 'auto' }}>
                <DsButton primary onClick={s?.onClick}>
                  {s?.cta}
                </DsButton>
              </div>
            </div>
          ))}
        </Carousel>
      </Section>

      <BuyBanner />

      <Section band label="قصة زمزم - تمهيد">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 32 }}>
          <div style={{ flex: '1 1 480px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
            <SectionHeader
              title="قصةٌ بدأت قبل أربعة آلاف عام"
              desc={
                <>
                  {P('حين تُرك إسماعيل عليه السلام رضيعاً مع أمه هاجر في وادٍ غير ذي زرع، وسعت بين الصفا والمروة سبعاً بحثاً عن الماء، تفجّرت زمزم. ومنذ ذلك اليوم لم تنقطع.')}
                  {P('طُمرت واندثر أثرها قروناً، ثم أُعيد حفرها. عظّمها العرب قبل الإسلام، وشرب منها النبي ﷺ، وحملها الصحابة إلى الآفاق، وتعاقب على خدمتها الخلفاء والملوك.')}
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
          <div role="img" aria-label="الكعبة المشرفة" style={{ flex: '1 1 420px', minHeight: 340, borderRadius: 'var(--r-lg)', background: 'var(--kaaba-img) center/cover no-repeat' }} />
        </div>
      </Section>

      <Section label="أفلام زمزم">
        <SectionHeader title="أفلام زمزم" action={<DsButton onClick={v.go?.gallery}>كل المواد المرئية</DsButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {[
            { onClick: v.film?.hagar, label: 'تشغيل فيلم السيدة هاجر ونشأة البئر', bg: 'var(--kaaba-img) center/cover no-repeat', title: 'السيدة هاجر ونشأة البئر', tags: ['فيلم درامي', '٣:٣٧'] },
            { onClick: v.openVideo, label: 'تشغيل فيلم مراحل التصنيع', bg: "#000 url('assets/bottle.png') center 55%/auto 125% no-repeat", title: 'فيلم عن مراحل التصنيع', tags: ['برومو دعائي'] },
            { onClick: v.film?.global, label: 'تشغيل فيلم عالمية زمزم', bg: 'var(--hero-img) 30% 12%/cover no-repeat', title: 'عالمية زمزم', tags: ['أفلام دعائية'] },
          ].map((f) => (
            <button key={f.title} type="button" onClick={f.onClick} aria-label={f.label} className="dga-card-link" style={{ ...dsCard, cursor: 'pointer', fontFamily: 'inherit' }}>
              <span style={{ position: 'relative', display: 'block', height: 250, borderRadius: 'var(--r-md)', overflow: 'hidden', background: f.bg }}>
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayBadge size={56} />
                </span>
              </span>
              <CardText title={f.title} />
              <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {f.tags.map((t) => (
                  <DsTag key={t}>{t}</DsTag>
                ))}
              </span>
            </button>
          ))}
        </div>
      </Section>

      <Section band label="رحلة ماء زمزم - تمهيد">
        <SectionHeader
          title="من البئر إلى يديك"
          action={<DsButton onClick={v.go?.journey}>الرحلة كاملة</DsButton>}
          desc={P('لا يصل ماء زمزم إلى ضيف الرحمن صدفةً. بين البئر واليد ستّ محطات، تمرّ فيها كل قطرة تحت رقابةٍ متصلة لا تتوقف على مدار الساعة')}
        />
        <Carousel label="محطات رحلة ماء زمزم">
          {list(v.stationCards).map((s: any, $index: number) => (
            <button key={$index} type="button" onClick={v.go?.journey} className="dga-card-link" style={{ ...dsCard, flex: '0 0 320px', scrollSnapAlign: 'start', cursor: 'pointer', fontFamily: 'inherit' }}>
              <FeaturedIcon d={STATION_ICON} />
              <CardText title={s?.title} text={s?.short} />
              <span style={{ display: 'flex' }}>
                <DsTag>المحطة {s?.n}</DsTag>
              </span>
            </button>
          ))}
        </Carousel>
      </Section>

      <Section label="التحقق من المنتج الأصلي - تمهيد">
        <SectionHeader
          title="تأكّد أنك تشرب ماء زمزم الأصلي"
          desc={P('ماء زمزم لا يُعبَّأ إلا في منشآت المشروع، ولا يُوزَّع إلا عبر قنوات معتمدة. أي عبوة تحمل اسم زمزم خارج هذه القنوات لا نضمن مصدرها ولا محتواها.')}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <DsButton primary onClick={v.go?.verify}>
            كيف تتحقق
          </DsButton>
          <DsButton onClick={v.go?.verifyReport}>بلّغ عن منتج مشتبه به</DsButton>
        </div>
      </Section>

      {/* DS Articles and News Section: three cards (image 250, title, text, primary «قراءة المزيد») */}
      <Section band label="آخر الأخبار">
        <SectionHeader title="آخر الأخبار" action={<DsButton onClick={v.go?.news}>عرض الكل</DsButton>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {list(v.latestNews)
            .slice(0, 3)
            .map((n: any, $index: number) => (
              <div key={$index} style={dsCard}>
                <span role="img" aria-label="" style={css(`display:block;width:100%;height:250px;border-radius:var(--r-md);background:${n?.img ?? ''}`)} />
                <CardText title={n?.title} text={[n?.cat, n?.dateH].filter(Boolean).join(' · ')} />
                <div style={{ display: 'flex', marginTop: 'auto' }}>
                  <DsButton primary onClick={n?.onClick}>
                    قراءة المزيد
                  </DsButton>
                </div>
              </div>
            ))}
        </div>
      </Section>

      {/* DS Partner Section: title, then logo cards (image only) between the neutral arrow buttons */}
      <Section label="الشركاء والجهات ذات العلاقة">
        <h2 style={{ margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 700, color: 'var(--ink)' }}>الشركاء والجهات ذات العلاقة</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <DsIconButton d={CHEV_RIGHT} label="السابق" onClick={() => scrollPartners(1)} />
          <div id="partners-row" style={{ flex: 1, minWidth: 0, display: 'flex', gap: 20, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {list(v.stakeholders).map((s: any, $index: number) => (
              <LogoCard key={$index} onClick={v.go?.aboutStake} label={s?.name}>
                <span role="img" aria-label="" style={css(`display:var(--show-l);width:${s?.mw ?? ''};height:${s?.mh ?? ''};max-width:180px;max-height:68px;background:${s?.logoLBg ?? ''}`)} />
                <span role="img" aria-label="" style={css(`display:var(--show-d);width:${s?.mw ?? ''};height:${s?.mh ?? ''};max-width:180px;max-height:68px;background:${s?.logoDBg ?? ''}`)} />
              </LogoCard>
            ))}
          </div>
          <DsIconButton d={CHEV_LEFT} label="التالي" onClick={() => scrollPartners(-1)} />
        </div>
      </Section>

      {/* Other availability channels — same logo-card pattern */}
      <Section label="قنوات توفر أخرى">
        <SectionHeader
          title="قنوات توفر أخرى"
          action={<DsButton onClick={v.go?.buy}>اعرض أقرب نقطة بيع</DsButton>}
          desc={P('يتوفر ماء زمزم في صالات المغادرة في مطار الملك عبدالعزيز الدولي أو في نقاط بيع مختارة مثل كارفور ولولو هايبرماركت.')}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {[
            ['assets/partner-1.png', 'مطار الملك عبدالعزيز الدولي'],
            ['assets/partner-2.png', 'كارفور'],
            ['assets/partner-3.png', 'لولو هايبرماركت'],
          ].map(([src, alt]) => (
            <LogoCard key={src} label={alt}>
              <img src={src} alt={alt} style={{ maxWidth: 180, maxHeight: 68, objectFit: 'contain', filter: 'var(--logo-filter)' }} />
            </LogoCard>
          ))}
        </div>
      </Section>

      <Section band label="الأسئلة الشائعة - مختصر">
        <SectionHeader title="الأسئلة الشائعة" action={<DsButton onClick={v.go?.faq}>عرض الكل</DsButton>} desc={P('إجابات مباشرة لأكثر ما يُسأل عنه.')} />
        <AccordionList>
          {list(v.topFaq).map((f: any, i: number) => (
            <AccordionItem key={i} first={i === 0} q={f?.q} a={f?.a} open={f?.open} onClick={f?.onClick} />
          ))}
        </AccordionList>
      </Section>
    </>
  );
}
