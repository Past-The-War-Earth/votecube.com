import {
	IPollOpinionVersion,
} from './pollopinionversion';
import {
	IPollFactorVariation,
} from '../poll/variation/structure/pollfactorvariation';
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
	pollFactorVariation?: IPollFactorVariation;
	language?: ILanguage;
	ratings?: IFactorOpinionVersionRating[];
	translations?: IFactorOpinionVersionTranslation[];
	positions?: IPositionOpinionVersion[];
	ratingCounts?: IFactorOpinionVersionRatingCount[];

	// Transient Properties

	// Public Methods
	
}


