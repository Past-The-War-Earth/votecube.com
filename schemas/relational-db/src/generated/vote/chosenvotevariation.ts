import {
	ISystemGeneratedRow,
} from '../infrastructure/systemgeneratedrow';
import {
	IVote,
} from './vote';
import {
	IChosenVoteVariationType,
} from './chosenvotevariationtype';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IChosenVoteVariation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	vote?: IVote;
	type?: IChosenVoteVariationType;

	// Transient Properties

	// Public Methods
	
}


