import { CanActivateFn } from '@angular/router';

export const configurationGuard: CanActivateFn = (route, state) => {
  return false;
};
