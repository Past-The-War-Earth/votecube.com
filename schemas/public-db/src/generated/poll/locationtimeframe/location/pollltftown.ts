import {
	ITown,
} from '../../../location/town';
import {
	IPollLocationTimeFrame,
} from '../polllocationtimeframe';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLTFTown {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	town?: ITown;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}


