import {
	IImmutableRow,
} from '../../../infrastructure/immutablerow';
import {
	IPollVariation,
} from '../pollvariation';
import {
	IPositionVariation,
} from '../../../factor/position/positionvariation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollPositionVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	positionVariation?: IPositionVariation;
	parent?: IPollPositionVariation;
	children?: IPollPositionVariation[];

	// Transient Properties

	// Public Methods
	
}


