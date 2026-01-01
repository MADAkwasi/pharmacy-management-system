export interface SaleItem {
  medicationId: string;
  medicationName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export type PaymentMethod = 'cash' | 'card' | 'mobile_money';
export type SaleStatus = 'pending' | 'completed' | 'cancelled' | 'refunded';

export interface Sale {
  id: string;
  customerId?: string;
  customerName: string;
  items: SaleItem[];

  subtotal: number;
  tax: number;
  discount: number;
  total: number;

  paymentMethod: PaymentMethod;
  status: SaleStatus;
  createdAt: string;
}
