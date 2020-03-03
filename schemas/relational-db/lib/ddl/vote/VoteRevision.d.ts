import { VoteRevision_Id } from '../../types/vote/VoteVariation';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { PollRun } from '../poll/run/PollRun';
import { PollRevision } from '../poll/revision/PollRevision';
import { PollRevisionTranslation } from '../poll/revision/translation/PollRevisionTranslation';
import { Vote } from './Vote';
import { VoteFactor } from './VoteFactor';
export declare class VoteRevision extends ImmutableActorRow {
    id: VoteRevision_Id;
    revision: PollRevision;
    vote: Vote;
    revisionTranslation: PollRevisionTranslation;
    run: PollRun;
    factors: VoteFactor[];
}
