import {FormFieldViewModel} from './formFieldViewModel';
import {FormFieldValueViewModel} from './formFieldValueViewModel';
import {Constants} from '../core/constants';

export class FormViewModel {
        
	Id: number;
	Title: string;
	NotificationEmail: string;
	Slug: string;
	DateAdded: Date;
	Fields: FormFieldViewModel[];
	Status: Constants.FormStatus;
	TabOrder: number;
	ConfirmationMessage: string;
	Entries: FormFieldValueViewModel[];
	GroupedEntries: Map<string, FormFieldValueViewModel[]>[];
	Theme: string;
	Embed: boolean;
	
	get HasTheme(): boolean {
		return !!this.Theme;
	}   
	
}