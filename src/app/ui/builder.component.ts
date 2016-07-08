import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormServices} from '../core/services';
import { RouterConfig, ROUTER_DIRECTIVES, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import * as partials from './partial';
import * as models from '../viewModel';
import {Store} from '../core';

import '../../../public/css/form-builder/forms-common.css';
import '../../../public/css/form-builder/forms-interface.css';
import '../../../public/css/form-builder/forms-modal.css';

@Component({
	selector: 'edit',
	moduleId: module.id,
	template: require('./builder.component.html'),
	providers: [FormServices],
	directives: [partials.formsSubMenuPartial]
})
export class AppFormBuilder implements OnInit, OnDestroy  {
	constructor(
			private _titleService: Title,
			private _formServices: FormServices,
			private _router: Router,
			private _activateRouter: ActivatedRoute
		) { }
	
	_model: models.FormViewModel;
	_paramsSub: any;

	ngOnInit() {
		this._titleService.setTitle('Edit Form - Drag N\' Drop FormBuilder'); 
		this._paramsSub = this._activateRouter.params.subscribe(params => {
			let id = +params['id'];
			let m = Store.formsList ? Store.formsList.Forms.filter(f => f.Id == id) : null;	
			if (m && m.length > 0)
				this._model = m[0];
		});
	}

	ngOnDestroy() {
		this._paramsSub.unsubscribe();
	}
}