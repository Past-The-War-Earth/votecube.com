import { Agreement } from '../../ddl/ddl';
import { IAgreement } from '../../generated/interfaces';
export interface IAgreementApi {
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
export declare class AgreementApi {
    constructor();
    agreementApi: AgreementApi;
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
    setAgreement(inAgreement: Agreement): Promise<void>;
}
//# sourceMappingURL=AgreementApi.d.ts.map