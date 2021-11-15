var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { container, DI } from "@airport/di";
import { SITUATION_API } from "../tokens";
import { SITUATION_DAO } from "../server-tokens";
/**
 * Version 1 situation retrieval across devices.
 *
 * - no search capabilities (Vespa is not yet integrated)
 * - a repository private (writable) repository transaction log is maintained in ScyllaDb
 * - the private Uuid of the user hardcoded
 * - the transaction logs for a given repository are retrieved by user private Uuid and
 *       the repositoryUuid
 * - on-going record retrieval also accepts "sinceTime" parameter that retrieves only
 * the logs entered since that time
 *
 * Thus - the search for  a situation is done via a repositoryUuid.  AIRport retrieves
 * the entire reposiory and then does a local search for all Situations that have that
 * repository id and returns the first one found (there should only be one).
 */
export class SituationApi {
    async getSituationsForLabels(labels) {
        return [];
    }
    async getLeafSituations(situation) {
        return [];
    }
    async getStemSituation(situation) {
        return null;
    }
    async getSituation(repositorySource, situationRepositoryUuId) {
        const situationDao = await container(this).get(SITUATION_DAO);
        return await situationDao.findByRepositoryUuId(repositorySource, situationRepositoryUuId);
    }
    async saveSituation(situation) {
        const situationDao = await container(this).get(SITUATION_DAO);
        return await situationDao.saveSituation(situation);
    }
}
__decorate([
    Api()
], SituationApi.prototype, "getSituationsForLabels", null);
__decorate([
    Api()
], SituationApi.prototype, "getLeafSituations", null);
__decorate([
    Api()
], SituationApi.prototype, "getStemSituation", null);
__decorate([
    Api()
], SituationApi.prototype, "getSituation", null);
__decorate([
    Api()
], SituationApi.prototype, "saveSituation", null);
DI.set(SITUATION_API, SituationApi);
//# sourceMappingURL=SituationApi.js.map