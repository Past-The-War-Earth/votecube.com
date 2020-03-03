import { IMutableActorRow } from '../infrastructure/row/mutableactorrow';
import { IPollRevision } from '../poll/revision/pollrevision';
import { IPollRun } from '../poll/run/pollrun';
import { IVote } from '../vote/vote';
import { IPollRevisionOpinionVersion } from './pollrevisionopinionversion';
export interface IPollRevisionOpinion extends IMutableActorRow {
    id: number;
    pollRevision?: IPollRevision;
    run?: IPollRun;
    vote?: IVote;
    versions?: IPollRevisionOpinionVersion[];
}
