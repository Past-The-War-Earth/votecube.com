import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ISituationIdea,
} from '../idea/situationidea';
import {
	IIdea,
} from '../idea/idea';
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
	shareTotal?: number;

	// Non-Id Relations
	situationIdea?: ISituationIdea;
	idea?: IIdea;
	agreementReasons?: IAgreementReason[];

	// Transient Properties

	// Public Methods
	
}


