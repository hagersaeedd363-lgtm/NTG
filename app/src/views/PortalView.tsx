import type { V } from '../types';
import { AboutPage } from './site/AboutPage';
import { BuyPage } from './site/BuyPage';
import { CertsPage } from './site/CertsPage';
import { ContactPage } from './site/ContactPage';
import { DataTabs } from './site/DataTabs';
import { FaqPage } from './site/FaqPage';
import { HomePage } from './site/HomePage';
import { JourneyPage } from './site/JourneyPage';
import { MediaPage } from './site/MediaPage';
import { MobileNav } from './shell/MobileNav';
import { MuseumPage } from './site/MuseumPage';
import { PortalPage } from '../portal/PortalPage';
import { OrderStepsModal } from './shell/OrderStepsModal';
import { PageHero } from './shell/PageHero';
import { PropertiesPage } from './site/PropertiesPage';
import { QualityPage } from './site/QualityPage';
import { QuickOrderModal } from './shell/QuickOrderModal';
import { ReportsPage } from './site/ReportsPage';
import { SiteFooter } from './shell/SiteFooter';
import { SiteHeader } from './shell/SiteHeader';
import { Splash } from './shell/Splash';
import { StatsPage } from './site/StatsPage';
import { StoryPage } from './site/StoryPage';
import { Toast } from './shell/Toast';
import { VerifyPage } from './site/VerifyPage';
import { VideoModal } from './shell/VideoModal';

export function PortalView({ v }: { v: V }) {
  return (
    <>
      <div
        dir="rtl"
        lang="ar"
        style={{
          fontFamily: 'var(--font)',
          background: 'var(--bg)',
          color: 'var(--ink)',
          minHeight: '100vh',
          overflowX: 'hidden',
          transition: 'background .3s,color .3s',
        }}
      >
        {v.splash ? <Splash v={v} /> : null}
        <SiteHeader v={v} />
        {v.mobileNavOpen ? <MobileNav v={v} /> : null}
        <main>
          {v.pg?.innerHero ? <PageHero v={v} /> : null}
          {v.pg?.home ? <HomePage v={v} /> : null}
          {v.pg?.about ? <AboutPage v={v} /> : null}
          {v.pg?.story ? <StoryPage v={v} /> : null}
          {v.pg?.museum ? <MuseumPage v={v} /> : null}
          {v.pg?.journey ? <JourneyPage v={v} /> : null}
          {v.pg?.quality ? <QualityPage v={v} /> : null}
          {v.pg?.properties ? <PropertiesPage v={v} /> : null}
          {v.pg?.verify ? <VerifyPage v={v} /> : null}
          {v.pg?.stats ? <DataTabs v={v} /> : null}
          {v.dt?.t0 ? <StatsPage v={v} /> : null}
          {v.dt?.t1 ? <ReportsPage v={v} /> : null}
          {v.dt?.t2 ? <CertsPage v={v} /> : null}
          {v.pg?.media ? <MediaPage v={v} /> : null}
          {v.pg?.faq ? <FaqPage v={v} /> : null}
          {v.pg?.contact ? <ContactPage v={v} /> : null}
          {v.pg?.order ? <PortalPage v={v} /> : null}
        </main>
      </div>
      {v.pg?.buy ? <BuyPage v={v} /> : null}
      <SiteFooter v={v} />
      {v.stepsOpen ? <OrderStepsModal v={v} /> : null}
      {v.orderOpen ? <QuickOrderModal v={v} /> : null}
      {v.videoOpen ? <VideoModal v={v} /> : null}
      {v.hasToast ? <Toast v={v} /> : null}
      <template id="__bundler_thumbnail" data-bg-color="#996C2E">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="600" cy="400" r="190" fill="none" stroke="#fff" strokeWidth="22" />
          <path d="M600 290c40 70 70 100 70 140a70 70 0 0 1-140 0c0-40 30-70 70-140z" fill="#fff" />
        </svg>
      </template>
    </>
  );
}
