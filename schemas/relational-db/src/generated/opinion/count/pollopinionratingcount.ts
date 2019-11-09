import {
	ISystemGeneratedRow,
} from '../../infrastructure/systemgeneratedrow';
import {
	IPollOpinion,
} from '../pollopinion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	count?: number;

	// Non-Id Relations
	pollOpinion?: IPollOpinion;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


