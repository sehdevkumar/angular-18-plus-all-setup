import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../landing/landing.component').then((v) => v.LandingComponent),
  },
  {
    path: 'use-form-array',
    loadComponent: () =>
      import('../Forms/useformarray/useformarray.component').then(
        (v) => v.UseformarrayComponent
      ),
  },
  {
    path: 'multi-step-form',
    loadComponent: () =>
      import('../Forms/multistep/multistep.component').then(
        (v) => v.MultistepComponent
      ),
  },
  {
    path: 'rxjs-creator-opts',
    loadComponent: () =>
      import('../RxjsAdvanced/creator-opts/creator-opts.component').then(
        (d) => d.CreatorOptsComponent
      ),
  },
  {
    path: 'rxjs-join-opts',
    loadComponent: () =>
      import('../RxjsAdvanced/join-opts/join-opts.component').then(
        (d) => d.JoinOptsComponent
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
