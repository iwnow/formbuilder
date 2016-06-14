import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import {FormCollectionViewModel} from '../viewModel/formCollectionViewModel';

@Injectable()
export class FormServices {
	constructor(
		private _http: Http
	){}

	formsUrl = 'http://localhost:35285/forms/FormCollection';

	getForms(): Observable<FormCollectionViewModel> {
		return this._http
			.post(this.formsUrl, '')
			.map(res => {
				let data = res.json();
				return data;
			})
			.catch(this.handleError);

	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		if (console) 
			console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}