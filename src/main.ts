import 'reflect-metadata';
import 'core-js';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('bootstrap success'))
  .catch(error => console.error(error));