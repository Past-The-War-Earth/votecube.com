import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';
import {
	IVote,
} from './vote';
import {
	IChosenVoteRevisionType,
} from './chosenvoterevisiontype';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IChosenVoteRevision extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	vote?: IVote;
	type?: IChosenVoteRevisionType;

	// Transient Properties

	// Public Methods
	
}


