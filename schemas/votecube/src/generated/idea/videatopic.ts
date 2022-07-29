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
	TopicVDescriptor,
	Topic,
} from '@sapoto/core/lib/to_be_generated/runtime-index';
import {
	IIdeaTopic,
} from './ideatopic';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaTopicVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor<Idea>
	topic?: TopicVDescriptor<Topic>

}


