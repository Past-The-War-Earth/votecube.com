import {
	IRepositoryEntity,
} from '@airport/holding-pattern';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICategory extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	childCategories?: ICategory[];
	parentCategory?: ICategory;

	// Transient Properties

	// Public Methods
	
}


