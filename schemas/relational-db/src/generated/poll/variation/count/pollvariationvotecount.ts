import {
	ISystemGeneratedRow,
} from '../../../infrastructure/systemgeneratedrow';
import {
	IPollVariation,
} from '../pollvariation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationVoteCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollVariation?: IPollVariation;

	// Transient Properties

	// Public Methods
	
}


