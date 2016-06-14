
export namespace Constants {
	export const FILESAVEPATHKEY = "filesavepath";
	export const FILESAVENAMEKEY = "filesavename";
	export const DEAULTFILEEXTENSIONS = ".jpg,.png,.gif,.pdf,.bmp,.zip";
	export const DEAULTMAXFILESIZEINKB = 5000;
	export const DEAULTMINFILESIZEINKB = 10;        


	export enum FormStatus {
		DRAFT = 0,
		PUBLISHED = 1
	}

	export enum FormFieldMode {
		EDIT,
		INPUT
	}

	export enum FieldType {
		TEXTBOX,
		TEXTAREA,
		RADIOBUTTON,
		PASSWORD,
		CHECKBOX,
		H1,
		HEADER,
		DROPDOWNLIST,
		FULLNAME,
		EMAIL,
		ADDRESS,
		PHONE,
		BIRTHDAYPICKER,
		FILEPICKER
	}
}