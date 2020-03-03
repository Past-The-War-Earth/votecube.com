import {
	IImmutableRow,
} from '../../infrastructure/row/immutablerow';
import {
	IPollRevision,
} from './pollrevision';
import {
	IFactorPosition,
} from '../../factor/position/factorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollRevisionFactorPosition extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	axis?: string;
	dir?: number;

	// Non-Id Relations
	pollRevision?: IPollRevision;
	factorPosition?: IFactorPosition;
	parent?: IPollRevisionFactorPosition;
	children?: IPollRevisionFactorPosition[];

	// Transient Properties

	// Public Methods
	
}


