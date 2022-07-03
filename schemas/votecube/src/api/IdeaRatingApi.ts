import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { ITotalDelta } from "@sapoto/core";
import { IIdeaDao } from "../dao/IdeaDao";
import { IIdeaRatingDao } from "../dao/IdeaRatingDao";
import { ISituationIdeaDao } from "../dao/SituationIdeaDao";
import { Idea, IdeaRating, SituationIdea } from "../ddl/ddl";

@Injected()
export class IdeaRatingApi {

    @Inject()
    ideaDao: IIdeaDao

    @Inject()
    ideaRatingDao: IIdeaRatingDao

    @Inject()
    situationIdeaDao: ISituationIdeaDao

    @Api()
    async setIdeaRating(
        inIdeaRating: IdeaRating,
    ): Promise<void> {
        await this.doSetIdeaRating(inIdeaRating, false, false)
    }

    async doSetIdeaRating(
        inIdeaRating: IdeaRating,
        isNewIdea: boolean,
        isNewSituationIdea: boolean
    ): Promise<void> {
        if (inIdeaRating.urgencyRating < 1 || inIdeaRating.urgencyRating > 5) {
            throw new Error(`Invalid ideaRating.urgencyRating total`)
        }
        inIdeaRating.urgencyRating = Math.floor(inIdeaRating.urgencyRating)

        await this.validateIdeas(inIdeaRating)
        const {
            ideaRating,
            delta
        } = await this.getUrgencyRatingDeltas(inIdeaRating)
        await this.ideaRatingDao.save(ideaRating)
        await this.updateUrgencyTotals(ideaRating, delta)
    }

    private async validateIdeas(
        ideaRating: IdeaRating
    ): Promise<void> {
        if (!ideaRating.idea.uuId) {
            throw new Error(`passed in ideaRating.idea doesn't have a UuId`)
        }
        let idea: Idea = await this.ideaDao.findByUuId(ideaRating.idea.uuId, true)
        if (!idea) {
            throw new Error(`Idea with UuId "${ideaRating.idea.uuId}" does not exist.`)
        }
        ideaRating.idea = idea

        if (ideaRating.situationIdea) {
            if (!ideaRating.situationIdea.uuId) {
                throw new Error(`passed in agreement.situationIdea doesn't have a UuId`)
            }
            let situationIdea: SituationIdea = await this.situationIdeaDao
                .findByUuId(ideaRating.situationIdea.uuId, true)
            if (!situationIdea) {
                throw new Error(`SituationIdea with UuId "${ideaRating.situationIdea.uuId}" does not exist.`)
            }
            if (situationIdea.idea.uuId !== idea.uuId) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.uuId})
doesn't match agreement.idea.uuId (${idea.uuId})`);
            }
            ideaRating.situationIdea = situationIdea
        }
    }

    private async getUrgencyRatingDeltas(
        ideaRating: IdeaRating
    ): Promise<{
        ideaRating: IdeaRating,
        delta: ITotalDelta
    }> {
        let existingIdeaRating: IdeaRating
        if (ideaRating.situationIdea) {
            existingIdeaRating = await this.ideaRatingDao
                .findForSituationIdeaAndUser(
                    ideaRating.situationIdea,
                    ideaRating.actor.user
                )
        } else {
            existingIdeaRating = await this.ideaRatingDao
                .findForIdeaOnlyAndUser(
                    ideaRating.idea,
                    ideaRating.actor.user
                )
        }
        if (existingIdeaRating) {
            existingIdeaRating.idea = ideaRating.idea
            existingIdeaRating.situationIdea = ideaRating.situationIdea
            return {
                ideaRating: existingIdeaRating,
                delta: {
                    totalDelta: ideaRating.urgencyRating - existingIdeaRating.urgencyRating,
                    numberDelta: 0
                }
            }
        }
        return {
            ideaRating: ideaRating,
            delta: {
                totalDelta: ideaRating.urgencyRating,
                numberDelta: 1
            }
        }
    }

    private async updateUrgencyTotals(
        ideaRating: IdeaRating,
        delta: ITotalDelta
    ): Promise<void> {
        await this.ideaDao.updateUrgencyTotal(delta, ideaRating.idea)

        if (ideaRating.situationIdea) {
            await this.situationIdeaDao.updateUrgencyTotal(delta, ideaRating.situationIdea)
        }
    }

}