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
    createdAt: '2024-12-24T10:30:00',
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
    createdAt: '2024-12-24T11:45:00',
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
    createdAt: '2024-12-24T14:20:00',
  },
];
