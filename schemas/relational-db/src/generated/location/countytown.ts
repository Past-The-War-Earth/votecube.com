import {
	ISystemGeneratedRow,
} from '../infrastructure/systemgeneratedrow';
import {
	ICounty,
} from './county';
import {
	ITown,
} from './town';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ICountyTown extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations
	county: ICounty;
	town: ITown;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


