var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from '@airport/direction-indicator';
import { Subject } from 'rxjs';
let IdeaMainLogic = class IdeaMainLogic {
    agreementsEqual(lastAgreement, agreement) {
        return lastAgreement && agreement
            && lastAgreement[1].outcome === agreement[1].outcome
            && lastAgreement[2].outcome === agreement[2].outcome
            && lastAgreement[3].outcome === agreement[3].outcome
            && lastAgreement[1].value === agreement[1].value
            && lastAgreement[2].value === agreement[2].value
            && lastAgreement[3].value === agreement[3].value;
    }
    copyAgreementToTween(agreement, lastAgreement) {
        return Object.assign(Object.assign({}, this.ideaFormManager.getBlankUiRepositoryRecord()), { 1: this.getTweenAgreementFactor(agreement, lastAgreement, 1), 2: this.getTweenAgreementFactor(agreement, lastAgreement, 2), 3: this.getTweenAgreementFactor(agreement, lastAgreement, 3) });
    }
    scheduleFactorTweens(oldAgreement, newAgreement, durationMillis) {
        const subject = new Subject();
        // const durationMillis    = 15000
        // const durationMillis    = 300
        const numFrames = Math.ceil(durationMillis / 17);
        let numRemainingFrames = numFrames;
        const config = {
            1: this.setupFactorTween(1, oldAgreement, newAgreement, numFrames),
            2: this.setupFactorTween(2, oldAgreement, newAgreement, numFrames),
            3: this.setupFactorTween(3, oldAgreement, newAgreement, numFrames)
        };
        const intervalHandle = setInterval(() => {
            this.runFactorTween(config[1], numRemainingFrames);
            this.runFactorTween(config[2], numRemainingFrames);
            this.runFactorTween(config[3], numRemainingFrames);
            numRemainingFrames--;
            if (!numRemainingFrames) {
                this.setFinalFactor(newAgreement[1], config[1]);
                this.setFinalFactor(newAgreement[2], config[2]);
                this.setFinalFactor(newAgreement[3], config[3]);
                clearInterval(intervalHandle);
            }
            subject.next(newAgreement);
            // page.set({factorDelta: page.get().factorDelta + 1})
        }, 17);
        return subject;
    }
    getTweenAgreementFactor(agreement, agreementAgreement, factorNumber) {
        return {
            // actorId: null,
            // actorRecordId: null,
            ageSuitability: null,
            factorNumber,
            outcome: agreement[factorNumber].outcome,
            // repositoryId: null,
            tweenOutcome: agreementAgreement[factorNumber].outcome,
            tweenValue: agreementAgreement[factorNumber].value,
            value: agreement[factorNumber].value
        };
    }
    runFactorTween(config, numRemainingFrames) {
        config.newDirFrameNumber++;
        const { newDirFrameNumber, newAgreementFactor, newAgreementValue, numNewDirFrames, numOldDirFrames, numRemainingOldDirFrames, oldAgreementFactor, oldAgreementValue, zeroValueFrameNumber } = config;
        if (zeroValueFrameNumber) {
            if (newAgreementFactor.outcome
                && numRemainingFrames === zeroValueFrameNumber) {
                newAgreementFactor.tweenValue = 0;
                newAgreementFactor.tweenOutcome = newAgreementFactor.outcome;
            }
            else if (!newAgreementFactor.outcome
                || numRemainingFrames > zeroValueFrameNumber) {
                // Always go here if the factor is being removed (dir === 0)
                newAgreementFactor.tweenValue = Math.floor(oldAgreementValue
                    / numOldDirFrames * numRemainingOldDirFrames);
                newAgreementFactor.tweenOutcome = oldAgreementFactor.outcome;
            }
            else {
                newAgreementFactor.tweenValue = Math.floor(newAgreementValue
                    / numNewDirFrames * newDirFrameNumber);
                newAgreementFactor.tweenOutcome = newAgreementFactor.outcome;
            }
        }
        else {
            const factorValue = oldAgreementValue + ((newAgreementValue - oldAgreementValue)
                / numNewDirFrames * newDirFrameNumber);
            newAgreementFactor.tweenValue = newAgreementValue > oldAgreementValue
                ? Math.floor(factorValue)
                : Math.ceil(factorValue);
            newAgreementFactor.tweenOutcome = newAgreementFactor.outcome;
        }
        config.numRemainingOldDirFrames--;
    }
    // if(!newAgreementFactor.dir) {
    setFinalFactor(newAgreementFactor, outcomeConfig) {
        newAgreementFactor.tweenOutcome = outcomeConfig.newAgreementFactor.outcome;
        // }
        newAgreementFactor.tweenValue = outcomeConfig.newAgreementFactor.value;
    }
    setupFactorTween(factorNumber, oldAgreement, newAgreement, numFrames) {
        const oldAgreementFactor = oldAgreement[factorNumber];
        const newAgreementFactor = newAgreement[factorNumber];
        const oldAgreementValue = oldAgreementFactor.value;
        const newAgreementValue = newAgreementFactor.value;
        let zeroValueFrameNumber = 0;
        let numNewDirFrames;
        let numOldDirFrames = 0;
        let newDirFrameNumber = 0;
        let numRemainingOldDirFrames = 0;
        if (oldAgreementFactor.outcome !== newAgreementFactor.outcome) {
            const valueDifference = oldAgreementValue + newAgreementValue;
            const oldAgreementFraction = oldAgreementValue / valueDifference;
            numOldDirFrames = zeroValueFrameNumber = Math.ceil(numFrames * oldAgreementFraction);
            numRemainingOldDirFrames = numOldDirFrames;
            numNewDirFrames = numFrames - numOldDirFrames;
            newDirFrameNumber = -numOldDirFrames;
            newAgreementFactor.tweenOutcome = oldAgreementFactor.outcome;
        }
        else {
            numNewDirFrames = numFrames;
            newAgreementFactor.tweenOutcome = newAgreementFactor.outcome;
        }
        return {
            newDirFrameNumber,
            newAgreementFactor,
            newAgreementValue,
            numNewDirFrames,
            numOldDirFrames,
            numRemainingOldDirFrames,
            oldAgreementFactor,
            oldAgreementValue,
            zeroValueFrameNumber
        };
    }
};
__decorate([
    Inject()
], IdeaMainLogic.prototype, "ideaFormManager", void 0);
IdeaMainLogic = __decorate([
    Injected()
], IdeaMainLogic);
export { IdeaMainLogic };
//# sourceMappingURL=IdeaMainLogic.js.map