import {
	ICountry,
} from '../../../location/country';
import {
	IPollRun,
} from '../pollrun';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRunCountry {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	country?: ICountry;
	run?: IPollRun;

	// Transient Properties

	// Public Methods
	
}


