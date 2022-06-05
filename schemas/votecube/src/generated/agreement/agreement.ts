import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituationIdea,
} from '../idea/situationidea';
import {
	IAgreementReason,
} from './agreementreason';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IAgreement extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	situationIdea?: ISituationIdea;
	agreementReasons?: IAgreementReason[];

	// Transient Properties

	// Public Methods
	
}


