import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IUserPollRevisionTranslation } from './userpollrevisiontranslation';
import { IPollRun } from '../run/pollrun';
import { IRating } from '../../infrastructure/rating/rating';
export interface IPollRevisionTranslationRating extends IImmutableActorRow {
    id: number;
    isCurrent?: boolean;
    userPollRevisionTranslation?: IUserPollRevisionTranslation;
    run?: IPollRun;
    rating?: IRating;
    parent?: IPollRevisionTranslationRating;
    child?: IPollRevisionTranslationRating[];
}
