import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';
import {
	IState,
} from './state';
import {
	ICountyTown,
} from './countytown';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICounty extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	state?: IState;
	countyTowns?: ICountyTown;

	// Transient Properties

	// Public Methods
	
}


