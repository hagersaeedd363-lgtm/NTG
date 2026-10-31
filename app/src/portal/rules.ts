/**
 * Business rules for access and payment. Pure functions so every screen, the header and the
 * tests apply exactly the same logic.
 */
import type { Account, AccountStatus, Order } from './types';

export const ACCOUNT_STATUS_LABEL: Record<AccountStatus, string> = {
  pending: 'قيد المراجعة',
  approved: 'معتمد',
  rejected: 'مرفوض',
};

/** Only approved accounts may start a new order. */
export function canCreateOrder(account: Account | null | undefined): boolean {
  return !!account && account.status === 'approved';
}

/** Why a signed-in user cannot start a new order, or '' when they can. */
export function createOrderBlockReason(account: Account | null | undefined, orders: Order[]): string {
  if (!account) return 'سجّل الدخول أولاً لبدء طلب جديد.';
  if (account.status === 'rejected') return 'لا يمكن إنشاء طلبات لأن طلب تسجيل حسابك مرفوض.';
  if (account.status === 'pending') {
    return orders.some((o) => o.nationalId === account.nationalId && !o.sample)
      ? 'لديك طلب قيد المراجعة مع بيانات حسابك. يمكنك إنشاء طلبات جديدة بعد اعتماد الحساب.'
      : 'حسابك قيد المراجعة. يمكنك إنشاء الطلبات بعد اعتماده.';
  }
  return '';
}

/** Payment opens only when the account is approved AND the order has been accepted. */
export function isPayable(account: Account | null | undefined, order: Order): boolean {
  return (
    !!account &&
    account.status === 'approved' &&
    order.status === 'accepted' &&
    (order.payment.state === 'none' || order.payment.state === 'failed')
  );
}

/** Short status shown in order lists and chips. */
export function orderStatusLabel(order: Order, account?: Account | null): string {
  switch (order.status) {
    case 'review':
      return 'قيد المراجعة';
    case 'rejected':
      return 'مرفوض';
    case 'accepted':
      if (account && account.status !== 'approved') return 'بانتظار اعتماد الحساب';
      if (order.payment.state === 'verifying') return 'بانتظار التحقق من التحويل';
      if (order.payment.state === 'unconfirmed') return 'جارٍ تأكيد الدفع';
      if (order.payment.state === 'failed') return 'فشل الدفع';
      return 'بانتظار الدفع';
    case 'preparing':
      return 'قيد التجهيز';
    case 'ready':
      return order.delivery.mode === 'pickup' ? 'جاهز للاستلام' : 'جاهز للشحن';
    case 'completed':
      return 'مكتمل';
  }
}

/** Order-status colours by meaning: info = in review, warn = needs your action, prog = in progress, ok = done, bad = rejected or failed. */
export type Tone = 'info' | 'warn' | 'bad' | 'prog' | 'ok';

/** Colour family for the status chip (matches the design's status tags). */
export function orderTone(order: Order, account?: Account | null): Tone {
  if (order.status === 'rejected' || order.payment.state === 'failed') return 'bad';
  if (order.status === 'review') return 'info';
  if (order.status === 'accepted') {
    if (account && account.status !== 'approved') return 'info';
    return order.payment.state === 'verifying' || order.payment.state === 'unconfirmed' ? 'info' : 'warn';
  }
  if (order.status === 'completed') return 'ok';
  return 'prog';
}

/** Lifecycle index used by the five-segment progress bar and the status filter. */
export function orderStage(order: Order): number {
  return { review: 0, rejected: 0, accepted: 1, preparing: 2, ready: 3, completed: 4 }[order.status];
}

export interface NextStep {
  tone: 'info' | 'gold' | 'bad' | 'ok';
  icon: 'clock' | 'x' | 'card' | 'bank' | 'ok' | 'box' | 'user';
  title: string;
  desc: string;
  action?: 'pay' | 'transfer' | 'retry' | 'refresh' | 'newOrder';
  actionLabel?: string;
  invoice?: boolean;
}

