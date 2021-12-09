import { IFieldGroup } from '@votecube/forms';
import { IUiSolution, IUiSituation, IUiLabel } from '@votecube/model';
import { IRepositoryIdentifier, ISituation, SituationApiClient } from '@votecube/votecube';
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
    saveSituation(situation: IUiSituation, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
    saveCachedSituation(user: any, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
}
export interface ICachedSituation {
    db: ISituation;
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
    saveSituation(situation: IUiSituation, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
    saveCachedSituation(user: any, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=SituationManager.d.ts.map