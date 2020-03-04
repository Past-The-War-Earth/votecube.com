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
	IPollRevisionTranslationRating,
} from './pollrevisiontranslationrating';



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
	ratings?: IPollRevisionTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


