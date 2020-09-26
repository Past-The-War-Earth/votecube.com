import { OutcomeOpinionVersionTranslation_Id, OutcomeOpinionVersionTranslation_IsOriginal, OutcomeOpinionVersionTranslation_Text, OutcomeOpinionVersionTranslation_Title } from '../../../types/opinion/translation/OutcomeOpinionVersionTranslation';
import { Language } from '../../infrastructure/Language';
import { SystemGeneratedRow } from '../../infrastructure/row/SystemGeneratedRow';
import { OutcomeOpinionVersion } from '../OutcomeOpinionVersion';
/**
 * Belongs to FactorOpinionVersion - does not need user tracking.
 */
export declare class OutcomeOpinionVersionTranslation extends SystemGeneratedRow {
    id: OutcomeOpinionVersionTranslation_Id;
    /**
     * All translations should come from the original version.
     */
    original: OutcomeOpinionVersionTranslation_IsOriginal;
    title: OutcomeOpinionVersionTranslation_Title;
    text: OutcomeOpinionVersionTranslation_Text;
    outcomeOpinionVersion: OutcomeOpinionVersion;
    language: Language;
}
//# sourceMappingURL=OutcomeOpinionVersionTranslation.d.ts.map