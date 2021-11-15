import { ILabel, ISituation } from "../generated/interfaces";
export declare class SituationApiClient {
    getSituationsForLabels(labels: ILabel[]): Promise<ISituation[]>;
    getLeafSituations(situation: ISituation): Promise<ISituation[]>;
    getStemSituation(situation: ISituation): Promise<ISituation>;
    getSituation(repositorySource: string, situationRepositoryUuId: string): Promise<ISituation>;
    saveSituation(situation: ISituation): Promise<void>;
}
//# sourceMappingURL=SituationApiClient.d.ts.map