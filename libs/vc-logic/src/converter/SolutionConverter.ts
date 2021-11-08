import { container, DI } from "@airport/di";
import { DeepPartial } from "@airport/pressurization";
import { IUiSolution, IUiSolutionFactor, SolutionFactor_Value } from "@votecube/model";
import { Situation, SituationFactorPosition, Solution, SolutionFactor } from "@votecube/votecube";
import { REPOSITORY_RECORD_CONVERTER } from "..";
import { SOLUTION_CONVERTER } from "../tokens";

export interface ISolutionConverter {

    dbToUi(
        dbSolution: DeepPartial<Solution>
    ): IUiSolution

    uiToDb(
        uiSolution: IUiSolution,
        ageSuitability: 0 | 7 | 13 | 18,
        situation: DeepPartial<Situation>
    ): DeepPartial<Solution>

}

export class SolutionConverter
    implements ISolutionConverter {

    dbToUi(
        dbSolution: DeepPartial<Solution>
    ): IUiSolution {    
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
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
            ...repositoryRecordConverter.dbToUi(dbSolution),
            "1": this.solutionFactorDbToUi(solutionFactor1),
            "2": this.solutionFactorDbToUi(solutionFactor2),
            "3": this.solutionFactorDbToUi(solutionFactor3)
        }
    }

    private solutionFactorDbToUi(
        dbSolutionFactor: DeepPartial<SolutionFactor>
    ): IUiSolutionFactor {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        return {
            ...repositoryRecordConverter.dbToUi(dbSolutionFactor),
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
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        let factors: DeepPartial<SolutionFactor>[] = []
        let solution: DeepPartial<Solution> = {
            ...repositoryRecordConverter.uiToDb(uiSolution, ageSuitability),
            situation,
            factors
        }
        for (const situationFactorPosition of situation.situationFactorPositions) {
            const uiSolutionFactor = uiSolution[
                this.getFactorNumber(situationFactorPosition.axis)]
            factors.push(this.solutionFactorUiToDb(uiSolutionFactor, ageSuitability,
                solution, situationFactorPosition))
        }

        return solution
    }

    private solutionFactorUiToDb(
        uiSolutionFactor: IUiSolutionFactor,
        ageSuitability: 0 | 7 | 13 | 18 = 0,
        solution: DeepPartial<Solution>,
        situationFactorPosition: DeepPartial<SituationFactorPosition>
    ): DeepPartial<SolutionFactor> {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        return {
            ...repositoryRecordConverter.uiToDb(uiSolutionFactor, ageSuitability),
            solution,
            situationFactorPosition
        }
    }

}
DI.set(SOLUTION_CONVERTER, SolutionConverter)
