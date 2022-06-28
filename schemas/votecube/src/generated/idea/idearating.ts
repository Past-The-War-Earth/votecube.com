import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from './idea';
import {
	ISituationIdea,
} from './situationidea';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdeaRating extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	urgencyRating?: number;

	// Non-Id Relations
	idea?: IIdea;
	situationIdea?: ISituationIdea;

	// Transient Properties

	// Public Methods
	
}


