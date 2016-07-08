import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, APP_ROUTER_PROVIDERS } from './app/ui/forms.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	Title
])
.catch((r) => {
	console && console.log(r);
});