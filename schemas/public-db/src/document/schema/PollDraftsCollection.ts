import {
	IPollDoc,
	IVariationDoc,
	IVariationListingDoc,
	Poll_Id,
	Variation_Id
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IPollDraftsCollection
	extends ICollection<Poll_Id, IPollDoc> {

	pollVariationListings(
		keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>
	): ICollection<Variation_Id, IVariationListingDoc, Poll_Id, IPollDoc>

	pollVariations(
		keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>
	): ICollection<Variation_Id, IVariationDoc, Poll_Id, IPollDoc>

}

export class PollDraftsCollection
	extends RootCollection<Poll_Id, IPollDoc>
	implements IPollDraftsCollection {

	constructor(
		schema: ISchema
	) {
		super('pollDrafts', schema)
	}

	pollVariationListings(
		keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>
	): ICollection<Variation_Id, IVariationListingDoc, Poll_Id, IPollDoc> {
		return this.child(keyOrReference, 'pollVariationListings')
	}

	pollVariations(
		keyOrReference: Poll_Id | IVCDocumentReference<Poll_Id, IPollDoc>
	): ICollection<Variation_Id, IVariationDoc, Poll_Id, IPollDoc> {
		return this.child(keyOrReference, 'pollVariations')
	}

}
