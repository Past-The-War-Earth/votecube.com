import { RequestManager } from "@airport/arrivals-n-departures";
import { SituationApi } from "@sapoto/core";
import { ISituationIdeaDao } from "../dao/dao";
import { SituationIdea } from "../ddl/ddl";
import { IdeaApi } from "./IdeaApi";
export declare class SituationIdeaApi {
    ideaApi: IdeaApi;
    requestManager: RequestManager;
    situationApi: SituationApi;
    situationIdeaDao: ISituationIdeaDao;
    add(situationIdea: SituationIdea): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map