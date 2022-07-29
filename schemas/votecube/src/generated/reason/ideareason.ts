import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from '../idea/idea';
import {
	IReason,
} from './reason';
import {
	IReasonCubeDisplay,
} from './reasoncubedisplay';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdeaReason extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	isPositiveOutcome?: boolean;

	// Non-Id Relations
	idea?: IIdea;
	reason?: IReason;
	reasonCubeDisplay?: IReasonCubeDisplay;

	// Transient Properties

	// Public Methods
	
}


