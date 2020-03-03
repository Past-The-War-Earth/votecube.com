import { IImmutableActorRow } from '../../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../../poll/revision/pollrevision';
import { IPositionTranslation } from './positiontranslation';
import { IFactorPosition } from './factorposition';
export interface IPosition extends IImmutableActorRow {
    id: number;
    createdAtPollRevision?: IPollRevision;
    parentTranslation?: IPositionTranslation;
    parent?: IPosition;
    children?: IPosition[];
    factorPositions?: IFactorPosition[];
    translations?: IPositionTranslation[];
}
