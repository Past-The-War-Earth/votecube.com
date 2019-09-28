import {
	IMutableActorRow,
} from '../../infrastructure/mutableactorrow';
import {
	IPoll,
} from '../poll';
import {
	IPollVariation,
} from '../variation/pollvariation';
import {
	IUserPollVariation,
} from './userpollvariation';
import {
	IUserPollRating,
} from './userpollrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPoll extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	pinnedExplicitly?: boolean;

	// Non-Id Relations
	poll?: IPoll;
	pinnedVariation?: IPollVariation;
	userPollVariations?: IUserPollVariation[];
	ratings?: IUserPollRating[];

	// Transient Properties

	// Public Methods
	
}


