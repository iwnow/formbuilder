import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';
import {AppFormBuilder} from './builder.component';
import {AppFormPreview} from './preview.component';
import {FormServices} from '../core/services';
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
  <div id="page-body">
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
		<a href="#form-create" class="hyperlink-button black-button">Add Form</a>
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
				<a href="javascript:void(0)" (click)="onEditForm(f.Id)" class="hyperlink-button light-blue-button">Edit Form</a>
				<a href="javascript:void(0)" (click)="onPreviewForm(f.Id)" class="hyperlink-button green-button">View/Fill Form</a>
				<a href="javascript:void(0)" (click)="onSubmissionForm(f.Id)" class="hyperlink-button orange-button">View Submissions</a>
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
		this._titleService.setTitle('Welcome to Form Builder'); 
		this._formServices.getForms().subscribe(forms => {
				this._formsList = forms;
				this.log(this._formsList);
		}, err => {
				this.log(err);
		});
	}

	onDeleteForm(id:number) {
		if (confirm('Are you sure you want to delete this form?')) {
			this.log(id);
		}
	}

	onEditForm(id:number) {
		//#form-edit
		this.log(id);		
	}
	
	onPreviewForm(id:number) {
		//#form-preview
		this.log(id);		
		this._router.navigate(['Preview', {id: id}]);
	}
	
	onSubmissionForm(id:number) {
		//#form-entries
		this.log(id);		
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
@RouteConfig([{
	name: 'Preview',
	path: '/preview/:id',
	component: AppFormPreview
}, {
	name: 'Builder',
	path: '/builder',
	component: AppFormBuilder
}, {
	name: 'Forms',
	path: '/forms',
	component: FormsComponent,
	useAsDefault: true
}, { 
	path: '/**', 
	redirectTo: ['Forms'] 
}])
export class AppComponent { }

