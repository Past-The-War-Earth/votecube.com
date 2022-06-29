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
        await this.ensureValidFactorsAndPositions(inIdeaRating);
        const { ideaRating, delta } = await this.getUrgencyRatingDeltas(inIdeaRating);
        await this.ideaRatingDao.save(ideaRating);
        await this.updateUrgencyTotals(ideaRating, delta);
    }
    async ensureValidFactorsAndPositions(ideaRating) {
        if (ideaRating.urgencyRating < 1 || ideaRating.urgencyRating > 5) {
            throw new Error(`Invalid ideaRating.urgencyRating total`);
        }
        ideaRating.urgencyRating = Math.floor(ideaRating.urgencyRating);
        if (!ideaRating.idea.uuId) {
            throw new Error(`passed in ideaRating.idea doesn't have a UuId`);
        }
        let idea = await this.ideaDao.findByUuId(ideaRating.idea.uuId, true);
        if (!idea) {
            throw new Error(`Idea with UuId "${ideaRating.idea.uuId}" does not exist.`);
        }
        ideaRating.idea = idea;
        if (ideaRating.situationIdea) {
            if (!ideaRating.situationIdea.uuId) {
                throw new Error(`passed in agreement.situationIdea doesn't have a UuId`);
            }
            let situationIdea = await this.situationIdeaDao
                .findByUuId(ideaRating.situationIdea.uuId, true);
            if (!situationIdea) {
                throw new Error(`SituationIdea with UuId "${ideaRating.situationIdea.uuId}" does not exist.`);
            }
            if (situationIdea.idea.uuId !== idea.uuId) {
                throw new Error(`agreement.situationIdea.idea (${situationIdea.idea.uuId})
doesn't match agreement.idea.uuId (${idea.uuId})`);
            }
            ideaRating.situationIdea = situationIdea;
        }
    }
    async getUrgencyRatingDeltas(ideaRating) {
        let existingIdeaRating;
        if (ideaRating.situationIdea) {
            existingIdeaRating = await this.ideaRatingDao
                .findForSituationIdeaAndUser(ideaRating.situationIdea, ideaRating.actor.user);
        }
        else {
            existingIdeaRating = await this.ideaRatingDao
                .findForIdeaOnlyAndUser(ideaRating.idea, ideaRating.actor.user);
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