import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
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
	IChosenPollRevision,
} from './revision/chosenpollrevision';
import {
	IPollRun,
} from './run/pollrun';
import {
	IPollRevision,
} from './revision/pollrevision';
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
	ageSuitability?: number;

	// Non-Id Relations
	theme?: ITheme;
	type?: IPollType;
	parent?: IPoll;
	children?: IPoll[];
	ratings?: IUserPollRating[];
	ratingCounts?: IPollRatingCount[];
	chosenPollTranslations?: IChosenPollTranslation[];
	chosenRevisions?: IChosenPollRevision[];
	runs?: IPollRun[];
	allPollRevisions?: IPollRevision[];
	opinionCounts?: IPollOpinionsCount[];
	opinionRatingCounts?: IPollOpinionsRatingCount[];
	voteCounts?: IPollVoteCount[];

	// Transient Properties

	// Public Methods
	
}


