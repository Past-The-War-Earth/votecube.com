var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { between, byId, equals, exists, isInteger, isNull, or, value } from "@airbridge/validate";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let IdeaRatingApi = class IdeaRatingApi {
    async setIdeaRating(inIdeaRating) {
        await this.doSetIdeaRating(inIdeaRating, false, false);
    }
    async doSetIdeaRating(ideaRating, isNewIdea, isNewSituationIdea) {
        this.ideaRatingDvo.validate(ideaRating, {
            _actorRecordId: null,
            actor: null,
            idea: exists(byId()),
            repository: null,
            situationIdea: or(isNull(), exists(byId(), {
                idea: equals(value(ideaRating.idea))
            })),
            urgencyRating: isInteger(between(1, 5))
        });
        const { updatedIdeaRating, delta } = await this.getUrgencyRatingDeltas(ideaRating);
        await this.ideaRatingDao.save(updatedIdeaRating);
        await this.updateUrgencyTotals(updatedIdeaRating, delta);
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
                updatedIdeaRating: existingIdeaRating,
                delta: {
                    totalDelta: ideaRating.urgencyRating - existingIdeaRating.urgencyRating,
                    numberDelta: 0
                }
            };
        }
        return {
            updatedIdeaRating: ideaRating,
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
], IdeaRatingApi.prototype, "ideaRatingDvo", void 0);
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