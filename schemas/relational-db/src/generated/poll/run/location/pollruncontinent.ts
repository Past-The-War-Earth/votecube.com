import {
	IContinent,
} from '../../../location/continent';
import {
	IPollRun,
} from '../pollrun';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRunContinent {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	continent?: IContinent;
	run?: IPollRun;

	// Transient Properties

	// Public Methods
	
}


