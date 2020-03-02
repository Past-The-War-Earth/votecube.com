import {
	ISystemGeneratedRow,
} from '../../../infrastructure/row/systemgeneratedrow';
import {
	IPollRun,
} from '../pollrun';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRunVoteCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	run?: IPollRun;

	// Transient Properties

	// Public Methods
	
}


