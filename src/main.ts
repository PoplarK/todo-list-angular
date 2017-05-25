import 'reflect-metadata';
import 'core-js';
import 'zone.js';

// import css
import 'normalize.css';
import '../assets/styles/common.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('bootstrap success'))
  .catch(error => console.error(error));