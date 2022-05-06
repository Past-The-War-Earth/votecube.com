import { IIdeaSituationDao } from "../dao/dao";
import { IIdeaSituation } from "../generated/generated";
export interface IIdeaSituationApi {
    add(ideaSituation: IIdeaSituation): Promise<void>;
}
export declare class IdeaSituationApi implements IIdeaSituationApi {
    ideaSituationDao: IIdeaSituationDao;
    add(ideaSituation: IIdeaSituation): Promise<void>;
}
//# sourceMappingURL=IdeaSituationApi.d.ts.map