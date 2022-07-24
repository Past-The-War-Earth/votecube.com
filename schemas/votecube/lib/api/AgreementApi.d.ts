import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { FactorDao } from "../dao/FactorDao";
import { IIdeaDao } from "../dao/IdeaDao";
import { PositionDao } from "../dao/PositionDao";
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
    factorDao: FactorDao;
    ideaDao: IIdeaDao;
    positionDao: PositionDao;
    reasonDao: ReasonDao;
    situationIdeaDao: ISituationIdeaDao;
    agreementDuo: any;
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
    setAgreement(inAgreement: Agreement): Promise<void>;
    private validateIdeas;
    validateFactorsAndPositions(agreement: Agreement): Promise<void>;
    validateReasons(agreement: Agreement): Promise<void>;
    private removeSharesFromNotSelectedAgreementReasons;
    private updateAgreementShareTotals;
}
//# sourceMappingURL=AgreementApi.d.ts.map