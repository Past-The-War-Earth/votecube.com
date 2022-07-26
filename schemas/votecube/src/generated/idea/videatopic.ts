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
	TopicVDescriptor,
	ITopic,
} from '@sapoto/core/lib/to_be_generated/runtime-index';
import {
	IIdeaTopic,
} from './ideatopic';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaTopicVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor;
	topic?: TopicVDescriptor;

}


