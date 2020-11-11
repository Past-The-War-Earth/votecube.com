import { IVotecubeContext, PollRevision_Id } from '../../..';
import { BasePollRevisionDao, IBasePollRevisionDao, IPoll, IPollRevision } from '../../../generated/generated';
export interface IPollRevisionDao extends IBasePollRevisionDao {
    createNew(poll: IPoll, ctx: IVotecubeContext): Promise<void>;
}
export declare class PollRevisionDao extends BasePollRevisionDao implements IPollRevisionDao {
    createOne: <EntityInfo extends import("../../..").PollRevisionECreateProperties | import("../../..").PollRevisionECreateProperties[]>(entityInfo: EntityInfo, ctx?: import("@airport/di").IContext, operationName?: string) => Promise<number>;
    createNew(poll: IPoll, ctx: IVotecubeContext): Promise<void>;
    getListingsForLevel(parentId: PollRevision_Id): Promise<IPollRevision[]>;
}
//# sourceMappingURL=PollRevisionDao.d.ts.map