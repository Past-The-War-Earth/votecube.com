import { IOC } from "@airport/direction-indicator";
import { IAgreement } from "../../generated/interfaces";
import { AGREEMENT_API } from "../tokens";

export interface IAgreementApi {

    saveAgreement(
        agreement: IAgreement
    ): Promise<void>

    getMyAgreementForIdea(
        ideaRepositoryUuid: string
    ): Promise<IAgreement>

}

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
