import { BasePollDao, IBasePollDao, IPoll } from '../../generated/generated';
import { IVotecubeContext } from '../../index';
export interface IPollDao extends IBasePollDao {
    create(poll: IPoll | IPoll[], context: IVotecubeContext): Promise<void>;
}
export declare class PollDao extends BasePollDao implements IPollDao {
    create(poll: IPoll | IPoll[], context: IVotecubeContext): Promise<void>;
}
//# sourceMappingURL=PollDao.d.ts.map