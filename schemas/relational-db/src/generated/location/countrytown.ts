import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';
import {
	ICountry,
} from './country';
import {
	ITown,
} from './town';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICountryTown extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations
	country: ICountry;
	town: ITown;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


