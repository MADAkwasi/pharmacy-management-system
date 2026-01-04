import { Supplier } from '@shared/models/supplier';
import { SelectOption } from '@shared/models/user';

export const mockSuppliers: Supplier[] = [
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

export const paymentTermsOptions: SelectOption[] = [
  {
    label: 'Net 15',
    value: 'net-15',
  },
  {
    label: 'Net 30',
    value: 'net-30',
  },
  {
    label: 'Net 45',
    value: 'net-45',
  },
  {
    label: 'Net 60',
    value: 'net-60',
  },
  {
    label: 'OCD',
    value: 'ocd',
  },
];
