var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from '@airport/direction-indicator';
import { and, plus, Y } from '@airport/tarmaq-query';
import { BaseIdeaDao, Q, } from "../generated/generated";
let IdeaDao = class IdeaDao extends BaseIdeaDao {
    async findByRepositoryGUID(repositorySource, ideaReposioryGUID) {
        let i;
        let r;
        let sl;
        let is;
        let rs;
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
            where: and(r.source.equals(repositorySource), r.GUID.equals(ideaReposioryGUID))
        }, {
            repository: {
                source: repositorySource,
                GUID: ideaReposioryGUID
            }
        });
        if (matchingRepositories.length) {
            return matchingRepositories[0];
        }
        return null;
    }
    async updateShareTotal(delta, idea) {
        const i = Q.Idea;
        await this.db.updateWhere({
            update: i,
            set: {
                agreementShareTotal: plus(i.agreementShareTotal, delta.totalDelta),
                numberOfAgreements: plus(i.numberOfAgreements, delta.numberDelta)
            },
            where: i.equals(idea)
        });
    }
    async updateUrgencyTotal(delta, idea) {
        const i = Q.Idea;
        await this.db.updateWhere({
            update: i,
            set: {
                urgencyTotal: plus(i.urgencyTotal, delta.totalDelta),
                numberOfUrgencyRatings: plus(i.numberOfUrgencyRatings, delta.numberDelta)
            },
            where: i.equals(idea)
        });
    }
};
IdeaDao = __decorate([
    Injected()
], IdeaDao);
export { IdeaDao };
//# sourceMappingURL=IdeaDao.js.map