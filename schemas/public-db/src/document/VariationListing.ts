import {IVersionedDoc} from './PathFragment'
import {
	IPollDoc,
	PollKey
}                      from './Poll'
import {VariationKey}  from './Variation'

export interface IVariationListingDoc
	extends IPollDoc<VariationKey>,
	        IVersionedDoc<VariationKey> {

	pollKey: PollKey

}
