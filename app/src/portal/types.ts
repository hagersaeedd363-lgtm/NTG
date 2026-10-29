/**
 * Portal domain model. Account approval and order approval are separate decisions:
 * an account is reviewed once (registration), every order is reviewed on its own.
 */

export type AccountStatus = 'pending' | 'approved' | 'rejected';
export type AccountType = 'individual' | 'company';
export type AuthMethod = 'nafath' | 'email';

/** Identity data returned by Nafath. Read-only everywhere in the portal. */
export interface Identity {
  fullName: string;
  nationalId: string;
  email: string;
  phone: string;
}

export type IdType = 'هوية وطنية' | 'إقامة';

/** Company details entered (or matched from the commercial register) at registration. */
export interface Company {
  entityType: string; // نوع الجهة
  name: string;
  cr: string;
  region: string;
  city: string;
  /** True when name/CR/region/city came from the commercial-register lookup. */
  registryMatch: boolean;
  repIdType: IdType | '';
  repId: string;
  repName: string;
  repPhone: string;
  repEmail: string;
}

export interface Account {
  nationalId: string;
  status: AccountStatus;
  type: AccountType;
  identity: Identity;
  company?: Company;
  /** Set when the user created a password for email sign-in. */
  password?: string;
  rejectReason?: string;
  /** Where registration started: from an order (Flow A) or from the navigation bar (Flow B). */
  entry: 'order' | 'register';
  submittedAt: string;
  /** A profile-change request awaiting review. The account stays approved meanwhile. */
  changeRequestAt?: string;
}

export type OrderStatus = 'review' | 'rejected' | 'accepted' | 'preparing' | 'ready' | 'completed';
export type PaymentMethod = 'mada' | 'applepay' | 'transfer';
export type PaymentState = 'none' | 'failed' | 'unconfirmed' | 'verifying' | 'paid';

export interface Payment {
  method: PaymentMethod;
  state: PaymentState;
  failReason?: string;
  txn?: string;
  paidAt?: string;
  proof?: string;
}

export interface OrderLine {
  title: string;
  qty: number;
  price: number;
  bottles: number;
  img: string;
}

export interface Delivery {
  mode: 'pickup' | 'address';
  region: string;
  city: string;
  warehouse: string;
  nationalAddress: string;
  mapAddress: string;
  lat: number | null;
  lng: number | null;
}

export interface Order {
  id: string;
  nationalId: string;
  date: string;
  status: OrderStatus;
  rejectReason?: string;
  lines: OrderLine[];
  subtotal: number;
  shipping: number;
  discount: number;
  vat: number;
  total: number;
  purpose: string;
  /** Company name or «أفراد», shown in order lists. */
  kindLabel: string;
  entityType: string;
  delivery: Delivery;
  receiver: { name: string; phone: string; email: string };
  contact: { name: string; phone: string; email: string };
  notes: string;
  deliveryNotes: string;
  invoice: string;
  payment: Payment;
  /** Sample record that ships only with the demo tools. */
  sample?: boolean;
}

/** Everything the simulated back office stores. */
export interface Db {
  accounts: Record<string, Account>;
  orders: Order[];
  seq: number;
}
