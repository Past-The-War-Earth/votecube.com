import { IImmutableActorRow } from '../infrastructure/row/immutableactorrow';
import { IPollRevision } from '../poll/revision/pollrevision';
import { IFactorTranslation } from './factortranslation';
import { IFactorPosition } from './position/factorposition';
export interface IFactor extends IImmutableActorRow {
    id: number;
    createdAtPollRevision?: IPollRevision;
    parentTranslation?: IFactorTranslation;
    parent?: IFactor;
    children?: IFactor[];
    factorPositions?: IFactorPosition[];
}
