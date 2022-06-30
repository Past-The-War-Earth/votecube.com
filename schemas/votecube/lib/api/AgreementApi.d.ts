import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { IIdeaDao } from "../dao/IdeaDao";
import { ReasonDao } from "../dao/ReasonDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { Agreement } from "../ddl/ddl";
import { IAgreement } from "../generated/interfaces";
export interface IAgreementApi {
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
export declare class AgreementApi implements IAgreementApi {
    agreementDao: AgreementDao;
    agreementReasonDao: AgreementReasonDao;
    ideaDao: IIdeaDao;
    reasonDao: ReasonDao;
    situationIdeaDao: ISituationIdeaDao;
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
    setAgreement(inAgreement: Agreement): Promise<void>;
    private validateIdeas;
    private validateFactorsAndPositions;
    private validateReasons;
    private removeSharesFromNotSelectedAgreementReasons;
    private updateAgreementShareTotals;
}
//# sourceMappingURL=AgreementApi.d.ts.map