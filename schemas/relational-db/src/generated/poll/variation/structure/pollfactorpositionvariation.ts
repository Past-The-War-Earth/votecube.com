import {
	IImmutableRow,
} from '../../../infrastructure/immutablerow';
import {
	IPollVariation,
} from '../pollvariation';
import {
	IFactorPosition,
} from '../../../factor/position/factorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorPositionVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	axis?: string;
	dir?: number;

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factorPosition?: IFactorPosition;
	parent?: IPollFactorPositionVariation;
	children?: IPollFactorPositionVariation[];

	// Transient Properties

	// Public Methods
	
}


