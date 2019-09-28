import {
	IImmutableRow,
} from '../infrastructure/immutablerow';
import {
	IPollOpinion,
} from './pollopinion';
import {
	IPollVariation,
} from '../poll/variation/pollvariation';
import {
	IVoteVariation,
} from '../vote/votevariation';
import {
	ILanguage,
} from '../infrastructure/language';
import {
	IPollLocationTimeFrame,
} from '../poll/locationtimeframe/polllocationtimeframe';
import {
	IPollOpinionVersionRating,
} from './user/pollopinionversionrating';
import {
	IPollOpinionVersionTranslation,
} from './translation/pollopinionversiontranslation';
import {
	IFactorOpinionVersion,
} from './factoropinionversion';
import {
	IPollOpinionVersionRatingCount,
} from './count/pollopinionversionratingcount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionVersion extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollOpinion?: IPollOpinion;
	pollVariation?: IPollVariation;
	voteVariation?: IVoteVariation;
	language?: ILanguage;
	locationTimeFrame?: IPollLocationTimeFrame;
	parent?: IPollOpinionVersion;
	children?: IPollOpinionVersion[];
	ratings?: IPollOpinionVersionRating[];
	translations?: IPollOpinionVersionTranslation[];
	factors?: IFactorOpinionVersion[];
	ratingCounts?: IPollOpinionVersionRatingCount[];

	// Transient Properties

	// Public Methods
	
}


