import {
	IImmutableActorRow,
} from '../../../infrastructure/immutableactorrow';
import {
	ILabelTranslation,
} from './labeltranslation';
import {
	IRating,
} from '../../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ILabelTranslationRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	labelTranslation?: ILabelTranslation;
	rating?: IRating;
	parent?: ILabelTranslationRating;
	child?: ILabelTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


