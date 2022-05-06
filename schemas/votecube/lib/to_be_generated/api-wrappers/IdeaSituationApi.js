var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from "@airport/direction-indicator";
import { IDEA_SITUATION_API } from "../common-tokens";
let IdeaSituationApi = class IdeaSituationApi {
    async add(ideaSituation) {
        return await this.interAppApiClient.invokeApiMethod(IDEA_SITUATION_API, 'add', [ideaSituation]);
    }
};
__decorate([
    Inject()
], IdeaSituationApi.prototype, "interAppApiClient", void 0);
IdeaSituationApi = __decorate([
    Injected()
], IdeaSituationApi);
export { IdeaSituationApi };
//# sourceMappingURL=IdeaSituationApi.js.map