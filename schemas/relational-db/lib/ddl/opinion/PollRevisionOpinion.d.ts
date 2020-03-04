import { PollRevisionOpinion_Id } from '../../types/opinion/PollRevisionOpinion';
import { MutableActorRow } from '../infrastructure/row/MutableActorRow';
import { PollRevision } from '../poll/revision/PollRevision';
import { PollRun } from '../poll/run/PollRun';
import { Vote } from '../vote/Vote';
import { FactorOpinionVersion } from './FactorOpinionVersion';
import { OutcomeOpinionVersion } from './OutcomeOpinionVersion';
import { PollRevisionOpinionVersion } from './PollRevisionOpinionVersion';
import { PositionOpinionVersion } from './PositionOpinionVersion';
import { PollRevisionOpinionRating } from './rating/PollRevisionOpinionRating';
export declare class PollRevisionOpinion extends MutableActorRow {
    id: PollRevisionOpinion_Id;
    pollRevision: PollRevision;
    run: PollRun;
    vote: Vote;
    ratings: PollRevisionOpinionRating[];
    versions: PollRevisionOpinionVersion[];
    factors: FactorOpinionVersion[];
    outcomes: OutcomeOpinionVersion[];
    positions: PositionOpinionVersion[];
}
