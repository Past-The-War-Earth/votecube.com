import {
	IAirEntity,
} from '@airport/holding-pattern';
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

	// Non-Id Relations
	factor?: IFactor;
	position?: IPosition;

	// Transient Properties

	// Public Methods
	
}


