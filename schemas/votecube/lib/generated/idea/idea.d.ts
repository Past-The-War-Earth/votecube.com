import { IAirEntity } from '@airport/holding-pattern';
import { IdeaRating } from '../../ddl/idea/IdeaRating';
import { Agreement } from '../../ddl/agreement/Agreement';
import { Reason } from '../../ddl/reason/Reason';
import { IIdeaRating } from './idearating';
import { IAgreement } from '../agreement/agreement';
import { IReason } from '../reason/reason';
import { IIdeaLabel } from './idealabel';
import { ISituationIdea } from './situationidea';
import { IIdeaTopic } from './ideatopic';
export interface IIdea extends IAirEntity {
    name?: string;
    agreementShareTotal?: number;
    numberOfAgreements?: number;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    numberOfReasons?: number;
    parent?: IIdea;
    children?: IIdea[];
    ideaRatings?: IIdeaRating;
    agreements?: IAgreement[];
    reasons?: IReason[];
    ideaLabels?: IIdeaLabel[];
    situationIdeas?: ISituationIdea[];
    ideaTopics?: IIdeaTopic[];
    userIdeaRating?: IdeaRating;
    userAgreement?: Agreement;
    userReasons?: Reason[];
}
//# sourceMappingURL=idea.d.ts.map