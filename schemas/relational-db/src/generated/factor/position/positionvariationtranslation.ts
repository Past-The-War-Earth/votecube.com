import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IPositionVariation,
} from './positionvariation';
import {
	ILanguage,
} from '../../infrastructure/language';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionVariationTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	description?: string;

	// Non-Id Relations
	positionVariation?: IPositionVariation;
	language?: ILanguage;
	parent?: IPositionVariationTranslation;
	children?: IPositionVariationTranslation[];

	// Transient Properties

	// Public Methods
	
}


