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
} from '../idea/videa';
import {
	Idea,
} from '../../ddl/idea/Idea';
import {
	ReasonVDescriptor,
} from './vreason';
import {
	Reason,
} from '../../ddl/reason/Reason';
import {
	ReasonCubeDisplayVDescriptor,
} from './vreasoncubedisplay';
import {
	ReasonCubeDisplay,
} from '../../ddl/reason/ReasonCubeDisplay';
import {
	IIdeaReason,
} from './ideareason';



////////////////////
//  API INTERFACE //
////////////////////

export interface IdeaReasonVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	isPositiveOutcome?: boolean | IVBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaVDescriptor<Idea>
	reason?: ReasonVDescriptor<Reason>
	reasonCubeDisplay?: ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>

}


