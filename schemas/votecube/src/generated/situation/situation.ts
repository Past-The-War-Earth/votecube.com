import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ICategory,
} from '../category';
import {
	IOutcome,
} from './outcome';
import {
	ISituationFactorPosition,
} from './situationfactorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituation extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;

	// Non-Id Relations
	category?: ICategory;
	parent?: ISituation;
	outcomeA?: IOutcome;
	outcomeB?: IOutcome;
	situationFactorPositions?: ISituationFactorPosition[];
	children?: ISituation[];

	// Transient Properties

	// Public Methods
	
}


