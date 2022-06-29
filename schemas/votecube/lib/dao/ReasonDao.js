var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseReasonDao } from "../generated/baseDaos";
import { Q } from "../generated/generated";
let ReasonDao = class ReasonDao extends BaseReasonDao {
    async findAllForIdea(idea) {
        let r, i;
        return await this._find({
            select: {
                uuId: Y,
                factor: {
                    uuId: Y
                },
                position: {
                    uuId: Y
                }
            },
            from: [
                r = Q.Reason,
                i = r.idea.leftJoin()
            ],
            where: i.equals(idea)
        });
    }
    async findAllForSituationIdea(situationIdea) {
        let r, si;
        return await this._find({
            select: {
                uuId: Y,
                factor: {
                    uuId: Y
                },
                position: {
                    uuId: Y
                }
            },
            from: [
                r = Q.Reason,
                si = r.situationIdea.leftJoin()
            ],
            where: si.equals(situationIdea)
        });
    }
};
ReasonDao = __decorate([
    Injected()
], ReasonDao);
export { ReasonDao };
//# sourceMappingURL=ReasonDao.js.map