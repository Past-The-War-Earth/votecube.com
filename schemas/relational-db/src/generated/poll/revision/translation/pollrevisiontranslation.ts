import {
	IImmutableActorRow,
} from '../../../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../pollrevision';
import {
	ILanguage,
} from '../../../infrastructure/language';
import {
	ITranslationType,
} from '../../../infrastructure/translationtype';
import {
	IPollRun,
} from '../../run/pollrun';
import {
	IUserPollRevisionTranslationRating,
} from '../../user/userpollrevisiontranslationrating';
import {
	IPollRevisionTranslationRatingCount,
} from './count/pollrevisiontranslationratingcount';
import {
	IPollRevisionFactorTranslation,
} from './pollrevisionfactortranslation';
import {
	IPollRevisionPositionTranslation,
} from './pollrevisionpositiontranslation';
import {
	IPollRevisionTranslationOpinionCount,
} from './count/pollrevisiontranslationopinioncount';
import {
	IPollRevisionTranslationOpinionRatingCount,
} from './count/pollrevisiontranslationopinionratingcount';
import {
	IPollRevisionTranslationVoteCount,
} from './count/pollrevisiontranslationvotecount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;

	// Non-Id Relations
	pollRevision?: IPollRevision;
	language?: ILanguage;
	type?: ITranslationType;
	createdAtRun?: IPollRun;
	parent?: IPollRevisionTranslation;
	children?: IPollRevisionTranslation[];
	ratings?: IUserPollRevisionTranslationRating[];
	ratingCounts?: IPollRevisionTranslationRatingCount[];
	factors?: IPollRevisionFactorTranslation[];
	positions?: IPollRevisionPositionTranslation[];
	opinionCounts?: IPollRevisionTranslationOpinionCount[];
	opinionRatingCounts?: IPollRevisionTranslationOpinionRatingCount[];
	voteCounts?: IPollRevisionTranslationVoteCount[];

	// Transient Properties

	// Public Methods
	
}


