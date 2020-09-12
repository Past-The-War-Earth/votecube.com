import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';
import {
	IUserAccount,
} from './useraccount';
import {
	IDevice,
} from './device';
import {
	IApplication,
} from './application';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IActor extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	hash?: number;

	// Non-Id Relations
	userAccount?: IUserAccount;
	device?: IDevice;
	application?: IApplication;

	// Transient Properties

	// Public Methods
	
}


