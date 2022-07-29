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
	LabelVDescriptor,
} from '../vlabel';
import {
	Label,
} from '../../ddl/Label';
import {
	IIdeaLabel,
} from './idealabel';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaLabelVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor<Idea>
	label?: LabelVDescriptor<Label>

}


