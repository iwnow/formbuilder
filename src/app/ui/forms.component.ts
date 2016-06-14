import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';
import {AppFormBuilder} from './builder.component';
import {AppFormPreview} from './preview.component';
import {FormServices} from '../core/services';
import '../../../public/css/reset.css';
import '../../../public/css/blueprint/screen.css';
//import '../../../public/favicon.ico';

@Component({
  selector: 'app',
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
	directives: [ROUTER_DIRECTIVES],
	providers: [FormServices]
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
export class AppComponent implements OnInit { 
	constructor(
			private _titleService: Title,
			private _formServices: FormServices
		) { }

	ngOnInit() {
		this._titleService.setTitle('Welcome to Form Builder'); 
		this._formServices.getForms().subscribe(forms => {
				console.log(forms);
		}, err => {
				console.error(err);
		});
	}
}