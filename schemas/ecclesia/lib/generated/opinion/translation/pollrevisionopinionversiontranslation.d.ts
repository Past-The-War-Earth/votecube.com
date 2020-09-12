import { ISystemGeneratedRow } from '../../infrastructure/row/systemgeneratedrow';
import { IPollRevisionOpinionVersion } from '../pollrevisionopinionversion';
import { ILanguage } from '../../infrastructure/language';
export interface IPollRevisionOpinionVersionTranslation extends ISystemGeneratedRow {
    id: number;
    original?: boolean;
    title?: string;
    text?: string;
    opinionVersion?: IPollRevisionOpinionVersion;
    language?: ILanguage;
}
