import { IOC } from "@airport/di";
import { SITUATION_API } from "../tokens";
export class SituationApiClient {
    async getSituationsForCategory(category) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi
            .getSituationsForCategory(category);
    }
    async getLeafSituations(situation) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi
            .getLeafSituations(situation);
    }
    async getStemSituation(situation) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi
            .getStemSituation(situation);
    }
    async saveSituation(situation) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi
            .saveSituation(situation);
    }
}
//# sourceMappingURL=SituationApiClient.js.map