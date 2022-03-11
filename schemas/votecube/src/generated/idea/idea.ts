import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IOutcome,
} from './outcome';
import {
	IForumThread,
} from '@votecube/forum';
import {
	IIdeaLabel,
} from './idealabel';
import {
	IReason,
} from './reason';
import {
	IAgreement,
} from '../agreement/agreement';



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
	thread?: IForumThread;
	children?: IIdea[];
	ideaLabels?: IIdeaLabel[];
	reasons?: IReason[];
	agreements?: IAgreement[];

	// Transient Properties

	// Public Methods
	
}


