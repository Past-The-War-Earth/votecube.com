import { AirEntity } from '@airport/holding-pattern';
import { IdeaLabel } from './IdeaLabel';
import { SituationIdea } from './SituationIdea';
import { IdeaTopic } from './IdeaTopic';
import { IdeaRating } from './IdeaRating';
import { Agreement } from '../agreement/Agreement';
import { Reason } from './Reason';
export declare class Idea extends AirEntity {
    constructor(entityGUID: string);
    name: string;
    agreementShareTotal: number;
    numberOfAgreements: number;
    urgencyTotal: number;
    numberOfUrgencyRatings: number;
    numberOfReasons: number;
    parent: Idea;
    children: Idea[];
    ideaRatings: IdeaRating;
    agreements: Agreement[];
    reasons: Reason[];
    ideaLabels: IdeaLabel[];
    situationIdeas: SituationIdea[];
    ideaTopics: IdeaTopic[];
    userIdeaRating?: IdeaRating;
    userAgreement?: Agreement;
    userReasons?: Reason[];
}
//# sourceMappingURL=Idea.d.ts.map