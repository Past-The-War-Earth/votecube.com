import { DI } from "@airport/di";
import { BaseIdeaSituationDao } from "../app";
import { IDEA_SITUATION_DAO } from "../server-tokens";
export class IdeaSituationDao extends BaseIdeaSituationDao {
}
DI.set(IDEA_SITUATION_DAO, IdeaSituationDao);
//# sourceMappingURL=IdeaSituationDao.js.map