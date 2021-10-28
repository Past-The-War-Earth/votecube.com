import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ICategory,
} from './category';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituation extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	theme?: ICategory;
	parent?: ISituation;
	children?: ISituation[];

	// Transient Properties

	// Public Methods
	
}


