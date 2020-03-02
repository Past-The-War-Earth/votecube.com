import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';
import {
	ICountry,
} from './country';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IContinent extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	countries?: ICountry[];

	// Transient Properties

	// Public Methods
	
}


