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
	LabelVDescriptor,
} from '../vlabel';
import {
	ILabel,
} from '../label';
import {
	IIdeaLabel,
} from './idealabel';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaLabelVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor;
	label?: LabelVDescriptor;

}


