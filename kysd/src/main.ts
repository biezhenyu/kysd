import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Router} from '@angular/router';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

if (sessionStorage.getItem('local')) {
  sessionStorage.removeItem('local');
}
if (sessionStorage.getItem('num')) {
  sessionStorage.removeItem('num');
}

let pathArray = window.location.href.split('/');
let appContext = pathArray[pathArray.length - 1];
let name = appContext.slice(5);
let local = '';
switch (name) {
  case 'CCAC':
    local = 'gasstation';
    break
  case 'HEC':
    local = 'hec';
    break;
  case 'HGS':
    local = 'lecture';
    break;
  case 'HHM':
    local = 'housekeeper';
    break;
}
sessionStorage.setItem('local', local);

