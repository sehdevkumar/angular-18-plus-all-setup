import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreFeatureModule, StoreModule, StoreRootModule } from '@ngrx/store';
import { appFeature, globalAppReducer } from '../Ngrx/Reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom([StoreModule.forFeature(appFeature),StoreModule.forRoot(globalAppReducer)])
  ],
};
