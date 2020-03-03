import { IPollDoc, IVariationDoc, IVariationListingDoc, Poll_Key, Variation_Key } from '@votecube/model';
import { ICollection, ISchema } from './common';
import { IVCDocumentReference } from './DocRef';
import { RootCollection } from './RootCollection';
export interface IPollDraftsCollection extends ICollection<Poll_Key, IPollDoc> {
    pollVariationListings(keyOrReference: Poll_Key | IVCDocumentReference<Poll_Key, IPollDoc>): ICollection<Variation_Key, IVariationListingDoc, Poll_Key, IPollDoc>;
    pollVariations(keyOrReference: Poll_Key | IVCDocumentReference<Poll_Key, IPollDoc>): ICollection<Variation_Key, IVariationDoc, Poll_Key, IPollDoc>;
}
export declare class PollDraftsCollection extends RootCollection<Poll_Key, IPollDoc> implements IPollDraftsCollection {
    constructor(schema: ISchema);
    pollVariationListings(keyOrReference: Poll_Key | IVCDocumentReference<Poll_Key, IPollDoc>): ICollection<Variation_Key, IVariationListingDoc, Poll_Key, IPollDoc>;
    pollVariations(keyOrReference: Poll_Key | IVCDocumentReference<Poll_Key, IPollDoc>): ICollection<Variation_Key, IVariationDoc, Poll_Key, IPollDoc>;
}
