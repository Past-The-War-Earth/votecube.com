import {
	IMutableActorRow,
} from '../../infrastructure/row/mutableactorrow';
import {
	IUserPollRevision,
} from './userpollrevision';
import {
	IPollRevisionTranslation,
} from '../revision/translation/pollrevisiontranslation';
import {
	IUserPollRevisionTranslationRating,
} from './userpollrevisiontranslationrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserPollRevisionTranslation extends IMutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userPollRevision?: IUserPollRevision;
	revisionTranslation?: IPollRevisionTranslation;
	ratings?: IUserPollRevisionTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


