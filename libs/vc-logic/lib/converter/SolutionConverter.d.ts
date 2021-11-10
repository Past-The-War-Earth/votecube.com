import { IUiSolution } from "@votecube/model";
import { ISituation, ISolution } from "@votecube/votecube";
export interface ISolutionConverter {
    dbToUi(dbSolution: ISolution): IUiSolution;
    uiToDb(uiSolution: IUiSolution, ageSuitability: 0 | 7 | 13 | 18, situation: ISituation): ISolution;
}
export declare class SolutionConverter implements ISolutionConverter {
    dbToUi(dbSolution: ISolution): IUiSolution;
    private solutionFactorDbToUi;
    private getFactorNumber;
    uiToDb(uiSolution: IUiSolution, ageSuitability: 0 | 7 | 13 | 18, situation: ISituation): ISolution;
    private solutionFactorUiToDb;
}
//# sourceMappingURL=SolutionConverter.d.ts.map