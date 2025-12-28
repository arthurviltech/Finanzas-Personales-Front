import { Routes } from '@angular/router';

export const TARJETAS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/lista-tarjetas/lista-tarjetas.component')
      .then(m => m.ListaTarjetasComponent)
  }
];