import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituation } from './situation';
import { IFactorPosition } from '../factor/position/factorposition';
export interface ISituationFactorPosition extends IRepositoryEntity {
    axis?: string;
    dir?: number;
    factorNumber?: number;
    blue?: number;
    green?: number;
    red?: number;
    outcomeOrdinal?: string;
    situation?: ISituation;
    factorPosition?: IFactorPosition;
}
//# sourceMappingURL=situationfactorposition.d.ts.map