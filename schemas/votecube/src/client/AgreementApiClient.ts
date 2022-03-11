import { IOC } from "@airport/di";
import { IAgreement } from "../generated/interfaces";
import { AGREEMENT_API } from "../tokens";

export class AgreementApiClient {

    async saveAgreement(
        agreement: IAgreement
    ): Promise<void> {
        const agreementApi = await IOC.get(AGREEMENT_API)

        return await agreementApi.saveAgreement(agreement)
    }

    async getMyAgreementForIdea(
        ideaRepositoryUuid: string
    ): Promise<IAgreement> {
        const agreementApi = await IOC.get(AGREEMENT_API)

        return await agreementApi.getMyAgreementForIdea(ideaRepositoryUuid)
    }

}
