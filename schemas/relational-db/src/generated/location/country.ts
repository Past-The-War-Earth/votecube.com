import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';
import {
	IContinent,
} from './continent';
import {
	IState,
} from './state';
import {
	ICountryTown,
} from './countrytown';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICountry extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	continent?: IContinent;
	states?: IState[];
	countryTowns?: ICountryTown;

	// Transient Properties

	// Public Methods
	
}


