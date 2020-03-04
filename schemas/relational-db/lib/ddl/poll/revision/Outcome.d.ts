import { Outcome_Id } from '../../../types/poll/revision/Outcome';
import { PollRevision } from './PollRevision';
export declare class Outcome {
    id: Outcome_Id;
    parent: Outcome;
    children: Outcome[];
    pollRevisionsA: PollRevision[];
    pollRevisionsB: PollRevision[];
}
