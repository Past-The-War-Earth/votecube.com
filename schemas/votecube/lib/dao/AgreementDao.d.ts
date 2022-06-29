import { User } from "@airport/travel-document-checkpoint";
import { Agreement, Idea, SituationIdea } from "../ddl/ddl";
import { BaseAgreementDao } from "../generated/baseDaos";
export declare class AgreementDao extends BaseAgreementDao {
    findForSituationIdeaAndUser(situationIdea: SituationIdea | string, user: User | string): Promise<Agreement>;
    findForIdeaOnlyAndUser(idea: Idea | string, user: User | string): Promise<Agreement>;
}
//# sourceMappingURL=AgreementDao.d.ts.map