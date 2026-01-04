import { DashboardNavigation } from '@shared/models/navlinks';
import {
  ChartColumn,
  LayoutDashboard,
  Monitor,
  Pill,
  ShoppingCart,
  Users,
  Van,
} from 'lucide-angular';

export const adminNavigation: DashboardNavigation[] = [
  {
    label: 'Dashboard',
    route: '/admin',
    icon: LayoutDashboard,
  },
  {
    label: 'Point of Sale',
    route: '/point-of-sale',
    icon: Monitor,
  },
  {
    label: 'Inventory',
    route: '/inventory',
    icon: Pill,
  },
  {
    label: 'Sales History',
    route: '/sales',
    icon: ShoppingCart,
  },
  {
    label: 'Customers',
    route: '/customers',
    icon: Users,
  },
  {
    label: 'Suppliers',
    route: '/suppliers',
    icon: Van,
  },
  {
    label: 'Reports',
    route: '/admin/reports',
    icon: ChartColumn,
  },
];

export const pharmacistNavigation: DashboardNavigation[] = [
  {
    label: 'Dashboard',
    route: '/pharmacist',
    icon: LayoutDashboard,
  },
  {
    label: 'Point of Sale',
    route: '/point-of-sale',
    icon: Monitor,
  },
  {
    label: 'Inventory',
    route: '/inventory',
    icon: Pill,
  },
  {
    label: 'Sales History',
    route: '/sales-history',
    icon: ShoppingCart,
  },
  {
    label: 'Customers',
    route: '/customers',
    icon: Users,
  },
  {
    label: 'Reports',
    route: '/pharmacist/reports',
    icon: ChartColumn,
  },
];

export const salesAttendantNavigation: DashboardNavigation[] = [
  {
    label: 'Point of Sale',
    route: '/point-of-sale',
    icon: Monitor,
  },
  {
    label: 'Sales History',
    route: '/sales-history',
    icon: ShoppingCart,
  },
  {
    label: 'Customers',
    route: '/customers',
    icon: Users,
  },
];
