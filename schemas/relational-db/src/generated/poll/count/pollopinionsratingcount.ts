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

export interface IPollOpinionsRatingCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	poll?: IPoll;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


