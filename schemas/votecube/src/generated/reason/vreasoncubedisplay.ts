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
	IReasonCubeDisplay,
} from './reasoncubedisplay';



////////////////////
//  API INTERFACE //
////////////////////

export interface ReasonCubeDisplayVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	axis?: string | IVStringField;
	dir?: number | IVNumberField;
	factorNumber?: number | IVNumberField;
	blue?: number | IVNumberField;
	green?: number | IVNumberField;
	red?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}


