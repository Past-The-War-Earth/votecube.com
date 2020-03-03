import { IFactorOpinionVersion } from './factoropinionversion';
import { IPositionOpinionVersionRating } from './user/positionopinionversionrating';
import { IPositionOpinionVersionTranslation } from './translation/positionopinionversiontranslation';
export interface IPositionOpinionVersion {
    id: number;
    factorOpinionVersion?: IFactorOpinionVersion;
    ratings?: IPositionOpinionVersionRating[];
    translations?: IPositionOpinionVersionTranslation[];
}
