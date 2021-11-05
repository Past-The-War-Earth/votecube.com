import { IFieldGroup } from '@votecube/forms';
import { IUiSolution, IUiSituation, IUiCategory } from '@votecube/model';
import { SituationApiClient } from '@votecube/votecube';
export interface IPageSolution extends IUiSolution {
    changeMillis?: number;
}
export interface ISituationManager {
    currentRevision: ICachedSituation;
    getSituationsForCategory(category: IUiCategory): Promise<IUiSituation[]>;
    getLeafSituations(situation: IUiSituation): Promise<IUiSituation[]>;
    getStemSituation(situation: IUiSituation): Promise<IUiSituation>;
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
    private currSituation;
    get currentRevision(): ICachedSituation;
    getSituationsForCategory(category: IUiCategory): Promise<IUiSituation[]>;
    getLeafSituations(situation: IUiSituation): Promise<IUiSituation[]>;
    getStemSituation(situation: IUiSituation): Promise<IUiSituation>;
    mergeForm(): Promise<void>;
    saveSituation(situation: IUiSituation): Promise<void>;
}
//# sourceMappingURL=SituationManager.d.ts.map