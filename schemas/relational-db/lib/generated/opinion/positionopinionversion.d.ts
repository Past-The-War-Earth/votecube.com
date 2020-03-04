import { IPollRevisionOpinion } from './pollrevisionopinion';
import { IPollRevisionFactorPosition } from '../poll/revision/pollrevisionfactorposition';
import { IPositionOpinionVersionTranslation } from './translation/positionopinionversiontranslation';
export interface IPositionOpinionVersion {
    id: number;
    pollRevisionOpinion?: IPollRevisionOpinion;
    factorPosition?: IPollRevisionFactorPosition;
    parent?: IPositionOpinionVersion;
    children?: IPositionOpinionVersion[];
    translations?: IPositionOpinionVersionTranslation[];
}
