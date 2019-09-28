import {
	ISystemGeneratedRow,
} from '../../infrastructure/systemgeneratedrow';
import {
	IPollOpinionVersion,
} from '../pollopinionversion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionVersionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	count?: number;

	// Non-Id Relations
	pollOpinionVersion?: IPollOpinionVersion;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


