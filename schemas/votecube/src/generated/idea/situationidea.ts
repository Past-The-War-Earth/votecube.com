import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IIdea,
} from './idea';
import {
	ISituation,
} from '@sapoto/core';
import {
	IIdeaRating,
} from './idearating';
import {
	IAgreement,
} from '../agreement/agreement';
import {
	IReason,
} from './reason';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituationIdea extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	agreementShareTotal?: number;
	numberOfAgreements?: number;
	urgencyTotal?: number;
	numberOfUrgencyRatings?: number;

	// Non-Id Relations
	idea?: IIdea;
	situation?: ISituation;
	ideaRatings?: IIdeaRating;
	agreements?: IAgreement[];
	reasons?: IReason[];

	// Transient Properties

	// Public Methods
	
}


