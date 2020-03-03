import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IUserPollRevisionTranslation } from './userpollrevisiontranslation';
import { IPollRevisionTranslation } from '../revision/translation/pollrevisiontranslation';
import { IPollRun } from '../run/pollrun';
import { IRating } from '../../infrastructure/rating/rating';
export interface IUserPollRevisionTranslationRating extends IImmutableActorRow {
    id: number;
    isCurrent?: boolean;
    userPollRevisionTranslation?: IUserPollRevisionTranslation;
    pollRevisionTranslation?: IPollRevisionTranslation;
    run?: IPollRun;
    rating?: IRating;
    parent?: IUserPollRevisionTranslationRating;
    child?: IUserPollRevisionTranslationRating[];
}
