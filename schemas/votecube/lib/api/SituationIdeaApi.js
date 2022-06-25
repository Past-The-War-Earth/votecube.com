var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let SituationIdeaApi = class SituationIdeaApi {
    async add(situationIdea) {
        await this.situationIdeaDao.save(situationIdea);
    }
    async setAgreement(agreement) {
        const situationIdeaReasons = await this.
            ensureValidFactorsAndPositions(agreement);
        await this.ensureValidReasons(agreement, situationIdeaReasons);
        agreement = await this.removeSharesFromNotSelectedAgreementReasons(agreement);
        await this.agreementDao.save(agreement);
        await this.updateSituationIdeaAgreementShares(agreement);
    }
    async ensureValidFactorsAndPositions(agreement) {
        if (!agreement.situationIdea.uuId) {
            throw new Error(`passed in agreement.situationIdea doesn't have a UuId`);
        }
        let situationIdea = await this.situationIdeaDao
            .findByUuId(agreement.situationIdea.uuId);
        if (!situationIdea) {
            throw new Error(`SituationIdea with UuId "${agreement.situationIdea.uuId}" does not exist.`);
        }
        for (const incomingAgreementReason of agreement.agreementReasons) {
            if (!incomingAgreementReason) {
                throw new Error(`Recieved a null agreementReason`);
            }
            const incomingReason = incomingAgreementReason.reason;
            if (!incomingReason) {
                throw new Error(`Recieved a null reason`);
            }
            if (!incomingReason.factor) {
                throw new Error(`Recieved a null factor`);
            }
            if (!incomingReason.position) {
                throw new Error(`Recieved a null position`);
            }
        }
        const situationIdeaReasons = await this.
            reasonDao.findAllForSituationIdea(agreement.situationIdea);
        return situationIdeaReasons;
    }
    async ensureValidReasons(agreement, situationIdeaReasons) {
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
        for (const reason of situationIdeaReasons) {
            existingReasonMap.set(reason.uuId, reason);
            existingReasonMapByFactorAndPositionUuIds.set(reason.factor.uuId + '-' + reason.position.uuId, reason);
        }
        for (const existingIncomingReason of existingIncomingReasonMap.values()) {
            if (!existingReasonMap.has(existingIncomingReason.uuId)) {
                throw new Error(`Reason ${existingIncomingReason.uuId} does not exist`);
            }
        }
        for (const [newReasonFactorAndPositionUuId, agreementReason] of agreementReasonWithNewReasonMap) {
            let existingReason = existingReasonMapByFactorAndPositionUuIds
                .get(newReasonFactorAndPositionUuId);
            if (existingReason) {
                agreementReason.reason = existingReason;
            }
        }
    }
    async removeSharesFromNotSelectedAgreementReasons(agreement) {
        const existingAgreement = await this.agreementDao
            .findForSituationIdeaAndUser(agreement.situationIdea, agreement.actor.user.uuId);
        if (existingAgreement) {
            const leftOverAgreementReasonsById = this.agreementReasonDao
                .mapByUuId(existingAgreement.agreementReasons);
            for (const agreementReason of agreement.agreementReasons) {
                leftOverAgreementReasonsById.delete(agreementReason.uuId);
            }
            for (const leftOverAgreementReason of leftOverAgreementReasonsById.values()) {
                leftOverAgreementReason.axis = null;
                leftOverAgreementReason.share = 0;
                agreement.agreementReasons.push(leftOverAgreementReason);
            }
            existingAgreement.agreementReasons = agreement.agreementReasons;
            return existingAgreement;
        }
        return agreement;
    }
    async updateSituationIdeaAgreementShares(agreement) {
        const allSituationIdeaAgreements = await this.agreementDao
            .findAllAgreementSharesForSituationIdea(agreement.situationIdea);
        agreement.situationIdea.numberOfAgreements = allSituationIdeaAgreements.length;
        agreement.situationIdea.agreementShareTotal = 0;
        await this.situationIdeaDao.save(agreement.situationIdea);
    }
    // FIXME: Recompute all agreements for a SituationIdea when it's loaded
    // Do this only in non-server environments since the counts can be widely off across
    // different save branches
    async updateAgreementShare(situationIdeaUuId) {
        // const situationIdea = this.situationIdeaDao.findById(situationIdeaUuId);
        // const agreementReasons = this.agreementReasonDao.findAllForSituationIdea(situationIdeaUuId);
        // Recompute all situationIdea level counts
        // await this.situationIdeaDao.save(situationIdea)
    }
};
__decorate([
    Inject()
], SituationIdeaApi.prototype, "agreementDao", void 0);
__decorate([
    Inject()
], SituationIdeaApi.prototype, "agreementReasonDao", void 0);
__decorate([
    Inject()
], SituationIdeaApi.prototype, "reasonDao", void 0);
__decorate([
    Inject()
], SituationIdeaApi.prototype, "situationIdeaDao", void 0);
__decorate([
    Inject()
], SituationIdeaApi.prototype, "request", void 0);
__decorate([
    Api()
], SituationIdeaApi.prototype, "add", null);
__decorate([
    Api()
], SituationIdeaApi.prototype, "setAgreement", null);
__decorate([
    Api(
    // { server: false }
    )
], SituationIdeaApi.prototype, "updateAgreementShare", null);
SituationIdeaApi = __decorate([
    Injected()
], SituationIdeaApi);
export { SituationIdeaApi };
//# sourceMappingURL=SituationIdeaApi.js.map