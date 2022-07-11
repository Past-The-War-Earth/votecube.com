var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from '@airport/direction-indicator';
import { BaseIdeaRatingDao, Q, } from "../generated/generated";
import { and, Y } from '@airport/tarmaq-query';
let IdeaRatingDao = class IdeaRatingDao extends BaseIdeaRatingDao {
    async findForSituationIdeaAndUser(situationIdea, user) {
        let ir, a, u, si;
        return await this._findUnique({
            select: {
                '*': Y
            },
            from: [
                ir = Q.IdeaRating,
                a = ir.actor.leftJoin(),
                u = a.userAccount.leftJoin(),
                si = ir.situationIdea.leftJoin()
            ],
            where: and(si.equals(situationIdea), u.equals(user))
        });
    }
    async findForIdeaOnlyAndUser(idea, user) {
        let ir, a, u, i;
        return await this._findUnique({
            select: {
                '*': Y
            },
            from: [
                ir = Q.IdeaRating,
                a = ir.actor.leftJoin(),
                u = a.userAccount.leftJoin(),
                i = ir.idea.leftJoin()
            ],
            where: and(i.equals(idea), ir.situationIdea.isNull(), u.equals(user))
        });
    }
};
IdeaRatingDao = __decorate([
    Injected()
], IdeaRatingDao);
export { IdeaRatingDao };
//# sourceMappingURL=IdeaRatingDao.js.map