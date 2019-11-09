import {
	ISystemGeneratedRow,
} from '../infrastructure/systemgeneratedrow';
import {
	IState,
} from './state';
import {
	ITown,
} from './town';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IStateTown extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations
	state: IState;
	town: ITown;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}


