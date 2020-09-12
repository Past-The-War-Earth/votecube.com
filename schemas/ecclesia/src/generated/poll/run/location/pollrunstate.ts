import {
	IState,
} from '../../../location/state';
import {
	IPollRun,
} from '../pollrun';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRunState {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	state?: IState;
	run?: IPollRun;

	// Transient Properties

	// Public Methods
	
}


