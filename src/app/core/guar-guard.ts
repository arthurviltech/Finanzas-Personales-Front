import { CanActivateFn } from '@angular/router';

export const guarGuard: CanActivateFn = (route, state) => {
  return true;
};
