import {
	IImmutableRow,
} from '../infrastructure/row/immutablerow';
import {
	IPollRevisionOpinion,
} from './pollrevisionopinion';
import {
	IVoteRevision,
} from '../vote/voterevision';
import {
	ILanguage,
} from '../infrastructure/language';
import {
	IPollRevisionOpinionVersionRating,
} from './user/pollrevisionopinionversionrating';
import {
	IPollRevisionOpinionVersionTranslation,
} from './translation/pollrevisionopinionversiontranslation';
import {
	IFactorOpinionVersion,
} from './factoropinionversion';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinionVersion extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinion?: IPollRevisionOpinion;
	voteRevision?: IVoteRevision;
	language?: ILanguage;
	parent?: IPollRevisionOpinionVersion;
	children?: IPollRevisionOpinionVersion[];
	ratings?: IPollRevisionOpinionVersionRating[];
	translations?: IPollRevisionOpinionVersionTranslation[];
	factors?: IFactorOpinionVersion[];

	// Transient Properties

	// Public Methods
	
}


