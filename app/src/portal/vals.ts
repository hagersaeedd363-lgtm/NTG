/**
 * View-model for the screens kept from the design (products, review, orders, payment,
 * password, profile). Maps the typed portal state to the props those screens render.
 */
import { MAX_BOTTLES, PRODUCTS, REGIONS } from '../data/portal';
import { DEMO_TOOLS } from '../config';
import { createOrderBlockReason, isPayable, nextStep, orderStage, orderStages, orderStatusLabel, orderTone } from './rules';
import { portal, type PortalState } from './store';
import type { Order } from './types';
import { TAG } from './ui';

const AR = (n: number | string) => String(n).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d]);
const SAR = (n: number) => portal.sar(n);
const GOLD = '#996C2E';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Obj = Record<string, any>;

const NEXT_ICON: Record<string, string> = {
  clock: 'M12 7v5l3 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0',
  x: 'M7 7l10 10M17 7L7 17',
  card: 'M3 6h18v12H3zM3 10h18M7 15h3',
  bank: 'M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18',
  ok: 'M5 12.5l4.5 4.5L19 7.5',
  box: 'M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7',
};

function field(value: string, error: string | undefined, on: (v: string) => void) {
  return {
    v: value,
    bg: value ? 'var(--card-2)' : 'var(--card)',
    e: error || '',
    hasE: !!error,
    noE: !error,
    bd: error ? 'var(--danger)' : 'var(--line)',
    on: (ev: { target: { value: string } }) => on(ev.target.value),
  };
}

function lineView(l: Order['lines'][number]) {
  return { t: l.title, img: l.img, imgBg: "url('" + l.img + "') center/contain no-repeat", q: AR(l.qty), priceLabel: SAR(l.price), sum: SAR(l.qty * l.price) };
}

function stagesView(o: Order, s: PortalState) {
  const stg = orderStages(o, portal.account(s));
  return stg.map((st, i) => {
    const bg = st.bad ? 'var(--danger)' : st.done || st.cur ? GOLD : 'var(--card)';
    return {
      ...st,
      showDot: st.cur,
      bg,
      ring: st.cur ? (st.bad ? '0 0 0 4px rgba(180,55,42,.18)' : '0 0 0 4px var(--gold-soft)') : st.done ? 'none' : 'inset 0 0 0 1.5px var(--line)',
      line: st.done ? GOLD : 'var(--line)',
      lineDisp: i < stg.length - 1 ? 'block' : 'none',
      fw: st.cur ? '700' : '500',
      color: st.done || st.cur ? 'var(--ink)' : 'var(--muted)',
      subColor: st.bad ? 'var(--danger)' : st.cur ? 'var(--gold-on-soft)' : 'var(--muted)',
      bBg: i === 0 ? 'transparent' : st.done || st.cur ? GOLD : 'var(--line)',
      aBg: i === stg.length - 1 ? 'transparent' : st.done ? GOLD : 'var(--line)',
    };
  });
}

function chip(o: Order, s: PortalState) {
  const t = TAG[orderTone(o, portal.account(s))];
  return { chipBg: t[0], chipFg: t[1], chipBd: t[2] };
}

function orderTotals(o: Order) {
  return {
    totalLabel: SAR(o.total),
    subtotalLabel: SAR(o.subtotal || o.total),
    shippingLabel: o.shipping ? SAR(o.shipping) : 'مجاني',
    discountLabel: o.discount ? SAR(o.discount) : '',
    vatLabel: SAR(o.vat || 0),
  };
}

