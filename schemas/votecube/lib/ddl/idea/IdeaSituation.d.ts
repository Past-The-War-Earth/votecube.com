import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "@dobecause/core/lib/app";
import { Agreement, Idea } from "../ddl";
import { Reason } from "./Reason";
export declare class IdeaSituation extends RepositoryEntity {
    idea: Idea;
    situation: Situation;
    agreements: Agreement[];
    reasons: Reason[];
}
//# sourceMappingURL=IdeaSituation.d.ts.map