import {
	IPollVariationTranslation,
} from './pollvariationtranslation';
import {
	IPositionVariationTranslation,
} from '../../../factor/position/positionvariationtranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationPositionTranslation {
	
	// Id Properties

	// Id Relations
	pollVariationTranslation: IPollVariationTranslation;
	positionVariationTranslation: IPositionVariationTranslation;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


