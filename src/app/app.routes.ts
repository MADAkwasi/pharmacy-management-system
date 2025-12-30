import { Routes } from '@angular/router';
import { Dashboard } from '@core/layout/dashboard/dashboard';

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('@features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: 'pharmacist',
    loadChildren: () =>
      import('@features/pharmacist/pharmacist.routes').then((m) => m.PHARMACIST_ROUTES),
  },
  {
    path: 'sales-attendant',
    loadChildren: () =>
      import('@features/sales-attendant/sales-attendant.routes').then(
        (m) => m.SALES_ATTENDANT_ROUTES
      ),
  },
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: 'inventory',
        loadComponent: () =>
          import('@shared/pages/inventory/inventory').then((DEFAULT) => DEFAULT.Inventory),
      },
    ],
  },
];
