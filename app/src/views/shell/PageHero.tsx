import type { V } from '../../types';
import { list } from '../../lib/dc';
import { Breadcrumb, DsTag } from '../ds';

/**
 * DS page header (inner pages): neutral band, 40/80 padding, breadcrumb (Text sm),
 * Display lg semibold title (48/60) and Text md lead (16/24, max 720px).
 */
export function PageHero({ v }: { v: V }) {
  const crumbs = [{ label: 'الرئيسية', onClick: v.go?.home }, ...list(v.crumbs).map((c: any) => ({ label: c?.label, onClick: c?.onClick })), { label: v.meta?.title }];
  return (
    <section data-screen-label={v.meta?.title} style={{ background: 'var(--bg-alt)', padding: '40px 0' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px,5.6vw,80px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24 }}>
        <Breadcrumb items={crumbs} />
        <div style={{ maxWidth: 832, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, color: 'var(--ink)' }}>
          {v.meta?.tag ? <DsTag>{v.meta?.tag}</DsTag> : null}
          <h1 style={{ margin: 0, fontSize: 'clamp(32px,3.4vw,48px)', lineHeight: 1.25, fontWeight: 600 }}>{v.meta?.title}</h1>
          {v.meta?.lead ? <p style={{ margin: 0, maxWidth: 720, fontSize: '16px', lineHeight: '24px' }}>{v.meta?.lead}</p> : null}
        </div>
      </div>
    </section>
  );
}
