import { AirEntity } from "@airport/holding-pattern";
import { Idea } from "../idea/Idea";
import { SituationIdea } from "../idea/SituationIdea";
import { AgreementReason } from "./AgreementReason";
export declare class Agreement extends AirEntity {
    constructor(entityGUID: string);
    shareTotal: number;
    situationIdea: SituationIdea;
    idea: Idea;
    agreementReasons: AgreementReason[];
}
//# sourceMappingURL=Agreement.d.ts.map