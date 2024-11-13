import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreFeatureModule, StoreModule, StoreRootModule } from '@ngrx/store';
import { appFeature, globalAppReducer } from '../Ngrx/Reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from '../guardAndInterceptor/api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([apiInterceptor])),
    importProvidersFrom([StoreModule.forFeature(appFeature),StoreModule.forRoot(globalAppReducer)])
  ],
};
