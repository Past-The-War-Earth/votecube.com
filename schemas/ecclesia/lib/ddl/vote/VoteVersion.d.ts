import { VoteVersion_Id } from '../../types/vote/VoteVersion';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
import { Vote } from './Vote';
import { VoteFactor } from './VoteFactor';
export declare class VoteVersion extends ImmutableActorRow {
    id: VoteVersion_Id;
    vote: Vote;
    factors: VoteFactor[];
}
//# sourceMappingURL=VoteVersion.d.ts.map