import { useEffect, useState, type ReactNode } from 'react';
import {
  Book02Icon,
  Building03Icon,
  Clock01Icon,
  DeliveryTruck01Icon,
  DropletIcon,
  FactoryIcon,
  FilterIcon,
  Mosque01Icon,
  PackageIcon,
  SecurityCheckIcon,
  ShoppingCart01Icon,
  TestTube01Icon,
  WaterPumpIcon,
} from '@hugeicons/core-free-icons';
import { BuyBanner } from './BuyBanner';
import type { V } from '../../types';
import { css, list } from '../../lib/dc';
import { ActiveOrderCard, activeOrders } from '../../portal/ActiveOrderCard';
import { usePortal } from '../../portal/store';
import {
  AccordionItem,
  AccordionList,
  CardText,
  CarouselDots,
  CHEV_LEFT,
  CHEV_RIGHT,
  DsButton,
  DsIconButton,
  DsTag,
  dsCard,
  FeaturedIcon,
  LogoCard,
  Metric,
  PlayBadge,
  Quote,
  Section,
  SectionHeader,
  VerticalTabs,
  wrap,
} from '../ds';

const STAT_ICONS = [Clock01Icon, SecurityCheckIcon, PackageIcon, DropletIcon, TestTube01Icon];
const STATION_ICONS = [WaterPumpIcon, DeliveryTruck01Icon, FilterIcon, FactoryIcon, TestTube01Icon, Mosque01Icon];
const clamp = (lines: number) => ({ display: '-webkit-box', WebkitLineClamp: lines, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' });

/** DS Hero Section as a carousel: full-bleed photo + dark brand overlay, Display xl title, Text xl copy, ONE on-colour primary action per slide, carousel dots. */
function HeroCarousel({ v, extra }: { v: V; extra?: ReactNode }) {
  const slides = [
    {
      bg: 'var(--hero-img) 30% 30%/cover no-repeat',
      title: 'زمزم .. من قلب البئر الى قلب الانسان',
      text: 'من بئرٍ في جوف المسجد الحرام، لم ينقطع ماؤها منذ آلاف السنين، إلى يد كل قاصدٍ لبيت الله. منظومةٌ متكاملة تسحب وتعالج وتعبّئ وتوزّع ماء زمزم المبارك، بمعايير تليق بمكانته.',
      cta: 'اقتنِ ماء زمزم',
      onClick: v.go?.buy,
    },
    {
      bg: 'var(--kaaba-img) center 40%/cover no-repeat',
      title: 'عالمية زمزم .. من مكة المكرمة إلى العالم',
      text: 'من البئر المباركة في قلب المسجد الحرام، يصل ماء زمزم إلى ضيوف الرحمن القادمين من شتى أنحاء العالم. فيلمٌ يروي رحلة السقيا التي تخدمهم على مدار العام، بعنايةٍ تليق بمكانته.',
      cta: 'شاهد الفيلم',
      onClick: v.film?.global,
    },
    {
      bg: 'var(--inner-img) center/cover no-repeat',
      title: 'زمزم الأصلي .. من المصدر المعتمد إلى يدك',
      text: 'ماء زمزم لا يُعبَّأ إلا في منشآت المشروع، ولا يُوزَّع إلا عبر قنوات معتمدة. تعرّف على علامات العبوة الأصلية وطرق التحقق منها، وبلّغ عن أي منتج مشتبه به حمايةً لك ولغيرك.',
      cta: 'كيف تتحقق',
      onClick: v.go?.verify,
    },
  ];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused, slides.length]);
  const s = slides[i];
  return (
    <section
      data-screen-label="01 الرئيسية"
      aria-roledescription="carousel"
      aria-label="أبرز المحتوى"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ position: 'relative', background: s.bg, padding: '40px 0', display: 'flex', flexDirection: 'column', gap: 32, boxSizing: 'border-box', minHeight: 491, transition: 'background .4s' }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(42,34,23,.8)' }} />
      {/* DS Hero: 491px at 1440 = 40 padding + 359 content + 32 gap + 20 carousel controls + 40 padding */}
      <div style={{ ...wrap, position: 'relative', flex: 1, minHeight: 359, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
        <div key={i} aria-roledescription="slide" aria-label={`${i + 1} من ${slides.length}`} style={{ maxWidth: 624, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32, animation: 'zzfade .35s ease both' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: '#FFFFFF' }}>
            {i === 0 ? (
              <h1 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 600, letterSpacing: '-0.02em' }}>{s.title}</h1>
            ) : (
              <h2 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 600, letterSpacing: '-0.02em' }}>{s.title}</h2>
            )}
            <p style={{ margin: 0, fontSize: 20, lineHeight: '30px' }}>{s.text}</p>
          </div>
          <DsButton onColor="primary" onClick={s.onClick}>
            {s.cta}
          </DsButton>
        </div>
        {extra ? <div style={{ width: '100%', maxWidth: 624 }}>{extra}</div> : null}
      </div>
      <div style={{ position: 'relative', height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CarouselDots count={slides.length} index={i} onPick={setI} onColor compact />
      </div>
    </section>
  );
}

