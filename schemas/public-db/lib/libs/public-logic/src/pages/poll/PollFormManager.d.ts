import { IPollForm, IsData, IsDelta, IRevisionData, IRevisionDataOrDelta } from '@votecube/model';
export interface IPollFormManager {
    fromForm<DataOrDelta extends IsData | IsDelta>(form: IPollForm): IRevisionDataOrDelta<DataOrDelta>;
    toForm(data: IRevisionData): IPollForm;
}
export declare class PollFormManager implements IPollFormManager {
    fromForm<DataOrDelta extends IsData | IsDelta>(form: IPollForm): IRevisionDataOrDelta<DataOrDelta>;
    toForm(data: IRevisionData): IPollForm;
    private toPollFactorForm;
    private toPollFactorFromForm;
}
