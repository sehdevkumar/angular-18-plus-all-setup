import { Routes } from '@angular/router';
import { roleGuardGuard } from '../guardAndInterceptor/role-guard.guard';

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
    canActivate: [roleGuardGuard],
  },
  {
    path: 'multi-step-form',
    loadComponent: () =>
      import('../Forms/multistep/multistep.component').then(
        (v) => v.MultistepComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'rxjs-creator-opts',
    loadComponent: () =>
      import('../RxjsAdvanced/creator-opts/creator-opts.component').then(
        (d) => d.CreatorOptsComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'rxjs-join-opts',
    loadComponent: () =>
      import('../RxjsAdvanced/join-opts/join-opts.component').then(
        (d) => d.JoinOptsComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'rxjs-transformation-opts',
    loadComponent: () =>
      import(
        '../RxjsAdvanced/transformation-opt/transformation-opt.component'
      ).then((d) => d.TransformationOptComponent),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'ngrx-store',
    loadComponent: () =>
      import('../Ngrx/consume-state/consume-state.component').then(
        (d) => d.ConsumeStateComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'change-detection',
    loadComponent: () =>
      import('../ChangeDetuction/root/root.component').then(
        (d) => d.RootComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'http-calls',
    loadComponent: () =>
      import('../HttpCall/HttpCall.component').then(
        (d) => d.HttpCallComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
