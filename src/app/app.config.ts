import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX'; // Importamos el locale de México
registerLocaleData(localeEsMx); // Registramos el locale
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
     provideHttpClient(withInterceptorsFromDi()),  // ← Importante para HttpClient
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'es-MX' }, // Configuramos el locale por defecto a español (México)
    provideCharts(withDefaultRegisterables())
  ]
};