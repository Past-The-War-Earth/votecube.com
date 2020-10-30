import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../revision/pollrevision';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	value?: number;

	// Non-Id Relations
	pollRevision?: IPollRevision;
	rating?: IRating;

	// Transient Properties

	// Public Methods
	
}


