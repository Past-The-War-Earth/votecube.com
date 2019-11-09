import {
	ISystemGeneratedRow,
} from '../infrastructure/systemgeneratedrow';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVoteType extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	description?: string;

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


