import { useEffect, useRef, useState, type ReactNode } from 'react';
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

/**
 * Hero (reference home): DGA Hero Section with a photo background + 80% overlay, 624px text block (title → 24 → text → 32 → one
 * on-colour action), three slides switched by the Carousel Controls only (no auto-rotation, WCAG 2.2.2), and a horizontal video
 * card (thumbnail + play + title) that opens the journey film.
 */
function HeroCarousel({ v, extra }: { v: V; extra?: ReactNode }) {
  const slides = [
    {
      bg: 'var(--hero-img) 30% 30%/cover no-repeat',
      title: 'زمزم .. من قلب البئر إلى قلب الإنسان',
      text: 'من بئرٍ في جوف المسجد الحرام، لم ينقطع ماؤها منذ آلاف السنين، إلى يد كل قاصدٍ لبيت الله.',
      cta: 'اقتن زمزم',
      onClick: v.go?.buy,
    },
    {
      bg: "url('assets/da38.jpg') 50% 78%/cover no-repeat",
      title: 'قصةٌ بدأت قبل أربعة آلاف عام',
      text: 'حين تُرك إسماعيل عليه السلام رضيعاً مع أمه هاجر في وادٍ غير ذي زرع، وسعت بين الصفا والمروة سبعاً بحثاً عن الماء، تفجّرت زمزم. ومنذ ذلك اليوم لم تنقطع.',
      cta: 'قصة زمزم',
      onClick: v.go?.story,
    },
    {
      bg: 'var(--kaaba-img) center 40%/cover no-repeat',
      title: 'اقتنِ ماء زمزم من القنوات الرسمية',
      text: 'ماء زمزم متاح عبر قنوات رسمية معتمدة، مع شحن موثوق داخل المملكة وخارجها. اختر ما يناسبك.',
      cta: 'اقتنِ ماء زمزم',
      onClick: v.go?.buy,
    },
  ];
  const [i, setI] = useState(0);
  const s = slides[i];
  return (
    <section
      data-screen-label="01 الرئيسية"
      aria-roledescription="carousel"
      aria-label="القسم الرئيسي"
      style={{ position: 'relative', overflow: 'hidden', background: '#2A2217', padding: '40px 0', display: 'flex', flexDirection: 'column', gap: 32, boxSizing: 'border-box', minHeight: 560 }}
    >
      {/* Slide photos stacked; the current one fades in */}
      {slides.map((x, k) => (
        <div key={k} aria-hidden="true" style={{ position: 'absolute', inset: 0, background: x.bg, opacity: k === i ? 1 : 0, transition: 'opacity .6s ease' }} />
      ))}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(42,34,23,.8)' }} />
      <div style={{ ...wrap, position: 'relative', flex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
        <div style={{ flex: '1 1 480px', maxWidth: 624, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div key={i} aria-roledescription="slide" aria-label={`${i + 1} / ${slides.length}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 32, animation: 'zzfade .35s ease both' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: '#FFFFFF' }}>
              {i === 0 ? (
                <h1 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-1.2px' }}>{s.title}</h1>
              ) : (
                <h2 style={{ margin: 0, fontSize: 'clamp(36px,4.2vw,60px)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-1.2px' }}>{s.title}</h2>
              )}
              <p style={{ margin: 0, fontSize: 20, lineHeight: '30px' }}>{s.text}</p>
            </div>
            <DsButton onColor="primary" onClick={s.onClick}>
              {s.cta}
            </DsButton>
          </div>
          {extra ? <div style={{ width: '100%' }}>{extra}</div> : null}
        </div>
        {/* Video card (DGA Card, horizontal): thumbnail + play badge + title */}
        <button
          type="button"
          onClick={v.openVideo}
          aria-haspopup="dialog"
          className="dga-card-link"
          style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8, paddingInlineEnd: 20, border: '1px solid rgba(255,255,255,.24)', borderRadius: 'var(--r-lg)', background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(6px)', color: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'start' }}
        >
          <span style={{ position: 'relative', width: 112, height: 72, borderRadius: 'var(--r-md)', background: "url('assets/da38.jpg') center 40%/cover no-repeat", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ width: 32, height: 32, borderRadius: 9999, background: '#FFFFFF', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Hi icon={PlayIcon} size={16} />
            </span>
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <b style={{ fontSize: 16, lineHeight: '24px' }}>فيديو رحلة ماء زمزم</b>
            <span style={{ fontSize: 14, lineHeight: '20px', opacity: 0.85 }}>من البئر إلى يديك</span>
          </span>
        </button>
      </div>
      <div
        role="group"
        aria-label="شرائح القسم الرئيسي"
        onKeyDown={(e) => {
          const d = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0; /* RTL: left = next */
          if (!d) return;
          e.preventDefault();
          const n = (i + d + slides.length) % slides.length;
          setI(n);
          (e.currentTarget.querySelectorAll('button')[n] as HTMLButtonElement | undefined)?.focus();
        }}
        style={{ position: 'relative', height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CarouselDots count={slides.length} index={i} onPick={setI} onColor compact />
      </div>
    </section>
  );
}

/** Story chapters (reference home): title + one-line lead; the open chapter links to the chapter. */
const SAGA = [
  ['نشأة البئر', 'قصة هاجر وإسماعيل عليهما السلام، وتفجّر الماء، وبناء البيت'],
  ['البئر: الموقع والوصف', 'أين تقع، وما حدودها، ومن أين تُغذّى، وكيف تبدو من الداخل'],
  ['زمزم قبل الإسلام', 'جرهم، وردم البئر، وإعادة حفرها على يد عبدالمطلب'],
  ['زمزم في الإسلام', 'مكانة الماء، وما ورد فيه، وموضعه في سيرة النبي ﷺ'],
  ['تاريخ سقاية الحجاج', 'من عبد المطلب إلى العباس، في العصر الإسلامي، فما قبل العهد السعودي'],
  ['زمزم في العهد السعودي', 'الزمازمة وسقاية الحجاج، ثم نقلة الصنابير ومحطة التنقية ومشروع الملك عبدالله لسقيا زمزم'],
];
/** FAQ (reference home). */
const HOME_FAQ = [
  ['ما هو ماء زمزم؟', 'ماء زمزم ماءٌ مبارك ينبع من بئر زمزم داخل المسجد الحرام بمكة المكرمة، وقد تفجّر بأمر الله عند موضع قدمي إسماعيل عليه السلام قبل نحو أربعة آلاف عام، ولم ينقطع منذ ذلك الحين.'],
  ['هل تُضاف مواد كيميائية إلى ماء زمزم؟', 'لا. يُعقَّم ماء زمزم بالأشعة فوق البنفسجية، وهي تقنية لا تتطلب إضافة أي مواد كيميائية، ولا تُغيّر لون الماء أو طعمه أو رائحته.'],
  ['كيف يُعقَّم ماء زمزم؟', 'تمرّ المياه عبر مرشّحات تحجز الشوائب والرمال، ثم عبر مواسير غير قابلة للصدأ حتى تصل لخزانات مغلقة، ثم تُسلَّط عليها الأشعة فوق البنفسجية التي تدمّر الحمض النووي للجراثيم والفيروسات بكفاءة تصل إلى ٩٩٫٧٧٪.'],
  ['من أين أشتري ماء زمزم؟', 'عبر القنوات الرسمية المعتمدة الموضّحة في صفحة «اقتنِ ماء زمزم». نوصي بعدم الشراء من أي قناة غير مدرجة في القائمة.'],
  ['كيف أتحقق أن العبوة أصلية؟', 'اشترِ من القنوات المعتمدة فقط، وتحقّق من مطابقة العبوة والغطاء والملصق للشكل المعتمد، ومن وجود اسم الجهة ورقم التشغيلة وتاريخ الإنتاج والانتهاء. التفاصيل في صفحة «التحقق من المنتج الأصلي».'],
];
const STAT_LABELS = ['ساعة ضخٌّ متواصل من البئر عبر مضختين', 'كفاءة التعقيم بالأشعة فوق البنفسجية', 'حافظة لماء زمزم في المسجد الحرام وساحاته', 'صنبوراً لسقيا ماء زمزم في المسجد الحرام والساحات المحيطة', 'تحليل مخبري خلال عام واحد'];
const STAT_VALUES = ['24', '99.77%', '+30,000', '1,073', '+116,000'];

export function HomePage({ v }: { v: V }) {
  const hasActive = activeOrders(usePortal()).length > 0;
  const scrollPartners = (dir: number) => document.getElementById('partners-row')?.scrollBy({ left: dir * 236, behavior: 'smooth' });
  const P = (t: ReactNode) => <p style={{ margin: 0 }}>{t}</p>;
  const [film, setFilm] = useState(0);
  const [stn, setStn] = useState(0);
  const [chap, setChap] = useState(0);
  /* Journey scroll story (reference home): on desktop, when the tabs + card fit the screen, they stay pinned while the page
     scrolls JSTEP px per station, so scrolling moves through the stations; a tab or arrow click scrolls to that station. */
  const JSTEP = 220;
  const jPin = useRef<HTMLDivElement>(null);
  const jBox = useRef<HTMLDivElement>(null);
  const [jLayout, setJLayout] = useState<{ pinned: boolean; top?: number; h?: number }>({ pinned: false });
  const N = list(v.stationCards).length || 6;
  useEffect(() => {
    let tick = false;
    const layout = () => {
      const box = jBox.current;
      if (!box) return;
      const bh = box.offsetHeight;
      const pinned = matchMedia('(min-width: 961px)').matches && innerHeight >= bh + 140;
      const top = Math.min(200, Math.max(96, Math.round((innerHeight - bh) / 2) + 32));
      setJLayout(pinned ? { pinned, top, h: bh + N * JSTEP } : { pinned: false });
    };
    const onScroll = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        tick = false;
        const pin = jPin.current, box = jBox.current;
        if (!pin || !box || box.style.position !== 'sticky') return;
        const p = (parseFloat(box.style.top) - pin.getBoundingClientRect().top) / JSTEP;
        setStn(Math.max(0, Math.min(N - 1, Math.floor(p))));
      });
    };
    layout();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', layout);
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', layout); };
  }, [N]);
  const jPick = (k: number) => {
    k = Math.max(0, Math.min(N - 1, k));
    setStn(k);
    const pin = jPin.current;
    if (!jLayout.pinned || !pin || jLayout.top === undefined) return;
    const y = scrollY + pin.getBoundingClientRect().top - jLayout.top + k * JSTEP + (k ? JSTEP / 3 : 0);
    scrollTo({ top: y, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  const [faq, setFaq] = useState(0);
  const filmStyle = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('films') : null;
  const stations = list(v.stationCards);

  // Services: the site's four services + tags (DS card: icon, title, text, tags, one primary action — the same «استكشف» on every card).
  const SERVICE_EXTRA = [
    { hi: Mosque01Icon, t: 'السقيا في الحرمين الشريفين', d: 'تعبئة وتوزيع ماء زمزم على قاصدي الحرمين الشريفين عبر الحافظات والصنابير والعربات', tags: ['المسجد الحرام', 'المسجد النبوي'], go: v.go?.journey },
    { hi: ShoppingCart01Icon, t: 'اقتناء ماء زمزم للأفراد', d: 'إتاحة عبوات ماء زمزم للأفراد عبر القنوات الرسمية المعتمدة', tags: ['الأفراد', 'القنوات الرسمية'], go: v.go?.buy },
    { hi: Building03Icon, t: 'طلبات الجهات', d: 'استقبال طلبات الجهات الحكومية والخاصة وغير الربحية عبر منصة الطلبات الإلكترونية', tags: ['الجهات', 'طلب إلكتروني'], go: v.go?.buy },
    { hi: Book02Icon, t: 'المحتوى والمعرفة', d: 'مرجع رقمي موثّق عن ماء زمزم تاريخاً وعلماً، متاحٌ للباحثين والإعلاميين والجمهور', tags: ['الباحثون', 'الإعلاميون'], go: v.go?.story },
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
          action={<DsButton onClick={v.go?.about}>عرض الكل</DsButton>}
          desc={
            <>
              {P('مشروع خادم الحرمين الشريفين الملك عبدالله بن عبدالعزيز لسقيا زمزم هو الجهة المسؤولة عن سحب ماء زمزم المبارك من البئر، ومعالجته وتعبئته وتوزيعه على ضيوف الرحمن داخل الحرمين الشريفين وخارجهما.')}
              {P('نعمل ضمن منظومة وطنية تضم عدداً من الجهات ذات العلاقة، وتحت إشرافٍ يضمن أن يصل الماء إلى قاصديه بالنقاء الذي خرج به من البئر، ودون أن يُضاف إليه أو يُنتقص منه شيء.')}
            </>
          }
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 16 }}>
          {STAT_VALUES.map((val, i) => (
            <Metric key={i} hi={STAT_ICONS[i % STAT_ICONS.length]} value={val} label={STAT_LABELS[i]} />
          ))}
        </div>
      </Section>

      {/* DS Services Section: band, header, cards (icon, title, text, tags, primary + secondary actions) */}
      <Section band label="خدماتنا">
        <SectionHeader title="خدماتنا" desc={P('خدمات السقيا والاقتناء وطلبات الجهات والمحتوى المعرفي عن ماء زمزم')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
          {SERVICE_EXTRA.map((x, i) => {
            const s = { t: x.t, d: x.d, onClick: x.go };
            return (
              <div key={i} className="dga-card-link" style={dsCard}>
                <FeaturedIcon hi={x.hi} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)' }}>
                  <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, ...clamp(1) }}>{s?.t}</span>
                  <span style={{ fontSize: 16, lineHeight: '24px', height: 72, ...clamp(3) }}>{s?.d}</span>
                </span>
                <span style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {x.tags.map((t, k) => (
                    <DsTag key={t} tone={k === 0 ? 'brand' : undefined}>
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

      <BuyBanner />

      {/* News (reference home): three DGA cards — image 250, title cut to one line (full title on hover), text, «قراءة المزيد» */}
      <Section band label="آخر الأخبار">
        <SectionHeader title="الأخبار" action={<DsButton onClick={v.go?.news}>عرض الكل</DsButton>} desc={P('مستجدّات المشروع ومبادراته وإنجازاته')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {list(v.latestNews)
            .slice(0, 3)
            .map((n: any, k: number) => (
              <div key={k} className="dga-card-link" style={dsCard}>
                <span role="img" aria-label="" style={css(`display:block;width:100%;height:250px;border-radius:var(--r-md);background:${n?.img ?? ''}`)} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)' }}>
                  <span style={{ fontSize: 18, lineHeight: '28px', fontWeight: 700, ...clamp(1) }} title={n?.title}>{n?.title}</span>
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

      {/* Journey — DS tabs (icon + station) above a media card: station tag, title, text, detail, prev/next controls */}
      <Section label="رحلة ماء زمزم - تمهيد">
        <SectionHeader
          title="من البئر إلى يديك"
          action={<DsButton onClick={v.go?.journey}>عرض الكل</DsButton>}
          desc={P('لا يصل ماء زمزم إلى ضيف الرحمن صدفةً. بين البئر واليد ستّ محطات، تمرّ فيها كل قطرة تحت رقابةٍ متصلة لا تتوقف على مدار الساعة')}
        />
        <div ref={jPin} style={{ height: jLayout.pinned ? jLayout.h : undefined }}>
        <div ref={jBox} style={{ display: 'flex', flexDirection: 'column', gap: 40, position: jLayout.pinned ? 'sticky' : undefined, top: jLayout.top }}>
          <Tabs label="محطات رحلة ماء زمزم" items={stations.map((s: any, k: number) => ({ label: (<><Hi icon={STATION_ICONS[k]} size={20} />{s?.title}</>), selected: k === stn, onClick: () => jPick(k) }))} />
          {(() => {
            const s: any = stations[stn] || {};
            const ps: string[] = s.ps || [];
            const extra = s.bullets ? ps[0] + ' ' + s.bullets.map((b: any) => b.k).join('، ') + '.' : ps[ps.length - 1];
            const nav = (dir: number, icon: IconSvgElement, label: string) => {
              const to = stn + dir;
              const off = to < 0 || to >= stations.length;
              return (
                <button type="button" aria-label={label} disabled={off} onClick={() => jPick(to)} className="dga-btn dga-btn-neutral" style={{ width: 48, height: 48, borderRadius: 'var(--r-sm)', border: '1px solid var(--line)', background: 'var(--card)', color: off ? 'var(--line)' : 'var(--ink)', cursor: off ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
        </div>
      </Section>

      {/* Story (reference home): header with the film's text as description, then the film as a DGA card (7 of 12) beside the six chapters as the DGA Accordion (one open at a time) */}
      <Section band label="قصة زمزم - تمهيد">
        <SectionHeader
          title="قصة زمزم"
          action={<DsButton onClick={v.go?.story}>عرض الكل</DsButton>}
          desc={P('قصةٌ بدأت قبل أربعة آلاف عام. حين تُرك إسماعيل عليه السلام رضيعاً مع أمه هاجر في وادٍ غير ذي زرع، وسعت بين الصفا والمروة سبعاً بحثاً عن الماء، تفجّرت زمزم. ومنذ ذلك اليوم لم تنقطع.')}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 32, alignItems: 'start' }}>
          <div style={{ ...dsCard, padding: 0, overflow: 'hidden', gridColumn: 'span 1' }}>
            <button type="button" onClick={v.film?.hagar} aria-label="تشغيل فيلم قصة زمزم" className="zz-film" style={{ position: 'relative', display: 'block', width: '100%', aspectRatio: '16/9', padding: 0, border: 0, background: "url('assets/da38.jpg') center 30%/cover no-repeat", cursor: 'pointer' }}>
              <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(28,25,21,.2)' }} />
              <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: 64, height: 64, borderRadius: 9999, background: 'var(--card)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}>
                  <Hi icon={PlayIcon} size={28} />
                </span>
              </span>
            </button>
          </div>
          <AccordionList>
            {SAGA.map(([t, lead], k) => (
              <AccordionItem
                key={k}
                first={k === 0}
                q={`الفصل ${(k + 1).toLocaleString('ar-EG')}: ${t}`}
                open={chap === k}
                onClick={() => setChap(k)}
                a={
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
                    <span>{lead}</span>
                    <button type="button" onClick={() => v.go?.chapter?.(k)} className="dga-link" style={{ padding: 0, border: 0, background: 'none', color: 'var(--gold)', fontWeight: 600, fontSize: 16, lineHeight: '24px', cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      اقرأ الفصل <Hi icon={ArrowLeft01Icon} size={16} />
                    </button>
                  </span>
                }
              />
            ))}
          </AccordionList>
        </div>
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

      {/* DS Partner Section: title, then image-only logo cards (98×100, logo area 66×68) between the arrow buttons */}
      <Section band label="الشركاء والجهات ذات العلاقة">
        <SectionHeader title="الشركاء والجهات ذات العلاقة" desc={P('منظومة وطنية')} />
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
      <Section label="التحقق من المنتج الأصلي - تمهيد">
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

      {/* FAQ (reference home): header + DGA Accordion, first question open */}
      <Section band label="الأسئلة الشائعة - مختصر">
        <SectionHeader title="نجيب عن تساؤلاتك" action={<DsButton onClick={v.go?.faq}>عرض الكل</DsButton>} desc={P('إجابات واضحة لأكثر الأسئلة تداولًا حول خدمة ماء زمزم، لضمان تجربة سلسة ومعلومات دقيقة قبل تقديم الطلب.')} />
        <AccordionList>
          {HOME_FAQ.map(([q, a], k) => (
            <AccordionItem key={k} first={k === 0} q={q} a={a} open={faq === k} onClick={() => setFaq(faq === k ? -1 : k)} />
          ))}
        </AccordionList>
      </Section>







    </>
  );
}
