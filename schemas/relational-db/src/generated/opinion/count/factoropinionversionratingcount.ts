import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IFactorOpinionVersion,
} from '../factoropinionversion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorOpinionVersionRatingCount extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	count?: number;

	// Non-Id Relations
	factorOpinionVersion?: IFactorOpinionVersion;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


