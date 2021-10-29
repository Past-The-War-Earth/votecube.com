import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IFactor,
} from '../factor';
import {
	IPosition,
} from './position';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorPosition extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	factor?: IFactor;
	position?: IPosition;

	// Transient Properties

	// Public Methods
	
}


