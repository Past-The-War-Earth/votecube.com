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

export interface IFactorSkinVariation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	backgroundColor?: number;
	textColor?: number;

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factor?: IFactor;
	parent?: IFactorSkinVariation;
	children?: IFactorSkinVariation[];

	// Transient Properties

	// Public Methods
	
}


