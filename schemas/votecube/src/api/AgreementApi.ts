import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { 
    and,
    between,
    byId,
    equals,
    exists,
    isNull,
    length,
    oneOfStrings,
    or,
    uniqueIn,
    value
} from "@airbridge/validate";
import { ITotalDelta } from "@sapoto/core";
import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { FactorDao } from "../dao/FactorDao";
import { IIdeaDao } from "../dao/IdeaDao";
import { PositionDao } from "../dao/PositionDao";
import { ReasonDao } from "../dao/reason/ReasonDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { Agreement } from "../ddl/ddl";
import { AgreementDvo } from "../dvo/AgreementDvo";
import { IAgreement } from "../generated/interfaces";

export interface IAgreementApi {

    saveAgreement(
        agreement: IAgreement
    ): Promise<void>

    getMyAgreementForIdea(
        ideaRepositoryUuid: string
    ): Promise<IAgreement>

}

@Injected()
export class AgreementApi
    implements IAgreementApi {

    @Inject()
    agreementDao: AgreementDao

    @Inject()
    agreementReasonDao: AgreementReasonDao

    @Inject()
    factorDao: FactorDao

    @Inject()
    ideaDao: IIdeaDao

    @Inject()
    positionDao: PositionDao

    @Inject()
    reasonDao: ReasonDao

    @Inject()
    situationIdeaDao: ISituationIdeaDao

    @Inject()
    agreementDvo: AgreementDvo

    @Api()
    async saveAgreement(
        agreement: IAgreement
    ): Promise<void> {
        return null
    }

    @Api()
    async getMyAgreementForIdea(
        ideaRepositoryUuid: string
    ): Promise<IAgreement> {
        return null
    }

    @Api()
    async setAgreement(
        agreement: Agreement
    ): Promise<void> {
        await this.agreementDvo.validate(agreement, {
            agreementReasons: {
                reason: and(
                    uniqueIn(agreement),
                    or(
                        exists(byId()),
                        {
                            factor: or(exists(or(
                                byId(),
                                {
                                    customText: isNull(),
                                    action: equals(),
                                    object: equals()
                                },
                                {
                                    customText: equals(),
                                    action: isNull(),
                                    object: isNull()
                                }
                            )), {
                                customText: length(5, 50),
                                action: isNull(),
                                object: isNull()
                            }, {
                                action: oneOfStrings('Helps', 'Lets'),
                                customText: isNull(),
                                object: oneOfStrings('Me', 'Them', 'Us', 'You'),
                            }),
                            position: or(
                                exists(or(
                                    byId(),
                                    {
                                        name: equals()
                                    }
                                )),
                                {
                                    name: length(5, 100)
                                }
                            )
                        },
                    )
                ),
                share: between(-100, 100)
            },
            idea: exists(byId()),
            situationIdea: or(
                isNull(),
                exists(byId(), {
                    idea: equals(value(agreement.idea))
                }))
        })
        await this.calculateShareTotal(agreement)
        const {
            updatedAgreement,
            delta
        } = await this.removeSharesFromNotSelectedAgreementReasons(agreement)
        await this.agreementDao.save(updatedAgreement)
        await this.updateAgreementShareTotals(updatedAgreement, delta)
    }

    async calculateShareTotal(
        agreement: Agreement
    ): Promise<void> {
        let shareTotal = 0

        for (const agreementReason of agreement.agreementReasons) {
            shareTotal += agreementReason.share
        }

        agreement.shareTotal = Math.floor(shareTotal)
    }

    private async removeSharesFromNotSelectedAgreementReasons(
        agreement: Agreement
    ): Promise<{
        updatedAgreement: Agreement,
        delta: ITotalDelta
    }> {
        let existingAgreement: Agreement
        if (agreement.situationIdea) {
            existingAgreement = await this.agreementDao
                .findForSituationIdeaAndUser(
                    agreement.situationIdea,
                    agreement.actor.userAccount.GUID
                )
        } else {
            existingAgreement = await this.agreementDao
                .findForIdeaOnlyAndUser(
                    agreement.idea,
                    agreement.actor.userAccount.GUID
                )
        }
        if (existingAgreement) {
            const leftOverAgreementReasonsById = this.agreementReasonDao
                .mapById(existingAgreement.agreementReasons)
            for (const agreementReason of agreement.agreementReasons) {
                if (agreementReason.id) {
                    leftOverAgreementReasonsById.delete(agreementReason.id)
                }
            }
            for (const leftOverAgreementReason of leftOverAgreementReasonsById.values()) {
                leftOverAgreementReason.share = 0
                agreement.agreementReasons.push(leftOverAgreementReason)
            }
            existingAgreement.agreementReasons = agreement.agreementReasons
            existingAgreement.idea = agreement.idea
            existingAgreement.situationIdea = agreement.situationIdea
            return {
                updatedAgreement: existingAgreement,
                delta: {
                    totalDelta: agreement.shareTotal - existingAgreement.shareTotal,
                    numberDelta: 0
                }
            }
        }
        return {
            updatedAgreement: agreement,
            delta: {
                totalDelta: agreement.shareTotal,
                numberDelta: 1
            }
        }
    }

    private async updateAgreementShareTotals(
        agreement: Agreement,
        delta: ITotalDelta
    ): Promise<void> {
        await this.ideaDao.updateShareTotal(delta, agreement.idea)

        if (agreement.situationIdea) {
            await this.situationIdeaDao.updateShareTotal(delta, agreement.situationIdea)
        }
    }

}
