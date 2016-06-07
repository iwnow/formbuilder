import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/ui/forms.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
	ROUTER_PROVIDERS
])
.catch((r) => {
	console && console.log(r);
});