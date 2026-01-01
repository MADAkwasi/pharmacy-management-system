import { Customer } from '@shared/models/customer';

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    dateOfBirth: '1985-03-15',
    createdAt: '2024-01-10',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 234-5678',
    address: '456 Oak Avenue, Los Angeles, CA 90001',
    dateOfBirth: '1990-07-22',
    createdAt: '2024-01-08',
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'm.brown@email.com',
    phone: '+1 (555) 345-6789',
    address: '789 Pine Road, Chicago, IL 60601',
    dateOfBirth: '1978-11-30',
    createdAt: '2024-01-05',
  },
];
