import { IAgeSuitableRow } from '../../infrastructure/row/agesuitablerow';
import { IPollRevision } from '../../poll/revision/pollrevision';
import { IPositionTranslation } from './positiontranslation';
import { IFactorPosition } from './factorposition';
export interface IPosition extends IAgeSuitableRow {
    id: number;
    createdAtPollRevision?: IPollRevision;
    parentTranslation?: IPositionTranslation;
    parent?: IPosition;
    children?: IPosition[];
    factorPositions?: IFactorPosition[];
    translations?: IPositionTranslation[];
}
//# sourceMappingURL=position.d.ts.map