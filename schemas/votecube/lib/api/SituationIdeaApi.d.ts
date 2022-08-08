import { RequestManager } from "@airport/arrivals-n-departures";
import { SituationApi } from "@sapoto/core";
import { ISituationIdeaDao } from "../dao/dao";
import { SituationIdea } from "../ddl/ddl";
import { SituationIdeaDvo } from "../dvo/SituationIdeaDvo";
import { IdeaApi } from "./IdeaApi";
export declare class SituationIdeaApi {
    ideaApi: IdeaApi;
    requestManager: RequestManager;
    situationApi: SituationApi;
    situationIdeaDao: ISituationIdeaDao;
    situationIdeaDvo: SituationIdeaDvo;
    add(situationIdea: SituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map