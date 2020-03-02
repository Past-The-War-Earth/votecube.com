import {
	ISystemGeneratedRow,
} from '../../../infrastructure/row/systemgeneratedrow';
import {
	IPollRevision,
} from '../pollrevision';
import {
	IRating,
} from '../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollRevision?: IPollRevision;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


