import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  authService.updatedLoggedIn();

  if (localStorage.getItem('login')) {
    return true;
  } else {
    const router: Router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
