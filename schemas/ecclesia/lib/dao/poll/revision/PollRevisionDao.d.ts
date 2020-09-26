import { PollRevision_Id } from '../../..';
import { BasePollRevisionDao, IBasePollRevisionDao, IPoll, IPollRevision, IUserAccount } from '../../../generated/generated';
export interface IPollRevisionDao extends IBasePollRevisionDao {
    createNew(poll: IPoll, user: IUserAccount): Promise<void>;
}
export declare class PollRevisionDao extends BasePollRevisionDao implements IPollRevisionDao {
    createOne: <EntityInfo extends import("../../..").PollRevisionECreateProperties | import("../../..").PollRevisionECreateProperties[]>(entityInfo: EntityInfo, operationName?: string) => Promise<number>;
    createNew(poll: IPoll, user: IUserAccount): Promise<void>;
    getListingsForLevel(parentId: PollRevision_Id): Promise<IPollRevision[]>;
}
//# sourceMappingURL=PollRevisionDao.d.ts.map