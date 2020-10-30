import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
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
	IPollRevisionOpinionRating,
} from './rating/pollrevisionopinionrating';
import {
	IPollRevisionOpinionVersion,
} from './pollrevisionopinionversion';
import {
	IFactorOpinionVersion,
} from './factoropinionversion';
import {
	IOutcomeOpinionVersion,
} from './outcomeopinionversion';
import {
	IPositionOpinionVersion,
} from './positionopinionversion';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinion extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevision?: IPollRevision;
	run?: IPollRun;
	vote?: IVote;
	ratings?: IPollRevisionOpinionRating[];
	versions?: IPollRevisionOpinionVersion[];
	factors?: IFactorOpinionVersion[];
	outcomes?: IOutcomeOpinionVersion[];
	positions?: IPositionOpinionVersion[];

	// Transient Properties

	// Public Methods
	
}


