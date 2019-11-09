import {
	IPollDoc,
	IVariationDoc,
	IVariationListingDoc,
	PollKey,
	VariationKey
}                             from '@votecube/model'
import {
	ICollection,
	ISchema
}                             from './common'
import {IVCDocumentReference} from './DocRef'
import {RootCollection}       from './RootCollection'

export interface IPollDraftsCollection
	extends ICollection<PollKey, IPollDoc> {

	pollVariationListings(
		keyOrReference: PollKey | IVCDocumentReference<PollKey, IPollDoc>
	): ICollection<VariationKey, IVariationListingDoc, PollKey, IPollDoc>

	pollVariations(
		keyOrReference: PollKey | IVCDocumentReference<PollKey, IPollDoc>
	): ICollection<VariationKey, IVariationDoc, PollKey, IPollDoc>

}

export class PollDraftsCollection
	extends RootCollection<PollKey, IPollDoc>
	implements IPollDraftsCollection {

	constructor(
		schema: ISchema
	) {
		super('pollDrafts', schema)
	}

	pollVariationListings(
		keyOrReference: PollKey | IVCDocumentReference<PollKey, IPollDoc>
	): ICollection<VariationKey, IVariationListingDoc, PollKey, IPollDoc> {
		return this.child(keyOrReference, 'pollVariationListings')
	}

	pollVariations(
		keyOrReference: PollKey | IVCDocumentReference<PollKey, IPollDoc>
	): ICollection<VariationKey, IVariationDoc, PollKey, IPollDoc> {
		return this.child(keyOrReference, 'pollVariations')
	}

}
