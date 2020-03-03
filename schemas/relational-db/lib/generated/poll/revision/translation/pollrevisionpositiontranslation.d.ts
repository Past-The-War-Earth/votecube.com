import { IPollRevisionTranslation } from './pollrevisiontranslation';
import { IPositionTranslation } from '../../../factor/position/positiontranslation';
export interface IPollRevisionPositionTranslation {
    pollRevisionTranslation: IPollRevisionTranslation;
    positionTranslation: IPositionTranslation;
}
