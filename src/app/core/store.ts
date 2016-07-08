import * as models from '../viewModel';

export class Store {
	private static _fl: models.FormCollectionViewModel;
	
	static get formsList(): models.FormCollectionViewModel {
		return Store._fl;
	}
	static set formsList(v: models.FormCollectionViewModel) {
		Store._fl = v;
	}
}