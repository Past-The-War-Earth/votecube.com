import { IImmutableRow } from '../../infrastructure/row/immutablerow';
import { IPollRevision } from './pollrevision';
import { IFactorPosition } from '../../factor/position/factorposition';
export interface IPollRevisionFactorPosition extends IImmutableRow {
    id: number;
    axis?: string;
    dir?: number;
    pollRevision?: IPollRevision;
    factorPosition?: IFactorPosition;
    parent?: IPollRevisionFactorPosition;
    children?: IPollRevisionFactorPosition[];
}
