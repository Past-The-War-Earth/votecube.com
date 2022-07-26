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
	SituationIdeaVDescriptor,
} from '../idea/vsituationidea';
import {
	ISituationIdea,
} from '../idea/situationidea';
import {
	IdeaVDescriptor,
} from '../idea/videa';
import {
	IIdea,
} from '../idea/idea';
import {
	AgreementReasonVDescriptor,
} from './vagreementreason';
import {
	IAgreementReason,
} from './agreementreason';
import {
	IAgreement,
} from './agreement';



////////////////////
//  API INTERFACE //
////////////////////

export interface AgreementVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	shareTotal?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationIdea?: SituationIdeaVDescriptor;
	idea?: IdeaVDescriptor;
	agreementReasons?: AgreementReasonVDescriptor;

}


