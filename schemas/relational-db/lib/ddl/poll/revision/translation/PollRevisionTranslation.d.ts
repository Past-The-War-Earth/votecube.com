import { PollRevisionTranslation_Description, PollRevisionTranslation_Id, PollRevisionTranslation_Name } from '../../../../types/poll/revision/translation/PollRevisionTranslation';
import { Language } from '../../../infrastructure/Language';
import { ImmutableActorRow } from '../../../infrastructure/row/ImmutableActorRow';
import { TranslationType } from '../../../infrastructure/TranslationType';
import { UserPollRevisionTranslationRating } from '../../user/UserPollRevisionTranslationRating';
import { PollRevision } from '../PollRevision';
import { PollRevisionFactorTranslation } from './PollRevisionFactorTranslation';
import { PollRevisionPositionTranslation } from './PollRevisionPositionTranslation';
/**
 * This the translation of a given poll revision.
 *
 */
export declare class PollRevisionTranslation extends ImmutableActorRow {
    id: PollRevisionTranslation_Id;
    pollRevision: PollRevision;
    language: Language;
    name: PollRevisionTranslation_Name;
    description: PollRevisionTranslation_Description;
    type: TranslationType;
    parent: PollRevisionTranslation;
    children: PollRevisionTranslation[];
    ratings: UserPollRevisionTranslationRating[];
    factorTranslations: PollRevisionFactorTranslation[];
    positionTranslations: PollRevisionPositionTranslation[];
}
