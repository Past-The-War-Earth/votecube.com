import {
	IPollRevisionOpinionVersion,
} from './pollrevisionopinionversion';
import {
	IOutcomeOpinionVersionTranslation,
} from './translation/outcomeopinionversiontranslation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IOutcomeOpinionVersion {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinionVersion?: IPollRevisionOpinionVersion;
	translations?: IOutcomeOpinionVersionTranslation[];

	// Transient Properties

	// Public Methods
	
}


