import { IdeaDao } from "../dao/dao";
import { Idea } from "../ddl/ddl";
import { ILabel, IIdea } from "../generated/interfaces";
import { IRepositoryIdentifier } from "../types";
export interface IIdeaApi {
    getIdeasForLabels(labels: ILabel[]): Promise<IIdea[]>;
    getLeafIdeas(idea: IIdea): Promise<IIdea[]>;
    getStemIdea(idea: IIdea): Promise<IIdea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveExistingIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
}
/**
 * Version 1 idea retrieval across devices.
 *
 * - no search capabilities (Vespa is not yet integrated)
 * - a repository private (writable) repository transaction log is maintained in ScyllaDb
 * - the private Uuid of the user hardcoded
 * - the transaction logs for a given repository are retrieved by user private Uuid and
 *       the repositoryUuid
 * - on-going record retrieval also accepts "sinceTime" parameter that retrieves only
 * the logs entered since that time
 *
 * Thus - the search for  a idea is done via a repositoryUuid.  AIRport retrieves
 * the entire reposiory and then does a local search for all Ideas that have that
 * repository id and returns the first one found (there should only be one).
 */
export declare class IdeaApi implements IIdeaApi {
    ideaDao: IdeaDao;
    getIdeasForLabels(labels: ILabel[]): Promise<IIdea[]>;
    getLeafIdeas(idea: IIdea): Promise<IIdea[]>;
    getStemIdea(idea: IIdea): Promise<IIdea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveExistingIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
    saveNewIdea(idea: IIdea): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=IdeaApi.d.ts.map