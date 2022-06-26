import { Idea, Label } from '../../ddl/ddl';
import { IRepositoryIdentifier } from '../../types';
export interface IIdeaApi {
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveExistingIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: Idea): Promise<IRepositoryIdentifier>;
}
export declare class IdeaApi {
    constructor();
    ideaApi: IdeaApi;
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveExistingIdea(idea: Idea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: Idea): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=IdeaApi.d.ts.map