import { container, DI } from "@airport/di";
import { REPOSITORY_RECORD_CONVERTER } from "..";
import { SOLUTION_CONVERTER } from "../tokens";
export class SolutionConverter {
    dbToUi(dbSolution) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        let solutionFactor1;
        let solutionFactor2;
        let solutionFactor3;
        for (const dbSolutionFactor of dbSolution.factors) {
            switch (dbSolutionFactor.axis) {
                case 'x':
                    solutionFactor1 = dbSolutionFactor;
                    break;
                case 'y':
                    solutionFactor2 = dbSolutionFactor;
                    break;
                case 'z':
                    solutionFactor3 = dbSolutionFactor;
                    break;
            }
        }
        return Object.assign(Object.assign({}, repositoryRecordConverter.dbToUi(dbSolution)), { "1": this.solutionFactorDbToUi(solutionFactor1), "2": this.solutionFactorDbToUi(solutionFactor2), "3": this.solutionFactorDbToUi(solutionFactor3) });
    }
    solutionFactorDbToUi(dbSolutionFactor) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        return Object.assign(Object.assign({}, repositoryRecordConverter.dbToUi(dbSolutionFactor)), { factorNumber: this.getFactorNumber(dbSolutionFactor.axis), outcome: dbSolutionFactor.situationFactorPosition.outcomeOrdinal, value: dbSolutionFactor.share });
    }
    getFactorNumber(axis) {
        switch (axis) {
            case 'x':
                return 1;
            case 'y':
                return 2;
            case 'z':
                return 3;
            default:
                throw new Error(`Unsupported axis value: ${axis}`);
        }
    }
    uiToDb(uiSolution, ageSuitability = 0, situation) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        let factors = [];
        let solution = Object.assign(Object.assign({}, repositoryRecordConverter.uiToDb(uiSolution, ageSuitability)), { situation,
            factors });
        for (const situationFactorPosition of situation.situationFactorPositions) {
            const uiSolutionFactor = uiSolution[this.getFactorNumber(situationFactorPosition.axis)];
            factors.push(this.solutionFactorUiToDb(uiSolutionFactor, ageSuitability, solution, situationFactorPosition));
        }
        return solution;
    }
    solutionFactorUiToDb(uiSolutionFactor, ageSuitability = 0, solution, situationFactorPosition) {
        const repositoryRecordConverter = container(this).getSync(REPOSITORY_RECORD_CONVERTER);
        return Object.assign(Object.assign({}, repositoryRecordConverter.uiToDb(uiSolutionFactor, ageSuitability)), { solution,
            situationFactorPosition });
    }
}
DI.set(SOLUTION_CONVERTER, SolutionConverter);
//# sourceMappingURL=SolutionConverter.js.map