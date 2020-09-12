import {
	IVoteVersion,
} from './voteversion';
import {
	IPollRevisionFactorPosition,
} from '../poll/revision/pollrevisionfactorposition';
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
	voteRevision?: IVoteVersion;
	pollFactorPos?: IPollRevisionFactorPosition;
	type?: IVoteFactorType;

	// Transient Properties

	// Public Methods
	
}


