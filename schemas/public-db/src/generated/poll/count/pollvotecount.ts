import {
	ISystemGeneratedRow,
} from '../../infrastructure/systemgeneratedrow';
import {
	IPoll,
} from '../poll';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVoteCount extends ISystemGeneratedRow {
	
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


