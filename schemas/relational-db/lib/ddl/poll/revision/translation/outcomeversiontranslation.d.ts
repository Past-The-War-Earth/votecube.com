import { OutcomeVersionTranslation_Id, OutcomeVersionTranslation_Name } from '../../../../types/poll/revision/translation/OutcomeVersionTranslation';
import { Language } from '../../../infrastructure/Language';
import { ImmutableActorRow } from '../../../infrastructure/row/ImmutableActorRow';
import { TranslationType } from '../../../infrastructure/TranslationType';
import { OutcomeVersion } from '../OutcomeVersion';
/**
 * This the translation of a given poll revision.
 *
 */
export declare class OutcomeVersionTranslation extends ImmutableActorRow {
    id: OutcomeVersionTranslation_Id;
    name: OutcomeVersionTranslation_Name;
    outcomeVersion: OutcomeVersion;
    language: Language;
    type: TranslationType;
    parent: OutcomeVersionTranslation;
    children: OutcomeVersionTranslation[];
}
