import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ISituationIdea,
} from './situationidea';
import {
	IIdea,
} from './idea';
import {
	IFactor,
} from '../factor/factor';
import {
	IPosition,
} from '../factor/position';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IReason extends IAirEntity {
	
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
	situationIdea?: ISituationIdea;
	idea?: IIdea;
	factor?: IFactor;
	position?: IPosition;

	// Transient Properties

	// Public Methods
	
}


