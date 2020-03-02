import {
	IImmutableRow,
} from '../../../infrastructure/row/immutablerow';
import {
	IPollRevision,
} from '../pollrevision';
import {
	IFactor,
} from '../../../factor/factor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorRevision extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevision?: IPollRevision;
	factor?: IFactor;
	parent?: IPollFactorRevision;
	children?: IPollFactorRevision[];

	// Transient Properties

	// Public Methods
	
}


