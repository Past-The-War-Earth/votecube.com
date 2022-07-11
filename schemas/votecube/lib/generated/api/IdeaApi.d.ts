import { IRepositoryIdParts } from '@airport/ground-control';
import { Idea, Label } from '../../ddl/ddl';
export interface IIdeaApi {
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveIdea(idea: Idea): Promise<IRepositoryIdParts>;
}
export declare class IdeaApi {
    constructor();
    ideaApi: IdeaApi;
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveIdea(idea: Idea): Promise<IRepositoryIdParts>;
}
//# sourceMappingURL=IdeaApi.d.ts.map