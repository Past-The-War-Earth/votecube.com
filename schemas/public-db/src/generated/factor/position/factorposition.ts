import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IFactor,
} from '../factor';
import {
	IPosition,
} from './position';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorPosition extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	factor?: IFactor;
	position?: IPosition;

	// Transient Properties

	// Public Methods
	
}


