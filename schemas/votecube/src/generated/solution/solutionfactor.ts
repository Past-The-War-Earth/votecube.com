import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISolution,
} from './solution';
import {
	ISituationFactorPosition,
} from '../situation/situationfactorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISolutionFactor extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	axis?: string;
	share?: number;

	// Non-Id Relations
	solution?: ISolution;
	situationFactorPosition?: ISituationFactorPosition;

	// Transient Properties

	// Public Methods
	
}


