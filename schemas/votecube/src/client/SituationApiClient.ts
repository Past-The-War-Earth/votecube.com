import { IOC } from "@airport/di"
import { DeepPartial } from "@airport/pressurization";
import { Category, Situation } from "../ddl/ddl";
import { SITUATION_API } from "../tokens";

export class SituationApiClient {

    async getSituationsForCategory(
        category: DeepPartial<Category>
    ): Promise<DeepPartial<Situation>[]> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .getSituationsForCategory(category)
    }

    async getLeafSituations(
        situation: DeepPartial<Situation>
    ): Promise<DeepPartial<Situation>[]> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .getLeafSituations(situation)
    }

    async getStemSituation(
        situation: DeepPartial<Situation>
    ): Promise<DeepPartial<Situation>> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .getStemSituation(situation)
    }

    async saveSituation(
        situation: DeepPartial<Situation>
    ): Promise<void> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .saveSituation(situation)
    }

}