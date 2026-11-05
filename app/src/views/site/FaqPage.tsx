import { Fragment } from 'react';
import type { V } from '../../types';
import { list } from '../../lib/dc';
import { Icon } from '../../portal/ui';
import { AccordionItem, AccordionList, Chip, DsButton, dsCard, FeaturedIcon, Section } from '../ds';

const SEARCH = 'M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM20 20l-4.2-4.2';
const CHAT = 'M4 5h16v11H8l-4 4zM8 9h8M8 12h5';

/** FAQs (DS: search box, chips, accordion lists per group, contact card). Content unchanged. */
export function FaqPage({ v }: { v: V }) {
  return (
    <Section label="13 الأسئلة الشائعة">
      <div style={{ position: 'relative', maxWidth: 640 }}>
        <input
          value={v.faqQ ?? ''}
          onInput={v.onFaqQ}
          placeholder="ابحث عن سؤال"
          aria-label="ابحث عن سؤال"
          type="search"
          className="dga-field"
          style={{ width: '100%', height: 40, padding: '0 44px 0 16px', borderRadius: 'var(--r-sm)', border: '1px solid var(--field-bd)', background: 'var(--card)', color: 'var(--ink)', fontSize: '16px', lineHeight: '24px', outline: 'none', fontFamily: 'inherit' }}
        />
        <span style={{ position: 'absolute', right: 12, top: 10, color: 'var(--ink-2)', display: 'flex', pointerEvents: 'none' }}>
          <Icon d={SEARCH} size={20} sw={1.8} />
        </span>
      </div>
      <div role="radiogroup" aria-label="تصنيف الأسئلة" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {list(v.faqChips).map((c: any, i: number) => (
          <Chip key={i} selected={c?.active} onClick={c?.onClick} count={c?.count}>
            {c?.label}
          </Chip>
        ))}
      </div>
      {list(v.faqGroups).map((g: any, gi: number) => (
        <Fragment key={gi}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <h2 style={{ margin: 0, fontSize: '24px', lineHeight: '32px', fontWeight: 700, color: 'var(--ink)' }}>{g?.title}</h2>
              <span style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--muted)' }}>{g?.count}</span>
            </div>
            <AccordionList>
              {list(g?.items).map((f: any, i: number) => (
                <AccordionItem key={i} first={i === 0} q={f?.q} a={f?.a} open={f?.open} onClick={f?.onClick} />
              ))}
            </AccordionList>
          </div>
        </Fragment>
      ))}
      {v.faqEmpty ? (
        <div style={{ ...dsCard, alignItems: 'center', textAlign: 'center', fontSize: '16px', lineHeight: '24px', color: 'var(--muted)' }}>
          <span>
            لم نجد سؤالاً مطابقاً.{' '}
            <a href="#contact" onClick={v.go?.contact}>
              تواصل معنا
            </a>
          </span>
        </div>
      ) : null}
      <div style={{ ...dsCard, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 24, padding: 24 }}>
        <FeaturedIcon d={CHAT} />
        <span style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: '18px', lineHeight: '28px', fontWeight: 700, color: 'var(--ink)' }}>لم تجد إجابتك؟</span>
          <span style={{ fontSize: '16px', lineHeight: '24px', color: 'var(--ink)' }}>نستقبل استفساراتك وملاحظاتك وبلاغاتك.</span>
        </span>
        <DsButton primary onClick={v.go?.contact}>
          تواصل معنا
        </DsButton>
      </div>
    </Section>
  );
}
