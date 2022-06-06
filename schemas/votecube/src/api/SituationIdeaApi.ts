import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { ISituationIdeaDao } from "../dao/dao";
import { Agreement } from "../ddl/ddl";
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
    situationIdeaDao: ISituationIdeaDao

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
        const existingAgreement = await this.agreementDao.findForSituationIdeaAndUser(
            agreement.situationIdea,
            agreement.actor.user
        )
        if (existingAgreement) {
            const leftOverAgreementReasonsById = this.agreementReasonDao
                .mapById(existingAgreement.agreementReasons)
            for (const agreementReason of agreement.agreementReasons) {
                leftOverAgreementReasonsById.delete(agreementReason.id)
            }
            for (const leftOverAgreementReason of leftOverAgreementReasonsById.values()) {
                leftOverAgreementReason.axis = null
                leftOverAgreementReason.share = 0
                agreement.agreementReasons.push(leftOverAgreementReason)
            }
            existingAgreement.agreementReasons = agreement.agreementReasons
            agreement = existingAgreement
        }

        await this.agreementDao.save(agreement)
    }

    // FIXME: Recompute all agreements for a SituationIdea when it's loaded
    // Do this only in non-server environments since the counts can be widely off across
    // different save branches
    @Api(
        // { server: false }
    )
    async updateAgreementShare(
        situationIdeaId: string
    ): Promise<void> {
        // const situationIdea = this.situationIdeaDao.findById(situationIdeaId);
        // const agreementReasons = this.agreementReasonDao.findAllForSituationIdea(situationIdeaId);

        // Recompute all situationIdea level counts

        // await this.situationIdeaDao.save(situationIdea)
    }

}