/** What the customer should know or do next for one order, given the account's state too. */
export function nextStep(order: Order, account: Account | null | undefined, sar: (n: number) => string): NextStep {
  const pick = order.delivery.mode === 'pickup';
  const approved = account?.status === 'approved';
  if (order.status === 'rejected') {
    return {
      tone: 'bad',
      icon: 'x',
      title: 'تعذّر قبول الطلب',
      desc: 'سبب الرفض: ' + (order.rejectReason || 'لم تُقبل بيانات الطلب.') + ' لم يتم خصم أي مبلغ.',
      ...(approved ? { action: 'newOrder' as const, actionLabel: 'تقديم طلب جديد' } : {}),
    };
  }
  if (account?.status === 'rejected') {
    return {
      tone: 'bad',
      icon: 'user',
      title: 'لا يمكن متابعة الطلب',
      desc: 'رُفض طلب تسجيل حسابك، لذلك لن يُعالج هذا الطلب ولن يُطلب منك أي دفع.',
    };
  }
  if (order.status === 'review') {
    return account?.status === 'pending'
      ? {
          tone: 'info',
          icon: 'clock',
          title: 'حسابك وطلبك قيد المراجعة',
          desc: 'تراجع الجهة المختصة بيانات حسابك وطلبك. يتاح الدفع بعد اعتماد الحساب وقبول الطلب، ولا يلزمك أي إجراء الآن.',
        }
      : {
          tone: 'info',
          icon: 'clock',
          title: 'طلبك قيد المراجعة',
          desc: 'تراجع الجهة المختصة بيانات طلبك. لا يلزمك أي إجراء الآن، وسنُشعرك فور اتخاذ القرار. يتاح الدفع بعد قبول الطلب.',
        };
  }
  if (order.status === 'accepted') {
    if (!approved) {
      return {
        tone: 'info',
        icon: 'user',
        title: 'تم قبول الطلب — بانتظار اعتماد حسابك',
        desc: 'قُبل طلبك، ويتاح الدفع فور اعتماد حسابك من الجهة المختصة.',
      };
    }
    const p = order.payment;
    if (p.state === 'verifying') {
      return {
        tone: 'info',
        icon: 'bank',
        title: 'بانتظار التحقق من التحويل',
        desc: 'استلمنا إثبات التحويل ونتحقق منه. هذا لا يعني تأكيد الدفع، ويبدأ التجهيز بعد التحقق.',
      };
    }
    if (p.state === 'unconfirmed') {
      return {
        tone: 'info',
        icon: 'clock',
        title: 'لم يتأكد الدفع بعد',
        desc: 'لم تصلنا نتيجة العملية من جهة الدفع حتى الآن. لا تُعِد الدفع قبل تحديث الحالة حتى لا يُخصم المبلغ مرتين.',
        action: 'refresh',
        actionLabel: 'تحديث حالة الدفع',
      };
    }
    if (p.state === 'failed') {
      return {
        tone: 'bad',
        icon: 'x',
        title: 'لم تكتمل عملية الدفع',
        desc: (p.failReason || 'تعذّر إتمام الدفع.') + ' لم يُخصم أي مبلغ، والطلب ما زال بانتظار الدفع.',
        action: 'retry',
        actionLabel: 'إعادة المحاولة',
      };
    }
    if (p.method === 'transfer') {
      return {
        tone: 'gold',
        icon: 'bank',
        title: 'بانتظار التحويل البنكي',
        desc: 'حوّل ' + sar(order.total) + ' واكتب رقم الطلب كمرجع، ثم أرسل إثبات التحويل. لن يبدأ التجهيز قبل التحقق.',
        action: 'transfer',
        actionLabel: 'عرض بيانات التحويل',
      };
    }
    return {
      tone: 'gold',
      icon: 'card',
      title: 'تمت الموافقة — الدفع مطلوب',
      desc: 'يمكنك الآن دفع ' + sar(order.total) + ' لبدء تجهيز طلبك.',
      action: 'pay',
      actionLabel: 'إتمام الدفع',
    };
  }
  if (order.status === 'preparing') {
    return { tone: 'ok', icon: 'ok', title: 'تم الدفع — الطلب قيد التجهيز', desc: 'تم تأكيد الدفع. نحضّر طلبك في المستودع وسنرسل لك التحديثات عبر الجوال.', invoice: true };
  }
  if (order.status === 'ready') {
    return {
      tone: 'ok',
      icon: 'box',
      title: pick ? 'طلبك جاهز للاستلام' : 'طلبك جاهز للشحن',
      desc: pick ? 'سنرسل لك رمز الاستلام عبر الجوال.' : 'سنرسل لك رقم الشحنة عبر الجوال.',
      invoice: true,
    };
  }
  return { tone: 'ok', icon: 'ok', title: 'اكتمل الطلب', desc: pick ? 'تم تسليم الطلب في المستودع.' : 'تم توصيل الطلب إلى العنوان.', invoice: true };
}

