import {
	ISystemGeneratedRow,
} from '../../../infrastructure/row/systemgeneratedrow';
import {
	ILabelTranslationRatingCount,
} from './labeltranslationratingcount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ILabelTranslation extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	name?: string;

	// Non-Id Relations
	counts?: ILabelTranslationRatingCount[];

	// Transient Properties

	// Public Methods
	
}


