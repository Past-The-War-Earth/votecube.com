import { BasePollRevisionDao, IBasePollRevisionDao, IPoll, IPollRevision } from '../../../generated/generated';
import { IVotecubeContext } from '../../../index';
import { PollRevision_Id } from '../../../types/types';
export interface IPollRevisionDao extends IBasePollRevisionDao {
    create(poll: IPoll | IPoll[], context: IVotecubeContext): Promise<void>;
    findTree(parentId: PollRevision_Id): Promise<IPollRevision[]>;
}
export declare class PollRevisionDao extends BasePollRevisionDao implements IPollRevisionDao {
    create: any;
    findTree: any;
}
//# sourceMappingURL=PollRevisionDao.d.ts.map