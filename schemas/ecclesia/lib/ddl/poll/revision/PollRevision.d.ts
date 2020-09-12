import { PollRevision_Depth, PollRevision_Id } from '../../../types/poll/revision/PollRevision';
import { AgeSuitableRow } from '../../infrastructure/row/AgeSuitableRow';
import { PollRevisionOpinion } from '../../opinion/PollRevisionOpinion';
import { Poll } from '../Poll';
import { PollRevisionRating } from '../rating/PollRevisionRating';
import { PollRun } from '../run/PollRun';
import { Outcome } from './Outcome';
import { PollRevisionFactorPosition } from './PollRevisionFactorPosition';
import { PollRevisionTranslation } from './translation/PollRevisionTranslation';
/**
 * Different revisions of a given poll.
 */
export declare class PollRevision extends AgeSuitableRow {
    id: PollRevision_Id;
    depth: PollRevision_Depth;
    poll: Poll;
    createdAtRun: PollRun;
    outcomeVersionA: Outcome;
    outcomeVersionB: Outcome;
    parent: PollRevision;
    parentTranslation: PollRevisionTranslation;
    children: PollRevision[];
    ratings: PollRevisionRating[];
    factorPositions: PollRevisionFactorPosition[];
    allTranslations: PollRevisionTranslation[];
    opinions: PollRevisionOpinion[];
}
