import { BasePollDao, IBasePollDao, IPoll, IUserAccount } from '../../generated/generated';
export interface IPollDao extends IBasePollDao {
    createNew(poll: IPoll, user: IUserAccount): Promise<void>;
}
export declare class PollDao extends BasePollDao implements IPollDao {
    createOne: <EntityInfo extends import("../../generated/generated").PollECreateProperties | import("../../generated/generated").PollECreateProperties[]>(entityInfo: EntityInfo, operationName?: string) => Promise<number>;
    createNew(poll: IPoll, user: IUserAccount): Promise<void>;
}
//# sourceMappingURL=PollDao.d.ts.map