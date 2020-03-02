import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../poll/revision/pollrevision';
import {
	IVote,
} from './vote';
import {
	IPollRevisionTranslation,
} from '../poll/revision/translation/pollrevisiontranslation';
import {
	IPollRun,
} from '../poll/run/pollrun';
import {
	IVoteFactor,
} from './votefactor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IVoteRevision extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	revision?: IPollRevision;
	vote?: IVote;
	revisionTranslation?: IPollRevisionTranslation;
	run?: IPollRun;
	factors?: IVoteFactor[];

	// Transient Properties

	// Public Methods
	
}


