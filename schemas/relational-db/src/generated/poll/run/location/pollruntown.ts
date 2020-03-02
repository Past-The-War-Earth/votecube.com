import {
	ITown,
} from '../../../location/town';
import {
	IPollRun,
} from '../pollrun';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRunTown {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	town?: ITown;
	run?: IPollRun;

	// Transient Properties

	// Public Methods
	
}


