import {
	IImmutableActorRow,
} from '../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../poll/revision/pollrevision';
import {
	IFactorTranslation,
} from './factortranslation';
import {
	IFactorPosition,
} from './position/factorposition';
import {
	IFactorSkin,
} from './factorskin';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactor extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	createdAtPollRevision?: IPollRevision;
	parentTranslation?: IFactorTranslation;
	parent?: IFactor;
	children?: IFactor[];
	factorPositions?: IFactorPosition[];
	skins?: IFactorSkin[];

	// Transient Properties

	// Public Methods
	
}


