import {
	IVoteVariation,
} from './votevariation';
import {
	IPollFactorPositionVariation,
} from '../poll/variation/structure/pollfactorpositionvariation';
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
	voteVariation?: IVoteVariation;
	pollFactorPos?: IPollFactorPositionVariation;
	type?: IVoteFactorType;

	// Transient Properties

	// Public Methods
	
}


