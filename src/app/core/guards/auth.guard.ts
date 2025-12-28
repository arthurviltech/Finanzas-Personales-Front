
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Verifica si hay un token o modo invitado
  const token = localStorage.getItem('finanzas_token');
  const isGuest = localStorage.getItem('finanzas_guest');
  
  if (token || isGuest) {
    return true;
  }
  
  // Si no está autenticado, redirige al login
  router.navigate(['/auth/login']);
  return false;
};
