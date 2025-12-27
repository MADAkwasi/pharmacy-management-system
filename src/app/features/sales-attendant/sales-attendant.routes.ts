import { Routes } from '@angular/router';
import { Dashboard } from '../../core/layout/dashboard/dashboard';

export const SALES_ATTENDANT_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        loadComponent: () => import('@shared/pages/home/home').then((DEFAULT) => DEFAULT.Home),
      },
    ],
  },
];
