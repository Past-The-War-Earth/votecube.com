import {
	IMutableActorRow,
} from '../../infrastructure/row/mutableactorrow';
import {
	IPoll,
} from '../poll';
import {
	IPollRevision,
} from '../revision/pollrevision';
import {
	IUserPollRevision,
} from './userpollrevision';
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
	pinnedRevision?: IPollRevision;
	userPollRevisions?: IUserPollRevision[];
	ratings?: IUserPollRating[];

	// Transient Properties

	// Public Methods
	
}


