import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from './idea';
import {
	ISituation,
} from '@sapoto/core';
import {
	IAgreement,
} from '../agreement/agreement';
import {
	IReason,
} from './reason';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdeaSituation extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	idea?: IIdea;
	situation?: ISituation;
	agreements?: IAgreement[];
	reasons?: IReason[];

	// Transient Properties

	// Public Methods
	
}


