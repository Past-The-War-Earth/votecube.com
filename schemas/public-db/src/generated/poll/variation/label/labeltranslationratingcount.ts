import {
	ISystemGeneratedRow,
} from '../../../infrastructure/systemgeneratedrow';
import {
	ILabelTranslation,
} from './labeltranslation';
import {
	IRating,
} from '../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ILabelTranslationRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	labelTranslation?: ILabelTranslation;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


