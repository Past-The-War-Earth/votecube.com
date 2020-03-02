import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IPositionOpinionVersion,
} from '../positionopinionversion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionOpinionVersionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	count?: number;

	// Non-Id Relations
	positionOpinionVersion?: IPositionOpinionVersion;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


