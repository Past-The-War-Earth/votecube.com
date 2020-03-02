import {
	ISystemGeneratedRow,
} from '../../../infrastructure/row/systemgeneratedrow';
import {
	IPollRevision,
} from '../pollrevision';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionOpinionCount extends ISystemGeneratedRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	count?: number;

	// Non-Id Relations
	pollRevision?: IPollRevision;

	// Transient Properties

	// Public Methods
	
}


