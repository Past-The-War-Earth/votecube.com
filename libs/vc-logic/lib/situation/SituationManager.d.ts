import { IFieldGroup } from '@votecube/forms';
import { IUiSolution, IUiSituation, IUiLabel } from '@votecube/model';
import { SituationApiClient } from '@votecube/votecube';
export interface IPageSolution extends IUiSolution {
    changeMillis?: number;
}
export interface ISituationManager {
    cachedSituation: ICachedSituation;
    getSituation(hostingPlatform: string, repositoryUuId: string): Promise<IUiSituation>;
    getAllSituations(): Promise<IUiSituation[]>;
    getSituationsForCategory(category: IUiLabel): Promise<IUiSituation[]>;
    getLeafSituations(stemSituationRepositoryUuId: string): Promise<IUiSituation[]>;
    getStemSituation(leafSituationUuId: string): Promise<IUiSituation>;
    mergeForm(): Promise<void>;
    saveSituation(situation: IUiSituation): Promise<void>;
}
export interface ICachedSituation {
    form?: IFieldGroup;
    originalUi: IUiSituation;
    ui: IUiSituation;
}
export declare class SituationManager implements ISituationManager {
    situationApi: SituationApiClient;
    private theCachedSituation;
    get cachedSituation(): ICachedSituation;
    getSituation(hostingPlatform: string, repositoryUuId: string): Promise<IUiSituation>;
    getAllSituations(): Promise<IUiSituation[]>;
    getSituationsForCategory(category: IUiLabel): Promise<IUiSituation[]>;
    getLeafSituations(stemSituationRepositoryUuId: string): Promise<IUiSituation[]>;
    getStemSituation(leafSituationUuId: string): Promise<IUiSituation>;
    mergeForm(): Promise<void>;
    publishSituation(situation: IUiSituation): Promise<void>;
    saveSituation(situation: IUiSituation): Promise<void>;
}
//# sourceMappingURL=SituationManager.d.ts.map