import {
	IMutableActorRow,
} from '../../infrastructure/mutableactorrow';
import {
	IUserPollVariation,
} from './userpollvariation';
import {
	IPollVariationTranslation,
} from '../variation/translation/pollvariationtranslation';
import {
	IUserPollVariationTranslationRating,
} from './userpollvariationtranslationrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollVariationTranslation extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userPollVariation?: IUserPollVariation;
	variationTranslation?: IPollVariationTranslation;
	ratings?: IUserPollVariationTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


