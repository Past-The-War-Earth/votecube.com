import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IUserPollVariationTranslation,
} from './userpollvariationtranslation';
import {
	IPollVariationTranslation,
} from '../variation/translation/pollvariationtranslation';
import {
	IPollLocationTimeFrame,
} from '../locationtimeframe/polllocationtimeframe';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollVariationTranslationRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	userPollVariationTranslation?: IUserPollVariationTranslation;
	pollVariationTranslation?: IPollVariationTranslation;
	locationTimeFrame?: IPollLocationTimeFrame;
	rating?: IRating;
	parent?: IUserPollVariationTranslationRating;
	child?: IUserPollVariationTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


