export type PaymentTerms = 'COD' | 'Net 15' | 'Net 30' | 'Net 45' | 'Net 60';

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  paymentTerms: PaymentTerms;
  createdAt: string;
}