function orderDetail(o: Order, s: PortalState): Obj {
  const a = portal.account(s);
  const pn = nextStep(o, a, SAR);
  const AL = { gold: ['#FFF6DB', '#F0D78C', '#8A5A00'], info: ['#E8F3FB', '#B9D9EF', '#14598A'], bad: ['#FFEBEC', '#F3B3AE', '#B42318'], ok: ['#E8F5EC', '#A9D8B8', '#1E6B3A'] }[pn.tone];
  const units = o.lines.reduce((n, l) => n + l.qty, 0);
  const m = o.id.match(/(\d{4})(\d{2})(\d{2})/);
  const d0 = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date();
  const due = new Date(d0.getTime() + 7 * 864e5);
  const left = Math.max(0, Math.ceil((due.getTime() - Date.now()) / 864e5));
  const act = pn.action;
  const onAct =
    act === 'pay' || act === 'transfer' || act === 'retry'
      ? () => portal.openPay(o.id)
      : act === 'refresh'
        ? () => portal.refreshPayment(o.id)
        : act === 'newOrder'
          ? () => portal.newOrder()
          : () => {};
  return {
    id: o.id,
    date: o.date,
    statusLabel: orderStatusLabel(o, a),
    ...chip(o, s),
    ...orderTotals(o),
    lines: o.lines.map(lineView),
    stages: stagesView(o, s),
    pn: { k: pn.tone, ic: NEXT_ICON[pn.icon], title: pn.title, desc: pn.desc, act: !!act, actLabel: pn.actionLabel || '', onAct },
    alBg: AL[0],
    alBd: AL[1],
    alFg: AL[2],
    waitPay: isPayable(a, o),
    units: AR(units) + ' كرتون',
    unitsN: AR(units) + ' كرتون',
    pProducts: o.lines.map((l) => l.title).join('، '),
    pPurpose: o.purpose || o.kindLabel || '—',
    pEtype: o.entityType,
    hasEtype: !!o.entityType,
    hasNotes: !!o.notes,
    notes: o.notes,
    hasDisc: !!o.discount,
    discPct: AR(Math.round(((o.discount || 0) / (o.subtotal || 1)) * 100)) + '٪',
    savedLabel: SAR(o.discount || 0),
    dueLabel: due.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' }) + 'م',
    daysLeft: 'متبقي ' + AR(left) + (left >= 3 && left <= 10 ? ' أيام' : ' يوم'),
    payRef: 'ZW-REF-' + o.id.replace('ZM-', ''),
    invNo: o.invoice || '—',
    dAddr: o.delivery.mode === 'pickup' ? o.delivery.warehouse || '—' : o.delivery.mapAddress || o.delivery.nationalAddress || o.delivery.city || '—',
    dNat: o.delivery.nationalAddress || '—',
    dCity: o.delivery.city || '—',
    dNotes: o.deliveryNotes || '—',
    cName: o.receiver.name || o.contact.name || '—',
    cPhone: o.receiver.phone || o.contact.phone || '—',
    cEmail: o.receiver.email || o.contact.email || '—',
  };
}

function ordersVals(s: PortalState): Obj {
  const a = portal.account(s);
  const mine = portal.myOrders(s);
  const tabs = [
    { id: 'all', label: 'الكل', st: null as number[] | null },
    { id: 'review', label: 'قيد المراجعة', st: [0] },
    { id: 'payment', label: 'بانتظار الدفع', st: [1] },
    { id: 'active', label: 'قيد التنفيذ', st: [2, 3] },
    { id: 'completed', label: 'مكتملة', st: [4] },
  ];
  const { tab, q, status, sort } = s.orders;
  const def = tabs.find((t) => t.id === tab) || tabs[0];
  const query = q.trim().toLowerCase();
  const rows = mine.filter((o) => {
    const stage = orderStage(o);
    if (def.st && !def.st.includes(stage)) return false;
    if (status !== 'all' && String(stage) !== status) return false;
    if (!query) return true;
    return [o.id, o.invoice, ...o.lines.map((l) => l.title)].some((x) => String(x).toLowerCase().includes(query));
  });
  const key: Record<string, (o: Order) => string | number> = {
    id: (o) => o.id,
    products: (o) => o.lines[0]?.title || '',
    date: (o) => o.id.split('-')[1] + o.id.split('-')[2],
    total: (o) => o.total,
    status: (o) => orderStage(o),
  };
  rows.sort((x, y) => {
    const p = key[sort.key](x);
    const r = key[sort.key](y);
    return (typeof p === 'number' && typeof r === 'number' ? p - r : String(p).localeCompare(String(r), 'ar')) * sort.dir;
  });
  const open = s.openOrderId ? mine.find((o) => o.id === s.openOrderId) : undefined;
  const block = createOrderBlockReason(a, s.db.orders);
  return {
    canNew: !block,
    blockNote: block,
    ordersTabs: tabs.map((t) => {
      const active = tab === t.id;
      const c = t.st ? mine.filter((o) => t.st!.includes(orderStage(o))).length : mine.length;
      return {
        id: t.id,
        label: t.label,
        count: AR(c),
        active,
        ul: active ? '#D4A843' : 'transparent',
        fw: 400,
        fg: active ? 'var(--ink)' : 'var(--muted)',
        countBg: active ? 'var(--gold-soft)' : 'var(--card-2)',
        countFg: active ? 'var(--gold-2)' : 'var(--muted)',
        onClick: () => portal.setOrders({ tab: t.id }),
      };
    }),
    sortCols: [
      ['id', 'رقم الطلب'],
      ['products', 'المنتجات'],
      ['date', 'التاريخ'],
      ['total', 'الإجمالي'],
      ['status', 'الحالة'],
    ].map(([k, l]) => {
      const on = sort.key === k;
      return {
        k,
        l,
        on,
        arrow: on ? (sort.dir === 1 ? 'M12 19V5M6 11l6-6 6 6' : 'M12 5v14M6 13l6 6 6-6') : 'M8 9l4-4 4 4M8 15l4 4 4-4',
        fg: on ? 'var(--gold-on-soft)' : 'var(--muted)',
        op: on ? '1' : '.6',
        onClick: () => portal.setOrders({ sort: on ? { key: k, dir: sort.dir === 1 ? -1 : 1 } : { key: k, dir: 1 } }),
      };
    }),
    ordersRows: rows.map((o) => {
      const first = o.lines[0];
      const units = o.lines.reduce((n, l) => n + l.qty, 0);
      return {
        ref: o.id,
        date: o.date,
        thumbBg: "url('" + (first?.img || 'assets/prod-pack.png') + "') center/contain no-repeat",
        pFirst: first?.title || '—',
        pMore: o.lines.length > 1 ? '+' + AR(o.lines.length - 1) : '',
        hasMore: o.lines.length > 1,
        unitsLabel: AR(units) + ' كرتون',
        totalLabel: SAR(o.total),
        statusLabel: orderStatusLabel(o, a),
        ...chip(o, s),
        view: () => portal.openOrder(o.id),
      };
    }),
    ordersHasRows: rows.length > 0,
    ordersEmpty: rows.length === 0,
    ordersShowing: 'عرض ' + AR(rows.length) + ' من ' + AR(mine.length) + ' طلب',
    ordersStatusOptions: [{ v: 'all', t: 'كل الحالات' }].concat(['قيد المراجعة', 'الدفع', 'قيد التجهيز', 'جاهز للاستلام / الشحن', 'مكتمل'].map((t, i) => ({ v: String(i), t }))),
    ordersStatus: status,
    ordersQ: q,
    ordersQHas: !!q,
    onOrdersQ: (ev: { target: { value: string } }) => portal.setOrders({ q: ev.target.value }),
    clearOrdersQ: () => portal.setOrders({ q: '' }),
    onOrdersStatus: (ev: { target: { value: string } }) => portal.setOrders({ status: ev.target.value }),
    odOn: !!open,
    odOff: !open,
    od: open ? orderDetail(open, s) : null,
    backOrders: () => (s.openOrderId ? portal.openOrder(null) : portal.openProfile()),
    newOrder: () => portal.newOrder(),
    contactSupport: () => portal.toast('support@zamzam.gov.sa'),
  };
}

