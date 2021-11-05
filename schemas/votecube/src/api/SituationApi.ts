import { Api } from "@airport/check-in";
import { DI } from "@airport/di";
import { ICategory, ISituation } from "../server";
import { SITUATION_API } from "../tokens";

export interface ISituationApi {

    getSituationsForCategory(
        category: ICategory
    ): Promise<ISituation[]>

    getLeafSituations(
        situation: ISituation
    ): Promise<ISituation[]>

    getStemSituation(
        situation: ISituation
    ): Promise<ISituation>

    saveSituation(
        situation: ISituation
    ): Promise<void>

}

export class SituationApi
    implements ISituationApi {

    @Api()
    async getSituationsForCategory(
        category: ICategory
    ): Promise<ISituation[]> {
        return []
    }

    @Api()
    async getLeafSituations(
        situation: ISituation
    ): Promise<ISituation[]> {
        return []
    }

    @Api()
    async getStemSituation(
        situation: ISituation
    ): Promise<ISituation> {
        return null
    }

    @Api()
    async saveSituation(
        situation: ISituation
    ): Promise<void> {
        // 
    }

}
DI.set(SITUATION_API, SituationApi)
