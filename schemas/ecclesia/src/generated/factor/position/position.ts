import {
	IAgeSuitableRow,
} from '../../infrastructure/row/agesuitablerow';
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

export interface IPosition extends IAgeSuitableRow {
	
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


