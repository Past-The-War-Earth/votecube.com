import { Vote_Id } from '../../types/vote/Vote';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { Poll } from '../poll/Poll';
import { Actor } from '../user/Actor';
import { VoteType } from './VoteType';
import { VoteRevision } from './VoteRevision';
export declare class Vote extends ImmutableActorRow {
    id: Vote_Id;
    actor: Actor;
    /**
     * Reserved for future use - let people not the the target group vote too (
     * since they can see the poll) but track it differently
     */
    type: VoteType;
    poll: Poll;
    revisions: VoteRevision[];
}
