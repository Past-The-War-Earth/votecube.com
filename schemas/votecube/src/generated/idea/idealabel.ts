import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from './idea';
import {
	ILabel,
} from '../label';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdeaLabel extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	idea?: IIdea;
	label?: ILabel;

	// Transient Properties

	// Public Methods
	
}


