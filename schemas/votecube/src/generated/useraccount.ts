import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IUser,
} from '@airport/travel-document-checkpoint';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserAccount extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	userName?: string;
	email?: string;
	passwordHash?: string;
	firstName?: string;
	middleName?: string;
	lastName?: string;
	birthDate?: Date;

	// Non-Id Relations
	user?: IUser;

	// Transient Properties

	// Public Methods
	
}


