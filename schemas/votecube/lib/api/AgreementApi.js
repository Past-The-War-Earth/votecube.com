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
        // this.agreementDuo.validate(agreement => ({
        //     agreementReasons: {
        //     },
        //     id: true,
        //     idea: exists(),
        //     situationIdea: nullOr({
        //         id: true,
        //         idea: equals(agreement.idea)
        //     })
        // }))
        if (!agreement.idea.id) {
            throw new Error(`passed in agreement.idea doesn't have an Id`);
        }
        let idea = await this.ideaDao.findOne(agreement.idea, true);
        if (!idea) {
            throw new Error(`Idea with Id "${agreement.idea.id}" does not exist.`);
        }
        agreement.idea = idea;
        if (agreement.situationIdea) {
            if (!agreement.situationIdea.id) {
                throw new Error(`passed in agreement.situationIdea doesn't have an Id`);
            }
            let situationIdea = await this.situationIdeaDao
                .findOne(agreement.situationIdea, true);
            if (!situationIdea) {
                throw new Error(`SituationIdea with Id "${agreement.situationIdea.id}" does not exist.`);
            }
            if (situationIdea.idea.id !== idea.id) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.id})
doesn't match agreement.idea.id (${idea.id})`);
            }
            agreement.situationIdea = situationIdea;
        }
    }
    async validateFactorsAndPositions(agreement) {
        // this.agreementDuo.validate({
        //     agreementReasons: {
        //         reason: exists({
        //             idea: equals(agreement.idea),
        //             situationIdea: or(
        //                 isNullIf(!agreement.situationIdea),
        //                 equals(agreement.situationIdea)
        //             ),
        //             share: between(-100, 100)
        //         },
        //         idea: exists(),
        //         situationIdea: or(
        //             isNull(),
        //             {
        //             idea: equals(agreement.idea)
        //         })
        // })
        let shareTotal = 0;
        let existingFactorMapById = new Map();
        let newFactors = [];
        let existingPositionMapById = new Map();
        let newPositions = [];
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
            if (!reason.idea || reason.idea.id !== agreement.idea.id) {
                throw new Error(`Invalid Idea for Reason '${reason.id}'`);
            }
            if (agreement.situationIdea && (!reason.situationIdea || reason.situationIdea.id !== agreement.situationIdea.id)) {
                throw new Error(`Invalid SituationIdea for Reason '${reason.id}'`);
            }
            else if (reason.situationIdea) {
                throw new Error(`SituationIdea is Not specified for Agreement but is specified for Reason
'${reason.id}'
`);
            }
            const factor = reason.factor;
            const position = reason.position;
            if (!factor) {
                throw new Error(`Recieved a null factor`);
            }
            if (!position) {
                throw new Error(`Recieved a null position`);
            }
            if (factor.id) {
                existingFactorMapById.set(factor.id, factor);
            }
            else {
                newFactors.push(factor);
            }
            if (position.id) {
                existingPositionMapById.set(position.id, position);
            }
            else {
                newPositions.push(position);
            }
        }
        // TODO: Verify factor and position existance and create new ones if necessary
        const foundFactors = await this.factorDao.findIn(Array.from(existingFactorMapById.values()));
        const foundFactorMapById = this.factorDao.mapById(foundFactors);
        for (const existingFactor of existingFactorMapById.values()) {
            if (!foundFactorMapById.has(existingFactor.id)) {
                throw new Error(`Factor with Id '${existingFactor.id}' does not exist.`);
            }
        }
        // const foundPositions = await this.positionDao.f
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
            if (!incomingReason.id) {
                const reasonId = incomingReason.factor.id + '-'
                    + incomingReason.position.id;
                if (agreementReasonWithNewReasonMap.has(reasonId)) {
                    throw new Error(`Reason for Factor
${incomingReason.factor.id}
                    and Position
${incomingReason.position.id}
    is found more than once.`);
                }
                agreementReasonWithNewReasonMap.set(reasonId, incomingAgreementReason);
            }
            else {
                const id = incomingReason.id;
                if (existingIncomingReasonMap.has(id)) {
                    throw new Error(`Reason with Id: ${id} is found more than once.`);
                }
                existingIncomingReasonMap.set(id, incomingReason);
            }
        }
        let existingReasonMap = new Map();
        let existingReasonMapByFactorAndPositionUuIds = new Map();
        for (const reason of existingReasons) {
            existingReasonMap.set(reason.id, reason);
            existingReasonMapByFactorAndPositionUuIds.set(reason.factor.id + '-' + reason.position.id, reason);
        }
        for (const existingIncomingReason of existingIncomingReasonMap.values()) {
            if (!existingReasonMap.has(existingIncomingReason.id)) {
                throw new Error(`Reason ${existingIncomingReason.id} does not exist`);
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
                .findForSituationIdeaAndUser(agreement.situationIdea, agreement.actor.userAccount.GUID);
        }
        else {
            existingAgreement = await this.agreementDao
                .findForIdeaOnlyAndUser(agreement.idea, agreement.actor.userAccount.GUID);
        }
        if (existingAgreement) {
            const leftOverAgreementReasonsById = this.agreementReasonDao
                .mapById(existingAgreement.agreementReasons);
            for (const agreementReason of agreement.agreementReasons) {
                if (agreementReason.id) {
                    leftOverAgreementReasonsById.delete(agreementReason.id);
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
], AgreementApi.prototype, "factorDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "ideaDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "positionDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "reasonDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "situationIdeaDao", void 0);
__decorate([
    Inject()
], AgreementApi.prototype, "agreementDuo", void 0);
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