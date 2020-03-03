import {
	IPollRevisionOpinionVersion,
} from './pollrevisionopinionversion';
import {
	IFactorOpinionVersionRating,
} from './user/factoropinionversionrating';
import {
	IFactorOpinionVersionTranslation,
} from './translation/factoropinionversiontranslation';
import {
	IPositionOpinionVersion,
} from './positionopinionversion';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorOpinionVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinionVersion?: IPollRevisionOpinionVersion;
	ratings?: IFactorOpinionVersionRating[];
	translations?: IFactorOpinionVersionTranslation[];
	positionOpinionVersions?: IPositionOpinionVersion[];

	// Transient Properties

	// Public Methods
	
}


