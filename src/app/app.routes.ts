import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../landing/landing.component').then(
        (v) => v.LandingComponent
      ),
  },
  {
    path: 'use-form-array',
    loadComponent: () =>
      import('../Forms/useformarray/useformarray.component').then(
        (v) => v.UseformarrayComponent
      ),
  },
   {
     path: '',
     redirectTo: 'home',
     pathMatch:'full'
   }
];
