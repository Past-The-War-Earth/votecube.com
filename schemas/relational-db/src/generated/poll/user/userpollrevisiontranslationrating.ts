import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IUserPollRevisionTranslation,
} from './userpollrevisiontranslation';
import {
	IPollRevisionTranslation,
} from '../revision/translation/pollrevisiontranslation';
import {
	IPollRun,
} from '../run/pollrun';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollRevisionTranslationRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	userPollRevisionTranslation?: IUserPollRevisionTranslation;
	pollRevisionTranslation?: IPollRevisionTranslation;
	run?: IPollRun;
	rating?: IRating;
	parent?: IUserPollRevisionTranslationRating;
	child?: IUserPollRevisionTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


