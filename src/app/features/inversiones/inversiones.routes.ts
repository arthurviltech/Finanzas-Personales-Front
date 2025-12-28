import { Routes } from '@angular/router';

export const INVERSIONES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/lista-inversiones/lista-inversiones.component')
      .then(m => m.ListaInversionesComponent)
  }
];