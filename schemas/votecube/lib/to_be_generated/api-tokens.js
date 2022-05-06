import { DEPENDENCY_INJECTION } from "@airport/direction-indicator";
import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { AgreementApi, IdeaApi, IdeaSituationApi } from "./api-wrappers/api-wrappers";
import { AGREEMENT_API, IDEA_API, IDEA_SITUATION_API } from "./common-tokens";
DEPENDENCY_INJECTION.set(AGREEMENT_API, AgreementApi);
AGREEMENT_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
DEPENDENCY_INJECTION.set(IDEA_API, IdeaApi);
IDEA_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
DEPENDENCY_INJECTION.set(IDEA_SITUATION_API, IdeaSituationApi);
IDEA_SITUATION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
//# sourceMappingURL=api-tokens.js.map