import {
	ISystemGeneratedRow,
} from '../../../infrastructure/systemgeneratedrow';
import {
	IPollVariation,
} from '../pollvariation';
import {
	IRating,
} from '../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollVariation?: IPollVariation;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


