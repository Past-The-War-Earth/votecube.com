import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../poll/revision/pollrevision';
import { IVote } from './vote';
import { IPollRevisionTranslation } from '../poll/revision/translation/pollrevisiontranslation';
import { IPollRun } from '../poll/run/pollrun';
import { IVoteFactor } from './votefactor';
export interface IVoteRevision extends IImmutableActorRow {
    id: number;
    revision?: IPollRevision;
    vote?: IVote;
    revisionTranslation?: IPollRevisionTranslation;
    run?: IPollRun;
    factors?: IVoteFactor[];
}
