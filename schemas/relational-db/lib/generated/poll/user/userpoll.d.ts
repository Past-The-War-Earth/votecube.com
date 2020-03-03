import { IMutableActorRow } from '../../infrastructure/row/mutableactorrow';
import { IPoll } from '../poll';
import { IPollRevision } from '../revision/pollrevision';
import { IUserPollRevision } from './userpollrevision';
import { IUserPollRating } from './userpollrating';
export interface IUserPoll extends IMutableActorRow {
    id: number;
    pinnedExplicitly?: boolean;
    poll?: IPoll;
    pinnedRevision?: IPollRevision;
    userPollRevisions?: IUserPollRevision[];
    ratings?: IUserPollRating[];
}
