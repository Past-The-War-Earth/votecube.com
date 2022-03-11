import { AgreementApiClient } from '@votecube/votecube';
import { IUiIdea, IUiAgreement } from '@votecube/model';
export interface IAgreementManager {
    getAgreementForIdea(ideaRepositoryUuId: string): Promise<IUiAgreement>;
    saveAgreement(idea: IUiIdea, agreement: IUiAgreement): Promise<void>;
    saveCachedIdeaAgreement(agreement: IUiAgreement): Promise<void>;
}
export declare class AgreementManager implements IAgreementManager {
    agreementApi: AgreementApiClient;
    getAgreementForIdea(ideaRepositoryUuid: string): Promise<IUiAgreement>;
    saveAgreement(idea: IUiIdea, agreement: IUiAgreement): Promise<void>;
    saveCachedIdeaAgreement(agreement: IUiAgreement): Promise<void>;
    private getStubAgreement;
    private getStubIds;
}
//# sourceMappingURL=AgreementManager.d.ts.map