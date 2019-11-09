import {
	IImmutableActorRow,
} from '../../../infrastructure/immutableactorrow';
import {
	IPollVariation,
} from '../pollvariation';
import {
	ILanguage,
} from '../../../infrastructure/language';
import {
	ITranslationType,
} from '../../../infrastructure/translationtype';
import {
	IPollLocationTimeFrame,
} from '../../locationtimeframe/polllocationtimeframe';
import {
	IUserPollVariationTranslationRating,
} from '../../user/userpollvariationtranslationrating';
import {
	IPollVariationTranslationRatingCount,
} from './count/pollvariationtranslationratingcount';
import {
	IPollVariationFactorTranslation,
} from './pollvariationfactortranslation';
import {
	IPollVariationPositionTranslation,
} from './pollvariationpositiontranslation';
import {
	IPollVariationTranslationOpinionCount,
} from './count/pollvariationtranslationopinioncount';
import {
	IPollVariationTranslationOpinionRatingCount,
} from './count/pollvariationtranslationopinionratingcount';
import {
	IPollVariationTranslationVoteCount,
} from './count/pollvariationtranslationvotecount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;

	// Non-Id Relations
	pollVariation?: IPollVariation;
	language?: ILanguage;
	type?: ITranslationType;
	createdAtLocationTimeFrame?: IPollLocationTimeFrame;
	parent?: IPollVariationTranslation;
	children?: IPollVariationTranslation[];
	ratings?: IUserPollVariationTranslationRating[];
	ratingCounts?: IPollVariationTranslationRatingCount[];
	factors?: IPollVariationFactorTranslation[];
	positions?: IPollVariationPositionTranslation[];
	opinionCounts?: IPollVariationTranslationOpinionCount[];
	opinionRatingCounts?: IPollVariationTranslationOpinionRatingCount[];
	voteCounts?: IPollVariationTranslationVoteCount[];

	// Transient Properties

	// Public Methods
	
}


