import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IApplication extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	host?: string;
	port?: number;

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


