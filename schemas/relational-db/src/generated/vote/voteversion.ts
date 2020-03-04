import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	IVote,
} from './vote';
import {
	IVoteFactor,
} from './votefactor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVoteVersion extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	vote?: IVote;
	factors?: IVoteFactor[];

	// Transient Properties

	// Public Methods
	
}


