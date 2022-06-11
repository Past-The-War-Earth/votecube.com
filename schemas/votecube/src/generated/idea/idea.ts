import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IIdeaLabel,
} from './idealabel';
import {
	ISituationIdea,
} from './situationidea';
import {
	IIdeaTopic,
} from './ideatopic';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdea extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	children?: IIdea[];
	ideaLabels?: IIdeaLabel[];
	situationIdeas?: ISituationIdea[];
	ideaTopics?: IIdeaTopic[];

	// Transient Properties

	// Public Methods
	
}


