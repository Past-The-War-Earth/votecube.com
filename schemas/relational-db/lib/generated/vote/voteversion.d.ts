import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { IVote } from './vote';
import { IVoteFactor } from './votefactor';
export interface IVoteVersion extends IImmutableActorRow {
    id: number;
    vote?: IVote;
    factors?: IVoteFactor[];
}
