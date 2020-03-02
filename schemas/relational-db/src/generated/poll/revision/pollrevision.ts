import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPoll,
} from '../poll';
import {
	IPollRun,
} from '../run/pollrun';
import {
	IUserPollRevisionRating,
} from '../user/userpollrevisionrating';
import {
	IPollRevisionRatingCount,
} from './count/pollrevisionratingcount';
import {
	IPollRevisionLabel,
} from './pollrevisionlabel';
import {
	IPollFactorPositionRevision,
} from './structure/pollfactorpositionrevision';
import {
	IPollFactorRevision,
} from './structure/pollfactorrevision';
import {
	IPollFactorSkinRevision,
} from './structure/pollfactorskinrevision';
import {
	IPollPositionRevision,
} from './structure/pollpositionrevision';
import {
	IChosenPollTranslation,
} from '../translation/chosenpolltranslation';
import {
	IPollRevisionTranslation,
} from './translation/pollrevisiontranslation';
import {
	IPollOpinion,
} from '../../opinion/pollopinion';
import {
	IPollRevisionOpinionCount,
} from './count/pollrevisionopinioncount';
import {
	IPollRevisionOpinionRatingCount,
} from './count/pollrevisionopinionratingcount';
import {
	IPollRevisionVoteCount,
} from './count/pollrevisionvotecount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevision extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	ageSuitability?: number;

	// Non-Id Relations
	poll?: IPoll;
	createdAtRun?: IPollRun;
	parent?: IPollRevision;
	children?: IPollRevision[];
	ratings?: IUserPollRevisionRating[];
	ratingCounts?: IPollRevisionRatingCount[];
	revisionLabels?: IPollRevisionLabel[];
	pollFactorPositionRevisions?: IPollFactorPositionRevision[];
	factors?: IPollFactorRevision[];
	factorSkins?: IPollFactorSkinRevision[];
	positions?: IPollPositionRevision[];
	chosenTranslations?: IChosenPollTranslation[];
	allTranslations?: IPollRevisionTranslation[];
	opinions?: IPollOpinion[];
	opinionCounts?: IPollRevisionOpinionCount[];
	opinionRatingCounts?: IPollRevisionOpinionRatingCount[];
	voteCounts?: IPollRevisionVoteCount[];

	// Transient Properties

	// Public Methods
	
}


