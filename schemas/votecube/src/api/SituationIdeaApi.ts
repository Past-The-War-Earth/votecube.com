import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { ISituationIdeaDao } from "../dao/dao";
import { ReasonDao } from "../dao/ReasonDao";
import { Agreement, AgreementReason, Reason, SituationIdea } from "../ddl/ddl";
import { ISituationIdea } from "../generated/interfaces";

export interface ISituationIdeaApi {

    add(
        situationIdea: ISituationIdea
    ): Promise<void>

}

@Injected()
export class SituationIdeaApi
    implements ISituationIdeaApi {

    @Inject()
    agreementDao: AgreementDao

    @Inject()
    agreementReasonDao: AgreementReasonDao

    @Inject()
    reasonDao: ReasonDao

    @Inject()
    situationIdeaDao: ISituationIdeaDao

    @Inject()
    request: Request

    @Api()
    async add(
        situationIdea: ISituationIdea
    ): Promise<void> {

        await this.situationIdeaDao.save(situationIdea)
    }

    @Api()
    async setAgreement(
        agreement: Agreement
    ): Promise<void> {
        const situationIdeaReasons: Reason[] = await this.
            ensureValidFactorsAndPositions(agreement)
        await this.ensureValidReasons(agreement, situationIdeaReasons)
        agreement = await this.removeSharesFromNotSelectedAgreementReasons(agreement)
        await this.agreementDao.save(agreement)
        await this.updateSituationIdeaAgreementShares(agreement)
    }

    private async ensureValidFactorsAndPositions(
        agreement: Agreement
    ): Promise<Reason[]> {
        if (!agreement.situationIdea.uuId) {
            throw new Error(`passed in agreement.situationIdea doesn't have a UuId`)
        }
        let situationIdea: SituationIdea = await this.situationIdeaDao
            .findByUuId(agreement.situationIdea.uuId)
        if (!situationIdea) {
            throw new Error(`SituationIdea with UuId "${agreement.situationIdea.uuId}" does not exist.`)
        }
        for (const incomingAgreementReason of agreement.agreementReasons) {
            if (!incomingAgreementReason) {
                throw new Error(`Recieved a null agreementReason`)
            }
            const incomingReason: Reason = incomingAgreementReason.reason
            if (!incomingReason) {
                throw new Error(`Recieved a null reason`)
            }
            if (!incomingReason.factor) {
                throw new Error(`Recieved a null factor`)
            }
            if (!incomingReason.position) {
                throw new Error(`Recieved a null position`)
            }
        }

        const situationIdeaReasons: Reason[] = await this.
            reasonDao.findAllForSituationIdea(agreement.situationIdea)



        return situationIdeaReasons
    }

    private async ensureValidReasons(
        agreement: Agreement,
        situationIdeaReasons: Reason[]
    ): Promise<void> {
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
        for (const reason of situationIdeaReasons) {
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
    ): Promise<Agreement> {
        const existingAgreement = await this.agreementDao
            .findForSituationIdeaAndUser(
                agreement.situationIdea,
                agreement.actor.user.uuId
            )
        if (existingAgreement) {
            const leftOverAgreementReasonsById = this.agreementReasonDao
                .mapByUuId(existingAgreement.agreementReasons)
            for (const agreementReason of agreement.agreementReasons) {
                leftOverAgreementReasonsById.delete(agreementReason.uuId)
            }
            for (const leftOverAgreementReason of leftOverAgreementReasonsById.values()) {
                leftOverAgreementReason.axis = null
                leftOverAgreementReason.share = 0
                agreement.agreementReasons.push(leftOverAgreementReason)
            }
            existingAgreement.agreementReasons = agreement.agreementReasons
            return existingAgreement
        }
        return agreement
    }

    private async updateSituationIdeaAgreementShares(
        agreement: Agreement
    ): Promise<void> {
        const allSituationIdeaAgreements = await this.agreementDao
            .findAllAgreementSharesForSituationIdea(agreement.situationIdea)

        agreement.situationIdea.numberOfAgreements = allSituationIdeaAgreements.length
        agreement.situationIdea.agreementShareTotal = 0;

        await this.situationIdeaDao.save(agreement.situationIdea)
    }

    // FIXME: Recompute all agreements for a SituationIdea when it's loaded
    // Do this only in non-server environments since the counts can be widely off across
    // different save branches
    @Api(
        // { server: false }
    )
    async updateAgreementShare(
        situationIdeaUuId: string
    ): Promise<void> {
        // const situationIdea = this.situationIdeaDao.findById(situationIdeaUuId);
        // const agreementReasons = this.agreementReasonDao.findAllForSituationIdea(situationIdeaUuId);

        // Recompute all situationIdea level counts

        // await this.situationIdeaDao.save(situationIdea)
    }

}
