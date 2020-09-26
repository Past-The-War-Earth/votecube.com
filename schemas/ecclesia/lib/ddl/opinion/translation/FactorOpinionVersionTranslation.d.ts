import { FactorOpinionVersionTranslation_Id, FactorOpinionVersionTranslation_IsOriginal, FactorOpinionVersionTranslation_Text, FactorOpinionVersionTranslation_Title } from '../../../types/opinion/translation/FactorOpinionVersionTranslation';
import { Language } from '../../infrastructure/Language';
import { SystemGeneratedRow } from '../../infrastructure/row/SystemGeneratedRow';
import { FactorOpinionVersion } from '../FactorOpinionVersion';
/**
 * Belongs to FactorOpinionVersion - does not need user tracking.
 */
export declare class FactorOpinionVersionTranslation extends SystemGeneratedRow {
    id: FactorOpinionVersionTranslation_Id;
    /**
     * All translations should come from the original version.
     */
    original: FactorOpinionVersionTranslation_IsOriginal;
    title: FactorOpinionVersionTranslation_Title;
    text: FactorOpinionVersionTranslation_Text;
    factorOpinionVersion: FactorOpinionVersion;
    language: Language;
}
//# sourceMappingURL=FactorOpinionVersionTranslation.d.ts.map