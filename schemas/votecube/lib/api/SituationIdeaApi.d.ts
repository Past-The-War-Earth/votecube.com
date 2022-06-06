import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { ISituationIdeaDao } from "../dao/dao";
import { Agreement } from "../ddl/ddl";
import { ISituationIdea } from "../generated/interfaces";
export interface ISituationIdeaApi {
    add(situationIdea: ISituationIdea): Promise<void>;
}
export declare class SituationIdeaApi implements ISituationIdeaApi {
    agreementDao: AgreementDao;
    agreementReasonDao: AgreementReasonDao;
    situationIdeaDao: ISituationIdeaDao;
    add(situationIdea: ISituationIdea): Promise<void>;
    setAgreement(agreement: Agreement): Promise<void>;
    updateAgreementShare(situationIdeaId: string): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map