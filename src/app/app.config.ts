import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreFeatureModule, StoreModule, StoreRootModule } from '@ngrx/store';
import { appFeature, globalAppReducer } from '../Ngrx/Reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from '../guardAndInterceptor/api.interceptor';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * @description
 * The application configuration is a set of providers that are used to configure the Angular application.
 * The providers are used to configure the application in a way that is decoupled from the components and services.
 *
 * The providers are used to:
 * - Configure the router
 * - Enable animations
 * - Configure the HTTP client
 * - Configure the NgRx store
 *
 * The NgRx store is configured to use the globalAppReducer which is a reducer that is used to manage the state of the application.
 * The appFeature is a feature that is used to configure the NgRx store.
 *
 * The `provideHttpClient` provider is used to configure the HTTP client.
 * The `withInterceptors` function is used to add interceptors to the HTTP client.
 * The `apiInterceptor` is an interceptor that is used to add the `x-api-key` header to the HTTP requests.
 *
 * The `importProvidersFrom` function is used to import the providers from the NgRx store.
 *
 * The `provideAnimationsAsync` provider is used to enable animations in the application.
 * The `provideRouter` provider is used to configure the router.
 * The `provideZoneChangeDetection` provider is used to configure the zone change detection.
 *
 * The `eventCoalescing` property is used to configure the zone change detection.
 * The `eventCoalescing` property is set to `true` to enable event coalescing.
 */

const httpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './i18n/', '.json');
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    provideHttpClient(withInterceptors([apiInterceptor])),
    importProvidersFrom([StoreModule.forFeature(appFeature),StoreModule.forRoot(globalAppReducer)])
  ],
};

