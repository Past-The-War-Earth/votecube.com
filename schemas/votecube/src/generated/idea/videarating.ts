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
	SituationIdeaVDescriptor,
} from './vsituationidea';
import {
	ISituationIdea,
} from './situationidea';
import {
	IIdeaRating,
} from './idearating';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaRatingVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	urgencyRating?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor;
	situationIdea?: SituationIdeaVDescriptor;

}


