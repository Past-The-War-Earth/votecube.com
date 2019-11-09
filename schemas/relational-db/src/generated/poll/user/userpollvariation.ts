import {
	IMutableActorRow,
} from '../../infrastructure/mutableactorrow';
import {
	IUserPoll,
} from './userpoll';
import {
	IPollVariation,
} from '../variation/pollvariation';
import {
	IUserPollVariationTranslation,
} from './userpollvariationtranslation';
import {
	IUserPollVariationRating,
} from './userpollvariationrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollVariation extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userPoll?: IUserPoll;
	variation?: IPollVariation;
	translations?: IUserPollVariationTranslation[];
	ratings?: IUserPollVariationRating[];

	// Transient Properties

	// Public Methods
	
}


