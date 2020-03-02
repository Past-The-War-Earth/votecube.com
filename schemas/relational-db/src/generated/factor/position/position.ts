import {
	IImmutableActorRow,
} from '../../infrastructure/row/immutableactorrow';
import {
	IPollRevision,
} from '../../poll/revision/pollrevision';
import {
	IPositionTranslation,
} from './positiontranslation';
import {
	IFactorPosition,
} from './factorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPosition extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	createdAtPollRevision?: IPollRevision;
	parentTranslation?: IPositionTranslation;
	parent?: IPosition;
	children?: IPosition[];
	factorPositions?: IFactorPosition[];
	translations?: IPositionTranslation[];

	// Transient Properties

	// Public Methods
	
}


