import { BaseIdeaDao, IIdea } from "../generated/generated";
import { IRepositoryIdentifier } from '../types';
export interface IIdeaDao {
    findByRepositoryUuId(repositorySource: string, ideaReposioryUuid: string): Promise<IIdea>;
    saveExistingIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
}
export declare class IdeaDao extends BaseIdeaDao implements IIdeaDao {
    findByRepositoryUuId(repositorySource: string, ideaReposioryUuid: string): Promise<IIdea>;
    saveExistingIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=IdeaDao.d.ts.map