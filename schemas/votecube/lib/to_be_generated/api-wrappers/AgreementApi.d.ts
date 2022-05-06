import { IInterAppAPIClient } from "@airport/ground-control";
import { IAgreement } from "../../generated/interfaces";
export declare class AgreementApi {
    interAppApiClient: IInterAppAPIClient;
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
//# sourceMappingURL=AgreementApi.d.ts.map