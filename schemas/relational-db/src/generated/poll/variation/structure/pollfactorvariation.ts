import {
	IImmutableRow,
} from '../../../infrastructure/immutablerow';
import {
	IPollVariation,
} from '../pollvariation';
import {
	IFactorVariation,
} from '../../../factor/factorvariation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorVariation extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollVariation?: IPollVariation;
	factorVariation?: IFactorVariation;
	parent?: IPollFactorVariation;
	children?: IPollFactorVariation[];

	// Transient Properties

	// Public Methods
	
}


