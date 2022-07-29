var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Y } from "@airport/tarmaq-query";
import { Injected } from "@airport/direction-indicator";
import { BaseIdeaReasonDao } from "../../generated/baseDaos";
import { Q } from "../../generated/generated";
let IdeaReasonDao = class IdeaReasonDao extends BaseIdeaReasonDao {
    async findAllForIdea(idea) {
        let ir, i;
        return await this._find({
            SELECT: {
                '*': Y,
                reason: {
                    '*': Y,
                    factor: {},
                    position: {}
                }
            },
            FROM: [
                ir = Q.IdeaReason,
                i = ir.idea.LEFT_JOIN()
            ],
            WHERE: i.equals(idea)
        });
    }
};
IdeaReasonDao = __decorate([
    Injected()
], IdeaReasonDao);
export { IdeaReasonDao };
//# sourceMappingURL=IdeaReasonDao.js.map