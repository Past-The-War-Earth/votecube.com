import {
	ISystemGeneratedRow,
} from '../systemgeneratedrow';
import {
	ICountry,
} from '../../location/country';
import {
	IRating,
} from './rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IRatingSetting extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	key?: string;
	value?: string;

	// Non-Id Relations
	country?: ICountry;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


