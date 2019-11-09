import {
	ISystemGeneratedRow,
} from '../../../../infrastructure/systemgeneratedrow';
import {
	IPollVariationTranslation,
} from '../pollvariationtranslation';
import {
	IRating,
} from '../../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationTranslationRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollVariationTranslation?: IPollVariationTranslation;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


