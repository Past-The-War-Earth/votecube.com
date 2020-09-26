import {
	Poll_Id,
	PollRevision_Id
}                   from '@votecube/ecclesia'
import {DocStatus}  from './common'
import {IVersioned} from './PathFragment'
import {ICorePoll,} from './Poll'

export interface ICoreRevisionListing<Doc extends DocStatus>
	extends ICorePoll<Doc, PollRevision_Id>,
	        IVersioned<PollRevision_Id> {

	pollId: Poll_Id

}
