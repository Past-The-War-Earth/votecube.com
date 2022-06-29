import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { IIdeaDao } from "../dao/IdeaDao";
import { ReasonDao } from "../dao/ReasonDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { ITotalDelta } from "../dao/TotalDelta";
import { Agreement, AgreementReason, Idea, Reason, SituationIdea } from "../ddl/ddl";
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
    ideaDao: IIdeaDao

    @Inject()
    reasonDao: ReasonDao

    @Inject()
    situationIdeaDao: ISituationIdeaDao

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
        inAgreement: Agreement
    ): Promise<void> {
        await this.ensureValidFactorsAndPositions(inAgreement)
        await this.ensureValidReasons(inAgreement)
        const {
            agreement,
            delta
        } = await this.removeSharesFromNotSelectedAgreementReasons(inAgreement)
        await this.agreementDao.save(agreement)
        await this.updateAgreementShareTotals(agreement, delta)
    }

    private async ensureValidFactorsAndPositions(
        agreement: Agreement
    ): Promise<void> {
        if (!agreement.idea.uuId) {
            throw new Error(`passed in agreement.idea doesn't have a UuId`)
        }
        let idea: Idea = await this.ideaDao.findByUuId(agreement.idea.uuId)
        if (!idea) {
            throw new Error(`Idea with UuId "${agreement.idea.uuId}" does not exist.`)
        }
        agreement.idea = idea

        if (agreement.situationIdea) {
            if (!agreement.situationIdea.uuId) {
                throw new Error(`passed in agreement.situationIdea doesn't have a UuId`)
            }
            let situationIdea: SituationIdea = await this.situationIdeaDao
                .findByUuId(agreement.situationIdea.uuId)
            if (!situationIdea) {
                throw new Error(`SituationIdea with UuId "${agreement.situationIdea.uuId}" does not exist.`)
            }
            if (situationIdea.idea.uuId !== idea.uuId) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.uuId})
doesn't match agreement.idea.uuId (${idea.uuId})`);
            }
            agreement.situationIdea = situationIdea
        }

        let shareTotal = 0
        for (const agreementReason of agreement.agreementReasons) {
            if (!agreementReason) {
                throw new Error(`Recieved a null agreementReason`)
            }
            if (agreementReason.share < -100 || agreementReason.share > 100) {
                throw new Error(`Invalid agreementReason.share`)
            }
            shareTotal += agreementReason.share
            const reason: Reason = agreementReason.reason
            if (!reason) {
                throw new Error(`Recieved a null reason`)
            }
            if (!reason.idea || reason.idea.uuId !== agreement.idea.uuId) {
                throw new Error(`Invalid Idea for Reason '${reason.uuId}'`)
            }
            if (agreement.situationIdea && (
                !reason.situationIdea || reason.situationIdea.uuId !== agreement.situationIdea.uuId
            )) {
                throw new Error(`Invalid SituationIdea for Reason '${reason.uuId}'`)
            } else if (reason.situationIdea) {
                throw new Error(`SituationIdea is Not specified for Agreement but is specified for Reason '${reason.uuId}'`)
            }
            if (!reason.factor) {
                throw new Error(`Recieved a null factor`)
            }
            if (!reason.position) {
                throw new Error(`Recieved a null position`)
            }
        }

        if (shareTotal < -100 || shareTotal > 100) {
            throw new Error(`Invalid agreementReason.share total`)
        }
        agreement.shareTotal = Math.floor(shareTotal)
    }

    private async ensureValidReasons(
        agreement: Agreement,
    ): Promise<void> {
        let existingReasons: Reason[];
        if (agreement.situationIdea) {
            existingReasons = await this.
                reasonDao.findAllForSituationIdea(agreement.situationIdea)
        } else {
            existingReasons = await this.
                reasonDao.findAllForIdea(agreement.idea)
        }

        const agreementReasonWithNewReasonMap: Map<string, AgreementReason> = new Map()
        const existingIncomingReasonMap: Map<string, Reason> = new Map()
        for (const incomingAgreementReason of agreement.agreementReasons) {
            const incomingReason: Reason = incomingAgreementReason.reason
            if (!incomingReason.actorRecordId) {
                const reasonUuId: string = incomingReason.factor.uuId + '-'
                    + incomingReason.position.uuId
                if (agreementReasonWithNewReasonMap.has(reasonUuId)) {
                    throw new Error(`Reason for Factor ${incomingReason.factor.uuId} and Position ${incomingReason.position.uuId}
is found more than once.`)
                }
                agreementReasonWithNewReasonMap.set(reasonUuId, incomingAgreementReason)
            } else {
                const uuId = incomingReason.uuId
                if (existingIncomingReasonMap.has(uuId)) {
                    throw new Error(`Reason with UuId: ${uuId} is found more than once.`)
                }
                existingIncomingReasonMap.set(uuId, incomingReason)
            }
        }

        let existingReasonMap: Map<string, Reason> = new Map()
        let existingReasonMapByFactorAndPositionUuIds: Map<string, Reason> = new Map()
        for (const reason of existingReasons) {
            existingReasonMap.set(reason.uuId, reason)
            existingReasonMapByFactorAndPositionUuIds.set(reason.factor.uuId + '-' + reason.position.uuId, reason)
        }

        for (const existingIncomingReason of existingIncomingReasonMap.values()) {
            if (!existingReasonMap.has(existingIncomingReason.uuId)) {
                throw new Error(`Reason ${existingIncomingReason.uuId} does not exist`)
            }
        }
        for (const [newReasonFactorAndPositionUuId, agreementReason] of agreementReasonWithNewReasonMap) {
            let existingReason: Reason = existingReasonMapByFactorAndPositionUuIds
                .get(newReasonFactorAndPositionUuId)
            if (existingReason) {
                agreementReason.reason = existingReason
            }
        }
    }

    private async removeSharesFromNotSelectedAgreementReasons(
        agreement: Agreement
    ): Promise<{
        agreement: Agreement,
        delta: ITotalDelta
    }> {
        let existingAgreement: Agreement
        if (agreement.situationIdea) {
            existingAgreement = await this.agreementDao
                .findForSituationIdeaAndUser(
                    agreement.situationIdea,
                    agreement.actor.user.uuId
                )
        } else {
            existingAgreement = await this.agreementDao
                .findForIdeaOnlyAndUser(
                    agreement.idea,
                    agreement.actor.user.uuId
                )
        }
        if (existingAgreement) {
            const leftOverAgreementReasonsById = this.agreementReasonDao
                .mapByUuId(existingAgreement.agreementReasons)
            for (const agreementReason of agreement.agreementReasons) {
                if (agreementReason.uuId) {
                    leftOverAgreementReasonsById.delete(agreementReason.uuId)
                }
            }
            for (const leftOverAgreementReason of leftOverAgreementReasonsById.values()) {
                leftOverAgreementReason.axis = null
                leftOverAgreementReason.share = 0
                agreement.agreementReasons.push(leftOverAgreementReason)
            }
            existingAgreement.agreementReasons = agreement.agreementReasons
            existingAgreement.idea = agreement.idea
            existingAgreement.situationIdea = agreement.situationIdea
            return {
                agreement: existingAgreement,
                delta: {
                    totalDelta: agreement.shareTotal - existingAgreement.shareTotal,
                    numberDelta: 0
                }
            }
        }
        return {
            agreement,
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
