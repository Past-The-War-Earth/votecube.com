import {
	ICountry,
} from '../../../location/country';
import {
	IPollLocationTimeFrame,
} from '../polllocationtimeframe';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollLTFCountry {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	country?: ICountry;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}


