import { OutcomeVersion_Id } from '../../../types/poll/revision/OutcomeVersion';
import { PollRevision } from './PollRevision';
export declare class OutcomeVersion {
    id: OutcomeVersion_Id;
    parent: OutcomeVersion;
    children: OutcomeVersion[];
    pollRevisionsA: PollRevision[];
    pollRevisionsB: PollRevision[];
}
