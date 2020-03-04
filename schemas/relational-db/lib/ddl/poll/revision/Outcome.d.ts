import { Outcome_Id } from '../../../types/poll/revision/Outcome';
import { PollRevision } from './PollRevision';
import { OutcomeTranslation } from './translation/OutcomeTranslation';
export declare class Outcome {
    id: Outcome_Id;
    parentTranslation: OutcomeTranslation;
    parent: Outcome;
    children: Outcome[];
    pollRevisionsA: PollRevision[];
    pollRevisionsB: PollRevision[];
}
