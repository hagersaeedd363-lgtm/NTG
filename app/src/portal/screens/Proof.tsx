import { useRef, useState, type DragEvent } from 'react';
import { DEMO_TOOLS } from '../../config';
import { orderStatusLabel } from '../rules';
import { PROOF_TYPES, portal, proofFiles, type PortalState } from '../store';
import type { Order } from '../types';
import { ActionBar, Alert, Card, CardHeader, Field, ICON, Icon, Modal, PageTitle, PrimaryButton, SecondaryButton, formGrid } from '../ui';

const UPLOAD = 'M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3';
const AR = (n: number | string) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d]);

export function fileSize(n: number) {
  if (!n) return '';
  return n >= 1024 * 1024 ? AR((n / 1024 / 1024).toFixed(1)) + ' ميجابايت' : AR(Math.max(1, Math.round(n / 1024))) + ' كيلوبايت';
}

const isPdf = (type: string, name: string) => type === 'application/pdf' || /\.pdf$/i.test(name);

/** Thumbnail of a receipt: the image itself, or a PDF tile. */
function Thumb({ src, pdf, size = 64 }: { src: string; pdf: boolean; size?: number }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: 12,
        overflow: 'hidden',
        background: pdf ? 'var(--al-bad-bg)' : 'var(--card-2)',
        boxShadow: 'inset 0 0 0 1px var(--line)',
        color: 'var(--al-bad-fg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
      }}
    >
      {pdf || !src ? (pdf ? 'PDF' : <Icon d={ICON.doc} size={24} />) : <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
    </span>
  );
}

function SummaryRow({ k, v, ltr, strong }: { k: string; v: string; ltr?: boolean; strong?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, fontSize: 14, lineHeight: '24px' }}>
      <span style={{ color: 'var(--muted)' }}>{k}</span>
      <span dir={ltr ? 'ltr' : undefined} style={{ color: 'var(--ink)', fontWeight: strong ? 700 : 500, fontSize: strong ? 18 : 14 }}>
        {v}
      </span>
    </div>
  );
}

/** Payment happens outside the portal; the customer uploads the receipt here. */
export function ProofScreen({ s }: { s: PortalState }) {
  const P = s.pay;
  const o = P ? portal.order(P.orderId, s) : undefined;
  const input = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  if (!P || !o) return null;
  if (P.screen === 'awaiting') return <ProofSent o={o} />;
  const pdf = isPdf(P.fileType, P.file);
  const choose = () => input.current?.click();
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDrag(false);
    const f = e.dataTransfer.files?.[0];
    if (f) portal.pickProof(f);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'zzfade .3s ease both' }}>
      <PageTitle icon={ICON.bank} title="إثبات الدفع" desc="يتم الدفع خارج المنصة. ارفع إيصال الدفع لنتحقق منه ونبدأ تجهيز طلبك." />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
        <div style={{ flex: '1.5 1 440px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card>
            <CardHeader icon={ICON.doc} title="رفع إيصال الدفع" desc="صورة JPG أو PNG أو ملف PDF، بحجم أقصى ٥ ميجابايت." />
            <input
              ref={input}
              id="proof-file"
              type="file"
              accept={PROOF_TYPES.join(',') + ',.jpg,.jpeg,.png,.pdf'}
              aria-label="إيصال الدفع"
              style={{ display: 'none' }}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) portal.pickProof(f);
                e.target.value = '';
              }}
            />
            {P.file ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, padding: 16, borderRadius: 16, background: 'var(--card-2)', boxShadow: 'inset 0 0 0 1px var(--line)' }}>
                <Thumb src={P.preview} pdf={pdf} />
                <span style={{ flex: '1 1 160px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                  <span dir="ltr" style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {P.file}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>{fileSize(P.fileSize)}</span>
                </span>
                <span style={{ display: 'flex', gap: 8 }}>
                  <SecondaryButton onClick={choose} style={{ height: 40 }}>
                    استبدال
                  </SecondaryButton>
                  <SecondaryButton onClick={() => portal.clearProof()} style={{ height: 40 }}>
                    حذف
                  </SecondaryButton>
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={choose}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDrag(true);
                }}
                onDragLeave={() => setDrag(false)}
                onDrop={onDrop}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  padding: '32px 16px',
                  borderRadius: 16,
                  border: '1.5px dashed ' + (P.fileErr ? 'var(--danger)' : drag ? 'var(--gold-2)' : 'var(--gold-3)'),
                  background: drag ? 'var(--gold-soft)' : 'var(--card-2)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: 'var(--ink)',
                }}
              >
                <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--gold-soft)', color: 'var(--gold-on-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon d={UPLOAD} size={24} />
                </span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>اسحب الملف هنا أو اضغط للاختيار</span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>JPG · PNG · PDF — حتى ٥ ميجابايت</span>
              </button>
            )}
            {P.fileErr ? <Alert tone="bad" title={P.fileErr} /> : null}
            <div style={formGrid}>
              <Field id="proof-date" label="تاريخ التحويل (اختياري)" type="date" value={P.transferDate} onChange={(v) => portal.setPay({ transferDate: v })} ltr />
              <Field id="proof-sender" label="اسم المحوِّل (اختياري)" value={P.sender} onChange={(v) => portal.setPay({ sender: v })} placeholder="كما يظهر في الإيصال" />
            </div>
          </Card>
        </div>
        <aside style={{ flex: '1 1 320px', minWidth: 0 }}>
          <Card>
            <CardHeader icon={ICON.bank} title="بيانات الدفع" desc="حوّل المبلغ واكتب رقم الطلب كمرجع." />
            <SummaryRow k="رقم الطلب" v={o.id} ltr />
            <SummaryRow k="المبلغ المستحق" v={portal.sar(o.total)} strong />
            <div style={{ height: 1, background: 'var(--line)' }} />
            <SummaryRow k="اسم المستفيد" v="اسم المستفيد (عيّنة)" />
            <SummaryRow k="اسم البنك" v="اسم البنك (عيّنة)" />
            <SummaryRow k="رقم الآيبان" v="SA00 0000 0000 0000 0000 0000" ltr />
            <SummaryRow k="مرجع التحويل" v={o.id} ltr />
          </Card>
        </aside>
      </div>
      <ActionBar onBack={() => portal.leavePay()}>
        <span style={{ opacity: P.file ? 1 : 0.5 }}>
          <PrimaryButton onClick={() => portal.sendProof()} disabled={!P.file} icon={ICON.arrowNext}>
            إرسال للتحقق
          </PrimaryButton>
        </span>
      </ActionBar>
    </div>
  );
}

