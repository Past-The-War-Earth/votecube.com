import {
	ISystemGeneratedRow,
} from '../infrastructure/systemgeneratedrow';
import {
	ICounty,
} from './county';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITown extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	county?: ICounty;

	// Transient Properties

	// Public Methods
	
}


