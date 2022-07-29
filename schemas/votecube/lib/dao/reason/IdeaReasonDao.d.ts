import { Idea, IdeaReason } from "../../ddl/ddl";
import { BaseIdeaReasonDao } from "../../generated/baseDaos";
export declare class IdeaReasonDao extends BaseIdeaReasonDao {
    findAllForIdea(idea: Idea): Promise<IdeaReason[]>;
}
//# sourceMappingURL=IdeaReasonDao.d.ts.map