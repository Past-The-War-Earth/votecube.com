import { IAgreement } from "../generated/interfaces";
export interface IAgreementApi {
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
export declare class AgreementApi implements IAgreementApi {
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
//# sourceMappingURL=AgreementApi.d.ts.map