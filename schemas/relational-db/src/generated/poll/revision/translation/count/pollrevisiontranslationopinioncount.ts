import {
	ISystemGeneratedRow,
} from '../../../../infrastructure/row/systemgeneratedrow';
import {
	IPollRevisionTranslation,
} from '../pollrevisiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionTranslationOpinionCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollRevisionTranslation?: IPollRevisionTranslation;

	// Transient Properties

	// Public Methods
	
}


