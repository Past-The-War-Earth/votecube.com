import {DocStatus}     from './common'
import {IVersioned}    from './PathFragment'
import {
	ICorePoll,
	Poll_Key
}                      from './Poll'
import {Variation_Key} from './Variation'

export interface ICoreVariationListing<Doc extends DocStatus>
	extends ICorePoll<Doc, Variation_Key>,
	        IVersioned<Variation_Key> {

	pollKey: Poll_Key

}
