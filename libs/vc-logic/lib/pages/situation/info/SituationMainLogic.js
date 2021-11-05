import { DI } from '@airport/di';
import { Subject } from 'rxjs';
import { SITUATION_MAIN_LOGIC } from '../../../tokens';
export class SituationMainLogic {
    votesEqual(lastSolution, solution) {
        return lastSolution && solution
            && lastSolution[1].outcome === solution[1].outcome
            && lastSolution[2].outcome === solution[2].outcome
            && lastSolution[3].outcome === solution[3].outcome
            && lastSolution[1].value === solution[1].value
            && lastSolution[2].value === solution[2].value
            && lastSolution[3].value === solution[3].value;
    }
    copyVoteToTween(solution, lastSolution) {
        return {
            1: this.getTweenVoteFactor(solution, lastSolution, 1),
            2: this.getTweenVoteFactor(solution, lastSolution, 2),
            3: this.getTweenVoteFactor(solution, lastSolution, 3)
        };
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
    getTweenVoteFactor(solution, solutionVote, factorNumber) {
        return {
            factorNumber,
            outcome: solution[factorNumber].outcome,
            tweenOutcome: solutionVote[factorNumber].outcome,
            tweenValue: solutionVote[factorNumber].value,
            value: solution[factorNumber].value
        };
    }
    runFactorTween(config, numRemainingFrames) {
        config.newDirFrameNumber++;
        const { newDirFrameNumber, newSolutionFactor: newSolutionFactor, newSolutionValue: newSolutionValue, numNewDirFrames, numOldDirFrames, numRemainingOldDirFrames, oldSolutionFactor: oldVoteFactor, oldSolutionValue: oldVoteValue, zeroValueFrameNumber } = config;
        if (zeroValueFrameNumber) {
            if (newSolutionFactor.outcome
                && numRemainingFrames === zeroValueFrameNumber) {
                newSolutionFactor.tweenValue = 0;
                newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
            }
            else if (!newSolutionFactor.outcome
                || numRemainingFrames > zeroValueFrameNumber) {
                // Always go here if the factor is being removed (dir === 0)
                newSolutionFactor.tweenValue = Math.floor(oldVoteValue
                    / numOldDirFrames * numRemainingOldDirFrames);
                newSolutionFactor.tweenOutcome = oldVoteFactor.outcome;
            }
            else {
                newSolutionFactor.tweenValue = Math.floor(newSolutionValue
                    / numNewDirFrames * newDirFrameNumber);
                newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
            }
        }
        else {
            const factorValue = oldVoteValue + ((newSolutionValue - oldVoteValue)
                / numNewDirFrames * newDirFrameNumber);
            newSolutionFactor.tweenValue = newSolutionValue > oldVoteValue
                ? Math.floor(factorValue)
                : Math.ceil(factorValue);
            newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
        }
        config.numRemainingOldDirFrames--;
    }
    // if(!newVoteFactor.dir) {
    setFinalFactor(newSolutionFactor, outcomeConfig) {
        newSolutionFactor.tweenOutcome = outcomeConfig.newSolutionFactor.outcome;
        // }
        newSolutionFactor.tweenValue = outcomeConfig.newSolutionFactor.value;
    }
    setupFactorTween(factorNumber, oldVote, newVote, numFrames) {
        const oldVoteFactor = oldVote[factorNumber];
        const newSolutionFactor = newVote[factorNumber];
        const oldVoteValue = oldVoteFactor.value;
        const newSolutionValue = newSolutionFactor.value;
        let zeroValueFrameNumber = 0;
        let numNewDirFrames;
        let numOldDirFrames = 0;
        let newDirFrameNumber = 0;
        let numRemainingOldDirFrames = 0;
        if (oldVoteFactor.outcome !== newSolutionFactor.outcome) {
            const valueDifference = oldVoteValue + newSolutionValue;
            const oldVoteFraction = oldVoteValue / valueDifference;
            numOldDirFrames = zeroValueFrameNumber = Math.ceil(numFrames * oldVoteFraction);
            numRemainingOldDirFrames = numOldDirFrames;
            numNewDirFrames = numFrames - numOldDirFrames;
            newDirFrameNumber = -numOldDirFrames;
            newSolutionFactor.tweenOutcome = oldVoteFactor.outcome;
        }
        else {
            numNewDirFrames = numFrames;
            newSolutionFactor.tweenOutcome = newSolutionFactor.outcome;
        }
        return {
            newDirFrameNumber,
            newSolutionFactor: newSolutionFactor,
            newSolutionValue: newSolutionValue,
            numNewDirFrames,
            numOldDirFrames,
            numRemainingOldDirFrames,
            oldSolutionFactor: oldVoteFactor,
            oldSolutionValue: oldVoteValue,
            zeroValueFrameNumber
        };
    }
}
DI.set(SITUATION_MAIN_LOGIC, SituationMainLogic);
//# sourceMappingURL=SituationMainLogic.js.map