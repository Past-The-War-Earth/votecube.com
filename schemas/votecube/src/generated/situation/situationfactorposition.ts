import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituation,
} from './situation';
import {
	IFactor,
} from '../factor/factor';
import {
	IPosition,
} from '../factor/position';



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
	factor?: IFactor;
	position?: IPosition;

	// Transient Properties

	// Public Methods
	
}


