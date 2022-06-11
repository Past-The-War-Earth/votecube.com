import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IForumThread,
} from './forumthread';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IForumPost extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	text?: string;
	createdAt?: Date;

	// Non-Id Relations
	thread?: IForumThread;

	// Transient Properties

	// Public Methods
	
}