/** After sending: confirmation, with the receipt and what happens next. */
function ProofSent({ o }: { o: Order }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'zzfade .3s ease both' }}>
      <Card style={{ alignItems: 'center', textAlign: 'center', padding: 'clamp(28px,4vw,48px)', gap: 16 }}>
        <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--al-info-bg)', color: 'var(--al-info-fg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon d={ICON.clock} size={34} sw={2} />
        </span>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: '32px', color: 'var(--ink)' }}>تم إرسال الإيصال للتحقق</h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: '26px', color: 'var(--ink-2)', maxWidth: 620 }}>
          نراجع التحويل خلال يوم عمل واحد، ويبدأ تجهيز طلبك فور التحقق. لا حاجة لإعادة الدفع أو إرسال الإيصال مرة أخرى.
        </p>
      </Card>
      <ProofCard o={o} />
      <ActionBar>
        <SecondaryButton onClick={() => portal.openOrders()}>كل الطلبات</SecondaryButton>
        <PrimaryButton onClick={() => portal.leavePay()} icon={ICON.arrowNext}>
          العودة إلى الطلب
        </PrimaryButton>
      </ActionBar>
    </div>
  );
}

/** The uploaded receipt with «عرض الإيصال». */
function ProofCard({ o }: { o: Order }) {
  const [open, setOpen] = useState(false);
  const p = o.payment;
  if (!p.proof) return null;
  const src = proofFiles.get(o.id) || '';
  const pdf = isPdf(p.proofType || '', p.proof);
  const verifying = p.state === 'verifying';
  return (
    <Card>
      <CardHeader
        icon={ICON.doc}
        title="إثبات الدفع"
        desc={verifying ? 'نراجع التحويل خلال يوم عمل واحد.' : 'تم التحقق من الإيصال' + (p.paidAt ? ' في ' + p.paidAt : '') + '.'}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
        <Thumb src={src} pdf={pdf} size={56} />
        <span style={{ flex: '1 1 180px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <span dir="ltr" style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {p.proof}
          </span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            {['أُرسل ' + (p.proofAt || ''), fileSize(p.proofSize || 0)].filter((x) => x.trim() && x !== 'أُرسل ').join(' · ')}
          </span>
        </span>
        <SecondaryButton onClick={() => setOpen(true)} style={{ height: 40 }}>
          عرض الإيصال
        </SecondaryButton>
      </div>
      {p.transferDate || p.sender ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
          {p.transferDate ? <SummaryRow k="تاريخ التحويل" v={p.transferDate} ltr /> : null}
          {p.sender ? <SummaryRow k="اسم المحوِّل" v={p.sender} /> : null}
        </div>
      ) : null}
      {open ? (
        <Modal label="إيصال الدفع" onClose={() => setOpen(false)}>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>إيصال الدفع</h2>
          {src ? (
            pdf ? (
              <iframe title="إيصال الدفع" src={src} style={{ width: '100%', height: '60vh', border: 0, borderRadius: 12 }} />
            ) : (
              <img src={src} alt="إيصال الدفع" style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: 12, background: 'var(--card-2)' }} />
            )
          ) : (
            <Alert tone="info">
              {DEMO_TOOLS ? 'هذا إيصال تجريبي، أو رُفع في جلسة سابقة، فلا تتوفر معاينته هنا.' : 'تتوفر معاينة الإيصال في الجلسة التي رُفع فيها.'}
            </Alert>
          )}
          <SecondaryButton full onClick={() => setOpen(false)}>
            إغلاق
          </SecondaryButton>
        </Modal>
      ) : null}
    </Card>
  );
}

