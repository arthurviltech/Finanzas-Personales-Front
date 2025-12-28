import { Routes } from '@angular/router';

export const GASTOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/lista-gastos/lista-gastos.component')
      .then(m => m.ListaGastosComponent)
  }
];