import {
	ICounty,
} from '../../../location/county';
import {
	IPollLocationTimeFrame,
} from '../polllocationtimeframe';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLTFCounty {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	country?: ICounty;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}


