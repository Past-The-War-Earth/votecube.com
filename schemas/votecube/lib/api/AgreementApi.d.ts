import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { FactorDao } from "../dao/FactorDao";
import { IIdeaDao } from "../dao/IdeaDao";
import { PositionDao } from "../dao/PositionDao";
import { ReasonDao } from "../dao/reason/ReasonDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { Agreement } from "../ddl/ddl";
import { AgreementDvo } from "../dvo/AgreementDvo";
import { IAgreement } from "../generated/interfaces";
export interface IAgreementApi {
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
export declare class AgreementApi implements IAgreementApi {
    agreementDao: AgreementDao;
    agreementReasonDao: AgreementReasonDao;
    factorDao: FactorDao;
    ideaDao: IIdeaDao;
    positionDao: PositionDao;
    reasonDao: ReasonDao;
    situationIdeaDao: ISituationIdeaDao;
    agreementDvo: AgreementDvo;
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
    setAgreement(agreement: Agreement): Promise<void>;
    calculateShareTotal(agreement: Agreement): Promise<void>;
    private removeSharesFromNotSelectedAgreementReasons;
    private updateAgreementShareTotals;
}
//# sourceMappingURL=AgreementApi.d.ts.map