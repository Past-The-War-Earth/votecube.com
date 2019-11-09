import {
	IImmutableActorRow,
} from '../infrastructure/immutableactorrow';
import {
	IFactorVariation,
} from './factorvariation';
import {
	ILanguage,
} from '../infrastructure/language';
import {
	IFactor,
} from './factor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorVariationTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;

	// Non-Id Relations
	factorVariation?: IFactorVariation;
	language?: ILanguage;
	parent?: IFactorVariationTranslation;
	children?: IFactorVariationTranslation[];
	childFactors?: IFactor;

	// Transient Properties

	// Public Methods
	
}


