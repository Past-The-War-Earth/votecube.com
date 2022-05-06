import { IInterAppAPIClient } from "@airport/ground-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { IAgreement } from "../../generated/interfaces";
import { AGREEMENT_API } from "../common-tokens";

@Injected()
export class AgreementApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient


    async saveAgreement(
        agreement: IAgreement
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            AGREEMENT_API, 'saveAgreement', [agreement])
    }

    async getMyAgreementForIdea(
        ideaRepositoryUuid: string
    ): Promise<IAgreement> {
        return await this.interAppApiClient.invokeApiMethod(
            AGREEMENT_API, 'rateSituation', [ideaRepositoryUuid])
    }

}