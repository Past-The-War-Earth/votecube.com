import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IOutcome,
} from './outcome';
import {
	ISituationLabel,
} from './situationlabel';
import {
	ISituationFactorPosition,
} from './situationfactorposition';
import {
	ISolution,
} from '../solution/solution';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituation extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	parent?: ISituation;
	outcomeA?: IOutcome;
	outcomeB?: IOutcome;
	children?: ISituation[];
	situationLabels?: ISituationLabel[];
	situationFactorPositions?: ISituationFactorPosition[];
	solutions?: ISolution[];

	// Transient Properties

	// Public Methods
	
}


