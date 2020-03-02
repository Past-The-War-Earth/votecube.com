import {
	IMutableActorRow,
} from '../../infrastructure/row/mutableactorrow';
import {
	IUserPollRevision,
} from './userpollrevision';
import {
	IPollRevision,
} from '../revision/pollrevision';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollRevisionRating extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userPollRevision?: IUserPollRevision;
	pollRevision?: IPollRevision;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


