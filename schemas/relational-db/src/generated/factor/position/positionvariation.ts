import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IPollVariation,
} from '../../poll/variation/pollvariation';
import {
	IPosition,
} from './position';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionVariation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	createdAtPollVariation?: IPollVariation;
	position?: IPosition;
	parent?: IPositionVariation;
	children?: IPositionVariation[];

	// Transient Properties

	// Public Methods
	
}


