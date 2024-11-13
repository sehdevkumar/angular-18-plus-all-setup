import { CanActivateFn } from '@angular/router';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  if (state.url === '/use-form-array'){
    window.alert("Does not have permission")
    return false
  } return true;
};
