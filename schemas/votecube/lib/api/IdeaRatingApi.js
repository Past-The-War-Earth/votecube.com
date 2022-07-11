var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let IdeaRatingApi = class IdeaRatingApi {
    async setIdeaRating(inIdeaRating) {
        await this.doSetIdeaRating(inIdeaRating, false, false);
    }
    async doSetIdeaRating(inIdeaRating, isNewIdea, isNewSituationIdea) {
        if (inIdeaRating.urgencyRating < 1 || inIdeaRating.urgencyRating > 5) {
            throw new Error(`Invalid ideaRating.urgencyRating total`);
        }
        inIdeaRating.urgencyRating = Math.floor(inIdeaRating.urgencyRating);
        await this.validateIdeas(inIdeaRating);
        const { ideaRating, delta } = await this.getUrgencyRatingDeltas(inIdeaRating);
        await this.ideaRatingDao.save(ideaRating);
        await this.updateUrgencyTotals(ideaRating, delta);
    }
    async validateIdeas(ideaRating) {
        if (!ideaRating.idea.id) {
            throw new Error(`passed in ideaRating.idea doesn't have a Id`);
        }
        let idea = await this.ideaDao.findOne(ideaRating.idea, true);
        if (!idea) {
            throw new Error(`Idea with UuId "${ideaRating.idea.id}" does not exist.`);
        }
        ideaRating.idea = idea;
        if (ideaRating.situationIdea) {
            if (!ideaRating.situationIdea.id) {
                throw new Error(`passed in agreement.situationIdea doesn't have a Id`);
            }
            let situationIdea = await this.situationIdeaDao
                .findOne(ideaRating.situationIdea, true);
            if (!situationIdea) {
                throw new Error(`SituationIdea with UuId "${ideaRating.situationIdea.id}" does not exist.`);
            }
            if (situationIdea.idea.id !== idea.id) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.id})
doesn't match agreement.idea.uuId (${idea.id})`);
            }
            ideaRating.situationIdea = situationIdea;
        }
    }
    async getUrgencyRatingDeltas(ideaRating) {
        let existingIdeaRating;
        if (ideaRating.situationIdea) {
            existingIdeaRating = await this.ideaRatingDao
                .findForSituationIdeaAndUser(ideaRating.situationIdea, ideaRating.actor.userAccount);
        }
        else {
            existingIdeaRating = await this.ideaRatingDao
                .findForIdeaOnlyAndUser(ideaRating.idea, ideaRating.actor.userAccount);
        }
        if (existingIdeaRating) {
            existingIdeaRating.idea = ideaRating.idea;
            existingIdeaRating.situationIdea = ideaRating.situationIdea;
            return {
                ideaRating: existingIdeaRating,
                delta: {
                    totalDelta: ideaRating.urgencyRating - existingIdeaRating.urgencyRating,
                    numberDelta: 0
                }
            };
        }
        return {
            ideaRating: ideaRating,
            delta: {
                totalDelta: ideaRating.urgencyRating,
                numberDelta: 1
            }
        };
    }
    async updateUrgencyTotals(ideaRating, delta) {
        await this.ideaDao.updateUrgencyTotal(delta, ideaRating.idea);
        if (ideaRating.situationIdea) {
            await this.situationIdeaDao.updateUrgencyTotal(delta, ideaRating.situationIdea);
        }
    }
};
__decorate([
    Inject()
], IdeaRatingApi.prototype, "ideaDao", void 0);
__decorate([
    Inject()
], IdeaRatingApi.prototype, "ideaRatingDao", void 0);
__decorate([
    Inject()
], IdeaRatingApi.prototype, "situationIdeaDao", void 0);
__decorate([
    Api()
], IdeaRatingApi.prototype, "setIdeaRating", null);
IdeaRatingApi = __decorate([
    Injected()
], IdeaRatingApi);
export { IdeaRatingApi };
//# sourceMappingURL=IdeaRatingApi.js.map