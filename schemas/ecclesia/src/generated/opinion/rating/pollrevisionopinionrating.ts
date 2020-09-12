import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPollRevisionOpinion,
} from '../pollrevisionopinion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevisionOpinion?: IPollRevisionOpinion;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


