import { Sale } from '@shared/models/sales';

export const mockSales: Sale[] = [
  {
    id: '1',
    customerId: '1',
    customerName: 'John Smith',
    items: [
      {
        medicationId: '1',
        medicationName: 'Paracetamol 500mg',
        quantity: 2,
        unitPrice: 5.99,
        total: 11.98,
      },
      {
        medicationId: '5',
        medicationName: 'Omeprazole 20mg',
        quantity: 1,
        unitPrice: 9.99,
        total: 9.99,
      },
    ],
    subtotal: 21.97,
    tax: 1.76,
    discount: 0,
    total: 23.73,
    paymentMethod: 'card',
    status: 'completed',
    createdAt: '2026-01-02T09:40:00', // today
  },
  {
    id: '2',
    customerId: '2',
    customerName: 'Sarah Johnson',
    items: [
      {
        medicationId: '3',
        medicationName: 'Ibuprofen 400mg',
        quantity: 3,
        unitPrice: 7.49,
        total: 22.47,
      },
    ],
    subtotal: 22.47,
    tax: 1.8,
    discount: 2,
    total: 22.27,
    paymentMethod: 'cash',
    status: 'completed',
    createdAt: '2026-01-01T18:20:00', // yesterday
  },
  {
    id: '3',
    customerName: 'Walk-in Customer',
    items: [
      {
        medicationId: '1',
        medicationName: 'Paracetamol 500mg',
        quantity: 1,
        unitPrice: 5.99,
        total: 5.99,
      },
    ],
    subtotal: 5.99,
    tax: 0.48,
    discount: 0,
    total: 6.47,
    paymentMethod: 'cash',
    status: 'completed',
    createdAt: '2025-12-30T14:10:00', // 3 days ago
  },
  {
    id: '4',
    customerId: '3',
    customerName: 'Michael Brown',
    items: [
      {
        medicationId: '6',
        medicationName: 'Lisinopril 10mg',
        quantity: 1,
        unitPrice: 18.99,
        total: 18.99,
      },
    ],
    subtotal: 18.99,
    tax: 1.52,
    discount: 0,
    total: 20.51,
    paymentMethod: 'mobile_money',
    status: 'completed',
    createdAt: '2025-12-26T11:35:00', // ~1 week ago
  },
  {
    id: '5',
    customerName: 'Walk-in Customer',
    items: [
      {
        medicationId: '2',
        medicationName: 'Amoxicillin 250mg',
        quantity: 2,
        unitPrice: 12.99,
        total: 25.98,
      },
    ],
    subtotal: 25.98,
    tax: 2.08,
    discount: 0,
    total: 28.06,
    paymentMethod: 'card',
    status: 'completed',
    createdAt: '2025-12-10T09:00:00', // ~3 weeks ago
  },
  {
    id: '6',
    customerId: '4',
    customerName: 'Emily Davis',
    items: [
      {
        medicationId: '4',
        medicationName: 'Metformin 500mg',
        quantity: 1,
        unitPrice: 15.99,
        total: 15.99,
      },
      {
        medicationId: '3',
        medicationName: 'Ibuprofen 400mg',
        quantity: 2,
        unitPrice: 7.49,
        total: 14.98,
      },
    ],
    subtotal: 30.97,
    tax: 2.48,
    discount: 5,
    total: 28.45,
    paymentMethod: 'card',
    status: 'completed',
    createdAt: '2025-11-15T13:40:00', // ~1.5 months ago
  },
  {
    id: '7',
    customerName: 'Walk-in Customer',
    items: [
      {
        medicationId: '1',
        medicationName: 'Paracetamol 500mg',
        quantity: 5,
        unitPrice: 5.99,
        total: 29.95,
      },
    ],
    subtotal: 29.95,
    tax: 2.4,
    discount: 0,
    total: 32.35,
    paymentMethod: 'cash',
    status: 'refunded',
    createdAt: '2025-10-05T17:55:00', // ~3 months ago
  },
  {
    id: '8',
    customerId: '5',
    customerName: 'Daniel Wilson',
    items: [
      {
        medicationId: '5',
        medicationName: 'Omeprazole 20mg',
        quantity: 2,
        unitPrice: 9.99,
        total: 19.98,
      },
    ],
    subtotal: 19.98,
    tax: 1.6,
    discount: 0,
    total: 21.58,
    paymentMethod: 'mobile_money',
    status: 'completed',
    createdAt: '2025-08-22T10:15:00', // ~4 months ago
  },
  {
    id: '9',
    customerName: 'Walk-in Customer',
    items: [
      {
        medicationId: '3',
        medicationName: 'Ibuprofen 400mg',
        quantity: 1,
        unitPrice: 7.49,
        total: 7.49,
      },
    ],
    subtotal: 7.49,
    tax: 0.6,
    discount: 0,
    total: 8.09,
    paymentMethod: 'cash',
    status: 'cancelled',
    createdAt: '2025-05-12T08:50:00', // ~7 months ago
  },
  {
    id: '10',
    customerId: '6',
    customerName: 'Grace Thompson',
    items: [
      {
        medicationId: '6',
        medicationName: 'Lisinopril 10mg',
        quantity: 2,
        unitPrice: 18.99,
        total: 37.98,
      },
    ],
    subtotal: 37.98,
    tax: 3.04,
    discount: 0,
    total: 41.02,
    paymentMethod: 'card',
    status: 'completed',
    createdAt: '2025-01-18T15:30:00', // ~1 year ago
  },
];
