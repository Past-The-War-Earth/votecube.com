import {
	IImmutableRow,
} from './immutablerow';
import {
	IActor,
} from '../../user/actor';
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
	actor?: IActor;
	userAccount?: IUserAccount;

	// Transient Properties

	// Public Methods
	
}


