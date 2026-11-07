import { useEffect, useState, type ReactNode } from 'react';
import {
  Book02Icon,
  Building03Icon,
  Clock01Icon,
  DeliveryTruck01Icon,
  DropletIcon,
  Mosque01Icon,
  PackageIcon,
  PlayIcon,
  BookOpen01Icon,
  Factory01Icon,
  Globe02Icon,
  SecurityCheckIcon,
  ShoppingCart01Icon,
  TestTube01Icon,
  ArrowLeft01Icon,
  AlertCircleIcon,
  Store01Icon,
  ArrowRight01Icon,
  Location01Icon,
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
  Hi,
  PLAY,
  Quote,
  Tabs,
  Section,
  SectionHeader,
  type IconSvgElement,
  wrap,
} from '../ds';

const STAT_ICONS = [Clock01Icon, SecurityCheckIcon, PackageIcon, DropletIcon, TestTube01Icon];
const STATION_ICONS = [DropletIcon, DeliveryTruck01Icon, SecurityCheckIcon, PackageIcon, TestTube01Icon, Location01Icon];
/** One visual per station (site photos / product shots on the brand sand or dark frame). */
const STATION_MEDIA = [
  'var(--kaaba-img) center/cover no-repeat',
  "url('assets/news-madinah.jpg') center/cover no-repeat",
  "#1C1915 url('assets/bottle.png') center 55%/auto 120% no-repeat",
  "var(--bg-alt) url('assets/prod-pack.png') center/auto 70% no-repeat",
  "var(--bg-alt) url('assets/bottle-2.png') center/auto 80% no-repeat",
  "url('assets/news-clock-tower.jpg') center/cover no-repeat",
];
const clamp = (lines: number) => ({ display: '-webkit-box', WebkitLineClamp: lines, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' });

/** DS Hero Section as a carousel: full-bleed photo + dark brand overlay, Display xl title, Text xl copy, ONE on-colour primary action per slide, carousel dots. */
function HeroCarousel({ v, extra }: { v: V; extra?: ReactNode }) {
  const slides = [
    {
      bg: 'var(--hero-img) 30% 30%/cover no-repeat',
      title: 'زمزم .. من البئر إليك',
      text: 'من بئرٍ لم ينقطع ماؤها منذ آلاف السنين في جوف المسجد الحرام، إلى يد كل قاصدٍ لبيت الله، بمعايير تليق بمكانته.',
      cta: 'اقتنِ ماء زمزم',
      onClick: v.go?.buy,
    },
    {
      bg: "url('assets/news-clock-tower.jpg') center 35%/cover no-repeat",
      title: 'زمزم .. من مكة للعالم',
      text: 'فيلمٌ يروي رحلة السقيا التي تحمل ماء زمزم من البئر المباركة إلى ضيوف الرحمن القادمين من شتى أنحاء العالم.',
      cta: 'شاهد الفيلم',
      onClick: v.film?.global,
    },
    {
      bg: 'var(--kaaba-img) center 40%/cover no-repeat',
      title: 'زمزم .. الأصلي المعتمد',
      text: 'لا يُعبَّأ ماء زمزم إلا في منشآت المشروع ولا يُوزَّع إلا عبر قنوات معتمدة. تعرّف على علامات العبوة الأصلية وطرق التحقق منها.',
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
      {/* DS Hero (Figma 24341:267352): 491px; content bottom-anchored 32px above the carousel; title 1 line (60/72), description 2 lines (20/30), one button */}
      <div style={{ ...wrap, position: 'relative', flex: 1, minHeight: 359, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 32 }}>
        <div key={i} aria-roledescription="slide" aria-label={`${i + 1} من ${slides.length}`} style={{ maxWidth: 624, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32, animation: 'zzfade .35s ease both' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: '#FFFFFF' }}>
            {i === 0 ? (
              <h1 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 600, letterSpacing: '-1.2px', whiteSpace: 'nowrap' }}>{s.title}</h1>
            ) : (
              <h2 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 600, letterSpacing: '-1.2px', whiteSpace: 'nowrap' }}>{s.title}</h2>
            )}
            <p style={{ margin: 0, fontSize: 20, lineHeight: '30px', ...clamp(2) }}>{s.text}</p>
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
  const [film, setFilm] = useState(0);
  const [stn, setStn] = useState(0);
  const filmStyle = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('films') : null;
  const stations = list(v.stationCards);

  // Services: the site's four services + tags (DS card: icon, title, text, tags, one primary action — the same «استكشف» on every card).
  const SERVICE_EXTRA = [
    { hi: Mosque01Icon, tags: ['المسجد الحرام', 'المسجد النبوي'] },
    { hi: ShoppingCart01Icon, tags: ['للأفراد', 'تطبيق نسك'] },
    { hi: Building03Icon, tags: ['حكومية', 'خاصة وغير ربحية'] },
    { hi: Book02Icon, tags: ['تاريخ', 'معرفة'] },
  ] as const;

  const FILMS = [
    { onClick: v.film?.hagar, bg: 'var(--kaaba-img) center/cover no-repeat', icon: BookOpen01Icon, title: 'السيدة هاجر ونشأة البئر', text: 'فيلم درامي يروي قصة السيدة هاجر وتفجّر بئر زمزم في وادٍ غير ذي زرع.', tags: ['فيلم درامي', '٣:٣٧'] },
    { onClick: v.openVideo, bg: "#000 url('assets/bottle.png') center 55%/auto 125% no-repeat", icon: Factory01Icon, title: 'فيلم عن مراحل التصنيع', text: 'جولة مصوّرة في مراحل سحب ماء زمزم ومعالجته وتعبئته وفق أعلى معايير الجودة.', tags: ['برومو دعائي'] },
    { onClick: v.film?.global, bg: 'var(--hero-img) 30% 12%/cover no-repeat', icon: Globe02Icon, title: 'عالمية زمزم', text: 'كيف يصل ماء زمزم المبارك إلى ضيوف الرحمن القادمين من شتى أنحاء العالم.', tags: ['أفلام دعائية'] },
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 16 }}>
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
                <span style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)' }}>
                  <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, ...clamp(1) }}>{s?.t}</span>
                  <span style={{ fontSize: 16, lineHeight: '24px', height: 48, ...clamp(2) }}>{s?.d}</span>
                </span>
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
      {/* Story — DS section header (title + secondary action, description) above the DS Quote */}
      <Section band label="قصة زمزم - تمهيد">
        <SectionHeader
          title="قصةٌ بدأت قبل أربعة آلاف عام"
          action={<DsButton onClick={v.go?.story}>تعرّف أكثر</DsButton>}
          desc={
            <>
              {P('حين تُرك إسماعيل عليه السلام رضيعاً مع أمه هاجر في وادٍ غير ذي زرع، وسعت بين الصفا والمروة سبعاً بحثاً عن الماء، تفجّرت زمزم. ومنذ ذلك اليوم لم تنقطع.')}
              {P('طُمرت واندثر أثرها قروناً، ثم أُعيد حفرها. عظّمها العرب قبل الإسلام، وشرب منها النبي ﷺ، وحملها الصحابة إلى الآفاق، وتعاقب على خدمتها الخلفاء والملوك.')}
            </>
          }
        />
        <Quote>قال النبي ﷺ: «خيرُ ماءٍ على وجه الأرض ماءُ زمزم، فيه طعامُ الطُّعم، وشفاءُ السُّقم».</Quote>
      </Section>

      {/* Films — DGA Service Page "video" pattern: horizontal tab list (one tab per film) above a video frame with a play icon */}
      <Section label="أفلام زمزم">
        <SectionHeader title="أفلام زمزم" action={<DsButton onClick={v.go?.gallery}>عرض الكل</DsButton>} desc={P('أفلام قصيرة تروي قصة زمزم ورحلة مائه المبارك من البئر إلى العالم.')} />
        {filmStyle === 'playlist' ? (
          /* Option B — featured player + playlist (DS media list: thumbnail, title, meta; selected item highlighted) */
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'stretch' }}>
            <button key={film} type="button" onClick={FILMS[film].onClick} aria-label={'تشغيل فيلم ' + FILMS[film].title} className="zz-film" style={{ flex: '2 1 560px', minHeight: 420, position: 'relative', padding: 0, border: 0, borderRadius: 'var(--r-lg)', overflow: 'hidden', background: FILMS[film].bg, cursor: 'pointer', animation: 'zzfade .3s ease both', textAlign: 'start' }}>
              <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(28,25,21,0) 40%,rgba(28,25,21,.85))' }} />
              <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 72, height: 72, borderRadius: 9999, background: 'var(--card)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}><Hi icon={PlayIcon} size={32} /></span></span>
              <span style={{ position: 'absolute', insetInline: 24, bottom: 24, display: 'flex', flexDirection: 'column', gap: 8, color: '#FFFFFF' }}>
                <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 700 }}>{FILMS[film].title}</span>
                <span style={{ fontSize: 16, lineHeight: '24px', opacity: 0.9 }}>{FILMS[film].text}</span>
              </span>
            </button>
            <ul role="tablist" aria-label="قائمة الأفلام" style={{ flex: '1 1 320px', margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {FILMS.map((f, k) => (
                <li key={k} style={{ flex: 1, display: 'flex' }}>
                  <button type="button" role="tab" aria-selected={k === film} onClick={() => setFilm(k)} className="dga-card-link" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16, padding: 12, borderRadius: 'var(--r-lg)', border: '1px solid ' + (k === film ? 'var(--gold)' : 'var(--line)'), background: k === film ? 'var(--brand-25, var(--bg-alt))' : 'var(--card)', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'start', color: 'var(--ink)' }}>
                    <span style={{ width: 120, height: 84, flexShrink: 0, borderRadius: 'var(--r-md)', background: f.bg, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 32, height: 32, borderRadius: 9999, background: 'var(--card)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}><Hi icon={PlayIcon} size={14} /></span></span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                      <span style={{ fontSize: 16, lineHeight: '24px', fontWeight: 700 }}>{f.title}</span>
                      <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: 4 }}><Hi icon={f.icon} size={16} />{f.tags.join(' · ')}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : filmStyle === 'cards' ? (
          /* Option C — DS media cards: 16:9 thumbnail with play icon, tag + duration, title, 2-line text */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 24 }}>
            {FILMS.map((f, k) => (
              <button key={k} type="button" onClick={f.onClick} aria-label={'تشغيل فيلم ' + f.title} className="dga-card-link zz-film" style={{ ...dsCard, padding: 16, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'start', color: 'var(--ink)' }}>
                <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '16/9', borderRadius: 'var(--r-md)', overflow: 'hidden', background: f.bg }}>
                  <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(28,25,21,.2)' }} />
                  <span style={{ position: 'relative' }}><span style={{ width: 56, height: 56, borderRadius: 9999, background: 'var(--card)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}><Hi icon={PlayIcon} size={24} /></span></span>
                </span>
                <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {f.tags.map((t, j) => (<DsTag key={t} tone={j === 0 ? 'brand' : undefined}>{t}</DsTag>))}
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, ...clamp(1) }}>{f.title}</span>
                  <span style={{ fontSize: 16, lineHeight: '24px', height: 48, ...clamp(2) }}>{f.text}</span>
                </span>
              </button>
            ))}
          </div>
        ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Tabs label="أفلام زمزم" items={FILMS.map((f, k) => ({ label: (<><Hi icon={f.icon} size={20} />{f.title}</>), selected: k === film, onClick: () => setFilm(k) }))} />
            <button
              key={film}
              type="button"
              onClick={FILMS[film].onClick}
              aria-label={'تشغيل فيلم ' + FILMS[film].title}
              className="zz-film"
              style={{ position: 'relative', display: 'block', width: '100%', height: 'clamp(240px,32vw,440px)', padding: 0, border: 0, borderRadius: 'var(--r-lg)', overflow: 'hidden', background: FILMS[film].bg, cursor: 'pointer', animation: 'zzfade .3s ease both' }}
            >
              <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(28,25,21,.25)' }} />
              <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: 72, height: 72, borderRadius: 9999, background: 'var(--card)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
                  <Hi icon={PlayIcon} size={32} />
                </span>
              </span>
            </button>
          </div>
        )}
      </Section>

      {/* Journey — DS tabs (icon + station) above a media card: station tag, title, text, detail, prev/next controls */}
      <Section band label="رحلة ماء زمزم - تمهيد">
        <SectionHeader
          title="من البئر إلى يديك"
          action={<DsButton onClick={v.go?.journey}>الرحلة كاملة</DsButton>}
          desc={P('لا يصل ماء زمزم إلى ضيف الرحمن صدفةً. بين البئر واليد ستّ محطات، تمرّ فيها كل قطرة تحت رقابةٍ متصلة لا تتوقف على مدار الساعة')}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <Tabs label="محطات رحلة ماء زمزم" items={stations.map((s: any, k: number) => ({ label: (<><Hi icon={STATION_ICONS[k]} size={20} />{s?.title}</>), selected: k === stn, onClick: () => setStn(k) }))} />
          {(() => {
            const s: any = stations[stn] || {};
            const ps: string[] = s.ps || [];
            const extra = s.bullets ? ps[0] + ' ' + s.bullets.map((b: any) => b.k).join('، ') + '.' : ps[ps.length - 1];
            const nav = (dir: number, icon: IconSvgElement, label: string) => {
              const to = stn + dir;
              const off = to < 0 || to >= stations.length;
              return (
                <button type="button" aria-label={label} disabled={off} onClick={() => setStn(to)} className="dga-btn dga-btn-neutral" style={{ width: 48, height: 48, borderRadius: 'var(--r-sm)', border: '1px solid var(--line)', background: 'var(--card)', color: off ? 'var(--line)' : 'var(--ink)', cursor: off ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Hi icon={icon} size={20} />
                </button>
              );
            };
            return (
              <div role="tabpanel" key={stn} style={{ display: 'flex', flexWrap: 'wrap', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--r-xl, 16px)', overflow: 'hidden', animation: 'zzfade .3s ease both' }}>
                <div style={{ flex: '1 1 420px', minWidth: 0, boxSizing: 'border-box', padding: 32, display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--ink)' }}>
                  <span style={{ display: 'flex' }}>
                    <DsTag tone="brand">المحطة {(stn + 1).toLocaleString('ar-EG')} من {stations.length.toLocaleString('ar-EG')}</DsTag>
                  </span>
                  <span style={{ fontSize: 24, lineHeight: '32px', fontWeight: 700 }}>{s.title}</span>
                  <span style={{ fontSize: 16, lineHeight: '26px', height: 78, ...clamp(3) }}>{s.short}</span>
                  <span aria-hidden="true" style={{ height: 1, background: 'var(--line)' }} />
                  <span style={{ fontSize: 16, lineHeight: '26px', color: 'var(--ink-2)', height: 78, ...clamp(3) }}>{extra}</span>
                  <span style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', gap: 8 }}>
                    {nav(-1, ArrowRight01Icon, 'المحطة السابقة')}
                    {nav(1, ArrowLeft01Icon, 'المحطة التالية')}
                  </span>
                </div>
                <div role="img" aria-label={s.title} style={{ flex: '1 1 480px', minHeight: 400, background: STATION_MEDIA[stn] }} />
              </div>
            );
          })()}
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
                  <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, height: 56, ...clamp(2) }}>{n?.title}</span>
                  <span style={{ fontSize: 16, lineHeight: '24px', height: 48, ...clamp(2) }}>{n?.body?.[0]}</span>
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

      {/* Verify — DS section header + three DS cards (featured icon, title, text, one action) */}
      <Section band label="التحقق من المنتج الأصلي - تمهيد">
        <SectionHeader
          title="تأكّد أنك تشرب ماء زمزم الأصلي"
          action={<DsButton onClick={v.go?.verify}>عرض الكل</DsButton>}
          desc={P('ماء زمزم لا يُعبَّأ إلا في منشآت المشروع، ولا يُوزَّع إلا عبر قنوات معتمدة. أي عبوة تحمل اسم زمزم خارج هذه القنوات لا نضمن مصدرها ولا محتواها.')}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 16 }}>
          {[
            { hi: SecurityCheckIcon, t: 'تحقّق من العبوة', d: 'تعرّف على علامات العبوة الأصلية وطرق التحقق منها قبل الشراء.', cta: 'كيف تتحقق', on: v.go?.verify },
            { hi: Store01Icon, t: 'اشترِ من القنوات المعتمدة', d: 'تطبيق نسك، وصالات المغادرة في المطار، ونقاط البيع المعتمدة.', cta: 'أقرب نقطة بيع', on: v.go?.buyMap },
            { hi: AlertCircleIcon, t: 'بلّغ عن منتج مشتبه به', d: 'ساعدنا في حماية ضيوف الرحمن بالإبلاغ عن أي عبوة مشكوك فيها.', cta: 'بلّغ الآن', on: v.go?.verifyReport },
          ].map((c) => (
            <div key={c.t} style={dsCard}>
              <FeaturedIcon hi={c.hi} />
              <span style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)' }}>
                <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700 }}>{c.t}</span>
                <span style={{ fontSize: 16, lineHeight: '24px', height: 48, ...clamp(2) }}>{c.d}</span>
              </span>
              <div style={{ display: 'flex', marginTop: 'auto' }}>
                <DsButton primary onClick={c.on}>{c.cta}</DsButton>
              </div>
            </div>
          ))}
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
