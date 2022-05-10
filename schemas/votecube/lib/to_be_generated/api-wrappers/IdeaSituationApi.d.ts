import { IInterAppAPIClient } from "@airport/ground-control";
import { IIdeaSituation } from "../../generated/interfaces";
export interface IIdeaSituationApi {
    add(ideaSituation: IIdeaSituation): Promise<void>;
}
export declare class IdeaSituationApi {
    interAppApiClient: IInterAppAPIClient;
    add(ideaSituation: IIdeaSituation): Promise<void>;
}
//# sourceMappingURL=IdeaSituationApi.d.ts.map