import { AirEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { Agreement, Idea } from "../ddl";
import { IdeaRating } from "./IdeaRating";
import { Reason } from "./Reason";
export declare class SituationIdea extends AirEntity {
    constructor(entityGUID: string);
    agreementShareTotal: number;
    numberOfAgreements: number;
    urgencyTotal: number;
    numberOfUrgencyRatings: number;
    numberOfReasons: number;
    idea: Idea;
    situation: Situation;
    ideaRatings: IdeaRating[];
    agreements: Agreement[];
    reasons: Reason[];
    userIdeaRating?: IdeaRating;
    userAgreement?: Agreement;
    userReasons: Reason[];
}
//# sourceMappingURL=SituationIdea.d.ts.map