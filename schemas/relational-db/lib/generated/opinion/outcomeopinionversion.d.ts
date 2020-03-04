import { IPollRevisionOpinionVersion } from './pollrevisionopinionversion';
import { IOutcomeOpinionVersionTranslation } from './translation/outcomeopinionversiontranslation';
export interface IOutcomeOpinionVersion {
    id: number;
    pollRevisionOpinionVersion?: IPollRevisionOpinionVersion;
    translations?: IOutcomeOpinionVersionTranslation[];
}
