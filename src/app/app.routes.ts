import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes')
      .then(m => m.DASHBOARD_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'gastos',
    loadChildren: () => import('./features/gastos/gastos.routes')
      .then(m => m.GASTOS_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./features/tarjetas/tarjetas.routes')
      .then(m => m.TARJETAS_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'cuentas',
    loadChildren: () => import('./features/cuentas/cuentas.routes')
      .then(m => m.CUENTAS_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'inversiones',
    loadChildren: () => import('./features/inversiones/inversiones.routes')
      .then(m => m.INVERSIONES_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];