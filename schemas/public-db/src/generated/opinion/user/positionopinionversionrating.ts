import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IPositionOpinionVersion,
} from '../positionopinionversion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPositionOpinionVersionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	positionOpinionVersion?: IPositionOpinionVersion;
	rating?: IRating;
	parent?: IPositionOpinionVersionRating;
	child?: IPositionOpinionVersionRating[];

	// Transient Properties

	// Public Methods
	
}


