var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseAgreementDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let AgreementDao = class AgreementDao extends BaseAgreementDao {
    async findForSituationIdeaAndUser(situationIdea, user) {
        let ag, a, u, si;
        return await this._findUnique({
            select: {
                '*': Y,
                agreementReasons: {
                    '*': Y,
                    uuId: Y
                },
            },
            from: [
                ag = Q.Agreement,
                a = ag.actor.leftJoin(),
                u = a.user.leftJoin(),
                si = ag.situationIdea.leftJoin()
            ],
            where: and(si.equals(situationIdea), u.equals(user))
        });
    }
    async findForIdeaOnlyAndUser(idea, user) {
        let ag, a, u, i;
        return await this._findUnique({
            select: {
                '*': Y,
                agreementReasons: {
                    '*': Y,
                    uuId: Y
                },
            },
            from: [
                ag = Q.Agreement,
                a = ag.actor.leftJoin(),
                u = a.user.leftJoin(),
                i = ag.idea.leftJoin()
            ],
            where: and(i.equals(idea), ag.situationIdea.isNull(), u.equals(user))
        });
    }
};
AgreementDao = __decorate([
    Injected()
], AgreementDao);
export { AgreementDao };
//# sourceMappingURL=AgreementDao.js.map