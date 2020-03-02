import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IPoll,
} from '../poll';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRatingCount extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	count?: number;

	// Non-Id Relations
	poll?: IPoll;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


