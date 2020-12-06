import { Vote_Id } from '../../types/vote/Vote';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { PollRun } from '../poll/run/PollRun';
import { VoteType } from './VoteType';
import { VoteVersion } from './VoteVersion';
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