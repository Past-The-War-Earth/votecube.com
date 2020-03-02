import {
	IPollOpinionVersion,
} from './pollopinionversion';
import {
	IPollFactorRevision,
} from '../poll/revision/structure/pollfactorrevision';
import {
	ILanguage,
} from '../infrastructure/language';
import {
	IFactorOpinionVersionRating,
} from './user/factoropinionversionrating';
import {
	IFactorOpinionVersionTranslation,
} from './translation/factoropinionversiontranslation';
import {
	IPositionOpinionVersion,
} from './positionopinionversion';
import {
	IFactorOpinionVersionRatingCount,
} from './count/factoropinionversionratingcount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorOpinionVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollOpinionVersion?: IPollOpinionVersion;
	pollFactorRevision?: IPollFactorRevision;
	language?: ILanguage;
	ratings?: IFactorOpinionVersionRating[];
	translations?: IFactorOpinionVersionTranslation[];
	positions?: IPositionOpinionVersion[];
	ratingCounts?: IFactorOpinionVersionRatingCount[];

	// Transient Properties

	// Public Methods
	
}


