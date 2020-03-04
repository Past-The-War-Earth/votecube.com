import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
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
	value?: number;

	// Non-Id Relations
	run?: IPollRun;
	rating?: IRating;
	parent?: IPollRevisionTranslationRating;
	child?: IPollRevisionTranslationRating[];

	// Transient Properties

	// Public Methods
	
}


