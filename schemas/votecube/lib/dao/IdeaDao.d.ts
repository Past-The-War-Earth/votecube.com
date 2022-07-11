import { ITotalDelta } from '@sapoto/core';
import { BaseIdeaDao, IBaseIdeaDao } from "../generated/generated";
import { Idea } from '../ddl/ddl';
export interface IIdeaDao extends IBaseIdeaDao {
    findByRepositoryGUID(repositorySource: string, ideaReposioryGUID: string): Promise<Idea>;
    updateShareTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
    updateUrgencyTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
}
export declare class IdeaDao extends BaseIdeaDao implements IIdeaDao {
    findByRepositoryGUID(repositorySource: string, ideaReposioryGUID: string): Promise<Idea>;
    updateShareTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
    updateUrgencyTotal(delta: ITotalDelta, idea: Idea): Promise<void>;
}
//# sourceMappingURL=IdeaDao.d.ts.map