import { IPollForm, IUiPollRevisionCore, UiDocStatus } from '@votecube/model';
export interface IPollFormManager {
    fromForm<Doc extends UiDocStatus>(form: IPollForm<Doc>): IUiPollRevisionCore<Doc>;
    toForm<Doc extends UiDocStatus>(data: IUiPollRevisionCore<Doc>): IPollForm<Doc>;
}
export declare class PollFormManager implements IPollFormManager {
    fromForm<Doc extends UiDocStatus>(form: IPollForm<Doc>): IUiPollRevisionCore<Doc>;
    toForm<Doc extends UiDocStatus>(data: IUiPollRevisionCore<Doc>): IPollForm<Doc>;
    private toPollFactorForm;
    private toPollFactorFromForm;
}
//# sourceMappingURL=PollFormManager.d.ts.map