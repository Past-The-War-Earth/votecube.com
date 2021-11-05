import { IFormSituation, IUiSituation } from '@votecube/model';
export interface ISituationFormManager {
    fromForm(formSituation: IFormSituation, uiSituation: IUiSituation): IUiSituation;
    toForm(uiSituation: IUiSituation): IFormSituation;
}
export declare class SituationFormManager implements ISituationFormManager {
    fromForm(formSituation: IFormSituation, uiSituation: IUiSituation): IUiSituation;
    private transferFactorWithPositions;
    private transferNameAndId;
    private transferId;
    private getBlankUiFactor;
    private getBlankUiRepositoryRecord;
    private getBlankUiNamedRecord;
    toForm(uiSituation: IUiSituation): IFormSituation;
    private getFormField;
    private copyId;
    private uiToFormFactor;
}
//# sourceMappingURL=SituationFormManager.d.ts.map