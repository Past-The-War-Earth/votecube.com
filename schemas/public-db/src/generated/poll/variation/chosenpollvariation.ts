import {
	ISystemGeneratedRow,
} from '../../infrastructure/systemgeneratedrow';
import {
	IPoll,
} from '../poll';
import {
	IPollVariation,
} from './pollvariation';
import {
	IChosenPollVariationType,
} from './chosenpollvariationtype';
import {
	IPollLocationTimeFrame,
} from '../locationtimeframe/polllocationtimeframe';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IChosenPollVariation extends ISystemGeneratedRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	poll?: IPoll;
	pollVariation?: IPollVariation;
	type?: IChosenPollVariationType;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}


