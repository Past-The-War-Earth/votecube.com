import { IPollForm, IPollRevisionDataOrDelta, IsData, IsDelta, IUiPollRevision } from '@votecube/model';
export interface IPollFormManager {
    fromForm<DataOrDelta extends IsData | IsDelta>(form: IPollForm): IPollRevisionDataOrDelta<DataOrDelta>;
    toForm(data: IUiPollRevision): IPollForm;
}
export declare class PollFormManager implements IPollFormManager {
    fromForm<DataOrDelta extends IsData | IsDelta>(form: IPollForm): IPollRevisionDataOrDelta<DataOrDelta>;
    toForm(data: IUiPollRevision): IPollForm;
    private toPollFactorForm;
    private toPollFactorFromForm;
}
