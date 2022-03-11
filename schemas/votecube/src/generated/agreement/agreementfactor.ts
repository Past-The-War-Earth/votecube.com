import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IAgreement,
} from './agreement';
import {
	IIdeaFactorPosition,
} from '../idea/ideafactorposition';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IAgreementFactor extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	axis?: string;
	share?: number;

	// Non-Id Relations
	agreement?: IAgreement;
	ideaFactorPosition?: IIdeaFactorPosition;

	// Transient Properties

	// Public Methods
	
}


