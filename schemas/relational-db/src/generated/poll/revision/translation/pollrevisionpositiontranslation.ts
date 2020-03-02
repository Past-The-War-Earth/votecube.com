import {
	IPollRevisionTranslation,
} from './pollrevisiontranslation';
import {
	IPositionTranslation,
} from '../../../factor/position/positiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionPositionTranslation {
	
	// Id Properties

	// Id Relations
	pollRevisionTranslation: IPollRevisionTranslation;
	positionTranslation: IPositionTranslation;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


