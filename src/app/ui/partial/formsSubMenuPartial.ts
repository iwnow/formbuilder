import { Component, OnInit, Input } from '@angular/core';
import {FormServices} from '../../core/services';
import {Constants} from '../../core/constants';
import * as models from '../../viewModel';

@Component({
	selector: 'formsSubMenuPartial',
	moduleId: module.id,
	template: require('./formsSubMenuPartial.html'),
	providers: [FormServices]
})
export class formsSubMenuPartial implements OnInit  {
	constructor(
			private _formServices: FormServices
		) { }
	
	@Input() model: models.FormViewModel;
	Constants = Constants;
	
	ngOnInit() {
	}
}