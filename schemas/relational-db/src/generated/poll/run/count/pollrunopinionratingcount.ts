import {
	ISystemGeneratedRow,
} from '../../../infrastructure/row/systemgeneratedrow';
import {
	IPollRun,
} from '../pollrun';
import {
	IRating,
} from '../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRunOpinionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	run?: IPollRun;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


