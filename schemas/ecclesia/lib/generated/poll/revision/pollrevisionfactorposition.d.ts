import { IImmutableRow } from '../../infrastructure/row/immutablerow';
import { ISkin } from '../../factor/skin';
import { IPollRevision } from './pollrevision';
import { IFactorPosition } from '../../factor/position/factorposition';
export interface IPollRevisionFactorPosition extends IImmutableRow {
    id: number;
    axis?: string;
    dir?: number;
    factorNumber?: number;
    blue?: number;
    green?: number;
    red?: number;
    outcomeOrdinal?: string;
    skin?: ISkin;
    pollRevision?: IPollRevision;
    factorPosition?: IFactorPosition;
    parent?: IPollRevisionFactorPosition;
    children?: IPollRevisionFactorPosition[];
}
//# sourceMappingURL=pollrevisionfactorposition.d.ts.map