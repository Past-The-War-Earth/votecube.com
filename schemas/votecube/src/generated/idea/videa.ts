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
	IdeaLabelVDescriptor,
} from './videalabel';
import {
	IIdeaLabel,
} from './idealabel';
import {
	SituationIdeaVDescriptor,
} from './vsituationidea';
import {
	ISituationIdea,
} from './situationidea';
import {
	IdeaTopicVDescriptor,
} from './videatopic';
import {
	IIdeaTopic,
} from './ideatopic';
import {
	IIdea,
} from './idea';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;
	agreementShareTotal?: number | IVNumberField;
	numberOfAgreements?: number | IVNumberField;
	urgencyTotal?: number | IVNumberField;
	numberOfUrgencyRatings?: number | IVNumberField;
	numberOfReasons?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parent?: IdeaVDescriptor;
	children?: IdeaVDescriptor;
	ideaRatings?: IdeaRatingVDescriptor;
	agreements?: AgreementVDescriptor;
	reasons?: ReasonVDescriptor;
	ideaLabels?: IdeaLabelVDescriptor;
	situationIdeas?: SituationIdeaVDescriptor;
	ideaTopics?: IdeaTopicVDescriptor;

}


