import {
	IImmutableRow,
} from './immutablerow';
import {
	IUserAccount,
} from '../../user/useraccount';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IImmutableActorRow extends IImmutableRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	userAccount?: IUserAccount;

	// Transient Properties

	// Public Methods
	
}


