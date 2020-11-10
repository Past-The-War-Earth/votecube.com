import { BasePollDao, IBasePollDao, IPoll } from '../../generated/generated';
import { IVotecubeContext } from '../../index';
export interface IPollDao extends IBasePollDao {
    createNew(poll: IPoll, ctx: IVotecubeContext): Promise<void>;
}
export declare class PollDao extends BasePollDao implements IPollDao {
    createOne: <EntityInfo extends import("../..").PollECreateProperties | import("../..").PollECreateProperties[]>(entityInfo: EntityInfo, operationName?: string) => Promise<number>;
    createNew(poll: IPoll, ctx: IVotecubeContext): Promise<void>;
}
//# sourceMappingURL=PollDao.d.ts.map