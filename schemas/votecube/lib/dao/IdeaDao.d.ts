import { BaseIdeaDao } from "../generated/generated";
import { IRepositoryIdentifier } from '../types';
import { Idea } from '../ddl/ddl';
export interface IIdeaDao {
    findByRepositoryUuId(repositorySource: string, ideaReposioryUuid: string): Promise<Idea>;
    saveExistingIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: Idea): Promise<IRepositoryIdentifier>;
}
export declare class IdeaDao extends BaseIdeaDao implements IIdeaDao {
    findByRepositoryUuId(repositorySource: string, ideaReposioryUuid: string): Promise<Idea>;
    saveExistingIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: Idea): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=IdeaDao.d.ts.map