import { DocStatus } from './common';
import { IVersioned } from './PathFragment';
import { ICorePoll, Poll_Id } from './Poll';
import { PollRevision_Id } from './PollRevision';
export interface ICoreRevisionListing<Doc extends DocStatus> extends ICorePoll<Doc, PollRevision_Id>, IVersioned<PollRevision_Id> {
    pollId: Poll_Id;
}
