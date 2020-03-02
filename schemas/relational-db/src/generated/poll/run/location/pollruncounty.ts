import {
	ICounty,
} from '../../../location/county';
import {
	IPollRun,
} from '../pollrun';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRunCounty {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	country?: ICounty;
	run?: IPollRun;

	// Transient Properties

	// Public Methods
	
}


