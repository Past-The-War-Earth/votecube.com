import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IIdeaSituation,
} from '../idea/ideasituation';
import {
	IAgreementFactor,
} from './agreementfactor';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IAgreement extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	ideaSituation?: IIdeaSituation;
	factors?: IAgreementFactor[];

	// Transient Properties

	// Public Methods
	
}


