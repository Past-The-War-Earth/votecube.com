import {
	IAgeSuitableRow,
} from '../../infrastructure/row/agesuitablerow';
import {
	IPoll,
} from '../poll';
import {
	IPollRun,
} from '../run/pollrun';
import {
	IOutcome,
} from './outcome';
import {
	IPollRevisionRating,
} from '../rating/pollrevisionrating';
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

export interface IPollRevision extends IAgeSuitableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	depth?: number;

	// Non-Id Relations
	poll?: IPoll;
	createdAtRun?: IPollRun;
	outcomeVersionA?: IOutcome;
	outcomeVersionB?: IOutcome;
	parent?: IPollRevision;
	children?: IPollRevision[];
	ratings?: IPollRevisionRating[];
	factorPositions?: IPollRevisionFactorPosition[];
	allTranslations?: IPollRevisionTranslation[];
	opinions?: IPollRevisionOpinion[];

	// Transient Properties

	// Public Methods
	
}


