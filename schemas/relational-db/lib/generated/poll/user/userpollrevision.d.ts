import { IMutableActorRow } from '../../infrastructure/row/mutableactorrow';
import { IUserPoll } from './userpoll';
import { IPollRevision } from '../revision/pollrevision';
import { IUserPollRevisionTranslation } from './userpollrevisiontranslation';
import { IUserPollRevisionRating } from './userpollrevisionrating';
export interface IUserPollRevision extends IMutableActorRow {
    id: number;
    userPoll?: IUserPoll;
    revision?: IPollRevision;
    translations?: IUserPollRevisionTranslation[];
    ratings?: IUserPollRevisionRating[];
}
