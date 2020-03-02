import {
	IPollRevisionTranslation,
} from './pollrevisiontranslation';
import {
	IFactorTranslation,
} from '../../../factor/factortranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionFactorTranslation {
	
	// Id Properties

	// Id Relations
	pollRevisionTranslation: IPollRevisionTranslation;
	factorTranslation: IFactorTranslation;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


