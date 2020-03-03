import { IsData, IsDelta } from '../core/common';
import { ICoreRevision } from '../core/PollRevision';
export interface IPollRevisionData extends IPollRevisionDataOrDelta<IsData> {
}
export interface IPollRevisionDataOrDelta<DataOrDelta extends IsData | IsDelta> extends ICoreRevision<DataOrDelta> {
}
