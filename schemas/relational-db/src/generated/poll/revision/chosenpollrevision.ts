import {
	ISystemGeneratedRow,
} from '../../infrastructure/row/systemgeneratedrow';
import {
	IPollRevision,
} from './pollrevision';
import {
	IChosenPollRevisionType,
} from './chosenpollrevisiontype';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IChosenPollRevision extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevision?: IPollRevision;
	type?: IChosenPollRevisionType;

	// Transient Properties

	// Public Methods
	
}