function payVals(s: PortalState): Obj | null {
  const P = s.pay;
  const o = P ? portal.order(P.orderId, s) : undefined;
  if (!P || !o) return null;
  const st = P.screen;
  const busy = st === 'processing';
  const m = P.method;
  const mlabel = m === 'applepay' ? 'Apple Pay' : m === 'transfer' ? 'تحويل بنكي' : 'بطاقة مدى';
  const lat = (x: string) => x.replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
  const setC = (k: keyof typeof P.card, v: string) => portal.setPay({ card: { ...portal.state.pay!.card, [k]: v }, errs: { ...portal.state.pay!.errs, [k]: '' } });
  const fld = (k: keyof typeof P.card) => ({ v: P.card[k], bg: P.card[k] ? 'var(--card-2)' : 'var(--card)', bd: P.errs[k] ? 'var(--danger)' : 'var(--line)', err: P.errs[k] || '', has: !!P.errs[k] });
  const opts = [
    { id: 'mada' as const, t: 'بطاقة مدى', d: 'بطاقة بنكية', ic: 'M3 6h18v12H3zM3 10h18M7 15h3' },
    { id: 'applepay' as const, t: 'Apple Pay', d: 'دفع سريع من جهازك', ic: 'M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM11 18h2' },
    { id: 'transfer' as const, t: 'تحويل بنكي', d: 'للجهات والطلبات الكبيرة — يتطلب التحقق قبل التجهيز', ic: 'M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18' },
  ].map((x) => {
    const sel = m === x.id;
    return {
      ...x,
      sel,
      bg: sel ? 'var(--gold-soft)' : 'var(--card-2)',
      bd: sel ? GOLD : 'var(--line)',
      dotBg: sel ? GOLD : 'transparent',
      dotIn: sel ? '#fff' : 'transparent',
      dotRing: sel ? 'none' : 'inset 0 0 0 1.5px var(--line)',
      onClick: () => !busy && portal.setPay({ method: x.id, errs: {} }),
    };
  });
  const copy = (v: string) => () => {
    try {
      void navigator.clipboard?.writeText(v);
    } catch {
      /* clipboard unavailable */
    }
    portal.toast('تم النسخ');
  };
  const bank = [
    { k: 'اسم المستفيد', v: 'اسم المستفيد (عيّنة)', dir: 'rtl' },
    { k: 'اسم البنك', v: 'اسم البنك (عيّنة)', dir: 'rtl' },
    { k: 'رقم الآيبان', v: 'SA00 0000 0000 0000 0000 0000', dir: 'ltr' },
    { k: 'مرجع التحويل المطلوب', v: o.id, dir: 'ltr' },
  ].map((b) => ({ ...b, copy: copy(b.v) }));
  const cur = st === 'awaiting' ? 1 : 0;
  const tsteps = ['بانتظار التحويل', 'بانتظار التحقق', 'تم تأكيد الدفع'].map((t, i) => ({
    t,
    n: i < cur ? '✓' : AR(i + 1),
    bg: i <= cur ? GOLD : 'var(--card)',
    ring: i === cur ? '0 0 0 4px var(--gold-soft)' : i < cur ? 'none' : 'inset 0 0 0 1.5px var(--line)',
    color: i <= cur ? 'var(--ink)' : 'var(--muted)',
    fw: i === cur ? '700' : '500',
    line: i <= cur ? GOLD : 'var(--line)',
    lineDisp: i > 0 ? 'block' : 'none',
  }));
  const transferView = st === 'transfer' || st === 'awaiting';
  const success = st === 'success';
  return {
    r: { id: o.id, ...orderTotals(o), discount: o.discount, lines: o.lines.map(lineView), stages: stagesView(o, s), delivery: o.delivery.mode === 'pickup' ? 'الاستلام من المستودع — ' + o.delivery.warehouse : 'التوصيل إلى العنوان — ' + o.delivery.city },
    form: st === 'form' || st === 'failed',
    failed: st === 'failed',
    processing: busy,
    unconfirmed: st === 'unconfirmed',
    success,
    notSuccess: !success,
    transferView,
    transfer: st === 'transfer',
    awaiting: st === 'awaiting',
    busy,
    title: success ? 'تم الدفع' : transferView ? 'التحويل البنكي' : 'إتمام الدفع',
    sub: success ? 'تم تأكيد الدفع وانتقل طلبك إلى التجهيز.' : transferView ? 'الطلب لا يُجهَّز إلا بعد التحقق من التحويل.' : 'تمت الموافقة على طلبك. أكمل الدفع ليبدأ التجهيز.',
    chip: success ? 'تم الدفع' : st === 'awaiting' ? 'بانتظار التحقق' : 'تمت الموافقة — بانتظار الدفع',
    chipBg: success ? 'rgba(46,160,90,.14)' : 'var(--gold-soft)',
    chipFg: success ? '#2E8B57' : 'var(--gold-2)',
    back: () => portal.leavePay(),
    backOp: busy ? 0.5 : 1,
    opts,
    isCard: m === 'mada',
    isApple: m === 'applepay',
    isTransfer: m === 'transfer',
    mlabel,
    f: { num: fld('num'), exp: fld('exp'), cvv: fld('cvv'), name: fld('name') },
    on_num: (ev: { target: { value: string } }) => {
      const d = lat(ev.target.value).replace(/\D/g, '').slice(0, 16);
      setC('num', d.replace(/(.{4})/g, '$1 ').trim());
    },
    on_exp: (ev: { target: { value: string } }) => {
      let d = lat(ev.target.value).replace(/\D/g, '').slice(0, 4);
      if (d.length > 2) d = d.slice(0, 2) + '/' + d.slice(2);
      setC('exp', d);
    },
    on_cvv: (ev: { target: { value: string } }) => setC('cvv', lat(ev.target.value).replace(/\D/g, '').slice(0, 3)),
    on_name: (ev: { target: { value: string } }) => setC('name', ev.target.value),
    cta: st === 'failed' ? 'إعادة المحاولة' : 'إتمام الدفع',
    go: () => portal.payNow(),
    reason: P.reason,
    tTitle: st === 'awaiting' ? 'بانتظار التحقق من التحويل' : 'بيانات التحويل البنكي',
    tBadge: st === 'awaiting' ? 'بانتظار التحقق' : 'بانتظار التحويل',
    tsteps,
    bank,
    fileLabel: P.file || 'اضغط لاختيار ملف إيصال التحويل',
    fileName: P.file,
    fileBd: P.fileErr ? 'var(--danger)' : 'var(--line)',
    fileErr: P.fileErr,
    fileErrHas: !!P.fileErr,
    proofOp: P.file ? 1 : 0.55,
    onFile: (ev: { target: { files: FileList | null } }) => {
      const f = ev.target.files && ev.target.files[0];
      if (!f) return;
      if (!/\.(pdf|png|jpe?g)$/i.test(f.name)) return portal.setPay({ file: '', fileErr: 'نوع الملف غير مدعوم. ارفع ملف PDF أو صورة.' });
      if (f.size > 5 * 1024 * 1024) return portal.setPay({ file: '', fileErr: 'حجم الملف أكبر من ٥ ميجابايت.' });
      portal.setPay({ file: f.name, fileErr: '' });
    },
    sendProof: () => portal.sendProof(),
    backToMethods: () => portal.setPay({ screen: 'form' }),
    confirmSample: () => portal.demoOrder(o.id, 'confirmTransfer'),
    refresh: () => portal.refreshPayment(o.id),
    rows: [
      { k: 'رقم العملية', v: o.payment.txn || '—', dir: 'ltr' },
      { k: 'تاريخ الدفع', v: o.payment.paidAt || '—', dir: 'rtl' },
      { k: 'وسيلة الدفع', v: mlabel, dir: 'rtl' },
      { k: 'رقم الفاتورة', v: o.invoice || '—', dir: 'ltr' },
    ],
    track: () => portal.openOrders(o.id),
    receipt: () => portal.toast('الفاتورة ' + o.invoice + (DEMO_TOOLS ? ' — عرض تجريبي' : '')),
  };
}

