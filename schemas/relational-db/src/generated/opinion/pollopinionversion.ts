import {
	IImmutableRow,
} from '../infrastructure/row/immutablerow';
import {
	IPollOpinion,
} from './pollopinion';
import {
	IPollRevision,
} from '../poll/revision/pollrevision';
import {
	IVoteRevision,
} from '../vote/voterevision';
import {
	ILanguage,
} from '../infrastructure/language';
import {
	IPollRun,
} from '../poll/run/pollrun';
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
	pollRevision?: IPollRevision;
	voteRevision?: IVoteRevision;
	language?: ILanguage;
	run?: IPollRun;
	parent?: IPollOpinionVersion;
	children?: IPollOpinionVersion[];
	ratings?: IPollOpinionVersionRating[];
	translations?: IPollOpinionVersionTranslation[];
	factors?: IFactorOpinionVersion[];
	ratingCounts?: IPollOpinionVersionRatingCount[];

	// Transient Properties

	// Public Methods
	
}


