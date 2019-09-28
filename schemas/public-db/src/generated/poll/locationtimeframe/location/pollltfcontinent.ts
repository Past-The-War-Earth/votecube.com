import {
	IContinent,
} from '../../../location/continent';
import {
	IPollLocationTimeFrame,
} from '../polllocationtimeframe';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLTFContinent {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	continent?: IContinent;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}


