import { Reason, SituationIdea } from "../ddl/ddl";
import { BaseReasonDao } from "../generated/baseDaos";
export declare class ReasonDao extends BaseReasonDao {
    findAllForSituationIdea(situationIdea: SituationIdea): Promise<Reason[]>;
}
//# sourceMappingURL=ReasonDao.d.ts.map