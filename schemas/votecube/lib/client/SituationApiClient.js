import { IOC } from "@airport/di";
import { SITUATION_API } from "../tokens";
export class SituationApiClient {
    async getSituationsForLabels(labels) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.getSituationsForLabels(labels);
    }
    async getLeafSituations(situation) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.getLeafSituations(situation);
    }
    async getStemSituation(situation) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.getStemSituation(situation);
    }
    async getSituation(repositorySource, situationRepositoryUuId) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.getSituation(repositorySource, situationRepositoryUuId);
    }
    async saveSituation(situation) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.saveSituation(situation);
    }
}
//# sourceMappingURL=SituationApiClient.js.map