export interface Stage {
  t: string;
  sub: string;
  done: boolean;
  cur: boolean;
  bad?: boolean;
}

/** Order timeline: submitted → review/approved → payment → preparing → ready → completed. */
export function orderStages(order: Order, account?: Account | null): Stage[] {
  const pick = order.delivery.mode === 'pickup';
  const paid = order.payment.state === 'paid';
  const approvedAcct = !account || account.status === 'approved';
  const idx = { review: 1, rejected: 1, accepted: 2, preparing: 3, ready: 4, completed: 5 }[order.status];
  if (order.status === 'rejected') {
    return [
      { t: 'تم تقديم الطلب', sub: order.date, done: true, cur: false },
      { t: 'تم رفض الطلب', sub: 'لم يُقبل الطلب، ولا يلزم أي دفع.', done: false, cur: true, bad: true },
    ];
  }
  const p = order.payment;
  const paySub =
    order.status === 'review'
      ? 'يتاح الدفع بعد قبول الطلب' + (approvedAcct ? '' : ' واعتماد حسابك')
      : paid
        ? (p.method === 'transfer' ? 'تحويل بنكي' : p.method === 'applepay' ? 'Apple Pay' : 'مدى') + ' — مدفوع'
        : !approvedAcct
          ? 'يتاح الدفع بعد اعتماد حسابك'
          : p.state === 'verifying'
            ? 'تم استلام إثبات التحويل، وبانتظار التحقق منه. لن يبدأ التجهيز قبل التأكيد.'
            : p.state === 'failed'
              ? 'فشلت المحاولة الأخيرة. يمكنك إعادة المحاولة أو اختيار وسيلة دفع أخرى.'
              : p.state === 'unconfirmed'
                ? 'بانتظار نتيجة العملية من جهة الدفع.'
                : 'تمت الموافقة على طلبك. يرجى إتمام الدفع لبدء التجهيز.';
  const payLabel = paid
    ? 'تم الدفع'
    : order.status === 'accepted'
      ? !approvedAcct
        ? 'بانتظار اعتماد الحساب'
        : p.state === 'failed'
          ? 'فشل الدفع'
          : p.state === 'verifying'
            ? 'بانتظار التحقق'
            : p.state === 'unconfirmed'
              ? 'جارٍ تأكيد الدفع'
              : 'بانتظار الدفع'
      : 'الدفع';
  const list: Array<Omit<Stage, 'done' | 'cur'>> = [
    { t: 'تم تقديم الطلب', sub: order.date },
    {
      t: order.status === 'review' ? 'قيد المراجعة' : 'تمت الموافقة',
      sub: order.status === 'review' ? 'تراجع الجهة المختصة بيانات الطلب.' : 'تمت مراجعة البيانات والموافقة على الطلب.',
    },
    { t: payLabel, sub: paySub },
    { t: 'قيد التجهيز', sub: paid ? 'نحضّر طلبك في المستودع' : 'يبدأ التجهيز بعد تأكيد الدفع' },
    {
      t: pick ? 'جاهز للاستلام' : 'جاهز للشحن',
      sub: pick ? 'سنرسل رمز الاستلام عبر الجوال' : 'سنرسل رقم الشحنة عبر الجوال',
    },
    { t: 'مكتمل', sub: pick ? 'تسليم الطلب في المستودع' : 'توصيل الطلب إلى العنوان' },
  ];
  return list.map((s, i) => ({ ...s, done: i < idx || (order.status === 'completed' && i === 5), cur: i === idx && order.status !== 'completed' }));
}

/** Totals for a cart: non-profit entities get 50% off, delivery costs 29 SAR, VAT 15%. */
export function computeTotals(lines: Array<{ qty: number; price: number }>, opts: { delivery: 'pickup' | 'address'; nonProfit: boolean }) {
  const subtotal = lines.reduce((a, l) => a + l.qty * l.price, 0);
  const shipping = opts.delivery === 'address' ? 29 : 0;
  const discount = opts.nonProfit ? Math.round(subtotal * 0.5) : 0;
  const base = Math.max(0, subtotal - discount + shipping);
  const vat = Math.round(base * 0.15);
  return { subtotal, shipping, discount, vat, total: base + vat };
}
