import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { IPollRun } from '../poll/run/pollrun';
import { IVoteVersion } from './voteversion';
export interface IVote extends IImmutableActorRow {
    id: number;
    type?: number;
    run?: IPollRun;
    revisions?: IVoteVersion[];
}
//# sourceMappingURL=vote.d.ts.map