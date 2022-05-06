import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IOutcome,
} from './outcome';
import {
	IIdeaLabel,
} from './idealabel';
import {
	IIdeaSituation,
} from './ideasituation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdea extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	outcomeA?: IOutcome;
	outcomeB?: IOutcome;
	children?: IIdea[];
	ideaLabels?: IIdeaLabel[];
	ideaSituations?: IIdeaSituation[];

	// Transient Properties

	// Public Methods
	
}


