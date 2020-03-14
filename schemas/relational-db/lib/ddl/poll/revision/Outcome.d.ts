import { Outcome_Id, Outcome_Ordinal, Outcome_Name } from '../../../types/poll/revision/Outcome';
import { PollRevision } from './PollRevision';
import { OutcomeTranslation } from './translation/OutcomeTranslation';
export declare class Outcome {
    id: Outcome_Id;
    key: Outcome_Ordinal;
    name: Outcome_Name;
    parentTranslation: OutcomeTranslation;
    parent: Outcome;
    children: Outcome[];
    pollRevisionsA: PollRevision[];
    pollRevisionsB: PollRevision[];
}
