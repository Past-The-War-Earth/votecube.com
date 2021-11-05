import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituation,
} from '../situation/situation';
import {
	ISolutionFactor,
} from './solutionfactor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISolution extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	situation?: ISituation;
	factors?: ISolutionFactor;

	// Transient Properties

	// Public Methods
	
}


