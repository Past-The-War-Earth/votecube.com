import {
	ISystemGeneratedRow,
} from '../../infrastructure/systemgeneratedrow';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IEmoji extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;
	cssClass?: string;

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


