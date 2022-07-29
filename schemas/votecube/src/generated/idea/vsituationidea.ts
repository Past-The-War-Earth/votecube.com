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
	Idea,
} from '../../ddl/idea/Idea';
import {
	SituationVDescriptor,
	Situation,
} from '@sapoto/core/lib/to_be_generated/runtime-index';
import {
	IdeaRatingVDescriptor,
} from './videarating';
import {
	IdeaRating,
} from '../../ddl/idea/IdeaRating';
import {
	AgreementVDescriptor,
} from '../agreement/vagreement';
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
	ISituationIdea,
} from './situationidea';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationIdeaVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	agreementShareTotal?: number | IVNumberField;
	numberOfAgreements?: number | IVNumberField;
	urgencyTotal?: number | IVNumberField;
	numberOfUrgencyRatings?: number | IVNumberField;
	numberOfReasons?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor<Idea>
	situation?: SituationVDescriptor<Situation>
	ideaRatings?: IdeaRatingVDescriptor<IdeaRating>
	agreements?: AgreementVDescriptor<Agreement>
	reasons?: ReasonVDescriptor<Reason>

}


