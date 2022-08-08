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
	SituationIdeaVDescriptor,
} from '../idea/vsituationidea';
import {
	SituationIdea,
} from '../../ddl/idea/SituationIdea';
import {
	IdeaVDescriptor,
} from '../idea/videa';
import {
	Idea,
} from '../../ddl/idea/Idea';
import {
	AgreementReasonVDescriptor,
} from './vagreementreason';
import {
	AgreementReason,
} from '../../ddl/agreement/AgreementReason';
import {
	IAgreement,
} from './agreement';



////////////////////
//  API INTERFACE //
////////////////////

export interface AgreementVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	shareTotal?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationIdea?: SituationIdeaVDescriptor<SituationIdea>
	idea?: IdeaVDescriptor<Idea>
	agreementReasons?: AgreementReasonVDescriptor<AgreementReason>

}


