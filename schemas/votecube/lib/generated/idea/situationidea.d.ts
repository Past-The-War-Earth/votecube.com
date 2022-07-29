import { IAirEntity } from '@airport/holding-pattern';
import { IdeaRating } from '../../ddl/idea/IdeaRating';
import { Agreement } from '../../ddl/ddl';
import { Reason } from '../../ddl/reason/Reason';
import { IIdea } from './idea';
import { ISituation } from '@sapoto/core';
import { IIdeaRating } from './idearating';
import { IAgreement } from '../agreement/agreement';
import { IReason } from '../reason/reason';
export interface ISituationIdea extends IAirEntity {
    agreementShareTotal?: number;
    numberOfAgreements?: number;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    numberOfReasons?: number;
    idea?: IIdea;
    situation?: ISituation;
    ideaRatings?: IIdeaRating[];
    agreements?: IAgreement[];
    reasons?: IReason[];
    userIdeaRating?: IdeaRating;
    userAgreement?: Agreement;
    userReasons?: Reason[];
}
//# sourceMappingURL=situationidea.d.ts.map