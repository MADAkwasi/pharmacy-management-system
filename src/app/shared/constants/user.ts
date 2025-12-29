import { User, Roles, RoleOption } from '@shared/models/user';

export const DEMO_USERS: User[] = [
  {
    id: '1',
    email: 'admin@pharmacare.com',
    name: 'Admin User',
    role: Roles.ADMIN,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    lastLoginAt: '2025-01-05T09:15:00Z',
  },
  {
    id: '2',
    email: 'pharmacist@pharmacare.com',
    name: 'John Pharmacist',
    role: Roles.PHARMACIST,
    isActive: true,
    createdAt: '2024-01-15T00:00:00Z',
    lastLoginAt: '2025-01-04T14:42:00Z',
  },
  {
    id: '3',
    email: 'sales@pharmacare.com',
    name: 'Sarah Sales',
    role: Roles.SALES_ATTENDANT,
    isActive: true,
    createdAt: '2024-02-01T00:00:00Z',
    lastLoginAt: '2025-01-03T08:30:00Z',
  },
];

export const roleOptions: RoleOption[] = [
  {
    label: 'Administrator',
    value: 'admin',
  },
  {
    label: 'Pharmacist',
    value: 'pharmacist',
  },
  {
    label: 'Sales Attendant',
    value: 'sales-attendant',
  },
];
