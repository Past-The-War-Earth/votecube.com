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
	SituationIdeaVDescriptor,
} from '../idea/vsituationidea';
import {
	SituationIdea,
} from '../../ddl/idea/SituationIdea';
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
	ISituationIdeaReason,
} from './situationideareason';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationIdeaReasonVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	isPositiveOutcome?: boolean | IVBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationIdea?: SituationIdeaVDescriptor<SituationIdea>
	reason?: ReasonVDescriptor<Reason>
	reasonCubeDisplay?: ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>

}


