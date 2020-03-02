import {
	IVoteRevision,
} from './voterevision';
import {
	IPollFactorPositionRevision,
} from '../poll/revision/structure/pollfactorpositionrevision';
import {
	IVoteFactorType,
} from './votefactortype';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVoteFactor {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	share?: string;

	// Non-Id Relations
	voteRevision?: IVoteRevision;
	pollFactorPos?: IPollFactorPositionRevision;
	type?: IVoteFactorType;

	// Transient Properties

	// Public Methods
	
}


