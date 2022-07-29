import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IAgreement,
} from './agreement';
import {
	IReason,
} from '../reason/reason';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IAgreementReason extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	share?: number;

	// Non-Id Relations
	agreement?: IAgreement;
	reason?: IReason;

	// Transient Properties

	// Public Methods
	
}