function flowVals(s: PortalState): Obj {
  const d = s.draft;
  const cart = d.cart;
  const maxFor = (p: { bottles: number }) => Math.min(999, Math.floor(MAX_BOTTLES / p.bottles));
  const setQ = (id: string, q: number) => {
    const p = PRODUCTS.find((x: { id: string }) => x.id === id);
    portal.set((st) => ({ draft: { ...st.draft, cart: { ...st.draft.cart, [id]: Math.max(0, Math.min(maxFor(p!), q)) } }, errors: { ...st.errors, cart: '' } }));
  };
  const products = PRODUCTS.map((p: { id: string; t: string; pack: string; bottles: number; price: number; img: string }) => {
    const q = cart[p.id] || 0;
    const maxQ = maxFor(p);
    return {
      ...p,
      maxQ,
      maxLabel: 'حتى ' + AR(maxQ) + ' كرتون',
      imgBg: "url('" + p.img + "') center/contain no-repeat",
      q,
      ring: q > 0 ? '0 0 0 2px rgba(153,108,46,.12)' : '0 0 0 0 transparent',
      cardBg: q > 0 ? 'rgba(153,108,46,.04)' : 'var(--card)',
      sel: q > 0,
      bd: q > 0 ? GOLD : 'var(--line)',
      bw: q > 0 ? '2px' : '1px',
      shadow: q > 0 ? '0 4px 16px rgba(153,108,46,.10)' : '0 0 0 rgba(0,0,0,0)',
      priceLabel: SAR(p.price),
      lineLabel: q > 0 ? SAR(q * p.price) : '—',
      qColor: q ? 'var(--ink)' : 'var(--muted)',
      decOp: q ? '1' : '.45',
      inc: () => setQ(p.id, q + 1),
      dec: () => setQ(p.id, q - 1),
      onQ: (ev: { target: { value: string } }) => setQ(p.id, parseInt(ev.target.value.replace(/[^\d]/g, '')) || 0),
    };
  });
  const count = PRODUCTS.reduce((n: number, p: { id: string }) => n + (cart[p.id] || 0), 0);
  const bottles = PRODUCTS.reduce((n: number, p: { id: string; bottles: number }) => n + (cart[p.id] || 0) * p.bottles, 0);
  const t = portal.totals(s);
  const deliveries = [
    { id: 'pickup' as const, t: 'الاستلام من المستودع', d: 'استلم طلبك من أقرب مستودع معتمد. الاستلام من المستودعات فقط للوحات التحميل' },
    { id: 'address' as const, t: 'التوصيل إلى العنوان', d: 'نوصل طلبك إلى العنوان المحدد' },
  ].map((x) => {
    const sel = d.delivery === x.id;
    return {
      ...x,
      sel,
      bg: sel ? 'var(--gold-soft)' : 'var(--card-2)',
      bd: sel ? GOLD : 'var(--line)',
      dotBg: sel ? GOLD : 'transparent',
      dotIn: sel ? '#fff' : 'transparent',
      dotRing: sel ? 'none' : 'inset 0 0 0 1.5px var(--line)',
      onClick: () => portal.set((st) => ({ draft: { ...st.draft, delivery: x.id }, errors: {} })),
    };
  });
  const isNew = portal.isNewFlow(s) || portal.account(s)?.status !== 'approved';
  return {
    products,
    cartCount: AR(count),
    bottlesCount: AR(bottles),
    cartTotalLabel: SAR(t.subtotal),
    maxHint: 'الحد الأقصى ١٠٬٠٠٠ عبوة لكل طلب — يتم احتساب العبوات تلقائياً من عدد الكراتين',
    nextProducts: () => portal.nextFromProducts(),
    back: () => portal.back(),
    e: { cart: s.errors.cart || '', orderNotes: s.errors.notes || '' },
    hasErr: Object.values(s.errors).some(Boolean),
    deliveries,
    isPickup: d.delivery === 'pickup',
    isAddress: d.delivery === 'address',
    regions: Object.keys(REGIONS),
    cities: portal.cities(d.region),
    warehouses: portal.warehouses(d.region),
    locTitle: d.delivery === 'address' ? 'عنوان التسليم' : 'موقع الاستلام',
    detectLoc: () => detectLocation(),
    locBusy: s.loc.busy,
    locOpacity: s.loc.busy ? '.7' : '1',
    locErr: s.loc.err,
    hasMapAddress: !!(d.lat && d.lng),
    mapAddressLabel: d.mapAddress || 'تم تحديد الموقع',
    notesBd: s.errors.notes ? 'var(--danger)' : 'var(--line)',
    notesBg: d.notes ? 'var(--card-2)' : 'var(--card)',
    notesCount: d.notes.length,
    orderNotes: d.notes,
    onNotes: (ev: { target: { value: string } }) => portal.setDraft({ notes: String(ev.target.value).slice(0, 500) }),
    lines: PRODUCTS.filter((p: { id: string }) => (cart[p.id] || 0) > 0).map((p: { id: string; t: string; price: number; img: string }) => ({
      t: p.t,
      imgBg: "url('" + p.img + "') center/contain no-repeat",
      qx: AR(cart[p.id]) + ' × ' + SAR(p.price),
      sum: SAR(cart[p.id] * p.price),
    })),
    subtotalLabel: SAR(t.subtotal),
    shippingLabel: t.shipping ? SAR(t.shipping) : 'مجاني',
    hasShipping: t.shipping > 0,
    discountLabel: SAR(t.discount),
    hasDiscount: t.discount > 0,
    vatLabel: SAR(t.vat),
    totalLabel: SAR(t.total),
    isNewAcct: true,
    reviewNote: isNew
      ? 'حسابك جديد، لذلك تُراجع بيانات تسجيلك وطلبك أولاً من الجهة المختصة. يتاح الدفع بعد اعتماد حسابك وقبول الطلب.'
      : 'يُراجع طلبك من الجهة المختصة بعد إرساله، ويتاح الدفع بعد قبوله.',
    submitLabel: portal.isNewFlow(s) ? 'إرسال الطلب وبيانات التسجيل' : 'إرسال الطلب',
    submit: () => portal.submitOrder(),
    editProducts: () => portal.stepTo('products'),
  };
}

