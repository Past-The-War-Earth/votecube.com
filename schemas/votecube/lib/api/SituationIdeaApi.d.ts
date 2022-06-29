import { IRequestManager } from "@airport/arrivals-n-departures";
import { AgreementDao } from "../dao/AgreementDao";
import { AgreementReasonDao } from "../dao/AgreementReasonDao";
import { IIdeaDao, ISituationIdeaDao } from "../dao/dao";
import { ReasonDao } from "../dao/ReasonDao";
import { SituationIdea } from "../ddl/ddl";
export declare class SituationIdeaApi {
    agreementDao: AgreementDao;
    agreementReasonDao: AgreementReasonDao;
    ideaDao: IIdeaDao;
    reasonDao: ReasonDao;
    situationIdeaDao: ISituationIdeaDao;
    requestManager: IRequestManager;
    add(situationIdea: SituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map