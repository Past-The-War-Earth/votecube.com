var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { DI } from "@airport/di";
import { SOLUTION_API } from "../tokens";
export class SolutionApi {
    async saveSolution(solution) {
        return null;
    }
    async getMySolutionForSituation(situationRepositoryUuid) {
        return null;
    }
}
__decorate([
    Api()
], SolutionApi.prototype, "saveSolution", null);
__decorate([
    Api()
], SolutionApi.prototype, "getMySolutionForSituation", null);
DI.set(SOLUTION_API, SolutionApi);
//# sourceMappingURL=SolutionApi.js.map