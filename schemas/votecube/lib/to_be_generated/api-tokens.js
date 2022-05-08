import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { AgreementApi, IdeaApi, IdeaSituationApi } from "./api-wrappers/api-wrappers";
import { AGREEMENT_API, IDEA_API, IDEA_SITUATION_API } from "./common-tokens";
AGREEMENT_API.setClass(AgreementApi);
AGREEMENT_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
IDEA_API.setClass(IdeaApi);
IDEA_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
IDEA_SITUATION_API.setClass(IdeaSituationApi);
IDEA_SITUATION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
//# sourceMappingURL=api-tokens.js.map