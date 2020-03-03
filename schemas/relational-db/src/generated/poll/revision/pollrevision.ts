import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPoll,
} from '../poll';
import {
	IPollRun,
} from '../run/pollrun';
import {
	IOutcomeVersion,
} from './outcomeversion';
import {
	IUserPollRevisionRating,
} from '../user/userpollrevisionrating';
import {
	IPollRevisionFactorPosition,
} from './pollrevisionfactorposition';
import {
	IPollRevisionTranslation,
} from './translation/pollrevisiontranslation';
import {
	IPollRevisionOpinion,
} from '../../opinion/pollrevisionopinion';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevision extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	ageSuitability?: number;

	// Non-Id Relations
	poll?: IPoll;
	createdAtRun?: IPollRun;
	outcomeVersionA?: IOutcomeVersion;
	outcomeVersionB?: IOutcomeVersion;
	parent?: IPollRevision;
	children?: IPollRevision[];
	ratings?: IUserPollRevisionRating[];
	factorPositions?: IPollRevisionFactorPosition[];
	allTranslations?: IPollRevisionTranslation[];
	opinions?: IPollRevisionOpinion[];

	// Transient Properties

	// Public Methods
	
}


