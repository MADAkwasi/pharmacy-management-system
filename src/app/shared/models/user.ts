import { Roles } from './users';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Roles;
  isActive: boolean;
  createdAt: string;
  lastLoginAt: string;
}
