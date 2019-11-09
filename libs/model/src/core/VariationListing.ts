import {DocStatus}    from './common'
import {IVersioned}   from './PathFragment'
import {
	ICorePoll,
	PollKey
}                     from './Poll'
import {VariationKey} from './Variation'

export interface ICoreVariationListing<Doc extends DocStatus>
	extends ICorePoll<Doc, VariationKey>,
	        IVersioned<VariationKey> {

	pollKey: PollKey

}
