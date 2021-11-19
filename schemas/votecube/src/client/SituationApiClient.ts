import { IOC } from "@airport/di"
import { IRepositoryIdentifier } from "./types";
import { ILabel, ISituation } from "../generated/interfaces";
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
        repositorySource: string,
        situationRepositoryUuId: string
    ): Promise<ISituation> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.getSituation(repositorySource, situationRepositoryUuId)
    }

    async saveSituation(
        situation: ISituation
    ): Promise<IRepositoryIdentifier> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.saveSituation(situation)
    }

}