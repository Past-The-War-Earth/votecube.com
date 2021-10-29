import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IFactorPosition,
} from './position/factorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactor extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	factorPositions?: IFactorPosition[];

	// Transient Properties

	// Public Methods
	
}


