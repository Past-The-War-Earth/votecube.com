import { Api } from "@airport/check-in";
import { DI } from "@airport/di";
import { DeepPartial } from "@airport/pressurization";
import { Category, Situation } from "../ddl/ddl";
import { SITUATION_API } from "../tokens";

export interface ISituationApi {

    getSituationsForCategory(
        category: DeepPartial<Category>
    ): Promise<DeepPartial<Situation>[]>

    getLeafSituations(
        situation: DeepPartial<Situation>
    ): Promise<DeepPartial<Situation>[]>

    getStemSituation(
        situation: DeepPartial<Situation>
    ): Promise<DeepPartial<Situation>>

    saveSituation(
        situation: DeepPartial<Situation>
    ): Promise<void>

}

export class SituationApi
    implements ISituationApi {

    @Api()
    async getSituationsForCategory(
        category: DeepPartial<Category>
    ): Promise<DeepPartial<Situation>[]> {
        return []
    }

    @Api()
    async getLeafSituations(
        situation: DeepPartial<Situation>
    ): Promise<DeepPartial<Situation>[]> {
        return []
    }

    @Api()
    async getStemSituation(
        situation: DeepPartial<Situation>
    ): Promise<DeepPartial<Situation>> {
        return null
    }

    @Api()
    async saveSituation(
        situation: DeepPartial<Situation>
    ): Promise<void> {
        // 
    }

}
DI.set(SITUATION_API, SituationApi)
