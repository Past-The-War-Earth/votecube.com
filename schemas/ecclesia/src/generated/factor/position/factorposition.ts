import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
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

	// Id Relations
	factor: IFactor;
	position: IPosition;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


