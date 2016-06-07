import {Constants} from '../core/constants';

export class FormFieldViewModel {
	Id: number;
	Label: string;
	FieldType: Constants.FieldType;
	IsRequired: boolean;
	MaxCharacters: number;
	HoverText: string;
	Hint: string;
	SubLabel: string;
	Size: string;
	Columns: number;
	Rows: number;
	Options: string;
	SelectedOption: string;
	Validation: string;
	Order: number;
	DateAdded: Date;
	Text: string;
	HelpText: string;
	DomId: number;
	MinimumAge: number;
	MaximumAge: number;
	Mode: Constants.FormFieldMode;
	Errors: string;
	InputValue: string;
	MaxFileSize: number;
	MinFileSize: number;
	ValidFileExtensions: string;
}