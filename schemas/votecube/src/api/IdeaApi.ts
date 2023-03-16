import { byId, exists, isNotNull, isNull, or } from "@airbridge/validate";
import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { IRepositoryIdParts } from "@airport/ground-control";
import { RequestManager } from "@airport/web-tower";
import { IdeaDao } from "../dao/dao"
import { Idea, Label } from "../ddl/ddl";
import { IdeaDvo } from "../dvo/IdeaDvo";

export interface IIdeaApi {

    getIdeasForLabels(
        labels: Label[]
    ): Promise<Idea[]>

    getLeafIdeas(
        idea: Idea
    ): Promise<Idea[]>

    getStemIdea(
        idea: Idea
    ): Promise<Idea>

    getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<Idea>

    saveNewIdea(
        idea: Idea
    ): Promise<IRepositoryIdParts>
    
    saveExistingIdea(
        idea: Idea
    ): Promise<IRepositoryIdParts>

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

@Injected()
export class IdeaApi
    implements IIdeaApi {

    @Inject()
    ideaDao: IdeaDao

    @Inject()
    ideaDvo: IdeaDvo

    @Inject()
    requestManager: RequestManager

    @Api()
    async getIdeasForLabels(
        labels: Label[]
    ): Promise<Idea[]> {
        return []
    }

    @Api()
    async getLeafIdeas(
        idea: Idea
    ): Promise<Idea[]> {
        return []
    }

    @Api()
    async getStemIdea(
        idea: Idea
    ): Promise<Idea> {
        return null
    }

    @Api()
    async getIdea(
        repositorySource: string,
        ideaRepositoryUuId: string
    ): Promise<Idea> {
        return await this.ideaDao.findByRepositoryGUID(repositorySource, ideaRepositoryUuId)
    }

    @Api()
    async saveNewIdea(
        idea: Idea
    ): Promise<IRepositoryIdParts> {
        this.ideaDvo.validate(idea, {
            _actorRecordId: isNull(),
            actor: isNull(),
            parent: or(
                isNull(),
                exists(byId())
            ),
            repository: isNull(),
            // TODO: add support for transient entity properites in validator generation
            agreements: null
        })

        idea.actor = this.requestManager.actor
        const saveResult = await this.ideaDao.save(idea)

        let userAgreement = idea.userAgreement
        if (userAgreement) {
            userAgreement.situationIdea = null
            userAgreement.actor = this.requestManager.actor
        }

        if (idea.userIdeaRating) {
            idea.userIdeaRating.actor = this.requestManager.actor
        }

        return saveResult.repositoryIdParts
    }

    @Api()
    async saveExistingIdea(
        idea: Idea
    ): Promise<IRepositoryIdParts> {
        this.ideaDvo.validate(idea, {
            _actorRecordId: isNotNull(),
            actor: isNotNull(),
            parent: or(
                isNull(),
                exists(byId())
            ),
            repository: isNotNull(),
            // TODO: add support for transient entity properites in validator generation
            agreements: null
        })

        const saveResult = await this.ideaDao.save(idea)

        return saveResult.repositoryIdParts
    }

}
