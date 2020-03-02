import {
	ISystemGeneratedRow,
} from '../row/systemgeneratedrow';
import {
	IRating,
} from './rating';
import {
	ILanguage,
} from '../language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IRatingTranslation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;

	// Non-Id Relations
	rating?: IRating;
	language?: ILanguage;

	// Transient Properties

	// Public Methods
	
}


