import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IPoll,
} from '../poll';
import {
	IPollLocationTimeFrame,
} from '../locationtimeframe/polllocationtimeframe';
import {
	IUserPollVariationRating,
} from '../user/userpollvariationrating';
import {
	IPollVariationRatingCount,
} from './count/pollvariationratingcount';
import {
	IPollVariationLabel,
} from './pollvariationlabel';
import {
	IPollFactorPositionVariation,
} from './structure/pollfactorpositionvariation';
import {
	IPollFactorVariation,
} from './structure/pollfactorvariation';
import {
	IPollFactorSkinVariation,
} from './structure/pollfactorskinvariation';
import {
	IPollPositionVariation,
} from './structure/pollpositionvariation';
import {
	IChosenPollTranslation,
} from '../translation/chosenpolltranslation';
import {
	IPollVariationTranslation,
} from './translation/pollvariationtranslation';
import {
	IPollOpinion,
} from '../../opinion/pollopinion';
import {
	IPollVariationOpinionCount,
} from './count/pollvariationopinioncount';
import {
	IPollVariationOpinionRatingCount,
} from './count/pollvariationopinionratingcount';
import {
	IPollVariationVoteCount,
} from './count/pollvariationvotecount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	backgroundColor?: number;
	textColor?: number;

	// Non-Id Relations
	poll?: IPoll;
	createdAtLocationTimeFrame?: IPollLocationTimeFrame;
	parent?: IPollVariation;
	children?: IPollVariation[];
	ratings?: IUserPollVariationRating[];
	ratingCounts?: IPollVariationRatingCount[];
	variationLabels?: IPollVariationLabel[];
	pollFactorPositionVariations?: IPollFactorPositionVariation[];
	factors?: IPollFactorVariation[];
	factorSkins?: IPollFactorSkinVariation[];
	positions?: IPollPositionVariation[];
	chosenTranslations?: IChosenPollTranslation[];
	allTranslations?: IPollVariationTranslation[];
	opinions?: IPollOpinion[];
	opinionCounts?: IPollVariationOpinionCount[];
	opinionRatingCounts?: IPollVariationOpinionRatingCount[];
	voteCounts?: IPollVariationVoteCount[];

	// Transient Properties

	// Public Methods
	
}


