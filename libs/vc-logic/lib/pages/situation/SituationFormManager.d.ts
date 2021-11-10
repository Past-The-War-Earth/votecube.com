import { IFormSituation, IUiNamedRecord, IUiRepositoryRecord, IUiSituation } from '@votecube/model';
export interface ISituationFormManager {
    fromForm(formSituation: IFormSituation, uiSituation: IUiSituation): IUiSituation;
    toForm(uiSituation: IUiSituation): IFormSituation;
    getBlankUiRepositoryRecord(): IUiRepositoryRecord;
    getBlankUiNamedRecord(): IUiNamedRecord;
}
export declare class SituationFormManager implements ISituationFormManager {
    fromForm(formSituation: IFormSituation, uiSituation: IUiSituation): IUiSituation;
    private transferFactorWithPositions;
    private transferNameAndId;
    private transferId;
    private getBlankUiFactor;
    private formLabelsToUi;
    private getBlankUiLabel;
    getBlankUiRepositoryRecord(): IUiRepositoryRecord;
    getBlankUiNamedRecord(): IUiNamedRecord;
    toForm(uiSituation: IUiSituation): IFormSituation;
    private getFormField;
    private copyId;
    private uiToFormFactor;
}
//# sourceMappingURL=SituationFormManager.d.ts.map