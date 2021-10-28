import { DI } from '@airport/di';
import { Subject } from 'rxjs';
import { POLL_MAIN_LOGIC } from '../../../tokens';
export class PollMainLogic {
    votesEqual(lastVote, vote) {
        return lastVote && vote
            && lastVote[1].outcome === vote[1].outcome
            && lastVote[2].outcome === vote[2].outcome
            && lastVote[3].outcome === vote[3].outcome
            && lastVote[1].value === vote[1].value
            && lastVote[2].value === vote[2].value
            && lastVote[3].value === vote[3].value;
    }
    copyVoteToTween(vote, lastVote) {
        return {
            1: this.getTweenVoteFactor(vote, lastVote, 1),
            2: this.getTweenVoteFactor(vote, lastVote, 2),
            3: this.getTweenVoteFactor(vote, lastVote, 3)
        };
    }
    scheduleFactorTweens(oldVote, newVote, durationMillis) {
        const subject = new Subject();
        // const durationMillis    = 15000
        // const durationMillis    = 300
        const numFrames = Math.ceil(durationMillis / 17);
        let numRemainingFrames = numFrames;
        const config = {
            1: this.setupFactorTween(1, oldVote, newVote, numFrames),
            2: this.setupFactorTween(2, oldVote, newVote, numFrames),
            3: this.setupFactorTween(3, oldVote, newVote, numFrames)
        };
        const intervalHandle = setInterval(() => {
            this.runFactorTween(config[1], numRemainingFrames);
            this.runFactorTween(config[2], numRemainingFrames);
            this.runFactorTween(config[3], numRemainingFrames);
            numRemainingFrames--;
            if (!numRemainingFrames) {
                this.setFinalFactor(newVote[1], config[1]);
                this.setFinalFactor(newVote[2], config[2]);
                this.setFinalFactor(newVote[3], config[3]);
                clearInterval(intervalHandle);
            }
            subject.next(newVote);
            // page.set({factorDelta: page.get().factorDelta + 1})
        }, 17);
        return subject;
    }
    getTweenVoteFactor(vote, lastVote, factorNumber) {
        return {
            factorNumber,
            outcome: vote[factorNumber].outcome,
            tweenOutcome: lastVote[factorNumber].outcome,
            tweenValue: lastVote[factorNumber].value,
            value: vote[factorNumber].value
        };
    }
    runFactorTween(config, numRemainingFrames) {
        config.newDirFrameNumber++;
        const { newDirFrameNumber, newVoteFactor, newVoteValue, numNewDirFrames, numOldDirFrames, numRemainingOldDirFrames, oldVoteFactor, oldVoteValue, zeroValueFrameNumber } = config;
        if (zeroValueFrameNumber) {
            if (newVoteFactor.outcome
                && numRemainingFrames === zeroValueFrameNumber) {
                newVoteFactor.tweenValue = 0;
                newVoteFactor.tweenOutcome = newVoteFactor.outcome;
            }
            else if (!newVoteFactor.outcome
                || numRemainingFrames > zeroValueFrameNumber) {
                // Always go here if the factor is being removed (dir === 0)
                newVoteFactor.tweenValue = Math.floor(oldVoteValue
                    / numOldDirFrames * numRemainingOldDirFrames);
                newVoteFactor.tweenOutcome = oldVoteFactor.outcome;
            }
            else {
                newVoteFactor.tweenValue = Math.floor(newVoteValue
                    / numNewDirFrames * newDirFrameNumber);
                newVoteFactor.tweenOutcome = newVoteFactor.outcome;
            }
        }
        else {
            const factorValue = oldVoteValue + ((newVoteValue - oldVoteValue)
                / numNewDirFrames * newDirFrameNumber);
            newVoteFactor.tweenValue = newVoteValue > oldVoteValue
                ? Math.floor(factorValue)
                : Math.ceil(factorValue);
            newVoteFactor.tweenOutcome = newVoteFactor.outcome;
        }
        config.numRemainingOldDirFrames--;
    }
    // if(!newVoteFactor.dir) {
    setFinalFactor(newVoteFactor, outcomeConfig) {
        newVoteFactor.tweenOutcome = outcomeConfig.newVoteFactor.outcome;
        // }
        newVoteFactor.tweenValue = outcomeConfig.newVoteFactor.value;
    }
    setupFactorTween(factorNumber, oldVote, newVote, numFrames) {
        const oldVoteFactor = oldVote[factorNumber];
        const newVoteFactor = newVote[factorNumber];
        const oldVoteValue = oldVoteFactor.value;
        const newVoteValue = newVoteFactor.value;
        let zeroValueFrameNumber = 0;
        let numNewDirFrames;
        let numOldDirFrames = 0;
        let newDirFrameNumber = 0;
        let numRemainingOldDirFrames = 0;
        if (oldVoteFactor.outcome !== newVoteFactor.outcome) {
            const valueDifference = oldVoteValue + newVoteValue;
            const oldVoteFraction = oldVoteValue / valueDifference;
            numOldDirFrames = zeroValueFrameNumber = Math.ceil(numFrames * oldVoteFraction);
            numRemainingOldDirFrames = numOldDirFrames;
            numNewDirFrames = numFrames - numOldDirFrames;
            newDirFrameNumber = -numOldDirFrames;
            newVoteFactor.tweenOutcome = oldVoteFactor.outcome;
        }
        else {
            numNewDirFrames = numFrames;
            newVoteFactor.tweenOutcome = newVoteFactor.outcome;
        }
        return {
            newDirFrameNumber,
            newVoteFactor,
            newVoteValue,
            numNewDirFrames,
            numOldDirFrames,
            numRemainingOldDirFrames,
            oldVoteFactor,
            oldVoteValue,
            zeroValueFrameNumber
        };
    }
}
DI.set(POLL_MAIN_LOGIC, PollMainLogic);
//# sourceMappingURL=PollMainLogic.js.map