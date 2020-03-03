import { PollRevisionOpinion_Id } from '../../types/opinion/PollRevisionOpinion';
import { MutableActorRow } from '../infrastructure/row/MutableActorRow';
import { PollRevision } from '../poll/revision/PollRevision';
import { PollRun } from '../poll/run/PollRun';
import { Vote } from '../vote/Vote';
import { PollRevisionOpinionVersion } from './PollRevisionOpinionVersion';
export declare class PollRevisionOpinion extends MutableActorRow {
    id: PollRevisionOpinion_Id;
    pollRevision: PollRevision;
    run: PollRun;
    vote: Vote;
    versions: PollRevisionOpinionVersion[];
}
