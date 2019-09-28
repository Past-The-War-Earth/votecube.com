import {
	ISystemGeneratedRow,
} from '../../../infrastructure/systemgeneratedrow';
import {
	IPollLocationTimeFrame,
} from '../polllocationtimeframe';
import {
	IRating,
} from '../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLTFOpinionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	locationTimeFrame?: IPollLocationTimeFrame;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


