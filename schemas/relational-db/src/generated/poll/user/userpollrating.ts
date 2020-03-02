import {
	IMutableActorRow,
} from '../../infrastructure/row/mutableactorrow';
import {
	IUserPoll,
} from './userpoll';
import {
	IPoll,
} from '../poll';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollRating extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userPoll?: IUserPoll;
	poll?: IPoll;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


