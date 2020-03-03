import { IImmutableActorRow } from '../../../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../pollrevision';
import { ILanguage } from '../../../infrastructure/language';
import { ITranslationType } from '../../../infrastructure/translationtype';
import { IUserPollRevisionTranslationRating } from '../../user/userpollrevisiontranslationrating';
import { IPollRevisionFactorTranslation } from './pollrevisionfactortranslation';
import { IPollRevisionPositionTranslation } from './pollrevisionpositiontranslation';
export interface IPollRevisionTranslation extends IImmutableActorRow {
    id: number;
    name?: string;
    description?: string;
    pollRevision?: IPollRevision;
    language?: ILanguage;
    type?: ITranslationType;
    parent?: IPollRevisionTranslation;
    children?: IPollRevisionTranslation[];
    ratings?: IUserPollRevisionTranslationRating[];
    factorTranslations?: IPollRevisionFactorTranslation[];
    positionTranslations?: IPollRevisionPositionTranslation[];
}