/** Browser geolocation fills the national address; without permission the user types it. */
function detectLocation() {
  if (!navigator.geolocation) {
    portal.set({ loc: { busy: false, err: 'المتصفح لا يدعم تحديد الموقع. أدخل العنوان الوطني يدوياً.' } });
    return;
  }
  portal.set({ loc: { busy: true, err: '' } });
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      let addr = 'الموقع المحدد (' + lat.toFixed(5) + ', ' + lng.toFixed(5) + ')';
      try {
        const r = await fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&addressdetails=1&accept-language=ar&lat=' + lat + '&lon=' + lng);
        if (r.ok) {
          const j = await r.json();
          const a = j?.address || {};
          addr = [a.house_number, a.road, a.neighbourhood || a.suburb || a.quarter, a.city || a.town || a.village, a.postcode].filter(Boolean).join('، ') || j?.display_name || addr;
        }
      } catch {
        /* keep the coordinates label */
      }
      portal.set((st) => ({ loc: { busy: false, err: '' }, draft: { ...st.draft, lat: String(lat), lng: String(lng), mapAddress: addr, nationalAddress: addr }, errors: { ...st.errors, nationalAddress: '' } }));
      portal.toast('تم تحديد موقعك تلقائياً');
    },
    (err) =>
      portal.set({
        loc: {
          busy: false,
          err: err && err.code === 1 ? 'خدمة الموقع غير مفعّلة في المتصفح. أدخل العنوان الوطني يدوياً.' : 'تعذّر الوصول إلى موقعك. أدخل العنوان الوطني يدوياً.',
        },
      }),
    { enableHighAccuracy: true, timeout: 10000 },
  );
}

