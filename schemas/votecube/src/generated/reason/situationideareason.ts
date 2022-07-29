import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ISituationIdea,
} from '../idea/situationidea';
import {
	IReason,
} from './reason';
import {
	IReasonCubeDisplay,
} from './reasoncubedisplay';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituationIdeaReason extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	isPositiveOutcome?: boolean;

	// Non-Id Relations
	situationIdea?: ISituationIdea;
	reason?: IReason;
	reasonCubeDisplay?: IReasonCubeDisplay;

	// Transient Properties

	// Public Methods
	
}


