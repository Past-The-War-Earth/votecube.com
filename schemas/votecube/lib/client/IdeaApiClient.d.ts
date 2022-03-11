import { IRepositoryIdentifier } from "./types";
import { ILabel, IIdea } from "../generated/interfaces";
export declare class IdeaApiClient {
    getIdeasForLabels(labels: ILabel[]): Promise<IIdea[]>;
    getLeafIdeas(idea: IIdea): Promise<IIdea[]>;
    getStemIdea(idea: IIdea): Promise<IIdea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<IIdea>;
    saveExistingIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=IdeaApiClient.d.ts.map