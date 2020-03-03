import {
	IMutableActorRow,
} from '../infrastructure/row/mutableactorrow';
import {
	IPollRevision,
} from '../poll/revision/pollrevision';
import {
	IPollRun,
} from '../poll/run/pollrun';
import {
	IVote,
} from '../vote/vote';
import {
	IPollRevisionOpinionVersion,
} from './pollrevisionopinionversion';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinion extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevision?: IPollRevision;
	run?: IPollRun;
	vote?: IVote;
	versions?: IPollRevisionOpinionVersion[];

	// Transient Properties

	// Public Methods
	
}


