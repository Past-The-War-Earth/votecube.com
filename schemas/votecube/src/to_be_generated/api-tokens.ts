import { INTER_APP_API_CLIENT } from "@airport/direction-indicator";
import { AgreementApi, IdeaApi, SituationIdeaApi } from "../generated/api/api";
import { AGREEMENT_API, IDEA_API, SITUATION_IDEA_API } from "./common-tokens";

AGREEMENT_API.setClass(AgreementApi)
AGREEMENT_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
IDEA_API.setClass(IdeaApi)
IDEA_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
SITUATION_IDEA_API.setClass(SituationIdeaApi)
SITUATION_IDEA_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
