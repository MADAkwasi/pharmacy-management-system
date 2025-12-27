import { Routes } from '@angular/router';
import { Dashboard } from '../../core/layout/dashboard/dashboard';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        loadComponent: () => import('@shared/pages/home/home').then((DEFAULT) => DEFAULT.Home),
      },
      {
        path: 'user-management',
        loadComponent: () =>
          import('./presentation/pages/user-management/user-management').then(
            (DEFAULT) => DEFAULT.UserManagement
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./presentation/pages/settings/settings').then((DEFAULT) => DEFAULT.Settings),
      },
    ],
  },
];
