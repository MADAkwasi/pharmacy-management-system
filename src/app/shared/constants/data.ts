export const mockSuppliers = [
  {
    id: '1',
    name: 'PharmaCorp Distributors',
    contactPerson: 'Robert Williams',
    email: 'orders@pharmacorp.com',
    phone: '+1 (800) 555-1234',
    address: '1000 Industrial Blvd, Newark, NJ 07102',
    paymentTerms: 'Net 30',
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    name: 'MediHealth Supplies',
    contactPerson: 'Emily Chen',
    email: 'supply@medihealth.com',
    phone: '+1 (800) 555-5678',
    address: '2500 Medical Drive, Boston, MA 02101',
    paymentTerms: 'Net 45',
    createdAt: '2024-01-01',
  },
  {
    id: '3',
    name: 'Global Pharma Inc',
    contactPerson: 'David Martinez',
    email: 'sales@globalpharma.com',
    phone: '+1 (800) 555-9012',
    address: '500 Commerce Way, Dallas, TX 75201',
    paymentTerms: 'Net 30',
    createdAt: '2024-01-01',
  },
];

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
