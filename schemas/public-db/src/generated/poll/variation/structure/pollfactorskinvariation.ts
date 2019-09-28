import {
	IImmutableRow,
} from '../../../infrastructure/immutablerow';
import {
	IPollVariation,
} from '../pollvariation';
import {
	IFactorSkinVariation,
} from '../../../factor/factorskinvariation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorSkinVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factorSkinVariation?: IFactorSkinVariation;
	parent?: IPollFactorSkinVariation;
	children?: IPollFactorSkinVariation[];

	// Transient Properties

	// Public Methods
	
}


