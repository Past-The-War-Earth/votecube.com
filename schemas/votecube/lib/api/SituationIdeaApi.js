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
            agreement = existingAgreement;
        }
        await this.agreementDao.save(agreement);
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
], SituationIdeaApi.prototype, "situationIdeaDao", void 0);
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