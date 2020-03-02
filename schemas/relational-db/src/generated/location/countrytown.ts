import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';
import {
	ITown,
} from './town';
import {
	ICountry,
} from './country';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICountryTown extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations
	town: ITown;

	// Non-Id Properties

	// Non-Id Relations
	country?: ICountry;

	// Transient Properties

	// Public Methods
	
}


