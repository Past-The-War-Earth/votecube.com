import { IAirEntity } from '@airport/holding-pattern';
import { IIdea } from './idea';
import { ISituation } from '@sapoto/core';
import { IIdeaRating } from './idearating';
import { IAgreement } from '../agreement/agreement';
import { IReason } from './reason';
export interface ISituationIdea extends IAirEntity {
    agreementShareTotal?: number;
    numberOfAgreements?: number;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    idea?: IIdea;
    situation?: ISituation;
    ideaRatings?: IIdeaRating;
    agreements?: IAgreement[];
    reasons?: IReason[];
}
//# sourceMappingURL=situationidea.d.ts.map