function passwordVals(s: PortalState): Obj {
  const a = portal.account(s);
  const hp = !!a?.password;
  const pw = s.pw;
  const up = (p: Partial<PortalState['pw']>) => portal.set((st) => ({ pw: { ...st.pw, ...p } }));
  const phone = a?.identity.phone || '';
  const okLen = pw.n1.length >= 8;
  const okMix = /[A-Za-z؀-ۿ]/.test(pw.n1) && /\d/.test(pw.n1);
  const okMatch = !!pw.n1 && pw.n1 === pw.n2;
  return {
    pwIdle: pw.step === 0,
    pwStep1: pw.step === 1,
    pwStep2: pw.step === 2,
    pwStep3: pw.step === 3,
    pwChip: hp ? 'معيّنة' : 'غير معيّنة',
    pwChipBg: hp ? 'var(--card-2)' : 'var(--gold-soft)',
    pwChipBd: hp ? 'var(--line)' : 'var(--gold-3)',
    pwChipFg: hp ? 'var(--muted)' : 'var(--gold-on-soft)',
    pwTitle: hp ? 'تغيير كلمة المرور' : 'تعيين كلمة المرور',
    pwBtn: hp ? 'تغيير كلمة المرور' : 'تعيين كلمة المرور',
    pwIdleText: hp ? 'كلمة المرور محمية. يمكنك تغييرها في أي وقت بعد التحقق من هويتك برمز يصل إلى جوالك.' : 'لم تعيّن كلمة مرور بعد، وتسجّل الدخول حالياً عبر نفاذ. عيّن كلمة مرور للدخول بالبريد الإلكتروني أيضاً، بعد التحقق برمز يصل إلى جوالك.',
    pwIntro: hp ? 'لحماية حسابك، أرسلنا رمز تحقق من أربعة أرقام إلى الجوال' : 'للبدء بتعيين كلمة المرور، أرسلنا رمز تحقق من أربعة أرقام إلى الجوال',
    pwSaveLabel: hp ? 'حفظ كلمة المرور' : 'تعيين كلمة المرور',
    pwDoneTitle: hp ? 'تم تغيير كلمة المرور' : 'تم تعيين كلمة المرور',
    pwPhone: phone ? phone.slice(0, 3) + '••••' + phone.slice(-3) : '',
    pwOtp: pw.otp,
    bgOtp: pw.otp ? 'var(--card-2)' : 'var(--card)',
    bgN1: pw.n1 ? 'var(--card-2)' : 'var(--card)',
    bgN2: pw.n2 ? 'var(--card-2)' : 'var(--card)',
    pwErr: pw.err,
    pwBd: pw.err ? 'var(--danger)' : 'var(--line)',
    pwN1: pw.n1,
    pwN2: pw.n2,
    pwType: pw.show ? 'text' : 'password',
    pwRules: [
      { t: '٨ أحرف على الأقل', ok: okLen },
      { t: 'تحتوي على حرف ورقم', ok: okMix },
      { t: 'تطابق كلمة المرور وتأكيدها', ok: okMatch },
    ].map((r) => ({ ...r, color: r.ok ? '#2E7D52' : 'var(--muted)', bg: r.ok ? '#2E7D52' : 'transparent', bd: r.ok ? '#2E7D52' : 'var(--line)' })),
    openPw: () => up({ step: 1 }),
    openPwEdit: () => {
      portal.set({ view: 'password', pw: { step: 1, otp: '', n1: '', n2: '', show: false, err: '' } });
      portal.scrollTop();
    },
    pwClose: () => {
      portal.set({ view: a?.status === 'approved' ? 'profile' : 'status', pw: { step: 0, otp: '', n1: '', n2: '', show: false, err: '' } });
      portal.scrollTop();
    },
    pwToggle: () => up({ show: !pw.show }),
    onOtp: (ev: { target: { value: string } }) => up({ otp: ev.target.value.replace(/\D/g, '').slice(0, 4), err: '' }),
    onN1: (ev: { target: { value: string } }) => up({ n1: ev.target.value, err: '' }),
    onN2: (ev: { target: { value: string } }) => up({ n2: ev.target.value, err: '' }),
    pwResend: () => portal.toast('تم إرسال رمز جديد'),
    pwNext1: () => (pw.otp === '1234' ? up({ step: 2, err: '' }) : up({ err: 'رمز التحقق غير صحيح' })),
    pwNext2: () => {
      if (okLen && okMix && okMatch) {
        portal.setPassword();
        up({ step: 3, err: '' });
      } else up({ err: 'تأكد من استيفاء جميع الشروط' });
    },
  };
}

