import {
	IFactorOpinionVersion,
} from './factoropinionversion';
import {
	IPollPositionRevision,
} from '../poll/revision/structure/pollpositionrevision';
import {
	ILanguage,
} from '../infrastructure/language';
import {
	IPositionOpinionVersionRating,
} from './user/positionopinionversionrating';
import {
	IPositionOpinionVersionTranslation,
} from './translation/positionopinionversiontranslation';
import {
	IPositionOpinionVersionRatingCount,
} from './count/positionopinionversionratingcount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionOpinionVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	factorOpinionVersion?: IFactorOpinionVersion;
	pollPositionRevision?: IPollPositionRevision;
	language?: ILanguage;
	ratings?: IPositionOpinionVersionRating[];
	translations?: IPositionOpinionVersionTranslation[];
	ratingCounts?: IPositionOpinionVersionRatingCount[];

	// Transient Properties

	// Public Methods
	
}


