import { Api } from "@airport/check-in";
import { Injected } from "@airport/direction-indicator";
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
