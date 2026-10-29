/**
 * Sample data for the simulated back office. Identities, companies and orders here are examples,
 * not real records. The order history comes from the design prototype.
 */
import { DEMO_TOOLS } from '../config';
import { COMPANIES, DEMO_REQS, SEED_REQS } from '../data/portal';
import type { Account, Db, Identity, Order, OrderStatus, PaymentMethod } from './types';

/** Demo identities and what each one demonstrates. Any other valid ID is a new, unregistered user. */
export const DEMO_IDS = {
  approvedCompany: '1012345678',
  approvedIndividual: '1023456789',
  pendingNoOrder: '1034567890',
  pendingWithOrder: '1045678901',
  rejected: '1056789012',
  missingData: '1067890123',
  nafathFails: '1078901234',
} as const;

export const DEMO_ID_LIST: Array<{ id: string; label: string }> = [
  { id: DEMO_IDS.approvedCompany, label: 'حساب جهة معتمد' },
  { id: DEMO_IDS.approvedIndividual, label: 'حساب فرد معتمد' },
  { id: DEMO_IDS.pendingNoOrder, label: 'حساب قيد المراجعة' },
  { id: DEMO_IDS.pendingWithOrder, label: 'قيد المراجعة مع طلب' },
  { id: DEMO_IDS.rejected, label: 'حساب مرفوض' },
  { id: DEMO_IDS.missingData, label: 'بيانات نفاذ ناقصة' },
  { id: DEMO_IDS.nafathFails, label: 'فشل التحقق عبر نفاذ' },
  { id: '1098765432', label: 'مستخدم جديد' },
];

export const DEMO_EMAIL_LOGIN = { email: 'a.alharbi@example.com', password: '123456' };

const SAMPLE_NAMES = ['سارة خالد العتيبي', 'محمد عبدالرحمن الغامدي', 'ريم فيصل الشهري', 'خالد سعود المطيري', 'هند عبدالله الزهراني'];

/** What the simulated Nafath returns for an ID with no special demo behaviour. */
export function sampleIdentity(nationalId: string): Identity {
  const n = Number(nationalId.slice(-1));
  return {
    fullName: SAMPLE_NAMES[n % SAMPLE_NAMES.length],
    nationalId,
    email: 'user' + nationalId.slice(-4) + '@example.com',
    phone: '05' + nationalId.slice(2, 10),
  };
}

const registry = COMPANIES[0];

function account(partial: Partial<Account> & Pick<Account, 'nationalId' | 'status' | 'type' | 'identity'>): Account {
  return { entry: 'register', submittedAt: '٢٠ أكتوبر ٢٠٢٦م', ...partial };
}

const ACCOUNTS: Account[] = [
  account({
    nationalId: DEMO_IDS.approvedCompany,
    status: 'approved',
    type: 'company',
    identity: { fullName: 'عبدالله محمد الحربي', nationalId: DEMO_IDS.approvedCompany, email: 'a.alharbi@example.com', phone: '0551234567' },
    company: {
      entityType: 'خاص/شخصي',
      name: registry.name,
      cr: registry.cr,
      region: registry.region,
      city: registry.city,
      registryMatch: true,
      repIdType: 'هوية وطنية',
      repId: registry.repId,
      repName: registry.repName,
      repPhone: registry.repPhone,
      repEmail: registry.repEmail,
    },
    password: DEMO_EMAIL_LOGIN.password,
    submittedAt: '١ سبتمبر ٢٠٢٦م',
  }),
  account({
    nationalId: DEMO_IDS.approvedIndividual,
    status: 'approved',
    type: 'individual',
    identity: { fullName: 'نورة سعد القحطاني', nationalId: DEMO_IDS.approvedIndividual, email: 'n.alqahtani@example.com', phone: '0559876543' },
    submittedAt: '٥ سبتمبر ٢٠٢٦م',
  }),
  account({
    nationalId: DEMO_IDS.pendingNoOrder,
    status: 'pending',
    type: 'individual',
    identity: { fullName: 'فهد ناصر الدوسري', nationalId: DEMO_IDS.pendingNoOrder, email: 'f.aldosari@example.com', phone: '0553456789' },
    submittedAt: '٢٨ أكتوبر ٢٠٢٦م',
  }),
  account({
    nationalId: DEMO_IDS.pendingWithOrder,
    status: 'pending',
    type: 'company',
    entry: 'order',
    identity: { fullName: 'ليلى أحمد السبيعي', nationalId: DEMO_IDS.pendingWithOrder, email: 'l.alsubaie@example.com', phone: '0554567890' },
    company: {
      entityType: 'غير ربحي',
      name: 'جمعية البر الخيرية (عيّنة)',
      cr: '7012345670',
      region: 'مكة المكرمة',
      city: 'جدة',
      registryMatch: false,
      repIdType: 'هوية وطنية',
      repId: DEMO_IDS.pendingWithOrder,
      repName: 'ليلى أحمد السبيعي',
      repPhone: '0554567890',
      repEmail: 'l.alsubaie@example.com',
    },
    submittedAt: '٢٨ أكتوبر ٢٠٢٦م',
  }),
  account({
    nationalId: DEMO_IDS.rejected,
    status: 'rejected',
    type: 'company',
    identity: { fullName: 'تركي ماجد العنزي', nationalId: DEMO_IDS.rejected, email: 't.alanazi@example.com', phone: '0556789012' },
    company: {
      entityType: 'بيع خاص/إعادة بيع',
      name: 'مؤسسة الواحة التجارية (عيّنة)',
      cr: '7019876540',
      region: 'الرياض',
      city: 'الرياض',
      registryMatch: false,
      repIdType: 'هوية وطنية',
      repId: DEMO_IDS.rejected,
      repName: 'تركي ماجد العنزي',
      repPhone: '0556789012',
      repEmail: 't.alanazi@example.com',
    },
    rejectReason: 'بيانات السجل التجاري غير مطابقة لبيانات المنشأة. (سبب تجريبي)',
    submittedAt: '٢٢ أكتوبر ٢٠٢٦م',
  }),
];

