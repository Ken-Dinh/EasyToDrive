import { CanActivateFn } from '@angular/router';
import { AuthguardValidationService } from '../service/authguard-validation.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const role: string = "admin";
  const token: string | null = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  const validation: AuthguardValidationService = inject(AuthguardValidationService);
  
  return validation.postAdmin({token: token}).pipe(
    map((data: any) => {
      return (data.role === role);
    })
  )
};
