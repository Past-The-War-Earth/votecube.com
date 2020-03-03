import {
	IFactorOpinionVersion,
} from './factoropinionversion';
import {
	IPositionOpinionVersionRating,
} from './user/positionopinionversionrating';
import {
	IPositionOpinionVersionTranslation,
} from './translation/positionopinionversiontranslation';



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
	ratings?: IPositionOpinionVersionRating[];
	translations?: IPositionOpinionVersionTranslation[];

	// Transient Properties

	// Public Methods
	
}


