import {DocStatus}     from './common'
import {IVersioned}    from './PathFragment'
import {
	ICorePoll,
	Poll_Id
}                      from './Poll'
import {Variation_Id} from './Variation'

export interface ICoreVariationListing<Doc extends DocStatus>
	extends ICorePoll<Doc, Variation_Id>,
	        IVersioned<Variation_Id> {

	pollId: Poll_Id

}
