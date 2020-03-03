import { IsData, IsDelta } from '../core/common';
import { ICoreRevision } from '../core/Revision';
export interface IRevisionData extends IRevisionDataOrDelta<IsData> {
}
export interface IRevisionDataOrDelta<DataOrDelta extends IsData | IsDelta> extends ICoreRevision<DataOrDelta> {
}
