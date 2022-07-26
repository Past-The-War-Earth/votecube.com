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
} from './vsituationidea';
import {
	ISituationIdea,
} from './situationidea';
import {
	IdeaVDescriptor,
} from './videa';
import {
	IIdea,
} from './idea';
import {
	FactorVDescriptor,
} from '../factor/vfactor';
import {
	IFactor,
} from '../factor/factor';
import {
	PositionVDescriptor,
} from '../factor/vposition';
import {
	IPosition,
} from '../factor/position';
import {
	IReason,
} from './reason';



////////////////////
//  API INTERFACE //
////////////////////

export interface ReasonVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	axis?: string | IVStringField;
	dir?: number | IVNumberField;
	factorNumber?: number | IVNumberField;
	blue?: number | IVNumberField;
	green?: number | IVNumberField;
	red?: number | IVNumberField;
	outcomeOrdinal?: string | IVStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationIdea?: SituationIdeaVDescriptor;
	idea?: IdeaVDescriptor;
	factor?: FactorVDescriptor;
	position?: PositionVDescriptor;

}


