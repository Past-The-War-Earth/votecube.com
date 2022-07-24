var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AND, Y } from "@airport/tarmaq-query";
import { Injected } from "@airport/direction-indicator";
import { BaseAgreementDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let AgreementDao = class AgreementDao extends BaseAgreementDao {
    async findForSituationIdeaAndUser(situationIdea, user) {
        let ag, a, u, si;
        return await this._findUnique({
            SELECT: {
                '*': Y,
                agreementReasons: {},
            },
            FROM: [
                ag = Q.Agreement,
                a = ag.actor.LEFT_JOIN(),
                u = a.userAccount.LEFT_JOIN(),
                si = ag.situationIdea.LEFT_JOIN()
            ],
            WHERE: AND(si.equals(situationIdea), u.equals(user))
        });
    }
    async findForIdeaOnlyAndUser(idea, user) {
        let ag, a, u, i;
        return await this._findUnique({
            SELECT: {
                '*': Y,
                agreementReasons: {},
            },
            FROM: [
                ag = Q.Agreement,
                a = ag.actor.LEFT_JOIN(),
                u = a.userAccount.LEFT_JOIN(),
                i = ag.idea.LEFT_JOIN()
            ],
            WHERE: AND(i.equals(idea), ag.situationIdea.IS_NULL(), u.equals(user))
        });
    }
};
AgreementDao = __decorate([
    Injected()
], AgreementDao);
export { AgreementDao };
//# sourceMappingURL=AgreementDao.js.map