import { IMutableActorRow } from '../../infrastructure/row/mutableactorrow';
import { IUserPollRevision } from './userpollrevision';
import { IPollRevision } from '../revision/pollrevision';
import { IRating } from '../../infrastructure/rating/rating';
export interface IUserPollRevisionRating extends IMutableActorRow {
    id: number;
    userPollRevision?: IUserPollRevision;
    pollRevision?: IPollRevision;
    rating?: IRating;
}
