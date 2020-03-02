import {
	IImmutableRow,
} from '../../../infrastructure/row/immutablerow';
import {
	IPollRevision,
} from '../pollrevision';
import {
	IPosition,
} from '../../../factor/position/position';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollPositionRevision extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevision?: IPollRevision;
	position?: IPosition;
	parent?: IPollPositionRevision;
	children?: IPollPositionRevision[];

	// Transient Properties

	// Public Methods
	
}


