import { DI } from "@airport/di";
import { DeepPartial } from "@airport/pressurization";
import { IUiSolution, IUiSolutionFactor, SolutionFactor_Value } from "@votecube/model";
import { Situation, Solution, SolutionFactor } from "@votecube/votecube";
import { SOLUTION_CONVERTER } from "../tokens";
import { RepositoryRecordConverter } from "./RepositoryRecordConverter";

export interface ISolutionConverter {

    dbToUi(
        dbSolution: DeepPartial<Solution>
    ): IUiSolution

    uiToDb(
        uiSolution: IUiSolution
    ): DeepPartial<Solution>

}

export class SolutionConverter
    extends RepositoryRecordConverter
    implements ISolutionConverter {

    dbToUi(
        dbSolution: DeepPartial<Solution>
    ): IUiSolution {
        let solutionFactor1: DeepPartial<SolutionFactor>
        let solutionFactor2: DeepPartial<SolutionFactor>
        let solutionFactor3: DeepPartial<SolutionFactor>
        for (const dbSolutionFactor of dbSolution.factors) {
            switch (dbSolutionFactor.axis) {
                case 'x':
                    solutionFactor1 = dbSolutionFactor
                    break
                case 'y':
                    solutionFactor2 = dbSolutionFactor
                    break
                case 'z':
                    solutionFactor3 = dbSolutionFactor
                    break
            }
        }
        return {
            ...super.dbToUi(dbSolution),
            "1": this.solutionFactorDbUi(solutionFactor1),
            "2": this.solutionFactorDbUi(solutionFactor2),
            "3": this.solutionFactorDbUi(solutionFactor3)
        }
    }

    private solutionFactorDbUi(
        dbSolutionFactor: DeepPartial<SolutionFactor>
    ): IUiSolutionFactor {
        return {
            ...super.dbToUi(dbSolutionFactor),
            factorNumber: this.getFactorNumber(dbSolutionFactor.axis as 'x' | 'y' | 'z'),
            outcome: dbSolutionFactor.situationFactorPosition.outcomeOrdinal,
            value: dbSolutionFactor.share as SolutionFactor_Value
        }
    }

    private getFactorNumber(
        axis: 'x' | 'y' | 'z'
    ): 1 | 2 | 3 {
        switch (axis) {
            case 'x':
                return 1
            case 'y':
                return 2
            case 'z':
                return 3
            default:
                throw new Error(`Unsupported axis value: ${axis}`)
        }
    }

    uiToDb(
        uiSolution: IUiSolution,
        ageSuitability: 0 | 7 | 13 | 18 = 0,
        situation: DeepPartial<Situation>
    ): DeepPartial<Solution> {

        let factors = []
        return {
            ...super.uiToDb(uiSolution, ageSuitability),
            situation,
            factors
        }
    }

    solutionFactorUiToDb(
        uiSolutionFactor: IUiSolutionFactor,
        ageSuitability: 0 | 7 | 13 | 18 = 0,
        solution: Solution
    ): DeepPartial<SolutionFactor> {
        return {
            ...super.uiToDb(uiSolutionFactor, ageSuitability),
            solution,
            situationFactorPosition
        }
    }


}
DI.set(SOLUTION_CONVERTER, SolutionConverter)
