import { Fragment, useState } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';
import { Icon } from '../../portal/ui';
import { AccordionItem, AccordionList, CardText, DsButton, dsCard, FeaturedIcon, SearchBox, Section, Tabs } from '../ds';

const MAIL = 'M3 6h18v12H3zM3 7.5l9 6 9-6';
const FILTER = 'M4 5h16l-6 7.5V19l-4-2v-4.5z';

/** FAQs (DS FAQs page: search box + «تصفية» menu, horizontal tabs, flush accordion, feedback card). Content unchanged. */
export function FaqPage({ v }: { v: V }) {
  const [menu, setMenu] = useState(false);
  const chips = list(v.faqChips);
  return (
    <Section label="13 الأسئلة الشائعة" gap={32}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
        <SearchBox value={v.faqQ ?? ''} onInput={v.onFaqQ} placeholder="بحث" label="ابحث عن سؤال" />
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setMenu((m) => !m)}
            aria-haspopup="menu"
            aria-expanded={menu}
            className="dga-btn dga-btn-black"
            style={{ height: 40, padding: '0 16px', border: 0, borderRadius: 'var(--r-sm)', background: 'var(--ink)', color: 'var(--bg)', display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 16, lineHeight: '24px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}
          >
            <Icon d={FILTER} size={24} />
            تصفية
            <Icon d="M6 9l6 6 6-6" size={20} />
          </button>
          {menu ? (
            <>
              <button aria-label="إغلاق" onClick={() => setMenu(false)} style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'transparent', border: 0, cursor: 'default' }} />
              <div role="menu" style={{ position: 'absolute', top: 48, right: 0, zIndex: 41, minWidth: 220, padding: 8, borderRadius: 'var(--r-md)', background: 'var(--card)', boxShadow: 'inset 0 0 0 1px var(--line),var(--shadow-lg)', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {chips.map((c: any, i: number) => (
                  <button
                    key={i}
                    role="menuitemradio"
                    aria-checked={!!c?.active}
                    onClick={() => {
                      c?.onClick?.();
                      setMenu(false);
                    }}
                    className="dga-navlink"
                    style={{ minHeight: 40, padding: '8px 16px', border: 0, borderRadius: 'var(--r-sm)', background: c?.active ? 'var(--gold-soft)' : 'transparent', color: c?.active ? 'var(--gold-on-soft)' : 'var(--ink)', fontSize: 16, lineHeight: '24px', fontWeight: c?.active ? 600 : 500, textAlign: 'right', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', justifyContent: 'space-between', gap: 16 }}
                  >
                    <span>{c?.label}</span>
                    {c?.count != null ? <span style={{ color: 'var(--muted)', fontWeight: 400 }}>{c?.count}</span> : null}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <Tabs label="تصنيف الأسئلة" items={chips.map((c: any) => ({ label: c?.label, selected: c?.active, onClick: c?.onClick, count: c?.count }))} />
        {list(v.faqGroups).map((g: any, gi: number) => (
          <Fragment key={gi}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h2 style={{ margin: 0, fontSize: 24, lineHeight: '32px', fontWeight: 700, color: 'var(--ink)' }}>
                {g?.title} <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 400, color: 'var(--muted)' }}>{g?.count}</span>
              </h2>
              <AccordionList>
                {list(g?.items).map((f: any, i: number) => (
                  <AccordionItem key={i} first={i === 0} q={f?.q} a={f?.a} open={f?.open} onClick={f?.onClick} />
                ))}
              </AccordionList>
            </div>
          </Fragment>
        ))}
        {v.faqEmpty ? (
          <div style={{ ...dsCard, alignItems: 'center', textAlign: 'center', fontSize: 16, lineHeight: '24px', color: 'var(--muted)' }}>
            <span>
              لم نجد سؤالاً مطابقاً.{' '}
              <a href="#contact" onClick={v.go?.contact}>
                تواصل معنا
              </a>
            </span>
          </div>
        ) : null}
      </div>
      <div style={dsCard}>
        <FeaturedIcon d={MAIL} />
        <CardText title="لم تجد إجابتك؟" text="نستقبل استفساراتك وملاحظاتك وبلاغاتك." />
        <div style={{ display: 'flex' }}>
          <DsButton primary onClick={v.go?.contact}>
            تواصل معنا
          </DsButton>
        </div>
      </div>
    </Section>
  );
}
