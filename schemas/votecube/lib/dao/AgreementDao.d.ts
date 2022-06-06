import { User } from "@airport/travel-document-checkpoint";
import { Agreement, SituationIdea } from "../ddl/ddl";
import { BaseAgreementDao } from "../generated/baseDaos";
export declare class AgreementDao extends BaseAgreementDao {
    findForSituationIdeaAndUser(situationIdeaOrUuid: string | SituationIdea, userOrUuId: string | User): Promise<Agreement>;
}
//# sourceMappingURL=AgreementDao.d.ts.map