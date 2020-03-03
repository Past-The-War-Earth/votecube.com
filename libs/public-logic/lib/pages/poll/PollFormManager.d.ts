import { IPollForm, IsData, IsDelta, IVariationData, IVariationDataOrDelta } from '@votecube/model';
export interface IPollFormManager {
    fromForm<DataOrDelta extends IsData | IsDelta>(form: IPollForm): IVariationDataOrDelta<DataOrDelta>;
    toForm(data: IVariationData): IPollForm;
}
export declare class PollFormManager implements IPollFormManager {
    fromForm<DataOrDelta extends IsData | IsDelta>(form: IPollForm): IVariationDataOrDelta<DataOrDelta>;
    toForm(data: IVariationData): IPollForm;
    private toPollFactorForm;
    private toPollFactorFromForm;
}