const STATUS: OrderStatus[] = ['review', 'accepted', 'preparing', 'ready', 'completed'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDesign(r: any, nationalId: string, sample: boolean): Order {
  const pick = r.mode === 'pickup';
  const parts = String(r.delivery || '').split(' — ');
  return {
    id: r.id,
    nationalId,
    date: r.date,
    status: r.rejected ? 'rejected' : STATUS[Math.min(4, r.status || 0)],
    rejectReason: r.rejectReason,
    lines: r.lines.map((l: { t: string; q: number; price: number; bottles: number; img: string }) => ({
      title: l.t,
      qty: l.q,
      price: l.price,
      bottles: l.bottles,
      img: l.img,
    })),
    subtotal: r.subtotal,
    shipping: r.shipping,
    discount: r.discount,
    vat: r.vat,
    total: r.total,
    purpose: r.purpose || '',
    kindLabel: r.company || r.kindLabel || 'أفراد',
    entityType: r.etype || '',
    delivery: {
      mode: pick ? 'pickup' : 'address',
      region: '',
      city: r.city || (pick ? '' : parts[1] || ''),
      warehouse: pick ? parts.slice(1).join(' — ') : '',
      nationalAddress: r.nationalAddress || '',
      mapAddress: '',
      lat: null,
      lng: null,
    },
    receiver: { name: r.contact?.name || '', phone: r.contact?.phone || '', email: r.contact?.email || '' },
    contact: { name: r.contact?.name || '', phone: r.contact?.phone || '', email: r.contact?.email || '' },
    notes: r.notes || '',
    deliveryNotes: r.deliveryNotes || '',
    invoice: r.invoice,
    payment: {
      method: (r.payMethod as PaymentMethod) || 'mada',
      state: r.paid ? 'paid' : r.verifying ? 'verifying' : r.payFailed ? 'failed' : 'none',
      failReason: r.payFailReason,
      proof: r.proof,
    },
    ...(sample ? { sample: true } : {}),
  };
}

function pendingOrder(): Order {
  const base = fromDesign({ ...DEMO_REQS[0], id: 'ZM-20261028-0441', invoice: 'INV-20261028-0441', date: '٢٨ أكتوبر ٢٠٢٦م' }, DEMO_IDS.pendingWithOrder, false);
  return {
    ...base,
    kindLabel: 'جمعية البر الخيرية (عيّنة)',
    entityType: 'غير ربحي',
    purpose: 'توزيع مستلزمات الحج',
    discount: 456,
    total: 456 + 68,
    vat: 68,
    contact: { name: 'ليلى أحمد السبيعي', phone: '0554567890', email: 'l.alsubaie@example.com' },
    receiver: { name: 'ليلى أحمد السبيعي', phone: '0554567890', email: 'l.alsubaie@example.com' },
  };
}

export function initialDb(): Db {
  const history = (SEED_REQS as unknown as Array<{ demo?: boolean }>).filter((r) => !r.demo).map((r) => fromDesign(r, DEMO_IDS.approvedCompany, false));
  const samples = DEMO_TOOLS ? DEMO_REQS.map((r: unknown) => fromDesign(r, DEMO_IDS.approvedCompany, true)) : [];
  const accounts: Record<string, Account> = {};
  for (const a of ACCOUNTS) accounts[a.nationalId] = a;
  return { accounts, orders: [...samples, pendingOrder(), ...history], seq: 442 };
}
