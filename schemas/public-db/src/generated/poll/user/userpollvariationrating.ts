import {
	IMutableActorRow,
} from '../../infrastructure/mutableactorrow';
import {
	IUserPollVariation,
} from './userpollvariation';
import {
	IPollVariation,
} from '../variation/pollvariation';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollVariationRating extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userPollVariation?: IUserPollVariation;
	pollVariation?: IPollVariation;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


