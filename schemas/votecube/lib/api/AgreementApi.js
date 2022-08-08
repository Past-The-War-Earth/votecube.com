var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { and, between, byId, equals, exists, isNull, length, oneOfStrings, or, uniqueIn, value } from "@airbridge/validate";
let AgreementApi = class AgreementApi {
    async saveAgreement(agreement) {
        return null;
    }
    async getMyAgreementForIdea(ideaRepositoryUuid) {
        return null;
    }
    async setAgreement(agreement) {
        await this.agreementDvo.validate(agreement, {
            agreementReasons: {
                reason: and(uniqueIn(agreement), or(exists(byId()), {
                    factor: or(exists(or(byId(), {
                        customText: isNull(),
                        action: equals(),
                        object: equals()
                    }, {
                        customText: equals(),
                        action: isNull(),
                        object: isNull()
                    })), {
                        customText: length(5, 50),
                        action: isNull(),
                        object: isNull()
                    }, {
                        action: oneOfStrings('Helps', 'Lets'),
                        customText: isNull(),
                        object: oneOfStrings('Me', 'Them', 'Us', 'You'),
                    }),
                    position: or(exists(or(byId(), {
                        name: equals()
                    })), {
                        name: length(5, 100)
                    })
                })),
                share: between(-100, 100)
            },
            idea: exists(byId()),
            situationIdea: or(isNull(), exists(byId(), {
                idea: equals(value(agreement.idea))
            }))
        });
        await this.calculateShareTotal(agreement);
        const { updatedAgreement, delta } = await this.removeSharesFromNotSelectedAgreementReasons(agreement);
        await this.agreementDao.save(updatedAgreement);
        await this.updateAgreementShareTotals(updatedAgreement, delta);
    }
    async calculateShareTotal(agreement) {
        let shareTotal = 0;
        for (const agreementReason of agreement.agreementReasons) {
            shareTotal += agreementReason.share;
        }
        agreement.shareTotal = Math.floor(shareTotal);
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
                leftOverAgreementReason.share = 0;
                agreement.agreementReasons.push(leftOverAgreementReason);
            }
            existingAgreement.agreementReasons = agreement.agreementReasons;
            existingAgreement.idea = agreement.idea;
            existingAgreement.situationIdea = agreement.situationIdea;
            return {
                updatedAgreement: existingAgreement,
                delta: {
                    totalDelta: agreement.shareTotal - existingAgreement.shareTotal,
                    numberDelta: 0
                }
            };
        }
        return {
            updatedAgreement: agreement,
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
], AgreementApi.prototype, "agreementDvo", void 0);
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