let photoRef: { current: HTMLInputElement | null } = { current: null };

function profileVals(s: PortalState): Obj {
  const a = portal.account(s)!;
  const nafath = s.session?.method === 'nafath';
  const id = a.identity;
  const lockRows = (rows: Array<{ k: string; v: string; dir: string }>) => rows.map((r) => ({ ...r, lock: true, color: r.v ? 'var(--ink)' : 'var(--muted)', v: r.v || '—' }));
  const secs: Obj[] = [
    {
      title: 'البيانات الشخصية',
      icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7',
      note: 'من نفاذ · غير قابلة للتعديل',
      rows: lockRows([
        { k: 'الاسم الكامل', v: id.fullName, dir: 'rtl' },
        { k: 'رقم الهوية الوطنية / الإقامة', v: id.nationalId.slice(0, 1) + '•••••••' + id.nationalId.slice(-2), dir: 'ltr' },
        { k: 'رقم الجوال', v: id.phone, dir: 'ltr' },
        { k: 'البريد الإلكتروني', v: id.email, dir: 'ltr' },
      ]),
    },
    {
      title: 'الحساب',
      icon: 'M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM9 12l2 2 4-4',
      rows: [
        { k: 'نوع الحساب', v: a.type === 'company' ? 'جهة' : 'فرد', dir: 'rtl', color: 'var(--ink)' },
        { k: 'حالة الحساب', v: 'معتمد', dir: 'rtl', color: 'var(--ink)' },
        { k: 'طريقة الدخول الحالية', v: nafath ? 'نفاذ' : 'البريد الإلكتروني', dir: 'rtl', color: 'var(--ink)' },
      ],
    },
  ];
  if (a.company) {
    const c = a.company;
    secs.push({
      title: 'بيانات المنشأة',
      icon: 'M4 21V8l8-5 8 5v13M9 21v-6h6v6M8 11h.01M12 11h.01M16 11h.01',
      note: a.changeRequest ? 'طلب تعديل قيد المراجعة' : '',
      rows: [
        { k: 'اسم المؤسسة', v: c.name, dir: 'rtl' },
        { k: 'السجل التجاري', v: c.cr, dir: 'ltr' },
        { k: 'نوع الجهة', v: c.entityType, dir: 'rtl' },
        { k: 'المنطقة والمدينة', v: [c.region, c.city].filter(Boolean).join(' — '), dir: 'rtl' },
        { k: 'ممثل المؤسسة', v: c.repName, dir: 'rtl' },
        { k: 'جوال الممثل', v: c.repPhone, dir: 'ltr' },
      ].map((r) => ({ ...r, color: 'var(--ink)' })),
    });
  }
  return {
    userName: id.fullName,
    badge: nafath ? { t: 'موثّق عبر نفاذ', naf: true, noNaf: false, bg: 'var(--gold-soft)', fg: 'var(--gold-2)' } : { t: 'دخول بالبريد الإلكتروني', naf: false, noNaf: true, bg: 'var(--gold-soft)', fg: 'var(--gold-2)' },
    profDone: true,
    profReview: false,
    profNotDone: false,
    hasMissing: false,
    inReview: false,
    unverified: false,
    profSecs: secs,
    editLabel: 'تحديث البيانات',
    editBg: GOLD,
    editFg: '#fff',
    editBd: 'rgba(255,255,255,.2)',
    editProfile: () => portal.startEdit(),
    photoCss: s.photo ? 'url(' + s.photo + ')' : 'none',
    hasPhoto: !!s.photo,
    noPhoto: !s.photo,
    photoRef: (el: HTMLInputElement | null) => (photoRef = { current: el }),
    pickPhoto: () => {
      const el = photoRef.current;
      if (el) {
        el.value = '';
        el.click();
      }
    },
    onPhoto: (ev: { target: { files: FileList | null } }) => {
      const f = ev.target.files && ev.target.files[0];
      if (!f) return;
      if (!/^image\/(png|jpeg|webp)$/.test(f.type)) return portal.toast('الصيغ المسموحة: PNG أو JPG أو WEBP');
      if (f.size > 5 * 1024 * 1024) return portal.toast('حجم الصورة يجب ألا يتجاوز ٥ ميجابايت');
      const r = new FileReader();
      r.onload = () => {
        portal.set({ photo: String(r.result) });
        portal.toast('تم تحديث الصورة الشخصية');
      };
      r.readAsDataURL(f);
    },
    removePhoto: () => {
      portal.set({ photo: '' });
      portal.toast('تمت إزالة الصورة');
    },
  };
}

