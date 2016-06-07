import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {AppFormBuilder} from './builder.component';
import {AppFormPreview} from './preview.component';
import '../../../public/css/reset.css';
import '../../../public/css/blueprint/screen.css';

@Component({
  selector: 'my-app',
  template: `
	<main>
		<div>{{title}}</div>
		<div>
			<a [routerLink]="['Preview']">preview</a>
			<a [routerLink]="['Builder']">builder</a>
		</div>
		<router-outlet></router-outlet>
	</main>
`,
  styles: [require('./forms.component.css')],
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([{
	name: 'Preview',
	path: '/preview',
	component: AppFormPreview
}, {
	name: 'Builder',
	path: '/builder',
	component: AppFormBuilder
}])
export class AppComponent { 
	title = 'Router demo';
}