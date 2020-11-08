import { IUserAccount, Poll_Id, PollRevision_Id, Theme_Id } from '@votecube/ecclesia';
import { IFieldGroup } from '@votecube/forms';
import { IsData, IUiPoll, IUiPollRevision, IUiPollRevisionDelta, IVote } from '@votecube/model';
export interface IPageVote extends IVote {
    changeMillis?: number;
}
export interface IPollManager {
    currentRevision: IStoredRevision;
    getAllPolls(): Promise<IUiPoll<IsData>[]>;
    getChildRevisionListings(pollId: Poll_Id, revisionId: PollRevision_Id): Promise<IUiPollRevision[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IUiPoll<IsData>[]>;
    getRevision(pollId: Poll_Id, pollRevisionId: PollRevision_Id): Promise<IUiPollRevision>;
    getRevisionListing(pollId: Poll_Id, pollRevisionId: PollRevision_Id): Promise<IUiPollRevision>;
    mergeForm(): Promise<void>;
    saveCurrentRevision(userAccount: IUserAccount): Promise<void>;
}
export interface IStoredRevision {
    form?: IFieldGroup;
    originalUi: IUiPollRevision;
    ui: IUiPollRevision;
    uiDelta?: IUiPollRevisionDelta;
}
export declare class PollManager implements IPollManager {
    private currRevision;
    get currentRevision(): IStoredRevision;
    getAllPolls(): Promise<IUiPoll<IsData>[]>;
    getChildRevisionListings(pollId: Poll_Id, revisionId: PollRevision_Id): Promise<IUiPollRevision[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IUiPoll<IsData>[]>;
    getRevision(pollId: Poll_Id, pollRevisionId: PollRevision_Id): Promise<IUiPollRevision>;
    getRevisionListing(pollId: Poll_Id, revisionId: PollRevision_Id): Promise<IUiPollRevision>;
    mergeForm(): Promise<void>;
    saveCurrentRevision(user: IUserAccount): Promise<void>;
}
//# sourceMappingURL=PollManager.d.ts.map