import {
	IImmutableActorRow,
} from '../../../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../pollrevision';
import {
	ILanguage,
} from '../../../infrastructure/language';
import {
	ITranslationType,
} from '../../../infrastructure/translationtype';
import {
	IPollRevisionTranslationRating,
} from '../../user/pollrevisiontranslationrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionTranslation extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	pollRevision?: IPollRevision;
	language?: ILanguage;
	type?: ITranslationType;
	parent?: IPollRevisionTranslation;
	children?: IPollRevisionTranslation[];
	ratings?: IPollRevisionTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


