import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airport/airbridge-validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import {
	AgreementVDescriptor,
} from './vagreement';
import {
	IAgreement,
} from './agreement';
import {
	ReasonVDescriptor,
} from '../idea/vreason';
import {
	IReason,
} from '../idea/reason';
import {
	IAgreementReason,
} from './agreementreason';



////////////////////
//  API INTERFACE //
////////////////////

export interface AgreementReasonVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	axis?: string | IVStringField;
	share?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	agreement?: AgreementVDescriptor;
	reason?: ReasonVDescriptor;

}


