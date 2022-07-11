import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from './idea';
import {
	ITopic,
} from '@sapoto/core';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdeaTopic extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	idea?: IIdea;
	topic?: ITopic;

	// Transient Properties

	// Public Methods
	
}


