import { RequestManager } from "@airport/arrivals-n-departures";
import { IRepositoryIdParts } from "@airport/ground-control";
import { IdeaDao } from "../dao/dao";
import { Idea, Label } from "../ddl/ddl";
import { IdeaDvo } from "../dvo/IdeaDvo";
export interface IIdeaApi {
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveIdea(idea: Idea): Promise<IRepositoryIdParts>;
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
    ideaDvo: IdeaDvo;
    requestManager: RequestManager;
    getIdeasForLabels(labels: Label[]): Promise<Idea[]>;
    getLeafIdeas(idea: Idea): Promise<Idea[]>;
    getStemIdea(idea: Idea): Promise<Idea>;
    getIdea(repositorySource: string, ideaRepositoryUuId: string): Promise<Idea>;
    saveIdea(idea: Idea): Promise<IRepositoryIdParts>;
}
//# sourceMappingURL=IdeaApi.d.ts.map