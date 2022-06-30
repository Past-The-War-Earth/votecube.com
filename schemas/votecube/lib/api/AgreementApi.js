var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let AgreementApi = class AgreementApi {
    async saveAgreement(agreement) {
        return null;
    }
    async getMyAgreementForIdea(ideaRepositoryUuid) {
        return null;
    }
    async setAgreement(inAgreement) {
        await this.validateIdeas(inAgreement);
        await this.validateFactorsAndPositions(inAgreement);
        await this.validateReasons(inAgreement);
        const { agreement, delta } = await this.removeSharesFromNotSelectedAgreementReasons(inAgreement);
        await this.agreementDao.save(agreement);
        await this.updateAgreementShareTotals(agreement, delta);
    }
    async validateIdeas(agreement) {
        if (!agreement.idea.uuId) {
            throw new Error(`passed in agreement.idea doesn't have a UuId`);
        }
        let idea = await this.ideaDao.findByUuId(agreement.idea.uuId, true);
        if (!idea) {
            throw new Error(`Idea with UuId "${agreement.idea.uuId}" does not exist.`);
        }
        agreement.idea = idea;
        if (agreement.situationIdea) {
            if (!agreement.situationIdea.uuId) {
                throw new Error(`passed in agreement.situationIdea doesn't have a UuId`);
            }
            let situationIdea = await this.situationIdeaDao
                .findByUuId(agreement.situationIdea.uuId, true);
            if (!situationIdea) {
                throw new Error(`SituationIdea with UuId "${agreement.situationIdea.uuId}" does not exist.`);
            }
            if (situationIdea.idea.uuId !== idea.uuId) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.uuId})
doesn't match agreement.idea.uuId (${idea.uuId})`);
            }
            agreement.situationIdea = situationIdea;
        }
    }
    async validateFactorsAndPositions(agreement) {
        let shareTotal = 0;
        for (const agreementReason of agreement.agreementReasons) {
            if (!agreementReason) {
                throw new Error(`Recieved a null agreementReason`);
            }
            if (agreementReason.share < -100 || agreementReason.share > 100) {
                throw new Error(`Invalid agreementReason.share`);
            }
            shareTotal += agreementReason.share;
            const reason = agreementReason.reason;
            if (!reason) {
                throw new Error(`Recieved a null reason`);
            }
            if (!reason.idea || reason.idea.uuId !== agreement.idea.uuId) {
                throw new Error(`Invalid Idea for Reason '${reason.uuId}'`);
            }
            if (agreement.situationIdea && (!reason.situationIdea || reason.situationIdea.uuId !== agreement.situationIdea.uuId)) {
                throw new Error(`Invalid SituationIdea for Reason '${reason.uuId}'`);
            }
            else if (reason.situationIdea) {
                throw new Error(`SituationIdea is Not specified for Agreement but is specified for Reason '${reason.uuId}'`);
            }
            if (!reason.factor) {
                throw new Error(`Recieved a null factor`);
            }
            if (!reason.position) {
                throw new Error(`Recieved a null position`);
            }
            // TODO: Collect factors and positions
        }
        // TODO: Verify factor and position existance and create new ones if necessary
        if (shareTotal < -100 || shareTotal > 100) {
            throw new Error(`Invalid agreementReason.share total`);
        }
        agreement.shareTotal = Math.floor(shareTotal);
    }
    async validateReasons(agreement) {
        let existingReasons;
        if (agreement.situationIdea) {
            existingReasons = await this.
                reasonDao.findAllForSituationIdea(agreement.situationIdea);
        }
        else {
            existingReasons = await this.
                reasonDao.findAllForIdea(agreement.idea);
        }
        const agreementReasonWithNewReasonMap = new Map();
        const existingIncomingReasonMap = new Map();
        for (const incomingAgreementReason of agreement.agreementReasons) {
            const incomingReason = incomingAgreementReason.reason;
            if (!incomingReason.actorRecordId) {
                const reasonUuId = incomingReason.factor.uuId + '-'
                    + incomingReason.position.uuId;
                if (agreementReasonWithNewReasonMap.has(reasonUuId)) {
                    throw new Error(`Reason for Factor ${incomingReason.factor.uuId} and Position ${incomingReason.position.uuId}
is found more than once.`);
                }
                agreementReasonWithNewReasonMap.set(reasonUuId, incomingAgreementReason);
            }
            else {
                const uuId = incomingReason.uuId;
                if (existingIncomingReasonMap.has(uuId)) {
                    throw new Error(`Reason with UuId: ${uuId} is found more than once.`);
                }
                existingIncomingReasonMap.set(uuId, incomingReason);
            }
        }
        let existingReasonMap = new Map();
        let existingReasonMapByFactorAndPositionUuIds = new Map();
        for (const reason of existingReasons) {
            existingReasonMap.set(reason.uuId, reason);
            existingReasonMapByFactorAndPositionUuIds.set(reason.factor.uuId + '-' + reason.position.uuId, reason);
        }
        for (const existingIncomingReason of existingIncomingReasonMap.values()) {
            if (!existingReasonMap.has(existingIncomingReason.uuId)) {
                throw new Error(`Reason ${existingIncomingReason.uuId} does not exist`);
            }
        }
        let newReasonsMap = new Map();
        for (const [newReasonFactorAndPositionUuId, agreementReason] of agreementReasonWithNewReasonMap) {
            let existingReason = existingReasonMapByFactorAndPositionUuIds
                .get(newReasonFactorAndPositionUuId);
            if (existingReason) {
                agreementReason.reason = existingReason;
            }
            else {
                newReasonsMap.set(newReasonFactorAndPositionUuId, agreementReason.reason);
            }
        }
    }
    async removeSharesFromNotSelectedAgreementReasons(agreement) {
        let existingAgreement;
        if (agreement.situationIdea) {
            existingAgreement = await this.agreementDao
                .findForSituationIdeaAndUser(agreement.situationIdea, agreement.actor.user.uuId);
        }
        else {
            existingAgreement = await this.agreementDao
                .findForIdeaOnlyAndUser(agreement.idea, agreement.actor.user.uuId);
        }
        if (existingAgreement) {
            const leftOverAgreementReasonsById = this.agreementReasonDao
                .mapByUuId(existingAgreement.agreementReasons);
            for (const agreementReason of agreement.agreementReasons) {
                if (agreementReason.uuId) {
                    leftOverAgreementReasonsById.delete(agreementReason.uuId);
                }
            }
            for (const leftOverAgreementReason of leftOverAgreementReasonsById.values()) {
                leftOverAgreementReason.axis = null;
                leftOverAgreementReason.share = 0;
                agreement.agreementReasons.push(leftOverAgreementReason);
            }
            existingAgreement.agreementReasons = agreement.agreementReasons;
            existingAgreement.idea = agreement.idea;
            existingAgreement.situationIdea = agreement.situationIdea;
            return {
                agreement: existingAgreement,
                delta: {
                    totalDelta: agreement.shareTotal - existingAgreement.shareTotal,
                    numberDelta: 0
                }
            };
        }
        return {
            agreement,
            delta: {
                totalDelta: agreement.shareTotal,
                numberDelta: 1
            }
        };
    }
    async updateAgreementShareTotals(agreement, delta) {
        await this.ideaDao.updateShareTotal(delta, agreement.idea);
        if (agreement.situationIdea) {
            await this.situationIdeaDao.updateShareTotal(delta, agreement.situationIdea);
        }
    }
};
__decorate([
    Inject()
], AgreementApi.prototype, "agreementDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "agreementReasonDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "ideaDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "reasonDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "situationIdeaDao", void 0);
__decorate([
    Api()
], AgreementApi.prototype, "saveAgreement", null);
__decorate([
    Api()
], AgreementApi.prototype, "getMyAgreementForIdea", null);
__decorate([
    Api()
], AgreementApi.prototype, "setAgreement", null);
AgreementApi = __decorate([
    Injected()
], AgreementApi);
export { AgreementApi };
//# sourceMappingURL=AgreementApi.js.map