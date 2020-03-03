import { IFieldGroup } from '@votecube/forms';
import { IPollData, IUiPollVariation, IUiPollVariationDelta, IUser, IVariationData, IVariationDoc, IVote, Poll_Id, Theme_Id, Variation_Id } from '@votecube/model';
export interface IPageVote extends IVote {
    changeMillis: number;
}
export interface IPollManager {
    currentVariation: IStoredVariation;
    getAllPolls(): Promise<IPollData[]>;
    getChildVariationListings(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationData[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IPollData[]>;
    getVariation(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationData>;
    getVariationListing(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationData>;
    mergeForm(): Promise<void>;
    saveCurrentVariation(user: IUser): Promise<void>;
}
export interface IStoredVariation {
    doc: IVariationDoc;
    form?: IFieldGroup;
    originalUi: IUiPollVariation;
    ui: IUiPollVariation;
    uiDelta?: IUiPollVariationDelta;
}
export declare class PollManager implements IPollManager {
    private currVariation;
    get currentVariation(): IStoredVariation;
    getAllPolls(): Promise<IPollData[]>;
    getChildVariationListings(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationData[]>;
    getPollsForTheme(themeId: Theme_Id): Promise<IPollData[]>;
    getVariation(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationData>;
    getVariationListing(pollId: Poll_Id, variationId: Variation_Id): Promise<IVariationData>;
    mergeForm(): Promise<void>;
    saveCurrentVariation(user: IUser): Promise<void>;
    private convertDocs;
    private convertDoc;
    private convertADoc;
}
