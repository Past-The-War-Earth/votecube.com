import {
	IImmutableActorRow,
} from '../infrastructure/immutableactorrow';
import {
	IFactorVariationTranslation,
} from './factorvariationtranslation';
import {
	IFactorPosition,
} from './position/factorposition';
import {
	IFactorVariation,
} from './factorvariation';
import {
	IFactorSkinVariation,
} from './factorskinvariation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactor extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	parentTranslation?: IFactorVariationTranslation;
	parent?: IFactor;
	children?: IFactor[];
	factorPositions?: IFactorPosition[];
	variations?: IFactorVariation[];
	skins?: IFactorSkinVariation[];

	// Transient Properties

	// Public Methods
	
}


