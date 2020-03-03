import { IMutableActorRow } from '../../infrastructure/row/mutableactorrow';
import { IUserPoll } from './userpoll';
import { IPoll } from '../poll';
import { IRating } from '../../infrastructure/rating/rating';
export interface IUserPollRating extends IMutableActorRow {
    id: number;
    userPoll?: IUserPoll;
    poll?: IPoll;
    rating?: IRating;
}
