import { PositionOpinionVersionTranslation_Id, PositionOpinionVersionTranslation_IsOriginal, PositionOpinionVersionTranslation_Text, PositionOpinionVersionTranslation_Title } from '../../../types/opinion/translation/PositionOpinionVersionTranslation';
import { Language } from '../../infrastructure/Language';
import { SystemGeneratedRow } from '../../infrastructure/row/SystemGeneratedRow';
import { PositionOpinionVersion } from '../PositionOpinionVersion';
/**
 * Belongs to PositionOpinionVersion - does not need user tracking.
 */
export declare class PositionOpinionVersionTranslation extends SystemGeneratedRow {
    id: PositionOpinionVersionTranslation_Id;
    /**
     * All translations should come from the original version.
     */
    original: PositionOpinionVersionTranslation_IsOriginal;
    title: PositionOpinionVersionTranslation_Title;
    text: PositionOpinionVersionTranslation_Text;
    positionOpinionVersion: PositionOpinionVersion;
    language: Language;
}
//# sourceMappingURL=PositionOpinionVersionTranslation.d.ts.map