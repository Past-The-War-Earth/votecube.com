import { PollRevisionTranslation_Id, PollRevisionTranslation_Name } from '../../../../types/poll/revision/translation/PollRevisionTranslation';
import { Language } from '../../../infrastructure/Language';
import { ImmutableActorRow } from '../../../infrastructure/row/ImmutableActorRow';
import { TranslationType } from '../../../infrastructure/TranslationType';
import { PollRevisionTranslationRating } from '../../rating/PollRevisionTranslationRating';
import { PollRevision } from '../PollRevision';
/**
 * This the translation of a given poll revision.
 *
 */
export declare class PollRevisionTranslation extends ImmutableActorRow {
    id: PollRevisionTranslation_Id;
    pollRevision: PollRevision;
    language: Language;
    name: PollRevisionTranslation_Name;
    type: TranslationType;
    parent: PollRevisionTranslation;
    children: PollRevisionTranslation[];
    ratings: PollRevisionTranslationRating[];
}
//# sourceMappingURL=PollRevisionTranslation.d.ts.map