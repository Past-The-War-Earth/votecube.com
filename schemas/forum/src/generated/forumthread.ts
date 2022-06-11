import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IForumPost,
} from './forumpost';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IForumThread extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	createdAt?: Date;

	// Non-Id Relations
	parent?: IForumThread;
	children?: IForumThread[];
	posts?: IForumPost[];

	// Transient Properties

	// Public Methods
	
}


