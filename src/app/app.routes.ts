import { Routes } from '@angular/router';
import { Dashboard } from '@core/layout/dashboard/dashboard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
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
      {
        path: 'point-of-sale',
        loadComponent: () =>
          import('@shared/pages/point-of-sale/point-of-sale').then(
            (DEFAULT) => DEFAULT.PointOfSale
          ),
      },
      {
        path: 'sales',
        loadComponent: () =>
          import('@shared/pages/sales-history/sales-history').then(
            (DEFAULT) => DEFAULT.SalesHistory
          ),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('@shared/pages/customers/customers').then((DEFAULT) => DEFAULT.Customers),
      },
      {
        path: 'suppliers',
        loadComponent: () =>
          import('@shared/pages/suppliers/suppliers').then((DEFAULT) => DEFAULT.Suppliers),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('@shared/pages/login/login').then((DEFAULT) => DEFAULT.Login),
  },
];
