import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IFactorPosition,
} from './factorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPosition extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	factorPositions?: IFactorPosition[];

	// Transient Properties

	// Public Methods
	
}


