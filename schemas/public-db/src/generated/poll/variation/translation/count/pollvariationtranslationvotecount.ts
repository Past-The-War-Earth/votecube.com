import {
	ISystemGeneratedRow,
} from '../../../../infrastructure/systemgeneratedrow';
import {
	IPollVariationTranslation,
} from '../pollvariationtranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationTranslationVoteCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollVariationTranslation?: IPollVariationTranslation;

	// Transient Properties

	// Public Methods
	
}


