import { IRepositoryIdentifier } from "./types";
import { ILabel, ISituation } from "../generated/interfaces";
export declare class SituationApiClient {
    getSituationsForLabels(labels: ILabel[]): Promise<ISituation[]>;
    getLeafSituations(situation: ISituation): Promise<ISituation[]>;
    getStemSituation(situation: ISituation): Promise<ISituation>;
    getSituation(repositorySource: string, situationRepositoryUuId: string): Promise<ISituation>;
    saveSituation(situation: ISituation, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=SituationApiClient.d.ts.map