import { IFieldGroup } from '@votecube/forms';
import { IPollData, IUiPollRevision, IUiPollRevisionDelta, IUser, IRevisionData, IRevisionDoc, IVote, Poll_Id, Theme_Id, Revision_Id } from '@votecube/model';
export interface IPageVote extends IVote {
    changeMillis: number;
}
export interface IPollManager {
    currentRevision: IStoredRevision;
    getAllPolls(): Promise<IPollData[]>;
    getChildRevisionListings(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionData[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IPollData[]>;
    getRevision(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionData>;
    getRevisionListing(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionData>;
    mergeForm(): Promise<void>;
    saveCurrentRevision(user: IUser): Promise<void>;
}
export interface IStoredRevision {
    doc: IRevisionDoc;
    form?: IFieldGroup;
    originalUi: IUiPollRevision;
    ui: IUiPollRevision;
    uiDelta?: IUiPollRevisionDelta;
}
export declare class PollManager implements IPollManager {
    private currRevision;
    get currentRevision(): IStoredRevision;
    getAllPolls(): Promise<IPollData[]>;
    getChildRevisionListings(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionData[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IPollData[]>;
    getRevision(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionData>;
    getRevisionListing(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionData>;
    mergeForm(): Promise<void>;
    saveCurrentRevision(user: IUser): Promise<void>;
    private convertDocs;
    private convertDoc;
    private convertADoc;
}
