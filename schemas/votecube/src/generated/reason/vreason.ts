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
	FactorVDescriptor,
} from '../factor/vfactor';
import {
	Factor,
} from '../../ddl/factor/Factor';
import {
	PositionVDescriptor,
} from '../factor/vposition';
import {
	Position,
} from '../../ddl/factor/Position';
import {
	IReason,
} from './reason';



////////////////////
//  API INTERFACE //
////////////////////

export interface ReasonVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factor?: FactorVDescriptor<Factor>
	position?: PositionVDescriptor<Position>

}


