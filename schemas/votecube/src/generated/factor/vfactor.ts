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
	IFactor,
} from './factor';



////////////////////
//  API INTERFACE //
////////////////////

export interface FactorVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	object?: string | IVStringField;
	action?: string | IVStringField;
	customText?: string | IVStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)

}


