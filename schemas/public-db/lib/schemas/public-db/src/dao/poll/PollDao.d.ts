import { IPollDoc, IUiPollVariation, IUser, IVariationDoc, IVariationListingDoc, Poll_Id, Variation_Id } from '@votecube/model';
export interface IPollDao {
    addTemp(poll: IVariationDoc): void;
    getAll(): Promise<IPollDoc[]>;
    getChildVariationListings(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationListingDoc[]>;
    getForTheme(themeId: number): Promise<IPollDoc[]>;
    getVariation(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationDoc>;
    getVariationListing(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationListingDoc>;
    save(variation: IVariationDoc, user: IUser): Promise<IPollDoc>;
}
export declare class PollDao implements IPollDao {
    tempVariation: IVariationDoc;
    addTemp(poll: IVariationDoc): Promise<void>;
    getAll(): Promise<IPollDoc[]>;
    getForTheme(themeId: number): Promise<IPollDoc[]>;
    getVariation(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationDoc>;
    getVariationListing(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationListingDoc>;
    getChildVariationListings(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationListingDoc[]>;
    save(variationIn: IUiPollVariation, user: IUser): Promise<IPollDoc>;
    private setupVariation;
    private setupPoll;
    private setupVariationListing;
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
