import {Constants} from '../core/constants';

export class FormFieldValueViewModel {
	Id: number;
	FieldId: number;
	EntryId: string;
	Value: string;
	DateAdded: Date;
	UserId: string;
	FieldType: Constants.FieldType;
	FieldLabel: string;
	FieldOrder: number;
}