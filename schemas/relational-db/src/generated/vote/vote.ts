import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	IActor,
} from '../user/actor';
import {
	IPoll,
} from '../poll/poll';
import {
	IChosenVoteRevision,
} from './chosenvoterevision';
import {
	IVoteRevision,
} from './voterevision';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVote extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	type?: number;

	// Non-Id Relations
	actor?: IActor;
	poll?: IPoll;
	chosenRevisions?: IChosenVoteRevision[];
	revisions?: IVoteRevision[];

	// Transient Properties

	// Public Methods
	
}


