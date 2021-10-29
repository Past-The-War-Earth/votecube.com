import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituation,
} from './situation';
import {
	IFactorPosition,
} from '../factor/position/factorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituationFactorPosition extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	axis?: string;
	dir?: number;
	factorNumber?: number;
	blue?: number;
	green?: number;
	red?: number;
	outcomeOrdinal?: string;

	// Non-Id Relations
	situation?: ISituation;
	factorPosition?: IFactorPosition;

	// Transient Properties

	// Public Methods
	
}


