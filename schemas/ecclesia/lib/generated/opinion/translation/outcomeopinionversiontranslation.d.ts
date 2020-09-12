import { ISystemGeneratedRow } from '../../infrastructure/row/systemgeneratedrow';
import { IOutcomeOpinionVersion } from '../outcomeopinionversion';
import { ILanguage } from '../../infrastructure/language';
export interface IOutcomeOpinionVersionTranslation extends ISystemGeneratedRow {
    id: number;
    original?: boolean;
    title?: string;
    text?: string;
    outcomeOpinionVersion?: IOutcomeOpinionVersion;
    language?: ILanguage;
}
