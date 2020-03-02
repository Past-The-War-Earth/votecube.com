import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPollOpinionVersion,
} from '../pollopinionversion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollOpinionVersionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	pollOpinionVersion?: IPollOpinionVersion;
	rating?: IRating;
	parent?: IPollOpinionVersionRating;
	child?: IPollOpinionVersionRating[];

	// Transient Properties

	// Public Methods
	
}


