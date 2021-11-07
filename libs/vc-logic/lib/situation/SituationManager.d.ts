import { DeepPartial } from '@airport/pressurization';
import { IFieldGroup } from '@votecube/forms';
import { IUiSolution, IUiSituation, IUiCategory } from '@votecube/model';
import { Situation, SituationApiClient } from '@votecube/votecube';
export interface IPageSolution extends IUiSolution {
    changeMillis?: number;
}
export interface ISituationManager {
    cachedSituation: ICachedSituation;
    getSituation(repositoryUuId: string): Promise<DeepPartial<Situation>>;
    getAllSituations(): Promise<IUiSituation[]>;
    getSituationsForCategory(category: IUiCategory): Promise<IUiSituation[]>;
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
    getSituation(repositoryUuId: string): Promise<DeepPartial<Situation>>;
    getAllSituations(): Promise<IUiSituation[]>;
    getSituationsForCategory(category: IUiCategory): Promise<IUiSituation[]>;
    getLeafSituations(stemSituationRepositoryUuId: string): Promise<IUiSituation[]>;
    getStemSituation(leafSituationUuId: string): Promise<IUiSituation>;
    mergeForm(): Promise<void>;
    saveSituation(situation: IUiSituation): Promise<void>;
}
//# sourceMappingURL=SituationManager.d.ts.map