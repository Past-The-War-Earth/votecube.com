import { container, DI } from "@airport/di";
import {
    IUiSolution,
    IUiSolutionFactor,
    SolutionFactor_Value
} from "@votecube/model";
import {
    ISituation,
    ISituationFactorPosition,
    ISolution,
    ISolutionFactor
} from "@votecube/votecube";
import { REPOSITORY_RECORD_CONVERTER } from "..";
import { SOLUTION_CONVERTER } from "../tokens";

export interface ISolutionConverter {

    dbToUi(
        dbSolution: ISolution
    ): IUiSolution

    uiToDb(
        uiSolution: IUiSolution,
        ageSuitability: 0 | 7 | 13 | 18,
        situation: ISituation
    ): ISolution

}

export class SolutionConverter
    implements ISolutionConverter {

    dbToUi(
        dbSolution: ISolution
    ): IUiSolution {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        let solutionFactor1: ISolutionFactor
        let solutionFactor2: ISolutionFactor
        let solutionFactor3: ISolutionFactor
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
        dbSolutionFactor: ISolutionFactor
    ): IUiSolutionFactor {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        return {
            ...repositoryRecordConverter.dbToUi(dbSolutionFactor),
            factorNumber: this.getFactorNumber(dbSolutionFactor.axis as 'x' | 'y' | 'z'),
            outcome: dbSolutionFactor.situationFactorPosition.outcomeOrdinal as 'A' | 'B',
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
        situation: ISituation,
    ): ISolution {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        let factors: ISolutionFactor[] = []
        
        const dbSolution: ISolution = {
            situation,
            factors
        } as any

        repositoryRecordConverter.uiToDb(uiSolution, dbSolution, ageSuitability)

        for (const situationFactorPosition of situation.situationFactorPositions) {
            const uiSolutionFactor = uiSolution[
                this.getFactorNumber(situationFactorPosition.axis as 'x' | 'y' | 'z')]
            factors.push(this.solutionFactorUiToDb(uiSolutionFactor, ageSuitability,
                dbSolution, situationFactorPosition))
        }

        return dbSolution
    }

    private solutionFactorUiToDb(
        uiSolutionFactor: IUiSolutionFactor,
        ageSuitability: 0 | 7 | 13 | 18 = 0,
        solution: ISolution,
        situationFactorPosition: ISituationFactorPosition,
    ): ISolutionFactor {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER)
        
        const dbSolutionFactor: ISolutionFactor = {
            solution,
            situationFactorPosition
        } as any

        repositoryRecordConverter.uiToDb(uiSolutionFactor, dbSolutionFactor, ageSuitability)

        return dbSolutionFactor
    }

}
DI.set(SOLUTION_CONVERTER, SolutionConverter)
