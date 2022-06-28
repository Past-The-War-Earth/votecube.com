import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ISituationIdea,
} from '../idea/situationidea';
import {
	IIdeaRating,
} from '../idea/idearating';
import {
	IAgreementReason,
} from './agreementreason';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IAgreement extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	situationIdea?: ISituationIdea;
	idea?: IIdeaRating;
	agreementReasons?: IAgreementReason[];

	// Transient Properties

	// Public Methods
	
}


