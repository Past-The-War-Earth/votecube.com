import { IOC } from "@airport/direction-indicator";
import { IDEA_SITUATION_API } from "../tokens";
export class IdeaSituationApiClient {
    async add(ideaSituation) {
        const ideaSituationApi = await IOC.get(IDEA_SITUATION_API);
        return await ideaSituationApi.add(ideaSituation);
    }
}
//# sourceMappingURL=IdeaSituationApiClient.js.map