import { Injected } from "@airport/direction-indicator";
import { BaseIdeaSituationDao, IBaseIdeaSituationDao } from "../generated/generated";

export interface IIdeaSituationDao
    extends IBaseIdeaSituationDao {

}

@Injected()
export class IdeaSituationDao
    extends BaseIdeaSituationDao
    implements IIdeaSituationDao {

}
