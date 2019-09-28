import {
	IImmutableActorRow,
} from '../../infrastructure/immutableactorrow';
import {
	IFactorOpinionVersion,
} from '../factoropinionversion';
import {
	IRating,
} from '../../infrastructure/rating/rating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorOpinionVersionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	factorOpinionVersion?: IFactorOpinionVersion;
	rating?: IRating;
	parent?: IFactorOpinionVersionRating;
	child?: IFactorOpinionVersionRating[];

	// Transient Properties

	// Public Methods
	
}


