import {
	IImmutableActorRow,
} from '../infrastructure/immutableactorrow';
import {
	IPollVariation,
} from '../poll/variation/pollvariation';
import {
	IFactor,
} from './factor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorVariation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factor?: IFactor;
	parent?: IFactorVariation;
	children?: IFactorVariation[];

	// Transient Properties

	// Public Methods
	
}


