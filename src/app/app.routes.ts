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
      import('../HttpCall/HttpCall.component').then((d) => d.HttpCallComponent),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'dynamic-load-component',
    loadComponent: () =>
      import('../DynamicLoad/DynamicLoad.component').then(
        (d) => d.DynamicLoadComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'content-projection',
    loadComponent: () =>
      import('../ContentProjections/ContentProjections.component').then(
        (d) => d.ContentProjectionsComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'injector-hierarchy',
    loadComponent: () =>
      import('../InjectorsHierarchy/Injectors-Hierarchy.component').then(
        (d) => d.InjectorsHierarchyComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'injection-tokens',
    loadComponent: () =>
      import('../InjectionTokens/InjectionTokens.component').then(
        (d) => d.InjectionTokensComponent
      ),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'directives',
    loadComponent: () =>
      import('../directives/HotKey.directive').then((d) => d.HotKeyComponent),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('../pipes/transformString.pipe').then((d) => d.TransformStringComponent),
    canActivate: [roleGuardGuard],
  },
  {
    path: 'localization',
    loadComponent: () =>
      import('../Localizations/localization/localization.component').then((d) => d.LocalizationComponent),
    canActivate: [roleGuardGuard],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];
