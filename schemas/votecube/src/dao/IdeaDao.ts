import { Injected } from '@airport/direction-indicator';
import {
    QRepository
} from "@airport/holding-pattern";
import {
    and,
    plus,
    Y
} from '@airport/tarmaq-query'
import { ITotalDelta } from '@sapoto/core';
import {
    BaseIdeaDao,
    Q,
    QIdea,
    QSituationIdea,
    QReason,
    QIdeaLabel,
    IBaseIdeaDao,
} from "../generated/generated";
import { Idea } from '../ddl/ddl';

export interface IIdeaDao
    extends IBaseIdeaDao {

    findByRepositoryGUID(
        repositorySource: string,
        ideaReposioryGUID: string
    ): Promise<Idea>

    updateShareTotal(
        delta: ITotalDelta,
        idea: Idea
    ): Promise<void>

    updateUrgencyTotal(
        delta: ITotalDelta,
        idea: Idea
    ): Promise<void>

}

@Injected()
export class IdeaDao
    extends BaseIdeaDao
    implements IIdeaDao {

    async findByRepositoryGUID(
        repositorySource: string,
        ideaReposioryGUID: string
    ): Promise<Idea> {
        let i: QIdea
        let r: QRepository
        let sl: QIdeaLabel
        let is: QSituationIdea
        let rs: QReason
        const matchingRepositories = await this.db.find.tree({
            select: {
                '*': Y,
                repository: {},
                ideaLabels: {
                    '*': Y,
                    label: {}
                },
                situationIdeas: {
                    '*': Y,
                    reasons: {
                        '*': Y,
                        factor: {},
                        position: {},
                    }
                }
            },
            from: [
                i = Q.Idea,
                r = i.repository.innerJoin(),
                sl = i.ideaLabels.leftJoin(),
                sl.label.leftJoin(),
                is = i.situationIdeas.leftJoin(),
                rs = is.reasons.leftJoin(),
                rs.factor.leftJoin(),
                rs.position.leftJoin()
            ],
            where: and(
                r.source.equals(repositorySource),
                r.GUID.equals(ideaReposioryGUID)
            )
        }, {
            repository: {
                source: repositorySource,
                GUID: ideaReposioryGUID
            }
        })

        if (matchingRepositories.length) {
            return matchingRepositories[0]
        }

        return null
    }

    async updateShareTotal(
        delta: ITotalDelta,
        idea: Idea
    ): Promise<void> {
        const i = Q.Idea
        await this.db.updateWhere({
            update: i,
            set: {
                agreementShareTotal: plus(i.agreementShareTotal, delta.totalDelta),
                numberOfAgreements: plus(i.numberOfAgreements, delta.numberDelta)
            },
            where: i.equals(idea)
        })
    }

    async updateUrgencyTotal(
        delta: ITotalDelta,
        idea: Idea
    ): Promise<void> {
        const i = Q.Idea
        await this.db.updateWhere({
            update: i,
            set: {
                urgencyTotal: plus(i.urgencyTotal, delta.totalDelta),
                numberOfUrgencyRatings: plus(i.numberOfUrgencyRatings,
                    delta.numberDelta)
            },
            where: i.equals(idea)
        })
    }

}
