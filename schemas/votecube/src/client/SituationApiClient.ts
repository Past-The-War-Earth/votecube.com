import { IOC } from "@airport/di"
// import { DeepPartial } from "@airport/pressurization";
import type { ICategory, ISituation } from "../generated/generated";
import { SITUATION_API } from "../tokens";

export class SituationApiClient {

    async getSituationsForCategory(
        category: ICategory
    ): Promise<ISituation[]> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .getSituationsForCategory(category)
    }

    async getLeafSituations(
        situation: ISituation
    ): Promise<ISituation[]> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .getLeafSituations(situation)
    }

    async getStemSituation(
        situation: ISituation
    ): Promise<ISituation> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .getStemSituation(situation)
    }

    async saveSituation(
        situation: ISituation
    ): Promise<void> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi
            .saveSituation(situation)
    }

}