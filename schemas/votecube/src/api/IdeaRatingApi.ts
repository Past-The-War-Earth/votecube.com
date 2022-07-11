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
        if (!ideaRating.idea.id) {
            throw new Error(`passed in ideaRating.idea doesn't have a Id`)
        }
        let idea: Idea = await this.ideaDao.findOne(ideaRating.idea, true)
        if (!idea) {
            throw new Error(`Idea with UuId "${ideaRating.idea.id}" does not exist.`)
        }
        ideaRating.idea = idea

        if (ideaRating.situationIdea) {
            if (!ideaRating.situationIdea.id) {
                throw new Error(`passed in agreement.situationIdea doesn't have a Id`)
            }
            let situationIdea: SituationIdea = await this.situationIdeaDao
                .findOne(ideaRating.situationIdea, true)
            if (!situationIdea) {
                throw new Error(`SituationIdea with UuId "${ideaRating.situationIdea.id}" does not exist.`)
            }
            if (situationIdea.idea.id !== idea.id) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.id})
doesn't match agreement.idea.uuId (${idea.id})`);
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
                    ideaRating.actor.userAccount
                )
        } else {
            existingIdeaRating = await this.ideaRatingDao
                .findForIdeaOnlyAndUser(
                    ideaRating.idea,
                    ideaRating.actor.userAccount
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