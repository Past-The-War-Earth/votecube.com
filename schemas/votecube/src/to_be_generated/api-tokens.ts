import { REQUEST_MANAGER } from "@airport/arrivals-n-departures";
import { INTER_APP_API_CLIENT } from "@airport/direction-indicator";
import {
    AgreementApi,
    IdeaApi,
    IdeaRatingApi,
    SituationIdeaApi
} from "../generated/api/api";
import {
    AGREEMENT_API,
    IDEA_API,
    IDEA_RATING_API,
    SITUATION_IDEA_API
} from "./common-tokens";

AGREEMENT_API.setClass(AgreementApi)
AGREEMENT_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
IDEA_API.setClass(IdeaApi)
IDEA_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
IDEA_RATING_API.setClass(IdeaRatingApi)
IDEA_RATING_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT,
    requestManager: REQUEST_MANAGER
})
SITUATION_IDEA_API.setClass(SituationIdeaApi)
SITUATION_IDEA_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
