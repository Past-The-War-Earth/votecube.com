import {
	ISystemGeneratedRow,
} from '../infrastructure/row/systemgeneratedrow';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserAccount extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	userName?: string;
	passwordHash?: string;
	firstName?: string;
	middleName?: string;
	lastName?: string;
	birthDate?: Date;

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


