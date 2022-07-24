var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { PLUS } from "@airport/tarmaq-query";
import { Injected } from "@airport/direction-indicator";
import { BaseSituationIdeaDao, Q } from "../generated/generated";
let SituationIdeaDao = class SituationIdeaDao extends BaseSituationIdeaDao {
    async updateShareTotal(delta, situationIdea) {
        const si = Q.SituationIdea;
        await this.db.updateWhere({
            UPDATE: si,
            SET: {
                agreementShareTotal: PLUS(si.agreementShareTotal, delta.totalDelta),
                numberOfAgreements: PLUS(si.numberOfAgreements, delta.numberDelta)
            },
            WHERE: si.equals(situationIdea)
        });
    }
    async updateUrgencyTotal(delta, situationIdea) {
        const si = Q.SituationIdea;
        await this.db.updateWhere({
            UPDATE: si,
            SET: {
                urgencyTotal: PLUS(si.urgencyTotal, delta.totalDelta),
                numberOfUrgencyRatings: PLUS(si.numberOfUrgencyRatings, delta.numberDelta)
            },
            WHERE: si.equals(situationIdea)
        });
    }
};
SituationIdeaDao = __decorate([
    Injected()
], SituationIdeaDao);
export { SituationIdeaDao };
//# sourceMappingURL=SituationIdeaDao.js.map