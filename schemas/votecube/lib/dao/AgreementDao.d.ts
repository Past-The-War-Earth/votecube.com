import { Agreement, SituationIdea } from "../ddl/ddl";
import { BaseAgreementDao } from "../generated/baseDaos";
export declare class AgreementDao extends BaseAgreementDao {
    findForSituationIdeaAndUser(situationIdeaUuid: string | SituationIdea, userUuId: string): Promise<Agreement>;
    findAllAgreementSharesForSituationIdea(situationIdeaUuId: string | SituationIdea): Promise<Agreement[]>;
}
//# sourceMappingURL=AgreementDao.d.ts.map