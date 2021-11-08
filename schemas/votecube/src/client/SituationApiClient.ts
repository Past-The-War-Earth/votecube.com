import { IOC } from "@airport/di"
import { DeepPartial } from "@airport/pressurization";
import { Situation } from "../ddl/ddl";
import { ILabel, ISituation } from "../server";
import { SITUATION_API } from "../tokens";

export class SituationApiClient {

    async getSituationsForLabels(
        labels: ILabel[]
    ): Promise<ISituation[]> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.getSituationsForLabels(labels)
    }

    async getLeafSituations(
        situation: ISituation
    ): Promise<ISituation[]> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.getLeafSituations(situation)
    }

    async getStemSituation(
        situation: ISituation
    ): Promise<ISituation> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.getStemSituation(situation)
    }

    async getSituation(
        situationRepositoryUuId: string
    ): Promise<ISituation> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.getSituaition(situationRepositoryUuId)
    }

    async saveSituation(
        situation: ISituation
    ): Promise<void> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.saveSituation(situation)
    }

}