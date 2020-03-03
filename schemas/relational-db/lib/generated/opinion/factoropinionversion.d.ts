import { IPollRevisionOpinionVersion } from './pollrevisionopinionversion';
import { IFactorOpinionVersionRating } from './user/factoropinionversionrating';
import { IFactorOpinionVersionTranslation } from './translation/factoropinionversiontranslation';
import { IPositionOpinionVersion } from './positionopinionversion';
export interface IFactorOpinionVersion {
    id: number;
    pollRevisionOpinionVersion?: IPollRevisionOpinionVersion;
    ratings?: IFactorOpinionVersionRating[];
    translations?: IFactorOpinionVersionTranslation[];
    positionOpinionVersions?: IPositionOpinionVersion[];
}