/** Expected pickup / delivery date (set when payment is confirmed; estimated for older records). */
function receiveDate(o: Order) {
  if (o.receiveDate) return o.receiveDate;
  const m = o.id.match(/(\d{4})(\d{2})(\d{2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3] + 5) : new Date();
  return d.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + 'م';
}

/** Shown in the order details from «قيد التجهيز» on: when and where the order is received. */
function ReceiveCard({ o }: { o: Order }) {
  const pick = o.delivery.mode === 'pickup';
  const done = o.status === 'completed';
  const rows: Array<[string, string, boolean?]> = [
    [done ? 'تاريخ الاستلام' : pick ? 'موعد الاستلام المتوقع' : 'موعد التوصيل المتوقع', receiveDate(o)],
    ['طريقة الاستلام', pick ? 'الاستلام من المستودع' : 'التوصيل إلى العنوان'],
    [pick ? 'المستودع' : 'العنوان', pick ? o.delivery.warehouse || '—' : o.delivery.mapAddress || o.delivery.nationalAddress || '—'],
    ['المدينة', [o.delivery.region, o.delivery.city].filter(Boolean).join(' — ') || '—'],
    ...(pick ? ([['أوقات الاستلام', 'الأحد – الخميس، ٨ صباحاً – ٤ مساءً']] as Array<[string, string]>) : []),
    ['المستلم', o.receiver.name || o.contact.name || '—'],
    ['جوال المستلم', o.receiver.phone || o.contact.phone || '—', true],
  ];
  return (
    <Card>
      <CardHeader
        icon={ICON.box}
        title={pick ? 'موعد ومكان الاستلام' : 'موعد وعنوان التوصيل'}
        desc={o.status === 'preparing' ? 'بدأ تجهيز طلبك. أحضر رقم الطلب ورمز الاستلام الذي يصلك عبر الجوال.' : orderStatusLabel(o)}
      />
      <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(max(min(100%,200px),calc(33.333% - 14px)),1fr))', gap: '14px 20px' }}>
        {rows.map(([k, v, ltr]) => (
          <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            <dt style={{ fontSize: 13, lineHeight: '20px', color: 'var(--muted)' }}>{k}</dt>
            <dd dir={ltr ? 'ltr' : undefined} style={{ margin: 0, fontSize: 15, fontWeight: 600, lineHeight: '24px', color: 'var(--ink)', textAlign: 'right' }}>
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

/** Extra sections in the order details: the receipt, then the receive date and place once preparing. */
export function OrderProofAndReceive({ id }: { id?: string }) {
  const o = id ? portal.order(id) : undefined;
  if (!o) return null;
  const receiving = o.status === 'preparing' || o.status === 'ready' || o.status === 'completed';
  return (
    <>
      {receiving ? <ReceiveCard o={o} /> : null}
      <ProofCard o={o} />
    </>
  );
}

