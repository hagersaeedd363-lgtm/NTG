import { useMemo, useState } from 'react';
import type { V } from '../../types';
import { ABOUT_MENU, FAQ, META, NEWS, SUPPORT_MENU } from '../../data/site';
import { Icon } from '../../portal/ui';
import { CardText, DsButton, DsTag, dsCard, Section } from '../ds';

type Hit = { kind: string; title: string; text: string; open: () => void };
const PER_PAGE = 6;
// Light Arabic normalisation so «إ/أ/آ/ا», «ة/ه» and «ى/ي» match each other, and diacritics are ignored.
const norm = (s: string) =>
  (s || '')
    .replace(/[ً-ْـ]/g, '')
    .replace(/[إأآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .toLowerCase();

/** DS Search Page: search box + button, result count, result cards (title, text, tag, action), pagination. */
export function SearchPage({ v }: { v: V }) {
  const [q, setQ] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  const index = useMemo<Hit[]>(() => {
    const pages: Hit[] = [...ABOUT_MENU, ...SUPPORT_MENU, ['buy', 'اقتنِ ماء زمزم'], ['story', 'قصة زمزم'], ['media', 'المركز الإعلامي']].map(([id, label]) => ({
      kind: 'صفحة',
      title: (META as any)[id]?.title || label,
      text: (META as any)[id]?.lead || '',
      open: () => v.go?.[id]?.(),
    }));
    const faqs: Hit[] = FAQ.flatMap((g: any) => g.items.map(([qq, a]: [string, string]) => ({ kind: 'سؤال شائع', title: qq, text: a, open: () => v.go?.faq?.() })));
    const news: Hit[] = NEWS.map((n: any) => ({ kind: 'خبر', title: n.title, text: (n.body?.[0] || '') as string, open: () => v.go?.news?.() }));
    return [...pages, ...faqs, ...news];
  }, [v]);

  const hits = useMemo(() => {
    const t = norm(query.trim());
    if (!t) return [];
    return index.filter((h) => norm(h.title + ' ' + h.text).includes(t));
  }, [index, query]);
  const pages = Math.max(1, Math.ceil(hits.length / PER_PAGE));
  const shown = hits.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const run = (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    setQuery(q);
    setPage(0);
  };

  return (
    <Section label="البحث">
      <form role="search" onSubmit={run} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="بحث"
            aria-label="ابحث في الموقع"
            type="search"
            autoFocus
            className="dga-field"
            style={{ width: '100%', height: 40, boxSizing: 'border-box', paddingInlineStart: 44, paddingInlineEnd: 8, borderRadius: 'var(--r-sm)', border: '1px solid var(--field-bd)', background: 'var(--card)', color: 'var(--ink)', fontSize: 16, lineHeight: '24px', outline: 'none', fontFamily: 'inherit' }}
          />
          <span style={{ position: 'absolute', insetInlineStart: 16, top: 10, display: 'flex', color: 'var(--ink)', pointerEvents: 'none' }}>
            <Icon d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5" size={20} />
          </span>
        </div>
        <button type="submit" className="dga-btn dga-btn-primary" style={{ height: 40, padding: '0 16px', border: 0, borderRadius: 'var(--r-sm)', background: 'var(--gold)', color: '#FFFFFF', fontSize: 16, lineHeight: '24px', fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>
          بحث
        </button>
      </form>

      {query.trim() ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 700, color: 'var(--ink)' }}>نتيجة البحث عن «{query.trim()}»</h2>
          <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--ink-2)' }}>{hits.length.toLocaleString('ar-EG')} نتيجة</span>
        </div>
      ) : null}

      {query.trim() && !hits.length ? (
        <div style={{ ...dsCard, alignItems: 'center', textAlign: 'center' }}>
          <CardText title="لا توجد نتائج مطابقة" text="جرّب كلمة أخرى، أو تصفّح الأسئلة الشائعة." />
          <DsButton onClick={v.go?.faq}>الأسئلة الشائعة</DsButton>
        </div>
      ) : null}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {shown.map((h, i) => (
          <div key={i} style={dsCard}>
            <CardText title={h.title} text={h.text.length > 220 ? h.text.slice(0, 220) + '…' : h.text} />
            <span style={{ display: 'flex' }}>
              <DsTag>{h.kind}</DsTag>
            </span>
            <div style={{ display: 'flex' }}>
              <DsButton primary onClick={h.open}>
                عرض
              </DsButton>
            </div>
          </div>
        ))}
      </div>

      {pages > 1 ? (
        <nav aria-label="ترقيم الصفحات" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
          <button type="button" aria-label="السابق" disabled={page === 0} onClick={() => setPage(page - 1)} className="dga-tool" style={pgBtn(false, page === 0)}>
            <Icon d="M9 6l6 6-6 6" size={20} />
          </button>
          {Array.from({ length: pages }, (_, i) => (
            <button key={i} type="button" aria-current={i === page ? 'page' : undefined} onClick={() => setPage(i)} className={i === page ? undefined : 'dga-tool'} style={pgBtn(i === page)}>
              {(i + 1).toLocaleString('ar-EG')}
            </button>
          ))}
          <button type="button" aria-label="التالي" disabled={page === pages - 1} onClick={() => setPage(page + 1)} className="dga-tool" style={pgBtn(false, page === pages - 1)}>
            <Icon d="M15 6l-6 6 6 6" size={20} />
          </button>
        </nav>
      ) : null}
    </Section>
  );
}

const pgBtn = (on: boolean, disabled?: boolean) =>
  ({
    minWidth: 40,
    height: 40,
    padding: '0 8px',
    border: 0,
    borderRadius: 'var(--r-sm)',
    background: 'transparent',
    borderBottom: on ? '2px solid var(--gold)' : '2px solid transparent',
    color: disabled ? 'var(--muted)' : 'var(--ink)',
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: on ? 700 : 500,
    fontFamily: 'inherit',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }) as const;
