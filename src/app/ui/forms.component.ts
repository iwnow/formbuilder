import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {AppFormBuilder} from './builder.component';
import {AppFormPreview} from './preview.component';
import {FormServices, Store} from '../core';
import * as models from '../viewModel';
import '../../../public/css/reset.css';
import '../../../public/css/blueprint/screen.css';
import '../../../public/css/plugins/tipsy.css';
import '../../../public/css/form-builder/forms-global.css';      
import '../../../public/css/plugins/jquery.jcrop.css'; 
import '../../../public/css/form-builder/forms-sprites.css'; 
//import '../../../public/favicon.ico';


@Component({
  selector: 'forms',
  template: `
  <div *ngIf="!anyForms" class="select-form-container align-center welcome-container">
       <img src="../../../public/images/spacer.gif" class="image-bg form-icon" alt="form icon" /><br />
       <h3 class="welcome-text">Welcome to the E-digit form builder version 1.2. You have not yet created any forms. Click the button below to begin</h3>
       <a href="#form-create" class="hyperlink-button light-blue-button welcome-button">Create Form</a>
	</div>
	<div  *ngIf="anyForms">
	<!--@Html.WriteMessages()-->
    <div class="select-form-container">
    <div class="add-form-guide info align-left welcome-instructions">
      Welcome to the form-builder version 1.2. You can create and edit forms using drag-and-drop functionality with the controls below. Click on "Add Form" to create a new 
      form, or manage existing forms from the table below.
    </div>
    <div class="add-form-button-container">        
		<a href="javascript:void(0)" (click)="onCreateForm()" class="hyperlink-button black-button">Add Form</a>
    </div>
    <table class="main-table">
    <thead>
      <tr>
        <th><h3>Form List</h3></th>        
        <th>&nbsp;</th>
      </tr>      
    </thead>
    <tbody>
    	<tr *ngFor="let f of forms">
			<td class="title-column">
				<span class="title">{{f.Title}}</span><br />
				<span class="date">{{dateFormat(f.DateAdded) | date}}</span>
			</td>       
			<td>       
				<a href="javascript:void(0)" (click)="onEditForm(f)" class="hyperlink-button light-blue-button">Edit Form</a>
				<a href="javascript:void(0)" (click)="onPreviewForm(f)" class="hyperlink-button green-button">View/Fill Form</a>
				<a href="javascript:void(0)" (click)="onSubmissionForm(f)" class="hyperlink-button orange-button">View Submissions</a>
				&nbsp;
				<a *ngIf="!(f.Fields.length > 0)" href="javascript:void(0)" 
						(click)="onDeleteForm(f.Id)"
						class="image-bg-link image-bg delete-icon-link" title="Delete form">&nbsp;</a>
			</td>
        </tr>    
    </tbody>
    </table>
	</div>
    </div>
	`,
  providers: [FormServices]
})
export class FormsComponent implements OnInit { 
	constructor(
			private _titleService: Title,
			private _formServices: FormServices,
			private _router: Router
		) { }
	
	private _formsList: models.FormCollectionViewModel;

	get forms() {
		if (!this._formsList)
			return null;
		return this._formsList.Forms;
	}

	get anyForms() {
		return this._formsList && this._formsList.Forms.length > 0;
	}

	ngOnInit() {
		this._titleService.setTitle('Welcome to Form Builder - Drag N\' Drop FormBuilder'); 
		this._formServices.getForms().subscribe(forms => {
				this._formsList = forms;
		}, err => {
				this.log(err);
		});
	}
	// href="#form-create"
	onCreateForm() {
		//this._router.navigate(['Builder']);
	}

	onDeleteForm(m: models.FormViewModel) {
		if (confirm('Are you sure you want to delete this form?')) {
			this.log(m.Id);
		}
	}

	onEditForm(m: models.FormViewModel) {
		//#form-edit
		this._router.navigate(['builder', m.Id]);		
	}
	
	onPreviewForm(m: models.FormViewModel) {
		//#form-preview
		this.log(m.Id);		
		this._router.navigate(['preview', m.Id]);
	}
	
	onSubmissionForm(m: models.FormViewModel) {
		//#form-entries	
	}

	dateFormat(d: string):any {
		var test = d.match(/\/Date\((.*)\)\//);
		if (!test[1])
			return null;
		return new Date(+test[1]);
	}

	log(msg:any) {
		if (this._formServices)
			this._formServices.logWrite(msg);
	}
}

const routes: RouterConfig = [{
	path: 'preview/:id',
	component: AppFormPreview
}, {
	path: 'builder/:id',
	component: AppFormBuilder
}, {
	path: '',
	component: FormsComponent
}];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

@Component({
  selector: 'app',
  template: `
	<main>
		<router-outlet></router-outlet>
	</main>
`,
  styles: [require('./forms.component.css')],
	directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }

