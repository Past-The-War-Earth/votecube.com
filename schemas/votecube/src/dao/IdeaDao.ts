import {
    ALL_FIELDS,
    and,
    Y
} from '@airport/air-control'
import {
    BaseIdeaDao,
    IIdea,
    Q,
    QFactor,
    QLabel,
    QOutcome,
    QPosition,
    QIdea,
    QIdeaSituation,
    QReason,
    QIdeaLabel,
} from "../generated/generated";
import {
    QRepository
} from "@airport/holding-pattern";
import { DI } from '@airport/di';
import { IDEA_DAO } from '../server-tokens';
import { IRepositoryIdentifier } from '../client/types';
import { ISaveResult } from '@airport/ground-control';

export interface IIdeaDao {

    findByRepositoryUuId(
        repositorySource: string,
        ideaReposioryUuid: string
    ): Promise<IIdea>

    saveExistingIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier>

    saveNewIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier>

}

export class IdeaDao
    extends BaseIdeaDao
    implements IIdeaDao {

    /*
     * Are UuIds necessary for child records (they cause joins)?
     *    Updates are performed by AIRport internally so just the
     *    repository and actor numeric ids (embedded in the record)
     *    are sufficient.
     *    The UI itself does not need them - again lookups are done
     *    though AIRport as well.
     * 
     * So, no need to join to repository and actor tables for
     * child tables.  For the root record the repositoryUuId is 
     * already passed in anyway and actor uuid is not used (
     * repositoryUuId is used for page navigation).
     */
    async findByRepositoryUuId(
        repositorySource: string,
        ideaReposioryUuid: string
    ): Promise<IIdea> {
        let i: QIdea
        let r: QRepository
        let o1: QOutcome
        let o2: QOutcome
        let sl: QIdeaLabel
        let l: QLabel
        let is: QIdeaSituation
        let rs: QReason
        let f: QFactor
        let p: QPosition
        const matchingRepositories = await this.db.find.tree({
            select: {
                ...ALL_FIELDS,
                repository: {},
                outcomeA: {},
                outcomeB: {},
                ideaLabels: {
                    ...ALL_FIELDS,
                    label: {}
                },
                ideaSituations: {
                    ...ALL_FIELDS,
                    reasons: {
                        ...ALL_FIELDS,
                        factor: {},
                        position: {},
                    }
                }
            },
            from: [
                i = Q.Idea,
                r = i.repository.innerJoin(),
                o1 = i.outcomeA.innerJoin(),
                o2 = i.outcomeB.innerJoin(),
                sl = i.ideaLabels.leftJoin(),
                l = sl.label.leftJoin(),
                is = i.ideaSituations.leftJoin(),
                rs = is.reasons.leftJoin(),
                f = rs.factor.leftJoin(),
                p = rs.position.leftJoin()
            ],
            where: and(
                r.source.equals(repositorySource),
                r.uuId.equals(ideaReposioryUuid)
            )
        }, {
            repository: {
                source: repositorySource,
                uuId: ideaReposioryUuid
            }
        })

        if (matchingRepositories.length) {
            return matchingRepositories[0]
        }

        return null
    }

    async saveExistingIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        let saveResult: ISaveResult
        saveResult = await this.db.save(idea)

        return {
            source: idea.repository.source,
            uuId: idea.repository.uuId
        }
    }

    async saveNewIdea(
        idea: IIdea
    ): Promise<IRepositoryIdentifier> {
        let saveResult: ISaveResult = await this.db.save(idea)
        const newRepository = saveResult.newRepository

        return {
            source: newRepository.source,
            uuId: newRepository.uuId
        }
    }

}
DI.set(IDEA_DAO, IdeaDao)
