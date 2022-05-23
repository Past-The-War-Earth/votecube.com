import { IAgreement } from '../../generated/interfaces';
export declare class AgreementApi {
    agreementApi: AgreementApi;
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
//# sourceMappingURL=AgreementApi.d.ts.map