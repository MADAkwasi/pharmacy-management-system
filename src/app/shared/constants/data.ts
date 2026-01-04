

export const mockPurchaseOrders = [
  {
    id: '1',
    supplierId: '1',
    supplierName: 'PharmaCorp Distributors',
    items: [
      {
        medicationId: '1',
        medicationName: 'Paracetamol 500mg',
        quantity: 500,
        unitCost: 3.5,
        total: 1750,
      },
      {
        medicationId: '3',
        medicationName: 'Ibuprofen 400mg',
        quantity: 300,
        unitCost: 4.5,
        total: 1350,
      },
    ],
    totalAmount: 3100,
    status: 'received',
    orderDate: '2024-12-20',
    receivedDate: '2024-12-23',
  },
  {
    id: '2',
    supplierId: '2',
    supplierName: 'MediHealth Supplies',
    items: [
      {
        medicationId: '2',
        medicationName: 'Amoxicillin 250mg',
        quantity: 200,
        unitCost: 8,
        total: 1600,
      },
    ],
    totalAmount: 1600,
    status: 'pending',
    orderDate: '2024-12-23',
  },
];
