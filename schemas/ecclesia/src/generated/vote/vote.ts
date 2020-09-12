import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	IPollRun,
} from '../poll/run/pollrun';
import {
	IVoteVersion,
} from './voteversion';



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
	run?: IPollRun;
	revisions?: IVoteVersion[];

	// Transient Properties

	// Public Methods
	
}


