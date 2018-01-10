import './polyfills'; // backwards compatibility
import 'hammerjs'; // Gesture support for Material

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/*
// Gebruiken voor maps
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
