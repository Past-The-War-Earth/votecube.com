import {
	ISystemGeneratedRow,
} from '../infrastructure/systemgeneratedrow';
import {
	ICountry,
} from './country';
import {
	IStateTown,
} from './statetown';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IState extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	country?: ICountry;
	stateTowns?: IStateTown;

	// Transient Properties

	// Public Methods
	
}


