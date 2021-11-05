var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { DI } from "@airport/di";
import { SITUATION_API } from "../tokens";
export class SituationApi {
    async getSituationsForCategory(category) {
        return [];
    }
    async getLeafSituations(situation) {
        return [];
    }
    async getStemSituation(situation) {
        return null;
    }
    async saveSituation(situation) {
        // 
    }
}
__decorate([
    Api()
], SituationApi.prototype, "getSituationsForCategory", null);
__decorate([
    Api()
], SituationApi.prototype, "getLeafSituations", null);
__decorate([
    Api()
], SituationApi.prototype, "getStemSituation", null);
__decorate([
    Api()
], SituationApi.prototype, "saveSituation", null);
DI.set(SITUATION_API, SituationApi);
//# sourceMappingURL=SituationApi.js.map