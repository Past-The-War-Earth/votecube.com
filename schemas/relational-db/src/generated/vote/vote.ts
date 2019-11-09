import {
	IImmutableActorRow,
} from '../infrastructure/immutableactorrow';
import {
	IActor,
} from '../user/actor';
import {
	IPoll,
} from '../poll/poll';
import {
	IChosenVoteVariation,
} from './chosenvotevariation';
import {
	IVoteVariation,
} from './votevariation';



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
	chosenVariations?: IChosenVoteVariation[];
	variations?: IVoteVariation[];

	// Transient Properties

	// Public Methods
	
}


