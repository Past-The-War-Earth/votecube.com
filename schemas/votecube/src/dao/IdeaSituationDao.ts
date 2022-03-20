import { DI } from "@airport/di";
import { BaseIdeaSituationDao, IBaseIdeaSituationDao } from "../generated/generated";
import { IDEA_SITUATION_DAO } from "../server-tokens";

export interface IIdeaSituationDao
    extends IBaseIdeaSituationDao {

}

export class IdeaSituationDao
    extends BaseIdeaSituationDao
    implements IIdeaSituationDao {

}
DI.set(IDEA_SITUATION_DAO, IdeaSituationDao)
