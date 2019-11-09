import {
	IImmutableActorRow,
} from '../infrastructure/immutableactorrow';
import {
	ITheme,
} from './theme';
import {
	IPollType,
} from './polltype';
import {
	IUserPollRating,
} from './user/userpollrating';
import {
	IPollRatingCount,
} from './count/pollratingcount';
import {
	IChosenPollTranslation,
} from './translation/chosenpolltranslation';
import {
	IChosenPollVariation,
} from './variation/chosenpollvariation';
import {
	IPollLocationTimeFrame,
} from './locationtimeframe/polllocationtimeframe';
import {
	IPollVariation,
} from './variation/pollvariation';
import {
	IPollOpinionsCount,
} from './count/pollopinionscount';
import {
	IPollOpinionsRatingCount,
} from './count/pollopinionsratingcount';
import {
	IPollVoteCount,
} from './count/pollvotecount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPoll extends IImmutableActorRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	theme?: ITheme;
	type?: IPollType;
	parent?: IPoll;
	children?: IPoll[];
	ratings?: IUserPollRating[];
	ratingCounts?: IPollRatingCount[];
	chosenPollTranslations?: IChosenPollTranslation[];
	chosenVariations?: IChosenPollVariation[];
	locationTimeFrames?: IPollLocationTimeFrame[];
	allPollVariations?: IPollVariation[];
	opinionCounts?: IPollOpinionsCount[];
	opinionRatingCounts?: IPollOpinionsRatingCount[];
	voteCounts?: IPollVoteCount[];

	// Transient Properties

	// Public Methods
	
}


