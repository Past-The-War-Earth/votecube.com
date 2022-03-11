import { IFormIdea, IUiNamedRecord, IUiRepositoryRecord, IUiIdea } from '@votecube/model';
export interface IIdeaFormManager {
    fromForm(formIdea: IFormIdea, uiIdea: IUiIdea): IUiIdea;
    toForm(uiIdea: IUiIdea): IFormIdea;
    getBlankUiRepositoryRecord(): IUiRepositoryRecord;
    getBlankUiNamedRecord(): IUiNamedRecord;
}
export declare class IdeaFormManager implements IIdeaFormManager {
    fromForm(formIdea: IFormIdea, uiIdea: IUiIdea): IUiIdea;
    private transferFactorWithPositions;
    private transferNameAndId;
    private transferId;
    private getBlankUiFactor;
    private formLabelsToUi;
    private getBlankUiLabel;
    getBlankUiRepositoryRecord(): IUiRepositoryRecord;
    getBlankUiNamedRecord(): IUiNamedRecord;
    toForm(uiIdea: IUiIdea): IFormIdea;
    private getFormField;
    private copyId;
    private uiToFormFactor;
}
//# sourceMappingURL=IdeaFormManager.d.ts.map