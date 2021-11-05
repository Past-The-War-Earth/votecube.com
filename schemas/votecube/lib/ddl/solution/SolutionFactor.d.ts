import { RepositoryEntity } from "@airport/holding-pattern";
import { SituationFactorPosition } from "../ddl";
import { Solution } from "./Solution";
export declare class SolutionFactor extends RepositoryEntity {
    axis: string;
    share: number;
    solution: Solution;
    situationFactorPosition: SituationFactorPosition;
}
//# sourceMappingURL=SolutionFactor.d.ts.map