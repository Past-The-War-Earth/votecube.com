import { PollRun } from '../poll/run/PollRun';
import { Vote_Id } from '../../types/vote/Vote';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { VoteVersion } from './VoteVersion';
import { VoteType } from './VoteType';
export declare class Vote extends ImmutableActorRow {
    id: Vote_Id;
    /**
     * Reserved for future use - let people not the the target group vote too (
     * since they can see the poll) but track it differently
     */
    type: VoteType;
    run: PollRun;
    revisions: VoteVersion[];
}
//# sourceMappingURL=Vote.d.ts.map