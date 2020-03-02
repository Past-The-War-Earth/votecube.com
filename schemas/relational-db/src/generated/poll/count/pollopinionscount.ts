import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IPoll,
} from '../poll';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionsCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	poll?: IPoll;

	// Transient Properties

	// Public Methods
	
}


