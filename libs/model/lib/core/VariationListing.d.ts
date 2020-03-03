import { DocStatus } from './common';
import { IVersioned } from './PathFragment';
import { ICorePoll, Poll_Id } from './Poll';
import { Revision_Id } from './Revision';
export interface ICoreRevisionListing<Doc extends DocStatus> extends ICorePoll<Doc, Revision_Id>, IVersioned<Revision_Id> {
    pollId: Poll_Id;
}
