import { Api } from "@airport/check-in";
import { DI } from "@airport/di";
import { IAgreement } from "../generated/interfaces";
import { AGREEMENT_API } from "../tokens";

export interface IAgreementApi {

    saveAgreement(
        agreement: IAgreement
    ): Promise<void>

    getMyAgreementForIdea(
        ideaRepositoryUuid: string
    ): Promise<IAgreement>

}

export class AgreementApi
    implements IAgreementApi {

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

}
DI.set(AGREEMENT_API, AgreementApi)
