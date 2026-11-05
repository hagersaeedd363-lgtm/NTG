import type { V } from '../../types';
import { ABOUT_MENU, SUPPORT_MENU } from '../../data/site';
import { Section } from '../ds';

/** DS Sitemap Page: nested list of every page, links in the brand colour. */
export function SitemapPage({ v }: { v: V }) {
  const tree: Array<[string, string, Array<[string, string]>?]> = [
    ['home', 'الرئيسية'],
    ['story', 'قصة زمزم'],
    ['about', 'عن المشروع', ABOUT_MENU.filter(([id]) => id !== 'about') as Array<[string, string]>],
    ['media', 'المركز الإعلامي', [
      ['news', 'الأخبار'],
      ['gallery', 'المكتبة المرئية'],
    ]],
    ['faq', 'الدعم والمساعدة', SUPPORT_MENU as Array<[string, string]>],
    ['search', 'البحث'],
  ];
  const link = (id: string, label: string, top?: boolean) => (
    <button
      type="button"
      onClick={v.go?.[id]}
      className="dga-crumb"
      style={{ padding: 0, border: 0, background: 'none', color: 'var(--gold-2)', fontSize: top ? 16 : 14, lineHeight: top ? '24px' : '20px', fontWeight: top ? 600 : 400, fontFamily: 'inherit', cursor: 'pointer', textAlign: 'right' }}
    >
      {label}
    </button>
  );
  return (
    <Section label="خريطة الموقع">
      <ul style={{ margin: 0, paddingInlineStart: 20, display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--gold-2)' }}>
        {tree.map(([id, label, kids]) => (
          <li key={id}>
            {link(id, label, true)}
            {kids?.length ? (
              <ul style={{ margin: '8px 0 0', paddingInlineStart: 24, display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'circle' }}>
                {kids.map(([cid, cl]) => (
                  <li key={cid}>{link(cid, cl)}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
