import {
	ISystemGeneratedRow,
} from '../row/systemgeneratedrow';
import {
	IRatingReason,
} from './ratingreason';
import {
	ILanguage,
} from '../language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IRatingReasonTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;

	// Non-Id Relations
	reason?: IRatingReason;
	language?: ILanguage;

	// Transient Properties

	// Public Methods
	
}


