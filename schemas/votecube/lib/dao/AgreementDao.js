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
    async findForSituationIdeaAndUser(situationIdeaUuid, userUuId) {
        let ag, a, u, si;
        return await this._findUnique({
            select: {
                '*': Y,
                agreementReasons: {
                    '*': Y,
                    uuId: Y
                },
                situationIdea: {
                    agreementShareTotal: Y,
                    numberOfAgreements: Y,
                }
            },
            from: [
                ag = Q.Agreement,
                a = ag.actor.leftJoin(),
                u = a.user.leftJoin(),
                si = ag.situationIdea.leftJoin()
            ],
            where: and(si.equals(situationIdeaUuid), u.equals(userUuId))
        });
    }
    async findAllAgreementSharesForSituationIdea(situationIdeaUuId) {
        let si, a, ar;
        return await this._find({
            select: {
                agreementReasons: {
                    share: Y,
                }
            },
            from: [
                a = Q.Agreement,
                si = a.situationIdea.innerJoin(),
                ar = a.agreementReasons.innerJoin()
            ],
            where: and(si.equals(situationIdeaUuId), ar.share.greaterThan(0))
        });
    }
};
AgreementDao = __decorate([
    Injected()
], AgreementDao);
export { AgreementDao };
//# sourceMappingURL=AgreementDao.js.map