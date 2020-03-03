import { PollRevisionOpinionVersionTranslation_Id, PollRevisionOpinionVersionTranslation_IsOriginal, PollRevisionOpinionVersionTranslation_Text, PollRevisionOpinionVersionTranslation_Title } from '../../../types/opinion/translation/PollRevisionOpinionVersionTranslation';
import { Language } from '../../infrastructure/Language';
import { SystemGeneratedRow } from '../../infrastructure/row/SystemGeneratedRow';
import { PollRevisionOpinionVersion } from '../PollRevisionOpinionVersion';
/**
 * Belongs to PollRevisionOpinionVersion - does not need user tracking.
 */
export declare class PollRevisionOpinionVersionTranslation extends SystemGeneratedRow {
    id: PollRevisionOpinionVersionTranslation_Id;
    /**
     * All translations should come from the original version.
     */
    original: PollRevisionOpinionVersionTranslation_IsOriginal;
    title: PollRevisionOpinionVersionTranslation_Title;
    text: PollRevisionOpinionVersionTranslation_Text;
    opinionVersion: PollRevisionOpinionVersion;
    language: Language;
}
