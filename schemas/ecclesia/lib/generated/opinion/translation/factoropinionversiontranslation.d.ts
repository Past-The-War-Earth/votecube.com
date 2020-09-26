import { ISystemGeneratedRow } from '../../infrastructure/row/systemgeneratedrow';
import { IFactorOpinionVersion } from '../factoropinionversion';
import { ILanguage } from '../../infrastructure/language';
export interface IFactorOpinionVersionTranslation extends ISystemGeneratedRow {
    id: number;
    original?: boolean;
    title?: string;
    text?: string;
    factorOpinionVersion?: IFactorOpinionVersion;
    language?: ILanguage;
}
//# sourceMappingURL=factoropinionversiontranslation.d.ts.map