import { IPollDoc, IUiPollRevision, IUser, IRevisionDoc, IRevisionListingDoc, Poll_Id, Revision_Id } from '@votecube/model';
export interface IPollDao {
    addTemp(poll: IRevisionDoc): void;
    getAll(): Promise<IPollDoc[]>;
    getChildRevisionListings(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionListingDoc[]>;
    getForTheme(themeId: number): Promise<IPollDoc[]>;
    getRevision(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionDoc>;
    getRevisionListing(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionListingDoc>;
    save(revision: IRevisionDoc, user: IUser): Promise<IPollDoc>;
}
export declare class PollDao implements IPollDao {
    tempRevision: IRevisionDoc;
    addTemp(poll: IRevisionDoc): Promise<void>;
    getAll(): Promise<IPollDoc[]>;
    getForTheme(themeId: number): Promise<IPollDoc[]>;
    getRevision(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionDoc>;
    getRevisionListing(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionListingDoc>;
    getChildRevisionListings(pollId: Poll_Id, revisionId: Revision_Id): Promise<IRevisionListingDoc[]>;
    save(revisionIn: IUiPollRevision, user: IUser): Promise<IPollDoc>;
    private setupRevision;
    private setupPoll;
    private setupRevisionListing;
    private getRefs;
    private prepPollAndGetRefs;
    private addOutcomesFactorsAndPositions;
    private addOutcome;
    private addFactor;
    private copyFtsProps;
    private addManyToManyResource;
    private addPosition;
    private addResource;
    private getOne;
}
