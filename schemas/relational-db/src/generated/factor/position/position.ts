import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IPositionVariationTranslation,
} from './positionvariationtranslation';
import {
	IFactorPosition,
} from './factorposition';
import {
	IPositionVariation,
} from './positionvariation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPosition extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	parentTranslation?: IPositionVariationTranslation;
	parent?: IPosition;
	children?: IPosition[];
	factorPositions?: IFactorPosition[];
	variations?: IPositionVariation[];

	// Transient Properties

	// Public Methods
	
}


