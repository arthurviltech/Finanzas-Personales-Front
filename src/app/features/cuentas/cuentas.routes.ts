import { Routes } from '@angular/router';

export const CUENTAS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/lista-cuentas/lista-cuentas.component')
      .then(m => m.ListaCuentasComponent)
  }
];