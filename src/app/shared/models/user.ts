export interface User {
  id: string;
  email: string;
  name: string;
  role: Roles;
  isActive: boolean;
  createdAt: string;
  lastLoginAt: string;
}

export enum Roles {
  ADMIN = 'admin',
  PHARMACIST = 'pharmacist',
  SALES_ATTENDANT = 'sales-attendant',
}

export interface SelectOption {
  label: string;
  value: string;
}
