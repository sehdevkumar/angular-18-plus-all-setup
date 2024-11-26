import { CanActivateFn } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  if (state.url === '/all-routes-component' || state.url === '/all-routes-component/comp1'){
      return true;
  }
  return false;
};
