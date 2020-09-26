import { ISystemGeneratedRow } from '../../infrastructure/row/systemgeneratedrow';
import { IPositionOpinionVersion } from '../positionopinionversion';
import { ILanguage } from '../../infrastructure/language';
export interface IPositionOpinionVersionTranslation extends ISystemGeneratedRow {
    id: number;
    original?: boolean;
    title?: string;
    text?: string;
    positionOpinionVersion?: IPositionOpinionVersion;
    language?: ILanguage;
}
//# sourceMappingURL=positionopinionversiontranslation.d.ts.map