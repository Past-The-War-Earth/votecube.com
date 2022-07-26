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
	IdeaVDescriptor,
} from './videa';
import {
	IIdea,
} from './idea';
import {
	SituationVDescriptor,
	ISituation,
} from '@sapoto/core/lib/to_be_generated/runtime-index';
import {
	IdeaRatingVDescriptor,
} from './videarating';
import {
	IIdeaRating,
} from './idearating';
import {
	AgreementVDescriptor,
} from '../agreement/vagreement';
import {
	IAgreement,
} from '../agreement/agreement';
import {
	ReasonVDescriptor,
} from './vreason';
import {
	IReason,
} from './reason';
import {
	ISituationIdea,
} from './situationidea';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationIdeaVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	agreementShareTotal?: number | IVNumberField;
	numberOfAgreements?: number | IVNumberField;
	urgencyTotal?: number | IVNumberField;
	numberOfUrgencyRatings?: number | IVNumberField;
	numberOfReasons?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor;
	situation?: SituationVDescriptor;
	ideaRatings?: IdeaRatingVDescriptor;
	agreements?: AgreementVDescriptor;
	reasons?: ReasonVDescriptor;

}


