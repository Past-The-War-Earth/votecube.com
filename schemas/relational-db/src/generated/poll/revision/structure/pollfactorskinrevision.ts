import {
	IImmutableRow,
} from '../../../infrastructure/row/immutablerow';
import {
	IPollRevision,
} from '../pollrevision';
import {
	IFactorSkin,
} from '../../../factor/factorskin';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorSkinRevision extends IImmutableRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	pollRevision?: IPollRevision;
	factorSkin?: IFactorSkin;
	parent?: IPollFactorSkinRevision;
	children?: IPollFactorSkinRevision[];

	// Transient Properties

	// Public Methods
	
}


