import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airbridge/validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import {
	AgreementVDescriptor,
} from './vagreement';
import {
	Agreement,
} from '../../ddl/agreement/Agreement';
import {
	ReasonVDescriptor,
} from '../reason/vreason';
import {
	Reason,
} from '../../ddl/reason/Reason';
import {
	IAgreementReason,
} from './agreementreason';



////////////////////
//  API INTERFACE //
////////////////////

export interface AgreementReasonVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	share?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	agreement?: AgreementVDescriptor<Agreement>
	reason?: ReasonVDescriptor<Reason>

}


