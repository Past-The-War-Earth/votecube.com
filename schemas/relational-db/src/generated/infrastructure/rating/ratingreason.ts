import {
	ISystemGeneratedRow,
} from '../systemgeneratedrow';
import {
	IRatingReasonTranslation,
} from './ratingreasontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IRatingReason extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	translations?: IRatingReasonTranslation[];

	// Transient Properties

	// Public Methods
	
}


