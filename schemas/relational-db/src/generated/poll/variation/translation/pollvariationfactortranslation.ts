import {
	IPollVariationTranslation,
} from './pollvariationtranslation';
import {
	IFactorVariationTranslation,
} from '../../../factor/factorvariationtranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationFactorTranslation {
	
	// Id Properties

	// Id Relations
	pollVariationTranslation: IPollVariationTranslation;
	factorVariationTranslation: IFactorVariationTranslation;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


