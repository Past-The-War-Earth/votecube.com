import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPollRevisionOpinionVersion,
} from '../pollrevisionopinionversion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinionVersionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	pollRevisionOpinionVersion?: IPollRevisionOpinionVersion;
	rating?: IRating;
	parent?: IPollRevisionOpinionVersionRating;
	child?: IPollRevisionOpinionVersionRating[];

	// Transient Properties

	// Public Methods
	
}


