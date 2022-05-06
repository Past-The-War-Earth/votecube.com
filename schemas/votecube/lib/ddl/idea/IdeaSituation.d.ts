import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { Agreement, Idea } from "../ddl";
import { Reason } from "./Reason";
export declare class IdeaSituation extends RepositoryEntity {
    idea: Idea;
    situation: Situation;
    agreements: Agreement[];
    reasons: Reason[];
}
//# sourceMappingURL=IdeaSituation.d.ts.map