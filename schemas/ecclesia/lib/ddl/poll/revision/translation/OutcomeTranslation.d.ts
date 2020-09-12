import { OutcomeTranslation_Id, OutcomeTranslation_Name } from '../../../../types/poll/revision/translation/OutcomeTranslation';
import { Language } from '../../../infrastructure/Language';
import { ImmutableActorRow } from '../../../infrastructure/row/ImmutableActorRow';
import { TranslationType } from '../../../infrastructure/TranslationType';
import { Outcome } from '../Outcome';
/**
 * This the translation of a given poll revision.
 *
 */
export declare class OutcomeTranslation extends ImmutableActorRow {
    id: OutcomeTranslation_Id;
    name: OutcomeTranslation_Name;
    outcome: Outcome;
    language: Language;
    type: TranslationType;
    parent: OutcomeTranslation;
    children: OutcomeTranslation[];
}
