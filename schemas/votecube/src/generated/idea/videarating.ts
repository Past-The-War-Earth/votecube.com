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
	IdeaVDescriptor,
} from './videa';
import {
	Idea,
} from '../../ddl/idea/Idea';
import {
	SituationIdeaVDescriptor,
} from './vsituationidea';
import {
	SituationIdea,
} from '../../ddl/idea/SituationIdea';
import {
	IIdeaRating,
} from './idearating';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaRatingVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	urgencyRating?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor<Idea>
	situationIdea?: SituationIdeaVDescriptor<SituationIdea>

}


