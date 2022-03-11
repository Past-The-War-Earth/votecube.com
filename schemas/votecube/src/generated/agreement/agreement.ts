import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from '../idea/idea';
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
	idea?: IIdea;
	factors?: IAgreementFactor[];

	// Transient Properties

	// Public Methods
	
}


