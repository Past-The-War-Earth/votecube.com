import { IMutableActorRow } from '../../infrastructure/row/mutableactorrow';
import { IUserPollRevision } from './userpollrevision';
import { IPollRevisionTranslation } from '../revision/translation/pollrevisiontranslation';
import { IPollRevisionTranslationRating } from './pollrevisiontranslationrating';
export interface IUserPollRevisionTranslation extends IMutableActorRow {
    id: number;
    userPollRevision?: IUserPollRevision;
    revisionTranslation?: IPollRevisionTranslation;
    ratings?: IPollRevisionTranslationRating[];
}
