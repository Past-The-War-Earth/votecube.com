import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IUserPollRevisionTranslation,
} from './userpollrevisiontranslation';
import {
	IPollRun,
} from '../run/pollrun';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionTranslationRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	userPollRevisionTranslation?: IUserPollRevisionTranslation;
	run?: IPollRun;
	rating?: IRating;
	parent?: IPollRevisionTranslationRating;
	child?: IPollRevisionTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


