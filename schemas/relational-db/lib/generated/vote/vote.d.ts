import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { IActor } from '../user/actor';
import { IPoll } from '../poll/poll';
import { IVoteRevision } from './voterevision';
export interface IVote extends IImmutableActorRow {
    id: number;
    type?: number;
    actor?: IActor;
    poll?: IPoll;
    revisions?: IVoteRevision[];
}
