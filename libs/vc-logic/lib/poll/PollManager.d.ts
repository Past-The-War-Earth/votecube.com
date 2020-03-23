import { IFieldGroup } from '@votecube/forms';
import { IPollRevisionDelta, IsData, IUiPoll, IUiPollRevision } from '@votecube/model';
import { IUserAccount, IVote, Poll_Id, PollRevision_Id, Theme_Id } from '@votecube/relational-db';
export interface IPageVote extends IVote {
    changeMillis: number;
}
export interface IPollManager {
    currentVariation: IStoredVariation;
    getAllPolls(): Promise<IUiPoll<IsData>[]>;
    getChildVariationListings(pollId: Poll_Id, variationId: PollRevision_Id): Promise<IUiPollRevision[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IUiPoll<IsData>[]>;
    getVariation(pollId: Poll_Id, pollRevisionId: PollRevision_Id): Promise<IUiPollRevision>;
    getVariationListing(pollId: Poll_Id, pollRevisionId: PollRevision_Id): Promise<IUiPollRevision>;
    mergeForm(): Promise<void>;
    saveCurrentVariation(userAccount: IUserAccount): Promise<void>;
}
export interface IStoredVariation {
    form?: IFieldGroup;
    originalUi: IUiPollRevision;
    ui: IUiPollRevision;
    uiDelta?: IPollRevisionDelta;
}
export declare class PollManager implements IPollManager {
    private currVariation;
    get currentVariation(): IStoredVariation;
    getAllPolls(): Promise<IUiPoll<IsData>[]>;
    getChildVariationListings(pollId: Poll_Id, variationId: PollRevision_Id): Promise<IUiPollRevision[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IUiPoll<IsData>[]>;
    getVariation(pollId: Poll_Id, variationId: PollRevision_Id): Promise<IUiPollRevision>;
    getVariationListing(pollId: Poll_Id, variationId: PollRevision_Id): Promise<IUiPollRevision>;
    mergeForm(): Promise<void>;
    saveCurrentVariation(user: IUserAccount): Promise<void>;
}
