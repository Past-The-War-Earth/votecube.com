import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IIdeaSituation,
} from './ideasituation';
import {
	IFactor,
} from '../factor/factor';
import {
	IPosition,
} from '../factor/position';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IReason extends IRepositoryEntity {
	
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
	ideaSituation?: IIdeaSituation;
	factor?: IFactor;
	position?: IPosition;

	// Transient Properties

	// Public Methods
	
}


