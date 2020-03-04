import { AgeSuitability } from '../../../types/common';
import { PollRevision_Id } from '../../../types/poll/revision/PollRevision';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
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
export declare class PollRevision extends ImmutableActorRow {
    id: PollRevision_Id;
    ageSuitability: AgeSuitability;
    poll: Poll;
    createdAtRun: PollRun;
    outcomeVersionA: Outcome;
    outcomeVersionB: Outcome;
    parent: PollRevision;
    children: PollRevision[];
    ratings: PollRevisionRating[];
    factorPositions: PollRevisionFactorPosition[];
    allTranslations: PollRevisionTranslation[];
    opinions: PollRevisionOpinion[];
}
