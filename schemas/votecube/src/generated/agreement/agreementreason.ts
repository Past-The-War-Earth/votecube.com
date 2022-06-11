import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IAgreement,
} from './agreement';
import {
	IReason,
} from '../idea/reason';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IAgreementReason extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	axis?: string;
	share?: number;

	// Non-Id Relations
	agreement?: IAgreement;
	reason?: IReason;

	// Transient Properties

	// Public Methods
	
}


