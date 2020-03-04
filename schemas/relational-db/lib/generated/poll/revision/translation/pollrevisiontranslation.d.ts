import { IImmutableActorRow } from '../../../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../pollrevision';
import { ILanguage } from '../../../infrastructure/language';
import { ITranslationType } from '../../../infrastructure/translationtype';
import { IPollRevisionTranslationRating } from '../../user/pollrevisiontranslationrating';
export interface IPollRevisionTranslation extends IImmutableActorRow {
    id: number;
    name?: string;
    pollRevision?: IPollRevision;
    language?: ILanguage;
    type?: ITranslationType;
    parent?: IPollRevisionTranslation;
    children?: IPollRevisionTranslation[];
    ratings?: IPollRevisionTranslationRating[];
}
