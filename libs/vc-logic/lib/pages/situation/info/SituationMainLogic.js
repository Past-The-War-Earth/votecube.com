import { container, DI } from '@airport/di';
import { Subject } from 'rxjs';
import { SITUATION_FORM_MANAGER } from '../../..';
import { SITUATION_MAIN_LOGIC } from '../../../tokens';
export class SituationMainLogic {
    solutionsEqual(lastSolution, solution) {
        return lastSolution && solution
            && lastSolution[1].outcome === solution[1].outcome
            && lastSolution[2].outcome === solution[2].outcome
            && lastSolution[3].outcome === solution[3].outcome
            && lastSolution[1].value === solution[1].value
            && lastSolution[2].value === solution[2].value
            && lastSolution[3].value === solution[3].value;
    }
    copySolutionToTween(solution, lastSolution) {
        const situationFormManager = container(this).getSync(SITUATION_FORM_MANAGER);
        return Object.assign(Object.assign({}, situationFormManager.getBlankUiRepositoryRecord()), { 1: this.getTweenSolutionFactor(solution, lastSolution, 1), 2: this.getTweenSolutionFactor(solution, lastSolution, 2), 3: this.getTweenSolutionFactor(solution, lastSolution, 3) });
    }
    scheduleFactorTweens(oldSolution, newSolution, durationMillis) {
        const subject = new Subject();
        // const durationMillis    = 15000
        // const durationMillis    = 300
        const numFrames = Math.ceil(durationMillis / 17);
        let numRemainingFrames = numFrames;
        const config = {
            1: this.setupFactorTween(1, oldSolution, newSolution, numFrames),
            2: this.setupFactorTween(2, oldSolution, newSolution, numFrames),
            3: this.setupFactorTween(3, oldSolution, newSolution, numFrames)
        };
        const intervalHandle = setInterval(() => {
            this.runFactorTween(config[1], numRemainingFrames);
            this.runFactorTween(config[2], numRemainingFrames);
            this.runFactorTween(config[3], numRemainingFrames);
            numRemainingFrames--;
            if (!numRemainingFrames) {
                this.setFinalFactor(newSolution[1], config[1]);
                this.setFinalFactor(newSolution[2], config[2]);
                this.setFinalFactor(newSolution[3], config[3]);
                clearInterval(intervalHandle);
            }
            subject.next(newSolution);
            // page.set({factorDelta: page.get().factorDelta + 1})
        }, 17);
        return subject;
    }
    getTweenSolutionFactor(solution, solutionSolution, factorNumber) {
        return {
            actorId: null,
            actorRecordId: null,
            ageSuitability: null,
            factorNumber,
            outcome: solution[factorNumber].outcome,
            repositoryId: null,
            tweenOutcome: solutionSolution[factorNumber].outcome,
            tweenValue: solutionSolution[factorNumber].value,
            value: solution[factorNumber].value
        };
    }
    runFactorTween(config, numRemainingFrames) {
        config.newDirFrameNumber++;
        const { newDirFrameNumber, newSolutionFactor, newSolutionValue, numNewDirFrames, numOldDirFrames, numRemainingOldDirFrames, oldSolutionFactor, oldSolutionValue, zeroValueFrameNumber } = config;
        if (zeroValueFrameNumber) {
            if (newSolutionFactor.outcome
                && numRemainingFrames === zeroValueFrameNumber) {
                newSolutionFactor.tweenValue = 0;
                newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
            }
            else if (!newSolutionFactor.outcome
                || numRemainingFrames > zeroValueFrameNumber) {
                // Always go here if the factor is being removed (dir === 0)
                newSolutionFactor.tweenValue = Math.floor(oldSolutionValue
                    / numOldDirFrames * numRemainingOldDirFrames);
                newSolutionFactor.tweenOutcome = oldSolutionFactor.outcome;
            }
            else {
                newSolutionFactor.tweenValue = Math.floor(newSolutionValue
                    / numNewDirFrames * newDirFrameNumber);
                newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
            }
        }
        else {
            const factorValue = oldSolutionValue + ((newSolutionValue - oldSolutionValue)
                / numNewDirFrames * newDirFrameNumber);
            newSolutionFactor.tweenValue = newSolutionValue > oldSolutionValue
                ? Math.floor(factorValue)
                : Math.ceil(factorValue);
            newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
        }
        config.numRemainingOldDirFrames--;
    }
    // if(!newSolutionFactor.dir) {
    setFinalFactor(newSolutionFactor, outcomeConfig) {
        newSolutionFactor.tweenOutcome = outcomeConfig.newSolutionFactor.outcome;
        // }
        newSolutionFactor.tweenValue = outcomeConfig.newSolutionFactor.value;
    }
    setupFactorTween(factorNumber, oldSolution, newSolution, numFrames) {
        const oldSolutionFactor = oldSolution[factorNumber];
        const newSolutionFactor = newSolution[factorNumber];
        const oldSolutionValue = oldSolutionFactor.value;
        const newSolutionValue = newSolutionFactor.value;
        let zeroValueFrameNumber = 0;
        let numNewDirFrames;
        let numOldDirFrames = 0;
        let newDirFrameNumber = 0;
        let numRemainingOldDirFrames = 0;
        if (oldSolutionFactor.outcome !== newSolutionFactor.outcome) {
            const valueDifference = oldSolutionValue + newSolutionValue;
            const oldSolutionFraction = oldSolutionValue / valueDifference;
            numOldDirFrames = zeroValueFrameNumber = Math.ceil(numFrames * oldSolutionFraction);
            numRemainingOldDirFrames = numOldDirFrames;
            numNewDirFrames = numFrames - numOldDirFrames;
            newDirFrameNumber = -numOldDirFrames;
            newSolutionFactor.tweenOutcome = oldSolutionFactor.outcome;
        }
        else {
            numNewDirFrames = numFrames;
            newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
        }
        return {
            newDirFrameNumber,
            newSolutionFactor,
            newSolutionValue,
            numNewDirFrames,
            numOldDirFrames,
            numRemainingOldDirFrames,
            oldSolutionFactor,
            oldSolutionValue,
            zeroValueFrameNumber
        };
    }
}
DI.set(SITUATION_MAIN_LOGIC, SituationMainLogic);
//# sourceMappingURL=SituationMainLogic.js.map