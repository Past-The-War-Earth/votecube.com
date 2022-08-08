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
	Idea,
} from '../../ddl/idea/Idea';
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
	IdeaLabelVDescriptor,
} from './videalabel';
import {
	IdeaLabel,
} from '../../ddl/idea/IdeaLabel';
import {
	SituationIdeaVDescriptor,
} from './vsituationidea';
import {
	SituationIdea,
} from '../../ddl/idea/SituationIdea';
import {
	IdeaTopicVDescriptor,
} from './videatopic';
import {
	IdeaTopic,
} from '../../ddl/idea/IdeaTopic';
import {
	IIdea,
} from './idea';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaVDescriptor<T>
    extends AirEntityVDescriptor<T> {
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
	parent?: IdeaVDescriptor<Idea>
	children?: IdeaVDescriptor<Idea>
	ideaRatings?: IdeaRatingVDescriptor<IdeaRating>
	agreements?: AgreementVDescriptor<Agreement>
	reasons?: ReasonVDescriptor<Reason>
	ideaLabels?: IdeaLabelVDescriptor<IdeaLabel>
	situationIdeas?: SituationIdeaVDescriptor<SituationIdea>
	ideaTopics?: IdeaTopicVDescriptor<IdeaTopic>

}


