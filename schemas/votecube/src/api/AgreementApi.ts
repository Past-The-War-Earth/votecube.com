import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { ITotalDelta } from "@sapoto/core";
import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { FactorDao } from "../dao/FactorDao";
import { IIdeaDao } from "../dao/IdeaDao";
import { PositionDao } from "../dao/PositionDao";
import { ReasonDao } from "../dao/ReasonDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { Agreement, AgreementReason, Factor, Idea, Position, Reason, SituationIdea } from "../ddl/ddl";
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
    agreementDuo

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
        await this.validateIdeas(inAgreement)
        await this.validateFactorsAndPositions(inAgreement)
        await this.validateReasons(inAgreement)
        const {
            agreement,
            delta
        } = await this.removeSharesFromNotSelectedAgreementReasons(inAgreement)
        await this.agreementDao.save(agreement)
        await this.updateAgreementShareTotals(agreement, delta)
    }

    private async validateIdeas(
        agreement: Agreement
    ): Promise<void> {
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
            throw new Error(`passed in agreement.idea doesn't have an Id`)
        }
        let idea: Idea = await this.ideaDao.findOne(agreement.idea, true)
        if (!idea) {
            throw new Error(`Idea with Id "${agreement.idea.id}" does not exist.`)
        }
        agreement.idea = idea

        if (agreement.situationIdea) {
            if (!agreement.situationIdea.id) {
                throw new Error(`passed in agreement.situationIdea doesn't have an Id`)
            }
            let situationIdea: SituationIdea = await this.situationIdeaDao
                .findOne(agreement.situationIdea, true)
            if (!situationIdea) {
                throw new Error(`SituationIdea with Id "${agreement.situationIdea.id}" does not exist.`)
            }
            if (situationIdea.idea.id !== idea.id) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.id})
doesn't match agreement.idea.id (${idea.id})`);
            }
            agreement.situationIdea = situationIdea
        }
    }

    async validateFactorsAndPositions(
        agreement: Agreement
    ): Promise<void> {

        // this.agreementDuo.validate({
        //     agreementReasons: {
        //         reason: exists({
        //             idea: equals(agreement.idea),
        //             situationIdea: or(
        //                 isNull(!agreement.situationIdea),
        //                 equals(agreement.situationIdea)
        //             ),
        //             share: between(-100, 100)
        //         }),
        //         idea: exists(),
        //         situationIdea: or(
        //             isNull(),
        //             {
        //             idea: equals(agreement.idea)
        //         })
        // })
        let shareTotal = 0
        let existingFactorMapById: Map<string, Factor> = new Map()
        let newFactors: Factor[] = []
        let existingPositionMapById: Map<string, Position> = new Map()
        let newPositions: Position[] = []

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
            if (!reason.idea || reason.idea.id !== agreement.idea.id) {
                throw new Error(`Invalid Idea for Reason '${reason.id}'`)
            }
            if (agreement.situationIdea && (
                !reason.situationIdea || reason.situationIdea.id !== agreement.situationIdea.id
            )) {
                throw new Error(`Invalid SituationIdea for Reason '${reason.id}'`)
            } else if (reason.situationIdea) {
                throw new Error(`SituationIdea is Not specified for Agreement but is specified for Reason
'${reason.id}'
`)
            }
            const factor = reason.factor
            const position = reason.position
            if (!factor) {
                throw new Error(`Recieved a null factor`)
            }
            if (!position) {
                throw new Error(`Recieved a null position`)
            }
            if (factor.id) {
                existingFactorMapById.set(factor.id, factor)
            } else {
                newFactors.push(factor)
            }
            if (position.id) {
                existingPositionMapById.set(position.id, position)
            } else {
                newPositions.push(position)
            }
        }

        // TODO: Verify factor and position existance and create new ones if necessary

        const foundFactors = await this.factorDao.findIn(Array.from(existingFactorMapById.values()))
        const foundFactorMapById = this.factorDao.mapById(foundFactors)
        for (const existingFactor of existingFactorMapById.values()) {
            if (!foundFactorMapById.has(existingFactor.id)) {
                throw new Error(`Factor with Id '${existingFactor.id}' does not exist.`)
            }
        }

        // const foundPositions = await this.positionDao.f

        if (shareTotal < -100 || shareTotal > 100) {
            throw new Error(`Invalid agreementReason.share total`)
        }
        agreement.shareTotal = Math.floor(shareTotal)
    }

    async validateReasons(
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
            if (!incomingReason.id) {
                const reasonId: string = incomingReason.factor.id + '-'
                    + incomingReason.position.id
                if (agreementReasonWithNewReasonMap.has(reasonId)) {
                    throw new Error(`Reason for Factor
${incomingReason.factor.id}
                    and Position
${incomingReason.position.id}
    is found more than once.`)
                }
                agreementReasonWithNewReasonMap.set(reasonId, incomingAgreementReason)
            } else {
                const id = incomingReason.id
                if (existingIncomingReasonMap.has(id)) {
                    throw new Error(`Reason with Id: ${id} is found more than once.`)
                }
                existingIncomingReasonMap.set(id, incomingReason)
            }
        }

        let existingReasonMap: Map<string, Reason> = new Map()
        let existingReasonMapByFactorAndPositionUuIds: Map<string, Reason> = new Map()
        for (const reason of existingReasons) {
            existingReasonMap.set(reason.id, reason)
            existingReasonMapByFactorAndPositionUuIds.set(
                reason.factor.id + '-' + reason.position.id, reason)
        }

        for (const existingIncomingReason of existingIncomingReasonMap.values()) {
            if (!existingReasonMap.has(existingIncomingReason.id)) {
                throw new Error(`Reason ${existingIncomingReason.id} does not exist`)
            }
        }
        let newReasonsMap: Map<string, Reason> = new Map()
        for (const [newReasonFactorAndPositionUuId, agreementReason] of agreementReasonWithNewReasonMap) {
            let existingReason: Reason = existingReasonMapByFactorAndPositionUuIds
                .get(newReasonFactorAndPositionUuId)
            if (existingReason) {
                agreementReason.reason = existingReason
            } else {
                newReasonsMap.set(newReasonFactorAndPositionUuId, agreementReason.reason)
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