/** Props for the design screens, merged onto the site view-model `v`. */
export function portalVals(v: Obj, s: PortalState): Obj {
  const d = s.draft;
  const e = s.errors;
  const set = (k: keyof typeof d) => (val: string) =>
    portal.set((st) => {
      const next = { ...st.draft, [k]: val };
      if (k === 'region') {
        next.city = '';
        next.warehouse = '';
      }
      return { draft: next, errors: { ...st.errors, [k]: '' } };
    });
  const f = {
    region: field(d.region, e.region, set('region')),
    city: field(d.city, e.city, set('city')),
    warehouse: field(d.warehouse, e.warehouse, set('warehouse')),
    nationalAddress: field(d.nationalAddress, e.nationalAddress, set('nationalAddress')),
    recvName: field(d.recvName, e.recvName, set('recvName')),
    recvPhone: field(d.recvPhone, e.recvPhone, set('recvPhone')),
    recvEmail: field(d.recvEmail, e.recvEmail, set('recvEmail')),
  };
  const ox: Obj = { ...flowVals(s), ...passwordVals(s) };
  if (s.view === 'orders') Object.assign(ox, ordersVals(s));
  if (s.view === 'pay') ox.p = payVals(s);
  if (s.view === 'profile' && portal.account(s)) Object.assign(ox, profileVals(s));
  return { ...v, ox, f, formCols: 'repeat(auto-fit,minmax(min(100%,280px),540px))' };
}
