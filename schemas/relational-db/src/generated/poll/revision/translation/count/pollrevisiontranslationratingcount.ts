import {
	ISystemGeneratedRow,
} from '../../../../infrastructure/row/systemgeneratedrow';
import {
	IPollRevisionTranslation,
} from '../pollrevisiontranslation';
import {
	IRating,
} from '../../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionTranslationRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollRevisionTranslation?: IPollRevisionTranslation;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


