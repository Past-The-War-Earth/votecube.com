import { Outcome_Id } from '../../../types/poll/revision/Outcome';
import { AgeSuitableRow } from '../../infrastructure/row/AgeSuitableRow';
import { PollRevision } from './PollRevision';
import { OutcomeTranslation } from './translation/OutcomeTranslation';
export declare class Outcome extends AgeSuitableRow {
    id: Outcome_Id;
    parentTranslation: OutcomeTranslation;
    parent: Outcome;
    children: Outcome[];
    pollRevisionsA: PollRevision[];
    pollRevisionsB: PollRevision[];
}
//# sourceMappingURL=Outcome.d.ts.map