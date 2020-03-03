import { IPollDoc, IUser, IVariationDoc, IVariationListingDoc, Poll_Key, Variation_Key } from '@votecube/model';
export interface IPollDao {
    addTemp(poll: IVariationDoc): void;
    getAll(): Promise<IPollDoc[]>;
    getChildVariationListings(pollKey: Poll_Key, variationKey: Variation_Key): Promise<IVariationListingDoc[]>;
    getForTheme(themeId: number): Promise<IPollDoc[]>;
    getVariation(pollKey: Poll_Key, variationKey: Variation_Key): Promise<IVariationDoc>;
    getVariationListing(pollKey: Poll_Key, variationKey: Variation_Key): Promise<IVariationListingDoc>;
    save(variation: IVariationDoc, user: IUser): Promise<IPollDoc>;
}
export declare class PollDao implements IPollDao {
    tempVariation: IVariationDoc;
    addTemp(poll: IVariationDoc): Promise<void>;
    getAll(): Promise<IPollDoc[]>;
    getForTheme(themeId: number): Promise<IPollDoc[]>;
    getVariation(pollKey: Poll_Key, variationKey: Variation_Key): Promise<IVariationDoc>;
    getVariationListing(pollKey: Poll_Key, variationKey: Variation_Key): Promise<IVariationListingDoc>;
    getChildVariationListings(pollKey: Poll_Key, variationKey: Variation_Key): Promise<IVariationListingDoc[]>;
    save(variationIn: IVariationDoc, user: IUser): Promise<IPollDoc>;
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
