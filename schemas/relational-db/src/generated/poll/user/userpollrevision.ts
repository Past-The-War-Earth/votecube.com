import {
	IMutableActorRow,
} from '../../infrastructure/row/mutableactorrow';
import {
	IUserPoll,
} from './userpoll';
import {
	IPollRevision,
} from '../revision/pollrevision';
import {
	IUserPollRevisionTranslation,
} from './userpollrevisiontranslation';
import {
	IUserPollRevisionRating,
} from './userpollrevisionrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollRevision extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userPoll?: IUserPoll;
	revision?: IPollRevision;
	translations?: IUserPollRevisionTranslation[];
	ratings?: IUserPollRevisionRating[];

	// Transient Properties

	// Public Methods
	
}


