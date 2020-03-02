import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../poll/revision/pollrevision';
import {
	IFactor,
} from './factor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorSkin extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	backgroundColor?: number;
	textColor?: number;

	// Non-Id Relations
	pollRevision?: IPollRevision;
	factor?: IFactor;
	parent?: IFactorSkin;
	children?: IFactorSkin[];

	// Transient Properties

	// Public Methods
	
}


