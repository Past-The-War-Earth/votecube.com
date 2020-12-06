import { BasePollDao, IBasePollDao, IPoll } from '../../generated/generated';
import { IVotecubeContext } from '../../index';
export interface IPollDao extends IBasePollDao {
    createNew(poll: IPoll, context: IVotecubeContext): Promise<void>;
}
export declare class PollDao extends BasePollDao implements IPollDao {
    createOne: <EntityInfo extends import("../..").PollECreateProperties | import("../..").PollECreateProperties[]>(entity: EntityInfo, context?: import("@airport/di").IContext, operationName?: string) => Promise<number>;
    createNew(poll: IPoll, context: IVotecubeContext): Promise<void>;
}
//# sourceMappingURL=PollDao.d.ts.map