export function HomePage({ v }: { v: V }) {
  const hasActive = activeOrders(usePortal()).length > 0;
  const scrollPartners = (dir: number) => document.getElementById('partners-row')?.scrollBy({ left: dir * 236, behavior: 'smooth' });
  const P = (t: ReactNode) => <p style={{ margin: 0 }}>{t}</p>;
  const [station, setStation] = useState(0);
  const stations = list(v.stationCards);
  const st: any = stations[station] || {};

  // Services: the site's four services + tags (DS card: icon, title, text, tags, one primary action — the same «استكشف» on every card).
  const SERVICE_EXTRA = [
    { hi: Mosque01Icon, tags: ['المسجد الحرام', 'المسجد النبوي'] },
    { hi: ShoppingCart01Icon, tags: ['للأفراد', 'تطبيق نسك'] },
    { hi: Building03Icon, tags: ['حكومية', 'خاصة', 'غير ربحية'] },
    { hi: Book02Icon, tags: ['تاريخ', 'معرفة'] },
  ] as const;

  const FILMS = [
    { onClick: v.film?.hagar, bg: 'var(--kaaba-img) center/cover no-repeat', title: 'السيدة هاجر ونشأة البئر', text: 'فيلم درامي يروي قصة السيدة هاجر وتفجّر بئر زمزم في وادٍ غير ذي زرع.', tags: ['فيلم درامي', '٣:٣٧'] },
    { onClick: v.openVideo, bg: "#000 url('assets/bottle.png') center 55%/auto 125% no-repeat", title: 'فيلم عن مراحل التصنيع', text: 'جولة مصوّرة في مراحل سحب ماء زمزم ومعالجته وتعبئته وفق أعلى معايير الجودة.', tags: ['برومو دعائي'] },
    { onClick: v.film?.global, bg: 'var(--hero-img) 30% 12%/cover no-repeat', title: 'عالمية زمزم', text: 'كيف يصل ماء زمزم المبارك إلى ضيوف الرحمن القادمين من شتى أنحاء العالم.', tags: ['أفلام دعائية'] },
  ];

  return (
    <>
      <HeroCarousel v={v} extra={hasActive ? <ActiveOrderCard /> : null} />

      {/* DS About Us Section: header (title + action + description), then the metric cards across the full content width */}
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {list(v.homeStats).map((s: any, i: number) => (
            <Metric key={i} hi={STAT_ICONS[i % STAT_ICONS.length]} value={s?.v} label={s?.l} />
          ))}
        </div>
      </Section>

      {/* DS Services Section: band, header, cards (icon, title, text, tags, primary + secondary actions) */}
      <Section band label="خدماتنا">
        <SectionHeader title="خدمات سقيا زمزم" desc={P('خدمات المشروع لضيوف الرحمن والأفراد والجهات، من السقيا في الحرمين الشريفين إلى المعرفة الموثّقة عن ماء زمزم.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
          {list(v.services).map((s: any, i: number) => {
            const x = SERVICE_EXTRA[i % SERVICE_EXTRA.length];
            return (
              <div key={i} style={dsCard}>
                <FeaturedIcon hi={x.hi} />
                <CardText title={s?.t} text={s?.d} />
                <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {x.tags.map((t, k) => (
                    <DsTag key={t} tone={k === 0 ? 'brand' : k === 1 ? 'info' : undefined}>
                      {t}
                    </DsTag>
                  ))}
                </span>
                <div style={{ display: 'flex', marginTop: 'auto' }}>
                  <DsButton primary onClick={s?.onClick} ariaLabel={'استكشف ' + s?.t}>
                    استكشف
                  </DsButton>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <BuyBanner v={v} />

      {/* Story: DS section header + actions, with the DS Quote component (no free-form image block) */}
      <Section band label="قصة زمزم - تمهيد">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))', alignItems: 'center', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
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
              <DsButton onClick={v.film?.hagar}>شاهد الفيلم (٣:٣٧)</DsButton>
            </div>
          </div>
          <Quote>قال النبي ﷺ: «خيرُ ماءٍ على وجه الأرض ماءُ زمزم، فيه طعامُ الطُّعم، وشفاءُ السُّقم».</Quote>
        </div>
      </Section>

      {/* Films: DS image cards (image 250, title, text, tags, primary action) */}
      <Section label="أفلام زمزم">
        <SectionHeader title="أفلام زمزم" action={<DsButton onClick={v.go?.gallery}>عرض الكل</DsButton>} desc={P('أفلام قصيرة تروي قصة زمزم ورحلة مائه المبارك من البئر إلى العالم.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {FILMS.map((f) => (
            <div key={f.title} style={dsCard}>
              <button type="button" onClick={f.onClick} aria-label={'تشغيل ' + f.title} style={{ position: 'relative', display: 'block', height: 250, padding: 0, border: 0, borderRadius: 'var(--r-md)', overflow: 'hidden', background: f.bg, cursor: 'pointer' }}>
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayBadge size={56} />
                </span>
              </button>
              <CardText title={f.title} text={f.text} />
              <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {f.tags.map((t, k) => (
                  <DsTag key={t} tone={k === 0 ? 'brand' : undefined}>
                    {t}
                  </DsTag>
                ))}
              </span>
              <div style={{ display: 'flex', marginTop: 'auto' }}>
                <DsButton primary onClick={f.onClick}>
                  شاهد الفيلم
                </DsButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Journey storytelling: DS Vertical Tab List (six stations) + the selected station in a DS card */}
      <Section band label="رحلة ماء زمزم - تمهيد">
        <SectionHeader
          title="من البئر إلى يديك"
          action={<DsButton onClick={v.go?.journey}>الرحلة كاملة</DsButton>}
          desc={P('لا يصل ماء زمزم إلى ضيف الرحمن صدفةً. بين البئر واليد ستّ محطات، تمرّ فيها كل قطرة تحت رقابةٍ متصلة لا تتوقف على مدار الساعة')}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'stretch' }}>
          <div style={{ flex: '0 1 280px', minWidth: 220 }}>
            <VerticalTabs
              label="محطات رحلة ماء زمزم"
              value={station}
              onChange={setStation}
              items={stations.map((s: any) => (
                <>
                  <span style={{ color: 'var(--gold-2)', fontWeight: 600, minWidth: 20 }}>{s?.n}</span>
                  {s?.title}
                </>
              ))}
            />
          </div>
          <div role="tabpanel" aria-label={st?.title} key={station} style={{ ...dsCard, flex: '1 1 480px', padding: 24, animation: 'zzfade .25s ease both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <FeaturedIcon hi={STATION_ICONS[station % STATION_ICONS.length]} size={56} />
              <DsTag tone="brand">
                المحطة {st?.n} من {(stations.length || 6).toLocaleString('ar-EG')}
              </DsTag>
            </div>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 700, color: 'var(--ink)' }}>{st?.h || st?.title}</span>
              <span style={{ fontSize: 16, lineHeight: '24px', color: 'var(--ink)' }}>{st?.short}</span>
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 'auto' }}>
              {station < stations.length - 1 ? (
                <DsButton primary onClick={() => setStation(station + 1)}>
                  المحطة التالية
                </DsButton>
              ) : (
                <DsButton primary onClick={v.go?.journey}>
                  الرحلة كاملة
                </DsButton>
              )}
              {station > 0 ? <DsButton onClick={() => setStation(station - 1)}>المحطة السابقة</DsButton> : null}
            </div>
          </div>
        </div>
      </Section>

      {/* DS Articles and News Section: three cards (image 250, title, text, primary «قراءة المزيد») */}
      <Section label="آخر الأخبار">
        <SectionHeader title="آخر الأخبار" action={<DsButton onClick={v.go?.news}>عرض الكل</DsButton>} desc={P('تابع أحدث أخبار سقيا زمزم ومبادراتها وإنجازاتها.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {list(v.latestNews)
            .slice(0, 3)
            .map((n: any, k: number) => (
              <div key={k} style={dsCard}>
                <span role="img" aria-label="" style={css(`display:block;width:100%;height:250px;border-radius:var(--r-md);background:${n?.img ?? ''}`)} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)' }}>
                  <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, ...clamp(2) }}>{n?.title}</span>
                  <span style={{ fontSize: 16, lineHeight: '24px', ...clamp(4) }}>{n?.body?.[0]}</span>
                </span>
                <div style={{ display: 'flex', marginTop: 'auto' }}>
                  <DsButton primary onClick={n?.onClick}>
                    قراءة المزيد
                  </DsButton>
                </div>
              </div>
            ))}
        </div>
      </Section>

      {/* DS Partner Section: title, then image-only logo cards (98×100, logo area 66×68) between the arrow buttons */}
      <Section label="الشركاء والجهات ذات العلاقة">
        <h2 style={{ margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 700, color: 'var(--ink)' }}>الشركاء والجهات ذات العلاقة</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <DsIconButton d={CHEV_RIGHT} label="السابق" onClick={() => scrollPartners(1)} />
          <div id="partners-row" style={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'center', gap: 20, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {list(v.stakeholders).map((s: any, k: number) => (
              <LogoCard key={k} onClick={v.go?.aboutStake} label={s?.name}>
                <span role="img" aria-label="" style={css(`display:var(--show-l);width:66px;height:68px;background:${s?.logoLBg ?? ''}`)} />
                <span role="img" aria-label="" style={css(`display:var(--show-d);width:66px;height:68px;background:${s?.logoDBg ?? ''}`)} />
              </LogoCard>
            ))}
            {[
              ['assets/partner-1.png', 'مطار الملك عبدالعزيز الدولي'],
              ['assets/partner-2.png', 'كارفور'],
              ['assets/partner-3.png', 'لولو هايبرماركت'],
            ].map(([src, alt]) => (
              <LogoCard key={src} label={alt} onClick={v.go?.buyMap}>
                <img src={src} alt={alt} style={{ width: 66, height: 68, objectFit: 'contain', filter: 'var(--logo-filter)' }} />
              </LogoCard>
            ))}
          </div>
          <DsIconButton d={CHEV_LEFT} label="التالي" onClick={() => scrollPartners(-1)} />
        </div>
      </Section>

      <Section band label="التحقق من المنتج الأصلي - تمهيد">
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

      <Section label="الأسئلة الشائعة - مختصر">
        <SectionHeader title="الأسئلة الشائعة" action={<DsButton onClick={v.go?.faq}>عرض الكل</DsButton>} desc={P('إجابات مباشرة لأكثر ما يُسأل عنه.')} />
        <AccordionList>
          {list(v.topFaq).map((f: any, k: number) => (
            <AccordionItem key={k} first={k === 0} q={f?.q} a={f?.a} open={f?.open} onClick={f?.onClick} />
          ))}
        </AccordionList>
      </Section>
    </>
  );
}
