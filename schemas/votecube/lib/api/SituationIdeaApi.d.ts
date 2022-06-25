import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { ISituationIdeaDao } from "../dao/dao";
import { ReasonDao } from "../dao/ReasonDao";
import { Agreement } from "../ddl/ddl";
import { ISituationIdea } from "../generated/interfaces";
export interface ISituationIdeaApi {
    add(situationIdea: ISituationIdea): Promise<void>;
}
export declare class SituationIdeaApi implements ISituationIdeaApi {
    agreementDao: AgreementDao;
    agreementReasonDao: AgreementReasonDao;
    reasonDao: ReasonDao;
    situationIdeaDao: ISituationIdeaDao;
    request: Request;
    add(situationIdea: ISituationIdea): Promise<void>;
    setAgreement(agreement: Agreement): Promise<void>;
    private ensureValidFactorsAndPositions;
    private ensureValidReasons;
    private removeSharesFromNotSelectedAgreementReasons;
    private updateSituationIdeaAgreementShares;
    updateAgreementShare(situationIdeaUuId: string): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map